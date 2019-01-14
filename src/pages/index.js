import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="trending">
          <div className="trending-content">
            <div className="trending-header">Explore, Design and Develop with the Design System for the Enterprise</div>
            <div className="trending-search"><input name="search"></input></div>
            <div className="trending-suggestions">
              <div className="trending-title">Trending</div>
              <div className="item">Fiori Toolkit v1.1</div>
              <div className="item">Fiori Fundamentals</div>
              <div className="item">Sample Apps</div>
              <div className="item">Getting Started with Fiori</div>
              <div className="item">72 TypeFace</div>
            </div>
          </div>
          <div className="trending-footer"></div>
        </section>
        <section className="section whatsnew">
          <div className="whatsnew-wrapper">
          <div className="container">
            <div className="content">
              <div className="whatsnew-header">
                <h1 className="whatsnew-title">what's new</h1>
                <div className="whatsnew-options">
                  <div className="selected">web</div>
                  <div>Mobile</div>
                  <div>CUX</div>
                  <div>AR/VR</div>
                </div>                
              </div>
            </div>
            <div className="new-lhs">
              <div className="new-lhs-title">Learn about the latest updates and announcements to the Fiori Design System.</div>
              <div class="new-lhs-option selected">all</div>
              <div class="new-lhs-option">designer</div>
              <div class="new-lhs-option">developer</div>
            </div>
            <div className="new-rhs">
              {posts
                .map(({ node: post }) => (
                  <div
                    className="content whatsnew-items"
                    id={post.img}
                    key={post.id}
                  >
                    <p>
                      <Link className="newitem-title" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </p>
                    <div className="newitem-details">
                      {post.excerpt}
                    </div>
                    <Link className="newitem-more" to={post.fields.slug}>Read More</Link>
                    <div className="newitem-date">{post.frontmatter.date}</div>
                  </div>
                ))}
              </div>
              </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
