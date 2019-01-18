import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import GuidelineHeader from '../../components/guideline-header/guideline-header'
import GuidelineLeftNav from '../../components/guideline-left-nav/guideline-left-nav';
import './guidelines.scss'

export default class DesignGuidelineIndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <GuidelineHeader></GuidelineHeader>        
        <GuidelineLeftNav controls={ posts }></GuidelineLeftNav>
        <section className="section design-guidelines">
          <div className="welcome"></div>
        </section>
      </Layout>
    )
  }
}

DesignGuidelineIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query DesignGuidelineIndexQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] },
      filter: { frontmatter: { templateKey: { eq: "design-guideline-post" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`
