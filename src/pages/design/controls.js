import React from 'react'
import Layout from '../../components/Layout'
import GuidelineHeader from '../../components/guideline-header/guideline-header'
import GuidelineLeftNav from '../../components/guideline-left-nav/guideline-left-nav';
import './controls.scss'
import { graphql, Link, StaticQuery } from "gatsby";

class DesignControlsIndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <GuidelineHeader></GuidelineHeader>
        <GuidelineLeftNav></GuidelineLeftNav>
        <section className="section design-controls">
          <h2>Controls</h2>
          {this.props.data.allMarkdownRemark.edges
            .map(({ node: data }) => (
              <Link className="control-menu" key={data.id} to={data.fields.slug}><img className="control-img" src={data.frontmatter.featuredImage.publicURL}/><div className="control-title">{data.frontmatter.title}</div></Link>
            ))}
        </section>
      </Layout>
    )
  }
}


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
            featuredImage {
                publicURL
            }
          }
        }
      }
    }
  }`}
    render={(data) => <DesignControlsIndexPage data={data} {...props} /> }
  />
)