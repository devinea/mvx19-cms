import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';

import Search from '../components/search/search';

import './index.scss';

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchToggle: 'off'
    };
    this.handler = this.handler.bind(this);
  }

  handler(toggleVal) {
    this.setState({
      searchToggle: toggleVal
    });
  }

  render() {
    const { data, location } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout location={location}>
        <section className={`${this.state.searchToggle === 'on' ? 'search-results' : 'trending'}`}>
          <div className="content">
            <div className="header">Explore, Design and Develop with the Design System for the Enterprise</div>
            <div className="search"><Search name="search" searchToggle={this.handler} /></div>

            <div className="trending-suggestions">
              <div className="trending-title">Trending</div>
              {['Fiori Toolkit v1.1',
                'Fiori Fundamentals',
                'Sample Apps',
                'Getting Started with Fiori',
                '72 TypeFace'].map((o) => {
                  return <div>{o}</div>
                })}
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
                <div className="new-lhs-option selected">all</div>
                <div className="new-lhs-option">designer</div>
                <div className="new-lhs-option">developer</div>
              </div>
              <div className="new-rhs">
                {posts
                  .map(({ node: post }) => (
                    <Link to={post.fields.slug} key={post.id}>
                      <div
                        className="content whatsnew-items"
                        id={post.img}
                        key={post.id}
                      >
                        <div className="newitem-item-content">
                          <Img className="newitem-item-thumbnail" sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
                          <p>
                            <span className="newitem-title">{post.frontmatter.title}</span>
                          </p>
                          <div className="newitem-details">
                            {post.frontmatter.description}
                          </div>
                          <span className="newitem-more">Read More</span>
                          <div className="newitem-date">{post.frontmatter.date}</div>
                        </div>
                      </div>
                    </Link>
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
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
            description
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 75) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
