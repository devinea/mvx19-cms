import React from 'react';

import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Flex from '../components/Flex';

import { colors, media } from '../components/theme';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location } = this.props;

    return (
      <Layout location={location}>
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
                  width: 480,
                  lineHeight: '50px',
                  fontWeight: 300,
                  color: colors.gray_700,
                  [media.greaterThan('small')]: {
                    fontSize: 28
                  },
                  [media.greaterThan('medium')]: {
                    fontSize: 40
                  },
                  [media.greaterThan('large')]: {
                    fontSize: 40
                  },
                  [media.greaterThan('xlarge')]: {
                    fontSize: 40
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
                  left: '60%',
                  top: 50,
                  height: 354
                }}
              >
                <Img
                  fixed={this.props.data.file.childImageSharp.fixed}
                  style={{
                    height: '354px'
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
          </Flex>
        </div>
      </Layout>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "ipadmockup.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            # fixed(width: 1742, height: 1052) {
            #   ...GatsbyImageSharpFixed
            # }
            fixed(height: 504) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
);
