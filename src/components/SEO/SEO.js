import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import favicon from '../../img/favicon.ico';
import saplogo from '../../img/sap_logo.jpg';

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
      const description = props.description || data.site.siteMetadata.description;
      const url = '/';

      return (
        <Helmet
          htmlAttributes={{
            lang: 'en'
          }}
          title={title}
          meta={[{ name: 'description', content: `${description}` }]}
          titleTemplate={`%s - ${title}`}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: `${favicon}`
            }
          ]}
          meta={[
            { property: 'og:title', content: `${title}` },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: `${saplogo}` },
            { property: 'og:description', content: `${description}` },
            { property: 'og:url', content: `${url}` }
          ]}
        />
      );
    }}
  />
);

export default SEO;
