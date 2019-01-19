import React from 'react'
import { Link } from 'gatsby'
import './guideline-left-nav.scss'
import { StaticQuery, graphql } from "gatsby"


// console.log(props.controls);
const LeftNav = ({ data }) => (
  <nav className="guideline-left-nav">
    <h1>Fiori For Web</h1>
  <input></input>
  <Link className="main-nav" to={ 'design/guidelines'}>Home</Link>
  <h2>Foundation</h2>
  <h2>Layouts &amp; Floorplans</h2>
  <h2>Controls</h2>
  {data.allMarkdownRemark.edges
    .map(({ node: data }) => (
      <Link className="control-menu" key={data.id} to={data.fields.slug}>{data.frontmatter.title}</Link>
    ))  }
  <h2>Sample Apps</h2>
  <h2>What's new</h2>
  <h2>Resources</h2>
  </nav>
)

/**
 * Generates the guideline LHS navigation.
 */
// const GuidelineLeftNav = class extends React.Component (
export default props => (
<StaticQuery
query={graphql`{
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
  }`}
    render={data => <LeftNav data={data} {...props} />}

/>
)

// export default GuidelineLeftNav
