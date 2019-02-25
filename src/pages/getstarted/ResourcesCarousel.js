import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Carousel from 'nuka-carousel';

import { colors, media } from '../../components/theme';
import Flex from '../../components/Flex';
import Card from '../../components/Card';



class ResourcesCarousel extends React.Component {
  constructor(props) {
    super(props);
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
              minWidth: media.getSize('small').width,
              maxWidth: media.getSize('small').width
            },
            [media.greaterThan('medium')]: {
              // minWidth: media.getSize('medium').width,
              // maxWidth: media.getSize('medium').width
              minWidth: '100%',
              maxWidth: '100%'
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
                padding: 0
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
                marginTop: 88,
                [media.greaterThan('medium')]: {
                  minWidth: media.getSize('medium').width,
                  maxWidth: media.getSize('medium').width,
                  margin: '88px auto 0 auto'
                }
              }}
            >
              resources
            </h1>

            {this.props.data.allGetstartedJson.edges[0].node.data.map(
              (category, idx) => (

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
                    initialSlideHeight='476px'
                    initialSlideWidth='364px'
                    slideWidth='364px'
                    cellSpacing={20}
                    renderCenterLeftControls={null}
                    renderCenterRightControls={null}
                  >
                  {category.data.map((entry, idx) => (

                    <div
                      css={{
                        paddingLeft: 20,
                        paddingRight: 20
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
            )}
          </section>
        </Flex>
      </div>
    );
  }
}

export default () => (
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
                  read
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ResourcesCarousel data={data} />}
  />
);
