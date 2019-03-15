import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import { colors, media } from '../theme';
import Flex from '../Flex';
import Card from '../Card';

class ResourcesList extends React.Component {
  constructor(props) {
    super(props);
  }

  resourcesRenderer = (category, idx) => {
    return (
      <div
        key={idx}
        css={{
          marginBottom: 60
        }}
      >
        <div
          css={{
            fontSize: 35,
            fontWeight: 300,
            color: colors.gray_100,
            padding: '33px 0 46px 0'
          }}
        >
          {category.title}
        </div>

        {category.data.map((entry, idx) => (
          <Card
            cssProps={{
              marginRight: 0,
              marginBottom: 12,
              marginTop: 12,
              ':nth-of-type(2n)': {
                marginRight: 24
              }
            }}
            key={idx}
            data={entry}
          />
        ))}
      </div>
    );
  };

  render() {
    return (
      <div
        css={{
          width: '100%',
          backgroundColor: colors.blue_800,
          paddingBottom: 100,
          marginBottom: 50
        }}
      >
        <Flex
          direction='column'
          css={{
            margin: '0 auto',
            [media.greaterThan('small')]: {
              minWidth: media.getSize('small').width,
              maxWidth: media.getSize('small').width
            },
            [media.greaterThan('medium')]: {
              minWidth: media.getSize('medium').width,
              maxWidth: media.getSize('medium').width
            },
            [media.greaterThan('large')]: {
              minWidth: media.getSize('large').width,
              maxWidth: media.getSize('large').width
            },
            [media.greaterThan('xlarge')]: {
              minWidth: media.getSize('xlarge').width,
              maxWidth: media.getSize('xlarge').width
            }
          }}
        >
          <section
            css={{
              paddingTop: 50,
              width: '100%',
              [media.greaterThan('small')]: {
                padding: '0 64px'
              },
              [media.greaterThan('medium')]: {
                padding: '0 68px'
              },
              [media.greaterThan('large')]: {
                padding: '0 71px'
              },
              [media.greaterThan('xlarge')]: {
                padding: '0 84px'
              }
            }}
          >
            <h1
              css={{
                width: '100%',
                fontSize: 35,
                fontWeight: 700,
                color: colors.gray_100,
                marginBottom: 0,
                marginTop: 88
              }}
            >
              Resources
            </h1>

            {
              this.props.resource ?
                this.props.data.allGetstartedJson.edges[0].node.data.map(
                  (category, idx) => {
                    if (this.props.resource === category.type) {
                      return this.resourcesRenderer(category, idx)
                    }
                  }
                )
                :
                this.props.data.allGetstartedJson.edges[0].node.data.map(
                  (category, idx) => {
                    return this.resourcesRenderer(category, idx)
                  }
                )
            }
          </section>
        </Flex>
      </div>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allGetstartedJson(filter: { name: { eq: "resources" } }) {
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
                  action
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ResourcesList data={data} {...props} />}
  />
);
