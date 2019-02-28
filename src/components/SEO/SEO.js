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
          { href:​ "/img/icons/touch-icon-60x60.png", rel: ​"apple-touch-icon", sizes=​"60x60" },
          { href:​ "/img/icons/touch-icon-120x120.png", rel: ​"apple-touch-icon", sizes=​"120x120" },
          { href:​ "/img/icons/touch-icon-180x180.png", rel: ​"apple-touch-icon", sizes=​"180x180" },
          { href:​ "/img/icons/touch-icon-1024x1024.png", rel: ​"apple-touch-icon", sizes=​"1024x1024" },
          { href: '/img/icons/favicon.ico', rel: 'icon', type: 'image/vnd.microsoft.icon'},
          { rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: '/img/icons/favicon.ico' },
          { rel: "mask-icon", href: `/img/icons/safari-pinned-tab.svg` }
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
