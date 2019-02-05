import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import './guideline-left-nav.scss';
import { Location } from '@reach/router';

const LeftNav = ({ data }) => (
  <nav className='guideline-left-nav'>
    <h1>Fiori For Web</h1>
    <input />
    <Location>
      {({ location }) => {
        return (
          <Link
            className='main-nav'
            to={
              (location.pathname.startsWith('/develop')
                ? 'develop'
                : 'design') + '/guidelines'
            }
          >
            Home
          </Link>
        );
      }}
    </Location>
    <Location>
    {({ location }) => {
      return <Link className="main-nav" to={ (location.pathname.startsWith('/develop') ? 'develop' : 'design') + '/controls'}>Controls</Link>
    }}
    </Location>
    {data.allMarkdownRemark.edges.map(({ node: data }) => (
      <Link className='control-menu' key={data.id} to={data.fields.slug}>
        {data.frontmatter.title}
      </Link>
    ))}
  </nav>
);

/**
 * Generates the guideline LHS navigation.
 */
export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { order: ASC, fields: [
            frontmatter___leftnavorder___l1,
              frontmatter___leftnavorder___l2,
              frontmatter___leftnavorder___l3,
              frontmatter___leftnavorder___l4,
          ] }
          filter: {
            frontmatter: { templateKey: { eq: "design-guideline-post" } }
          }
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
                leftnavorder {
                  l1
                  l2
                  l3
                  l4
                }
              }
            }
          }
        }
      }
    `}
    render={data => <LeftNav data={data} {...props} />}
  />
);
