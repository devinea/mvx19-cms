import React from 'react';
import PropTypes from 'prop-types';

import Carousel from 'nuka-carousel';
import PagingDots from '../Carousel/PagingDots';

import SVG from 'react-inlinesvg';
import Flex from '../../components/Flex';
import { colors, media } from '../theme';

const defaultButtonStyles = disabled => ({
  border: 0,
  background: 'rgba(0,0,0,0.4)',
  color: 'white',
  padding: 10,
  opacity: disabled ? 0.3 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer'
});

class TestimonialsCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const size = this.props.breakPoint.breakpointName || 'medium';
    const sliderWidth =
      media.getSize(size).column * 4 + media.getSize(size).gutter * 3;
    let slideWidth = 0;
    if (this.props.breakPoint.breakpointName === 'small') {
      slideWidth = sliderWidth - 10 + 'px';
    } else {
      slideWidth = sliderWidth + 'px';
    }

    return (
      <Carousel
        initialSlideHeight={250}
        initialSlideWidth={sliderWidth}
        slideWidth={slideWidth}
        cellSpacing={20}
        swiping={true}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={props => <PagingDots {...props} />}
      >
        {this.props.entries.map((entry, idx) => (
          <div key={idx} css={{ height: 220 }}>
            <div
              css={{
                display: 'inline-block',
                verticalAlign: 'top',
                borderRadius: 8,
                backgroundColor: colors.white,
                [media.between('medium', 'large', true)]: {
                  height: 190,
                  '.testimonial-text': {
                    fontSize: 14,
                    lineHeight: '24px'
                  }
                },
                [media.lessThan('medium', true)]: {
                  height: 190,
                  '.testimonial-text': {
                    fontSize: 14,
                    lineHeight: '24px'
                  }
                }
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
                    display: 'block',
                    position: 'absolute',
                    bottom: -20,
                    right: -10
                  }}
                />
              </Flex>
            </div>
          </div>
        ))}
      </Carousel>
    );
  }
}

TestimonialsCarousel.propTypes = {
  entries: PropTypes.array,
  breakPoint: PropTypes.object
};

export default TestimonialsCarousel;
