import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

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
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: '/img/apple-touch-icon.png'
            },
            {
              rel: 'icon',
              type: 'image/vnd.microsoft.icon',
              href: '/img/favicon.ico'
            },
            {
              rel:"icon",
              type:"image/png",
              href:"/img/favicon-16x16.png",
              sizes:"16x16"
            },
            {
              rel:"icon",
              type:"image/png",
              href:"/img/favicon-32x32.png",
              sizes:"32x32"
            },
            {
              rel: "mask-icon",
              href: `/img/safari-pinned-tab.svg`
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
