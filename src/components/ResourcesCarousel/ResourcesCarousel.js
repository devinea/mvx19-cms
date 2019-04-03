import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Carousel from 'nuka-carousel';
import PagingDots from '../Carousel/PagingDots';

import { colors, media } from '../theme';
import Flex from '../Flex';
import Card from '../Card';

const defaultButtonStyles = disabled => ({
  border: 0,
  background: 'rgba(0,0,0,0.4)',
  color: 'white',
  padding: 10,
  opacity: disabled ? 0.3 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer'
});

class ResourcesCarousel extends React.Component {
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
            padding: '33px 0 46px 0',
            [media.greaterThan('small')]: {
              minWidth: media.getSize('small').width,
              maxWidth: media.getSize('small').width,
              margin: '0 auto'
            },
            [media.greaterThan('medium')]: {
              minWidth: media.getSize('medium').width,
              maxWidth: media.getSize('medium').width,
              margin: '0 auto'
            }
          }}
        >
          {category.title}
        </div>

        <Carousel
          initialSlideHeight={476}
          initialSlideWidth={344}
          slideWidth='344px'
          cellSpacing={20}
          swiping={true}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderBottomCenterControls={props => (
            <PagingDots {...props} />
          )}
        >
          {category.data.map((entry, idx) => (
            <div
              key={idx}
              css={{
                paddingLeft: 30,
                paddingRight: 10
              }}
            >
              <Card
                cssProps={{
                  marginRight: 0,
                  marginBottom: 24,
                  ':nth-of-type(2n)': {
                    marginRight: 24
                  }
                }}
                key={idx}
                data={entry}
              />
            </div>
          ))}
        </Carousel>
      </div>
    )
  }

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
              minWidth: '100%',
              maxWidth: '100%'
            },
            [media.greaterThan('medium')]: {
              minWidth: '100%',
              maxWidth: '100%'
            }
          }}
        >
          <section
            css={{
              paddingTop: 50,
              width: '100%',
              [media.greaterThan('small')]: {
                padding: '0'
              },
              [media.greaterThan('medium')]: {
                padding: 0
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
                marginTop: 88,
                [media.greaterThan('small')]: {
                  minWidth: media.getSize('small').width,
                  maxWidth: media.getSize('small').width,
                  margin: '88px auto 0 auto'
                },
                [media.greaterThan('medium')]: {
                  minWidth: media.getSize('medium').width,
                  maxWidth: media.getSize('medium').width,
                  margin: '88px auto 0 auto'
                }
              }}
            >
              resources
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

export default (props) => (
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
    render={data => <ResourcesCarousel data={data} {...props}/>}
  />
);
