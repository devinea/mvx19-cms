"use strict"

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {}
        var ownKeys = Object.keys(source)
        if (typeof Object.getOwnPropertySymbols === `function`) {
            ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(
                        source,
                        sym
                    ).enumerable
                })
            )
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key])
        })
    }
    return target
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        })
    } else {
        obj[key] = value
    }
    return obj
}

const crypto = require(`crypto`)

const { GraphQLScalarType } = require(`gatsby/graphql`)

const elasticlunr = require(`elasticlunr`)

const SEARCH_INDEX_ID = `SearchIndex < Site`
const SEARCH_INDEX_TYPE = `SiteSearchIndex`
const parent = `___SOURCE___`

const md5 = src =>
    crypto
        .createHash(`md5`)
        .update(src)
        .digest(`hex`)

const createEmptySearchIndexNode = () => ({
    id: SEARCH_INDEX_ID,
    parent,
    children: [],
    pages: []
})

const appendPage = ({ pages }, newPage) => {
    const newPages = [...pages, newPage]
    const content = JSON.stringify(newPage)
    return {
        id: SEARCH_INDEX_ID,
        parent,
        children: [],
        pages: newPages,
        internal: {
            type: SEARCH_INDEX_TYPE,
            content: content,
            contentDigest: md5(content)
        }
    }
}

const createOrGetIndex = async (
    node,
    cache,
    getNode,
    server,
    { fields, resolvers }
) => {
    const cacheKey = `${node.id}:index`
    const cached = await cache.get(cacheKey)

    if (cached) {
        return cached
    }

    const index = elasticlunr()
    index.setRef(`id`)
    fields.forEach(field => index.addField(field))

    for (const pageId of node.pages) {
        const pageNode = getNode(pageId)
        const fieldResolvers = resolvers[pageNode.internal.type]

        if (fieldResolvers) {
            const doc = _objectSpread(
                {
                    id: pageNode.id,
                    date: pageNode.date
                },
                Object.keys(fieldResolvers).reduce(
                    (prev, key) =>
                        _objectSpread({}, prev, {
                            [key]: fieldResolvers[key](pageNode)
                        }),
                    {}
                )
            )
            if (pageNode.frontmatter.templateKey.includes('-guideline')){
                // TODO Get current versions from the settings collections
                if ((pageNode.frontmatter.templateKey === `web-guideline` && pageNode.frontmatter.version === `1.03`) ||
                    (pageNode.frontmatter.templateKey === `ios-guideline`  && pageNode.frontmatter.version === `1.01`) ||
                    (pageNode.frontmatter.templateKey === `android-guideline`  && pageNode.frontmatter.version === `1.01`) ||
                    (pageNode.frontmatter.templateKey === `cux-guideline`  && pageNode.frontmatter.version === `1.01`) )
                    index.addDoc(doc)
            } else {
                index.addDoc(doc)
            }
        }
    }

    const json = index.toJSON()
    await cache.set(cacheKey, json)
    return json
}

const SearchIndex = new GraphQLScalarType({
    name: `${SEARCH_INDEX_TYPE}_Index`,
    description: `Serialized elasticlunr search index`,

    parseValue() {
        throw new Error(`Not supported`)
    },

    serialize(value) {
        return value
    },

    parseLiteral() {
        throw new Error(`Not supported`)
    }
})

exports.sourceNodes = async ({ getNodes, actions }) => {
    const { touchNode } = actions
    const existingNodes = getNodes().filter(
        n =>
            n.internal.owner ===
            `@gatsby-contrib/gatsby-plugin-elasticlunr-search`
    )
    existingNodes.forEach(n =>
        touchNode({
            nodeId: n.id
        })
    )
}

exports.onCreateNode = ({ node, actions, getNode }, { resolvers }) => {
    if (Object.keys(resolvers).indexOf(node.internal.type) === -1) {
        return
    }

    const { createNode } = actions
    const searchIndex =
        getNode(SEARCH_INDEX_ID) || createEmptySearchIndexNode()
    const newSearchIndex = appendPage(searchIndex, node.id)
    createNode(newSearchIndex)
}

exports.setFieldsOnGraphQLNodeType = (
    { type, getNode, cache },
    pluginOptions
) => {
    if (type.name !== SEARCH_INDEX_TYPE) {
        return null
    }

    return {
        index: {
            type: SearchIndex,
            resolve: (node, _opts, _3, server) =>
                createOrGetIndex(node, cache, getNode, server, pluginOptions)
        }
    }
}
