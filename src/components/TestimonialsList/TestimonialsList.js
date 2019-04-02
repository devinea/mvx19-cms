import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SVG from 'react-inlinesvg';
import Flex from '../../components/Flex';
import { colors, media } from '../theme';

class TestimonialsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.entries.map((entry, idx) => (
          <div
            key={idx}
            css={{
              display: 'inline-block',
              verticalAlign: 'top',
              borderRadius: 8,
              backgroundColor: colors.white,
              [media.greaterThan('xlarge', true)]: {
                height: 200,
                ':not(:nth-of-type(3n))': {
                  marginRight: media.getSize('xlarge').gutter
                },
                marginTop: 10,
                width:
                  media.getSize('xlarge').column * 3 +
                  media.getSize('xlarge').gutter * 2,
                ':nth-of-type(2n)': {
                  marginTop: 0,
                  height: 220,
                  width:
                    media.getSize('xlarge').column * 4 +
                    media.getSize('xlarge').gutter * 3,
                  '.testimonial-text': {
                    fontSize: 18,
                    lineHeight: '24px'
                  },
                  '.testimonial-icn': {
                    display: 'block'
                  }
                }
              },
              [media.between('large', 'xlarge', true)]: {
                height: 180,
                ':not(:nth-of-type(3n))': {
                  marginRight: media.getSize('large').gutter
                },
                marginTop: 10,
                width:
                  media.getSize('large').column * 3 +
                  media.getSize('large').gutter * 2,
                ':nth-of-type(2n)': {
                  marginTop: 0,
                  height: 200,
                  width:
                    media.getSize('large').column * 4 +
                    media.getSize('large').gutter * 3,
                  '.testimonial-text': {
                    fontSize: 16,
                    lineHeight: '24px'
                  },
                  '.testimonial-icn': {
                    display: 'block'
                  }
                }
              },
              [media.between('medium', 'large', true)]: {},
              [media.lessThan('medium', true)]: {}
            }}
          >
            <Flex
              direction='column'
              grow='1'
              halign='center'
              valign='center'
              css={{
                textAlign: 'center',
                height: '100%',
                padding: 20,
                position: 'relative'
              }}
            >
              <span
                className='testimonial-text'
                css={{
                  color: colors.gray_700,
                  fontSize: 14,
                  fontWeight: 'normal',
                  lineHeight: '20px',
                  fontFamily: '"72-Italic"',
                  paddingBottom: 15,
                  [media.between('large', 'xlarge', true)]: {},
                  [media.between('medium', 'large', true)]: {},
                  [media.lessThan('medium', true)]: {}
                }}
              >
                {entry.text}
              </span>
              <span
                css={{
                  color: colors.gray_400,
                  fontSize: 12,
                  fontWeight: 700,
                  lineHeight: '20px',
                  fontFamily: '"72-Bold"'
                }}
              >
                {entry.author}
              </span>
              <SVG
                src='/img/svg/apostrophe.svg'
                className='testimonial-icn'
                css={{
                  [media.greaterThan('medium')]: {
                    width: 63,
                    height: 42,
                    svg: {
                      width: 63,
                      height: 42
                    }
                  },
                  display: 'none',
                  position: 'absolute',
                  bottom: -20,
                  right: -10
                }}
              />
            </Flex>
          </div>
        ))}
      </div>
    );
  }
}

TestimonialsList.propTypes = {
  entries: PropTypes.array,
  breakPoint: PropTypes.object
};

export default TestimonialsList;
