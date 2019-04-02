import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import SVG from 'react-inlinesvg';

import Flex from '../../components/Flex';
import { colors, media } from '../../components/theme';

class PlatformList extends React.Component {
  constructor(props) {
    super(props);
  }

  platformsRenderer = (category, idx) => {
    return (
      <Link
        key={idx}
        css={{
          marginLeft: 0,
          marginRight: 0,
          marginTop: 35,
          marginBottom: 45,
          display: 'inline-block',
          textAlign: 'center',
          verticalAlign: 'top',
          backgroundColor: colors.white,
          borderRadius: 8,
          cursor: 'pointer',
          transition: 'all .3s',
          ':hover': {
            marginBottom: 50,
            marginTop: 30,
            [media.lessThan('large', true)]: {
              marginBottom: 13,
              marginTop: 3,
            },
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.20)'
          },
          [media.greaterThan('xlarge', true)]: {
            minHeight: 95,
            width:
              media.getSize('xlarge').column * 3 +
              media.getSize('xlarge').gutter * 2,
            marginRight: media.getSize('xlarge').gutter,
            ':last-of-type': {
              marginRight: 0
            },
            paddingTop: 30,
            paddingBottom: 30
          },
          [media.between('large', 'xlarge', true)]: {
            minHeight: 95,
            width:
              media.getSize('large').column * 3 +
              media.getSize('large').gutter * 2,
            marginRight: media.getSize('large').gutter,
            ':last-of-type': {
              marginRight: 0
            },
            paddingTop: 30,
            paddingBottom: 30
          },
          [media.between('medium', 'large', true)]: {
            minHeight: 95,
            width:
              media.getSize('medium').column * 3 +
              media.getSize('medium').gutter * 2,
            marginRight: media.getSize('medium').gutter,
            ':nth-of-type(2n+1)': {
              marginLeft:
                media.getSize('medium').column +
                media.getSize('medium').gutter
            },
            marginTop: 8,
            marginBottom: 8,
            paddingTop: 30,
            paddingBottom: 30
          },
          [media.lessThan('medium', true)]: {
            minHeight: 80,
            maxHeight: 80,
            width:
              media.getSize('small').column * 2 +
              media.getSize('small').gutter,
            ':nth-of-type(2n+1)': {
              marginRight: media.getSize('small').gutter
            },
            marginTop: 8,
            marginBottom: 8,
            paddingTop: 30,
            paddingBottom: 30
          }
        }}
        to={category.url}
      >
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto'
          }}
        >
          <SVG
            src={category.image}
            css={{
              width: 35,
              height: 35,
              svg: {
                width: 35,
                height: 35
              },
              [media.lessThan('medium', true)]: {
                width: 21,
                height: 21,
                svg: {
                  width: 21,
                  height: 21
                }
              }
            }}
          />
          <div
            css={{
              color: colors.gray_700,
              [media.greaterThan('small')]: {
                fontSize: 14,
                lineHeight: '21px',
                paddingLeft: 8
              },
              [media.greaterThan('medium')]: {
                fontSize: 18,
                lineHeight: '32px',
                paddingLeft: 12
              },
              [media.greaterThan('large')]: {
                fontSize: 16,
                lineHeight: '32px',
                paddingLeft: 12
              },
              [media.greaterThan('xlarge')]: {
                fontSize: 18,
                lineHeight: '32px',
                paddingLeft: 12
              }
            }}
          >
            {category.title}
          </div>
        </div>
      </Link>
    );
  };

  render() {
    return (
      <div
        css={{
          width: '100%',
          backgroundColor: colors.gray_100
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
              [media.lessThan('large', true)]: {
                marginTop: 10,
                marginBottom: 10
              }
            }}
          >
            {this.props.data.allHomepageJson.edges[0].node.data.map(
              (category, idx) => {
                return this.platformsRenderer(category, idx);
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
        allHomepageJson(filter: { name: { eq: "platforms" } }) {
          edges {
            node {
              name
              data {
                type
                title
                url
                image
              }
            }
          }
        }
      }
    `}
    render={data => <PlatformList data={data} {...props} />}
  />
);
