import React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Flex from '../components/Flex';
import { colors, media } from '../components/theme';

import Features from './home/Features.js';
import Platform from './home/Platform.js';
import News from './home/News.js';
import Testimonials from './home/Testimonials.js';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;

    return (
      <div
        css={{
          width: '100%'
        }}
      >
        <div
          css={{
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',

            [media.greaterThan('small')]: {
              backgroundSize: '40000px 600px',
              backgroundImage:
                'radial-gradient(ellipse at 50% -124%,white 49.9%,#354A5F 50%)'
            },
            [media.greaterThan('medium')]: {
              backgroundSize: '4000px 600px',
              backgroundImage:
                'radial-gradient(ellipse at 50% -86%,white 49.9%,#354A5F 50%)'
            },
            [media.greaterThan('large')]: {
              backgroundSize: '4000px 600px',
              backgroundImage:
                'radial-gradient(ellipse at 50% -57%,white 49.9%,#354A5F 50%)'
            },
            [media.greaterThan('xlarge')]: {
              backgroundSize: '4000px 600px',
              backgroundImage:
                'radial-gradient(ellipse at 50% -55%,white 49.9%,#354A5F 50%)'
            }
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
                marginTop: 40,
                marginBottom: 172,
                padding: 0,
                [media.lessThan('medium', true)]: {
                  marginBottom: 70
                }
              }}
            >
              <h1
                css={{
                  margin: 0,
                  textAlign: 'left',
                  fontFamily: '"72-Light"',
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
                [media.lessThan('small')]: {
                  display: 'none'
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
                    top: 70,
                    maxWidth: 518
                  },
                  [media.greaterThan('large')]: {
                    height: 504,
                    left: '54%',
                    top: 20,
                    maxWidth: 835
                  },
                  [media.greaterThan('xlarge')]: {
                    height: 504,
                    left: '44%',
                    top: 20,
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
                  color: colors.white,
                  marginTop: 0,
                  marginRight: 0,
                  margingLeft: 0,
                  [media.lessThan('medium')]: {
                    fontSize: 24,
                    lineHeight: '43px',
                    fontWeight: 700,
                    padding: 0,
                    marginBottom: 20
                  },
                  [media.greaterThan('medium')]: {
                    fontSize: 24,
                    lineHeight: '43px',
                    fontWeight: 700,
                    marginBottom: 20,
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0
                  },
                  [media.greaterThan('large')]: {
                    fontSize: 37,
                    lineHeight: '43px',
                    fontWeight: 700,
                    marginBottom: 40,
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0
                  },
                  [media.greaterThan('xlarge')]: {
                    fontSize: 37,
                    fontWeight: 700,
                    marginBottom: 40,
                    paddingTop: 25,
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
                  color: colors.white,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 40,
                  margingLeft: 0,
                  [media.lessThan('medium')]: {
                    fontSize: 18,
                    lineHeight: '28px',
                    fontWeight: 'normal',
                    padding: 0,
                    marginBottom: 10
                  },
                  [media.greaterThan('medium')]: {
                    fontSize: 18,
                    lineHeight: '28px',
                    fontWeight: 'normal',
                    maxWidth: 460,
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0
                  },
                  [media.greaterThan('large')]: {
                    fontSize: 28,
                    fontFamily: '"72-Light"',
                    fontWeight: 300,
                    lineHeight: '36px',
                    maxWidth: 686,
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0
                  },
                  [media.greaterThan('xlarge')]: {
                    fontSize: 28,
                    fontFamily: '"72-Light"',
                    fontWeight: 300,
                    lineHeight: '36px',
                    paddingTop: 0,
                    maxWidth: 825,
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
              </h2>
            </section>
          </Flex>
          <Features />
          <Platform />
          <News />
          <Testimonials />
        </div>
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
