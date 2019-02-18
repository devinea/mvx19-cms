import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import { colors, media } from '../../components/theme';
import Description from '../../components/Description';

const DescriptionList = props => (
  <section
    css={{
      paddingTop: 50,
      width: '100%',
      [media.greaterThan('medium')]: {
        padding: '0 68px 80px'
      },
      [media.greaterThan('large')]: {
        padding: '0 71px 80px'
      },
      [media.greaterThan('xlarge')]: {
        padding: '0 84px 80px'
      }
    }}
  >
    <h1
      css={{
        width: '100%',
        fontSize: 35,
        fontWeight: 700,
        color: colors.gray_600,
        marginBottom: 50
      }}
    >
      {props.data.allGetstartedJson.edges[0].node.data[0].title}
    </h1>
    {props.data.allGetstartedJson.edges[0].node.data[0].data.map((data, idx) => (
      <Description
        key={idx}
        title={data.title}
        image={data.image}
        description={data.description}
        url={data.url}
        read={data.read}
      />
    ))}
  </section>
);

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allGetstartedJson(filter: {name: {eq: "begin"}}) {
          edges {
            node {
              name
              data {
                type
                title
                data {
                  title
                  image {
                    src
                    width
                    height
                  }
                  description
                  url
                  read
                }
              }
            }
          }
        }
      }
    `}
    render={data => <DescriptionList data={data} />}
  />
);
