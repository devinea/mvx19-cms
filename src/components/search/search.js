// import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"
//
//
// const search = ({ data }) => (
//         <div>
//         <input
//       style={{
//         position: `relative`,
//       }}
//       type="text"
//       placeholder="Type title words or tags"
//       value={data.state.query}
//       onChange={data.search}
//       />
//       <ul
//         style={{
//           position: `absolute`,
//           backgroundColor: `white`,
//           marginLeft: `0`,
//         }}
//       >
//         {data.state.results.map(page => (
//           <li key={page.id}>
//             <Link to={`/` + page.path}>{page.title}</Link>
//             {`: ` + page.tags.join(`,`)}
//           </li>
//         ))}
//       </ul>
//       </div>
// )
//
//
// export default props => (
//   <StaticQuery
//     query={graphql`query
// SearchIndexQuery {
//     siteSearchIndex {
//       index
//     }
// }`}
//     render={data => <search data={data} {...props} />}
//   />
// )
//
//
// Search.propTypes = {
//   searchIndex: PropTypes.object,
// }

import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, Link, graphql } from 'gatsby'
import { Index } from 'elasticlunr'
// import styled from '@emotion/styled'
// import { css } from '@emotion/core'
// import posed from 'react-pose'
import { Location } from '@reach/router'
import propPathOr from 'crocks/helpers/propPathOr'
import uuid from 'uuid/v4'

// import { propPathOr, uuid } from '../../utils'
// import { uuid } from 'uuid'
// import Tags from '../elements/tags'
// import { outlinedStyles } from './outlined'

// const hovered = ({ theme }) => css`
//   transition: background-color 200ms ease-in-out;
//   &:hover {
//     background-color: ${theme.color};
//   }
// `
//
// const SearchIcon = styled.button`
//   ${tw([
//   'absolute',
//   'bg-white',
//   'border-none',
//   'cursor-pointer',
//   'flex-no-grow',
//   'font-bold',
//   'items-center',
//   'justify-center',
//   'ml-auto',
//   'pin-b',
//   'pin-r',
//   'pin-t',
//   'px-q12',
//   'text-lg',
//   'z-20',
//   'md:px-q24',
// ])};
//   ${hovered};
//   ${outlinedStyles};
// `
//
// const PosedWrapper = posed.div({
//   open: {
//     x: 0,
//     transition: {
//       duration: 600,
//       ease: 'easeOut',
//     },
//   },
//   close: {
//     x: '100%',
//   },
// })
//
// const opened = ({ isOpen }) => css`
//   &,
//   & > .posed-wrapper {
//     ${isOpen && tw(['pin'])};
//   }
// `
//
// const Wrapper = styled.div`
//   ${tw(['absolute', 'overflow-hidden'])};
//   & > .posed-wrapper {
//     ${tw(['absolute', 'z-10'])};
//     padding: 4px;
//   }
//   ${opened};
// `
//
// const inputWrapperStyles = css`
//   ${tw([
//   'bg-white',
//   'flex',
//   'h-full',
//   'items-center',
//   'justify-start',
//   'p-q12',
//   'w-full',
//   'md:px-q24',
// ])};
//   box-sizing: border-box;
// `
//
// const BorderedBottom = ({ theme }) => css`
//   border-bottom: 1px solid ${theme.color};
// `
//
// const Input = styled.input`
//   ${tw([
//   'border-none',
//   'font-medium',
//   'outline-none',
//   'p-q4',
//   'text-lg',
//   'w-1/2',
// ])};
//   ${BorderedBottom};
//   &::placeholder {
//     ${tw(['italic'])};
//   }
// `
//
// const PosedResults = posed.div({
//   open: {
//     applyAtStart: { opacity: 1 },
//     height: 'auto',
//   },
//   close: {
//     applyAtEnd: { opacity: 0 },
//     height: 0,
//   },
// })
//
// const Results = styled(PosedResults)`
//   ${tw([
//   'absolute',
//   'bg-white',
//   'overflow-hidden',
//   'pin-b',
//   'pin-l',
//   'pin-r',
//   'z-30',
// ])};
//   ${outlinedStyles};
//   transform: translateY(100%);
// `
//
// const ResultsList = styled.ul`
//   ${tw([
//   'items-stretch',
//   'justify-start',
//   'py-q8',
//   'relative',
//   'max-w-full',
//   'md:py-q20',
// ])};
// `
//
// const liStyles = css`
//   ${tw([
//   'inline-block',
//   'leading-normal',
//   'px-q12',
//   'py-q8',
//   'w-full',
//   'hover:bg-teal-lighter',
//   'md:px-q24',
// ])};
//   box-sizing: border-box;
// `
// const linkStyles = css`
//   ${tw(['inline-block', 'w-full'])};
// `
// const searchedTitleStyles = css`
//   ${tw(['font-extrabold'])};
// `

class Search extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
    this.state = {
      isOpen: false,
      mount: false,
      query: '',
      results: [],
    }
  }

  componentDidMount() {
    this.handleMount()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.resetState()
    }
    if (this.state.isOpen && !prevState.isOpen) {
      this.input.current.focus()
    }
  }

  handleMount = () => {
    if (this.props.search) {
      this.setState({ mount: true })
    }
  }

  resetState = () => {
    this.setState({ isOpen: false, query: '', results: [] })
  }

  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.search.index) // Create an elastic lunr index and hydrate with graphql query results

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({ query })

    if (query.length > 1) {
      this.setState({
        results: this.index
          .search(query, { expand: true })
          .map(({ ref }) => this.index.documentStore.getDoc(ref)), // Map over each ID and return the full document
      })
    } else {
      this.setState({ results: [] })
    }
  }

  handleClick = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
      query: '',
      results: [],
    }))
  }

  render() {
    if (!this.state.mount) return null

    return (
      <>
        {/*<SearchIcon onClick={this.handleClick} type="button">*/}
          {/*{this.state.isOpen ? 'Close' : 'Search'}*/}
        {/*</SearchIcon>*/}
        {/*<Wrapper isOpen={this.state.isOpen}>*/}
          {/*<PosedWrapper*/}
            {/*className="posed-wrapper"*/}
            {/*pose={this.state.isOpen ? 'open' : 'close'}*/}
          {/*>*/}
            {/*<div css={inputWrapperStyles}>*/}
              <input
                onChange={this.search}
                placeholder="Search"
                ref={this.input}
                type="search"
                value={this.state.query}
              />
            {/*</div>*/}
          {/*</PosedWrapper>*/}
        {/*</Wrapper>*/}
        {/*<Results pose={this.state.results.length ? 'open' : 'close'}>*/}
          {/*<ResultsList>*/}
            {this.state.results.slice(0, 5).map(page => {
              const regex = new RegExp(`(${this.state.query}.+?)(")`, 'gim')
              const regexQuery = new RegExp(
                `(${this.state.query})(.{0,48})`,
                'gim'
              )
              const matched = regex.exec(page)
              const searched = propPathOr(null, [1], matched)
              const matchedQuery = regexQuery.exec(searched)
              const searchedQuery = propPathOr('', [1], matchedQuery)
              const restQuery = propPathOr('', [2], matchedQuery)

              return (
                <li key={uuid()}>
                  {/*<Link  to={`/${page.uid}`}>*/}
                  <Link  to={`/${page.path}`}>
                    <span >{page.title}</span>
                    <span>
                      :{' '}
                      <span style={{ background: 'yellow' }}>
                        {searchedQuery}
                      </span>
                      {restQuery}...
                    </span>
                    {/*<Tags*/}
                      {/*// css={css`*/}
                      {/*//   ${tw(['inline-flex'])};*/}


                      {/*//   float: right;*/}
                      {/*// `}*/}
                      {/*tags={page.tags}*/}
                    {/*/>*/}
                  </Link>
                </li>
              )
            })}
          {/*</ResultsList>*/}
        {/*</Results>*/}
      </>
    )
  }
}

Search.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  search: PropTypes.objectOf(PropTypes.object),
}

Search.defaultProps = {
  search: null,
}

const withStaticQuery = () => (
  <Location>
    {({ location }) => (
      <StaticQuery
        query={graphql`
          query {
            search: siteSearchIndex {
              index
            }
          }
        `}
        render={({ search }) => <Search search={search} location={location} />}
      />
    )}
  </Location>
)

export default withStaticQuery
