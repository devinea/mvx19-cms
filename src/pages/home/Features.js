import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SVG from 'react-inlinesvg';

import Flex from '../../components/Flex';
import { colors, media } from '../../components/theme';

class FeaturesList extends React.Component {
  constructor(props) {
    super(props);
  }

  featuresRenderer = (category, idx) => {
    return (
      <div
        key={idx}
        css={{
          margin: 0,
          display: 'inline-block',
          textAlign: 'center',
          verticalAlign: 'top',
          color: colors.gray_100,
          [media.greaterThan('xlarge', true)]: {
            maxWidth:
              media.getSize('xlarge').column * 2 +
              media.getSize('xlarge').gutter,
            marginLeft: 0,
            marginRight: media.getSize('xlarge').gutter,
            ':last-of-type': {
              marginRight: 0
            }
          },
          [media.between('large', 'xlarge', true)]: {
            maxWidth:
              media.getSize('large').column * 2 +
              media.getSize('large').gutter,
            marginRight: 0,
            marginLeft: media.getSize('large').gutter,
            ':first-of-type': {
              marginLeft:
                media.getSize('large').column +
                media.getSize('large').gutter
            }
          },
          [media.between('medium', 'large', true)]: {
            paddingBottom: 50,
            maxWidth:
              media.getSize('medium').column * 2 +
              media.getSize('medium').gutter,
            marginRight: 0,
            marginLeft: media.getSize('medium').gutter,
            ':first-of-type': {
              marginLeft:
                media.getSize('medium').column +
                media.getSize('medium').gutter
            },
            ':nth-of-type(3n+4)': {
              marginLeft:
                media.getSize('medium').column * 2 +
                media.getSize('medium').gutter * 2
            }
          },
          [media.lessThan('medium', true)]: {
            paddingBottom: 50,
            maxWidth:
              media.getSize('small').column * 2 +
              media.getSize('small').gutter,
            ':nth-of-type(2n+1)': {
              marginRight: media.getSize('small').gutter
            },
            ':nth-of-type(5n)': {
              marginRight: 0,
              marginLeft:
                media.getSize('small').column +
                media.getSize('small').gutter
            }
          }
        }}
      >
        <SVG
          src={category.image}
          css={{
            width: 54,
            height: 54,
            svg: {
              width: 54,
              height: 54
            },
            [media.lessThan('medium', true)]: {
              width: 38,
              height: 38,
              svg: {
                width: 38,
                height: 38
              }
            }
          }}
        />
        <div
          css={{
            [media.greaterThan('small')]: {
              fontSize: 18,
              fontWeight: 300,
              lineHeight: '30px',
              paddingTop: 0,
              paddingBottom: 5
            },
            [media.greaterThan('medium')]: {
              fontSize: 22,
              fontWeight: 300,
              lineHeight: '30px',
              paddingTop: 25,
              paddingBottom: 14
            },
            [media.greaterThan('large')]: {
              fontSize: 22,
              fontWeight: 300,
              lineHeight: '30px',
              paddingTop: 25,
              paddingBottom: 14
            },
            [media.greaterThan('xlarge')]: {
              fontSize: 28,
              fontWeight: 300,
              lineHeight: '36px',
              paddingTop: 25,
              paddingBottom: 14
            }
          }}
        >
          {category.title}
        </div>
        <div
          css={{
            [media.greaterThan('small')]: {
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '23px'
            },
            [media.greaterThan('medium')]: {
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '23px'
            },
            [media.greaterThan('large')]: {
              fontSize: 12,
              fontWeight: 'normal',
              lineHeight: '24px'
            },
            [media.greaterThan('xlarge')]: {
              fontSize: 16,
              fontWeight: 'normal',
              lineHeight: '24px'
            }
          }}
        >
          {category.description}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div
        css={{
          width: '100%',
          backgroundColor: colors.blue_800
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
          <div
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
                paddingTop: 25,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
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
            {this.props.data.allHomepageJson.edges[0].node.data.map(
              (category, idx) => {
                return this.featuresRenderer(category, idx);
              }
            )}
          </div>
        </Flex>
      </div>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allHomepageJson(filter: { name: { eq: "features" } }) {
          edges {
            node {
              name
              data {
                type
                title
                description
                image
              }
            }
          }
        }
      }
    `}
    render={data => <FeaturesList data={data} {...props} />}
  />
);
