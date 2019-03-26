import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { colors, media } from '../theme';

class Post extends React.Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link
        to={this.props.url}
        css={{
          display: this.props.type === 'blog' ? 'flex' : 'block',
          [media.lessThan('medium')]: {
            paddingBottom: 15,
            paddingTop: 15,
            ':not(:last-child)': {
              '> div': {
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: colors.gray_200
              }
            }
          },
          [media.greaterThan('medium')]: {
            paddingRight:
              media.getSize('medium').column +
              media.getSize('medium').gutter,
            paddingBottom: 15,
            paddingTop: 15,
            paddingLeft:
              media.getSize('medium').column +
              media.getSize('medium').gutter,
            ':not(:last-child)': {
              '> div': {
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: colors.gray_200
              }
            }
          },
          [media.greaterThan('large')]: {
            paddingRight: media.getSize('large').column + media.getSize('large').gutter,
            paddingBottom: 20,
            paddingTop: 20,
            paddingLeft: media.getSize('large').column + media.getSize('large').gutter,
            boxShadow: 'none',
            borderRadius: 7,
            transition: 'all 0.3s',
            ':hover': {
              boxShadow: '0 0 22px 0 rgba(0, 0, 0, 0.10)'
            },
            ':not(:last-child)': {
              '> div': {
                border: 'none'
              }
            }
          },
          [media.greaterThan('xlarge')]: {
            padding: 0,
            boxShadow: 'none',
            borderRadius: 7,
            transition: 'all 0.3s',
            ':hover': {
              boxShadow: '0 0 22px 0 rgba(0, 0, 0, 0.10)'
            },
            ':not(:last-child)': {
              '> div': {
                border: 'none'
              }
            }
          }
        }}
      >
        <div
          css={{
            display: this.props.type === 'blog' ? 'flex' : 'inline-block',
            width: '100%',
            [media.lessThan('medium')]: {
              paddingTop: 15,
              paddingBottom: 15
            },
            [media.greaterThan('medium')]: {
              padding: 0
            },
            [media.greaterThan('large')]: {
              padding: 0
            },
            [media.greaterThan('xlarge')]: {
              paddingTop: 30,
              paddingRight: this.props.type === 'blog' ?
                media.getSize('xlarge').gutter :
                media.getSize('xlarge').column + media.getSize('xlarge').gutter,
              paddingBottom: 30,
              paddingLeft: this.props.type === 'blog' ?
                media.getSize('xlarge').gutter :
                media.getSize('xlarge').column + media.getSize('xlarge').gutter,
            }
          }}
        >
          <div
            css={{
              float: 'left',
              textAlign: 'center',
              [media.lessThan('medium')]: {
                float: 'right',
                maxWidth: 64
              },
              [media.greaterThan('medium')]: {
                maxWidth: 120,
                width: '100%'
              },
              [media.greaterThan('large')]: {
                maxWidth: 120,
                width: '100%'
              },
              [media.greaterThan('xlarge')]: {
                maxWidth: this.props.type === 'blog' ? 120 : 144,
                width: '100%'
              }
            }}
          >
          {
            this.props.svg ? 
            <SVG
              src={this.props.svg}
              css={{
                [media.lessThan('medium')]: {
                  width: 64,
                  height: 'auto',
                  svg: {
                    width: 64,
                    height: 'auto'
                  }
                },
                [media.greaterThan('large')]: {},
                display: 'block'
              }}
            /> :
            <Img sizes={this.props.png} imgStyle={{
              width: 120
            }}/>
            }
          </div>
          <div
            css={{
              [media.greaterThan('medium')]: {
                float: 'left',
                maxWidth:
                  media.getSize('medium').column * 4 +
                  media.getSize('medium').gutter * 3,
                width: '100%',
                paddingLeft: media.getSize('medium').gutter
              },
              [media.greaterThan('large')]: {
                float: 'left',
                maxWidth:
                  media.getSize('large').column * 8 +
                  media.getSize('large').gutter * 7,
                width: '100%',
                paddingLeft: media.getSize('large').gutter
              },
              [media.greaterThan('xlarge')]: {
                float: 'left',
                maxWidth:
                  media.getSize('xlarge').column * 8 +
                  media.getSize('xlarge').gutter * 7,
                width: '100%',
                paddingLeft: media.getSize('xlarge').gutter
              }
            }}
          >
            <div
              css={{
                fontSize: 28,
                fontWeight: 300,
                fontWeight: 'normal',
                lineHeight: '33px',
                fontFamily: '"72-Bold"',
                paddingBottom: 24,
                color: colors.gray_700,
                [media.lessThan('medium')]: {
                  fontSize: 24
                }
              }}
            >
              {this.props.title}
            </div>
            <div
              css={{
                fontSize: 16,
                fontWeight: 'normal',
                lineHeight: '24px',
                paddingBottom: 46,
                color: colors.gray_700,
                [media.greaterThan('small')]: {
                  fontWeight: 300
                },
                [media.greaterThan('large')]: {
                  paddingBottom: 0
                },
                [media.greaterThan('xlarge')]: {
                  paddingBottom: 0
                }
              }}
            >
              {this.props.description}
              <span css={{
                fontFamily: '"72-Bold"',
                display: 'block',
                paddingTop: 15
              }}>{this.props.date ? this.props.date : ''}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Post;
