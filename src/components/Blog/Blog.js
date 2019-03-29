import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Flex from '../../components/Flex';

import { colors, media } from '../theme';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.mode = {
      web: { svg: '/img/svg/fiori_web.svg', title: 'Fiori for Web' },
      ios: { svg: '/img/svg/fiori_ios.svg', title: 'Fiori for iOS' },
      android: {
        svg: '/img/svg/fiori_android.svg',
        title: 'Fiori for Android'
      },
      cux: { svg: '/img/svg/fiori_cux.svg', title: 'Fiori for CUX' },
      sap: { svg: '/img/svg/fiori_sap.svg', title: '' }
    };
    this.state = {
      mode: 'sap',
      isImage: false
    };
  }

  componentDidMount = () => {
    if (this.props.image !== null) {
      this.setState({
        isImage: true
      });
    } else {
      if (this.mode[this.props.tags]) {
        this.setState({ mode: this.props.tags });
      }
    }
  };

  render() {
    return (
      <Link
        to={this.props.url}
        css={{
          display: 'flex',
          order: this.props.index,
          [media.greaterThan('xlarge', true)]: {
            ':hover': {
              boxShadow: '0 0 22px 0 rgba(0, 0, 0, 0.10)'
            }
          },
          [media.between('large', 'xlarge', true)]: {
            paddingLeft:
              media.getSize('large').column + media.getSize('large').gutter,
            paddingRight:
              media.getSize('large').column + media.getSize('large').gutter
          },
          [media.lessThan('xlarge', true)]: {
            ':not(:first-child)': {
              '> div': {
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor: colors.gray_200
              }
            },
            ':hover': {
              boxShadow: '0 0 22px 0 rgba(0, 0, 0, 0.10)',
              '> div': {
                borderTopColor: 'transparent'
              },
              '+ a': {
                '> div': {
                  borderTopColor: 'transparent'
                }
              }
            }
          }
        }}
      >
        <div
          css={{
            display: 'inline-block',
            width: '100%',
            [media.greaterThan('xlarge', true)]: {
              paddingTop: 30,
              paddingBottom: 30
            },
            [media.between('large', 'xlarge', true)]: {
              paddingTop: 30,
              paddingBottom: 30
            },
            [media.between('medium', 'large', true)]: {
              paddingTop: 30,
              paddingBottom: 30
            },
            [media.lessThan('medium', true)]: {
              paddingTop: 30,
              paddingBottom: 30
            }
          }}
        >
          <div
            css={{
              float: 'left',
              textAlign: 'center',
              [media.greaterThan('xlarge', true)]: {
                paddingLeft: media.getSize('xlarge').gutter,
                paddingRight: media.getSize('xlarge').gutter
              },
              [media.between('large', 'xlarge', true)]: {
                paddingLeft: 14,
                paddingRight: media.getSize('large').gutter
              },
              [media.between('medium', 'large', true)]: {
                paddingLeft: 24,
                paddingRight: media.getSize('medium').gutter
              },
              [media.lessThan('medium', true)]: {}
            }}
          >
            {!this.state.isImage && (
              <div
                css={{
                  [media.greaterThan('xlarge', true)]: {
                    width: 120,
                    height: 120
                  },
                  [media.between('large', 'xlarge', true)]: {
                    width: 104,
                    height: 104
                  },
                  [media.between('medium', 'large', true)]: {
                    width: 96,
                    height: 96
                  },
                  backgroundColor: colors.gray_200
                }}
              >
                <SVG
                  src={this.mode[this.state.mode].svg}
                  css={{
                    [media.greaterThan('xlarge', true)]: {
                      width: 50,
                      height: 50,
                      margin: '0 auto',
                      paddingTop:
                        this.mode[this.state.mode].title !== '' ? 17 : 35,
                      paddingBottom: 12,
                      display: 'table',
                      svg: {
                        width: 50,
                        height: 50
                      }
                    },
                    [media.between('large', 'xlarge', true)]: {
                      width: 40,
                      height: 40,
                      margin: '0 auto',
                      paddingTop:
                        this.mode[this.state.mode].title !== '' ? 17 : 32,
                      paddingBottom: 4,
                      display: 'table',
                      svg: {
                        width: 40,
                        height: 40
                      }
                    },
                    [media.between('medium', 'large', true)]: {
                      width: 40,
                      height: 40,
                      margin: '0 auto',
                      paddingTop:
                        this.mode[this.state.mode].title !== '' ? 17 : 32,
                      paddingBottom: 4,
                      display: 'table',
                      svg: {
                        width: 40,
                        height: 40
                      }
                    }
                  }}
                />
                {this.mode[this.state.mode].title !== '' && (
                  <span
                    css={{
                      fontSize: 14,
                      fontWeight: 'normal',
                      [media.greaterThan('xlarge', true)]: {
                        fontSize: 14,
                        lineHeight: '16px'
                      },
                      [media.between('large', 'xlarge', true)]: {
                        fontSize: 12,
                        lineHeight: '14px'
                      },
                      [media.between('medium', 'large', true)]: {
                        fontSize: 12,
                        lineHeight: '14px'
                      }
                    }}
                  >
                    {this.mode[this.state.mode].title}
                  </span>
                )}
              </div>
            )}
            {this.state.isImage && (
              <Img
                sizes={this.props.image}
                style={{
                  minWidth: 120,
                  minHeight: 120,
                  border: '1px solid black'
                }}
                imgStyle={{
                  objectFit: 'contain'
                }}
                placeholderStyle={{
                  transition: 'none'
                }}
              />
            )}
          </div>

          <Flex
            direction='column'
            shrink='0'
            grow='1'
            overflow='auto'
            valign='space-between'
            css={{
              [media.greaterThan('xlarge', true)]: {
                minHeight: 120,
                paddingRight: media.getSize('xlarge').gutter
              },
              [media.between('large', 'xlarge', true)]: {
                minHeight: 104,
                paddingRight: 14
              },
              [media.between('medium', 'large', true)]: {
                minHeight: 96,
                paddingRight: 24
              },
              [media.lessThan('medium', true)]: {}
            }}
          >
            <div
              css={{
                fontSize: 28,
                fontWeight: '300',
                fontFamily: '"72-Light"',
                lineHeight: '33px',
                color: colors.gray_700,
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                display: '-webkit-box',
                wordWrap: 'break-word'
              }}
            >
              {this.props.title}
            </div>
            <div
              css={{
                fontSize: 16,
                fontWeight: 'normal',
                lineHeight: '24px',
                color: colors.gray_700,
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                display: '-webkit-box',
                wordWrap: 'break-word'
              }}
            >
              {this.props.description}
            </div>
            <div
              css={{
                fontSize: 12,
                fontWeight: 700,
                lineHeight: '14px',
                color: colors.gray_700,
                [media.lessThan('large', true)]: {
                  display: 'none'
                }
              }}
            >
              {this.props.date}
            </div>
          </Flex>
        </div>
      </Link>
    );
  }
}

Blog.propTypes = {
  index: PropTypes.number,
  image: PropTypes.object,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string
};

export default Blog;
