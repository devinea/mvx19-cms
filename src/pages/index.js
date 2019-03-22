import React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Flex from '../components/Flex';

import { colors, media } from '../components/theme';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;

    return (
      <div
        css={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          backgroundSize: '3000px 600px',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'center',
          backgroundImage:
            'radial-gradient(ellipse at 50% -27%,white 49.9%,#354A5F 50%)'
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
              width: '100%',
              [media.greaterThan('small')]: {
                marginTop: 82,
                marginBottom: 172,
                padding: 0
              },
              [media.greaterThan('medium')]: {
                marginTop: 82,
                marginBottom: 172,
                padding: 0
              },
              [media.greaterThan('large')]: {
                marginTop: 82,
                marginBottom: 172,
                padding: 0
              },
              [media.greaterThan('xlarge')]: {
                marginTop: 82,
                marginBottom: 172,
                padding: 0
              }
            }}
          >
            <h1
              css={{
                margin: 0,
                textAlign: 'left',
                fontWeight: 300,
                color: colors.gray_700,
                [media.greaterThan('small')]: {
                  fontSize: 28
                },
                [media.greaterThan('medium')]: {
                  fontSize: 30,
                  width: 390,
                  lineHeight: '45px'
                },
                [media.greaterThan('large')]: {
                  fontSize: 40,
                  width: 480,
                  lineHeight: '50px'
                },
                [media.greaterThan('xlarge')]: {
                  fontSize: 40,
                  width: 480,
                  lineHeight: '50px'
                }
              }}
            >
              Explore, Design and Develop with the Design System for the
              Enterprise
            </h1>
          </section>
          <section
            css={{
              margin: '0 auto',
              position: 'absolute',
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
            <div
              css={{
                position: 'absolute',
                display: 'flex',
                width: '100%',
                [media.greaterThan('small')]: {
                  height: 504,
                  left: '60%',
                  top: 50
                },
                [media.greaterThan('medium')]: {
                  height: 310,
                  left: '50%',
                  top: 175,
                  maxWidth: 518
                },
                [media.greaterThan('large')]: {
                  height: 504,
                  left: '60%',
                  top: 50,
                  maxWidth: 835
                },
                [media.greaterThan('xlarge')]: {
                  height: 504,
                  left: '60%',
                  top: 50,
                  maxWidth: 835
                }
              }}
            >
              <Img
                fluid={this.props.data.file.childImageSharp.fluid}
                style={{
                  width: '100%'
                }}
                imgStyle={{
                  objectPosition: 'top left'
                }}
                placeholderStyle={{
                  transition: 'none'
                }}
              />
            </div>
          </section>
          <section>
            <h1
              css={{
                width: '100%',
                fontSize: 37,
                lineHeight: '43px',
                fontWeight: 700,
                color: colors.white,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 40,
                margingLeft: 0,
                [media.lessThan('medium')]: {
                  padding: 0,
                  marginBottom: 10
                },
                [media.greaterThan('medium')]: {
                  paddingTop: 0,
                  paddingRight:
                    media.getSize('medium').column +
                    media.getSize('medium').gutter,
                  paddingBottom: 0,
                  paddingLeft:
                    media.getSize('medium').column +
                    media.getSize('medium').gutter
                },
                [media.greaterThan('large')]: {
                  paddingTop: 0,
                  paddingRight:
                    media.getSize('large').column +
                    media.getSize('large').gutter,
                  paddingBottom: 0,
                  paddingLeft:
                    media.getSize('large').column +
                    media.getSize('large').gutter
                },
                [media.greaterThan('xlarge')]: {
                  fontSize: 37,
                  fontWeight: 700,
                  paddingTop: 0,
                  paddingRight:
                    media.getSize('xlarge').column +
                    media.getSize('xlarge').gutter,
                  paddingBottom: 0,
                  paddingLeft:
                    media.getSize('xlarge').column +
                    media.getSize('xlarge').gutter
                }
              }}
            >
              SAP Fiori
            </h1>
            <h2
              css={{
                width: '100%',
                fontSize: 17,
                lineHeight: '24px',
                fontWeight: 'normal',
                color: colors.white,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 40,
                margingLeft: 0,
                [media.lessThan('medium')]: {
                  padding: 0,
                  marginBottom: 10
                },
                [media.greaterThan('medium')]: {
                  paddingTop: 0,
                  paddingRight:
                    media.getSize('medium').column +
                    media.getSize('medium').gutter,
                  paddingBottom: 0,
                  paddingLeft:
                    media.getSize('medium').column +
                    media.getSize('medium').gutter
                },
                [media.greaterThan('large')]: {
                  paddingTop: 0,
                  paddingRight:
                    media.getSize('large').column +
                    media.getSize('large').gutter,
                  paddingBottom: 0,
                  paddingLeft:
                    media.getSize('large').column +
                    media.getSize('large').gutter
                },
                [media.greaterThan('xlarge')]: {
                  fontSize: 17,
                  fontWeight: 'normal',
                  paddingTop: 0,
                  paddingRight:
                    media.getSize('xlarge').column +
                    media.getSize('xlarge').gutter,
                  paddingBottom: 0,
                  paddingLeft:
                    media.getSize('xlarge').column +
                    media.getSize('xlarge').gutter
                }
              }}
            >
              SAP Fiori is the design language that brings great user
              experiences to enterprise applications.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              Hello
            </h2>
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
        file(relativePath: { eq: "ipadmockup.png" }) {
          childImageSharp {
            fluid(maxHeight: 310) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
);
