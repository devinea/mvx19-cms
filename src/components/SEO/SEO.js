import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import favicon from '../../img/favicon.ico';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const SEO = props => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const title = props.title || data.site.siteMetadata.title;
      return (
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          title={title}
          meta={[
            { name: 'description', content: `${data.site.siteMetadata.description}` },
          ]}
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        />
      );
    }}
  />
);

export default SEO;
