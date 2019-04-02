import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { ReactReduxContext, connect } from 'react-redux';
import { isSmall, isMedium } from '../../../utils/breakpoints';

import Flex from '../../components/Flex';
import TestimonialsList from '../../components/TestimonialsList/TestimonialsList';
import TestimonialsCarousel from '../../components/TestimonialsCarousel/TestimonialsCarousel';
import { colors, media } from '../../components/theme';

class Testimonial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselDisplay: false
    };
  }

  componentDidUpdate = prevProps => {
    if (this.props.breakPoint) {
      if (
        this.props.breakPoint.breakpointName !==
        prevProps.breakPoint.breakpointName
      ) {
        if (
          isSmall(this.props.breakPoint.breakpointName) ||
          isMedium(this.props.breakPoint.breakpointName)
        ) {
          this.setState({ carouselDisplay: true });
        } else {
          this.setState({ carouselDisplay: false });
        }
      }
    }
  };

  render() {
    return (
      <section
        css={{
          width: '100%',
          backgroundColor: colors.gray_100,
          marginBottom: 50
        }}
      >
        <Flex
          direction='column'
          css={{
            margin: '0 auto',
            paddingTop: 40,
            paddingBottom: 40,
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
          <h1
            css={{
              width: '100%',
              fontSize: 40,
              lineHeight: '50px',
              fontFamily: '"72-Light"',
              fontWeight: 300,
              color: colors.gray_700,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 30,
              marginLeft: 0,
              [media.greaterThan('xlarge', true)]: {
                fontSize: 40,
                lineHeight: '50px'
              },
              [media.between('large', 'xlarge', true)]: {
                fontSize: 32,
                lineHeight: '45px',
                paddingLeft:
                  media.getSize('large').column +
                  media.getSize('large').gutter
              },
              [media.between('medium', 'large', true)]: {},
              [media.lessThan('medium', true)]: {}
            }}
          >
            Testimonials
          </h1>
          <div
            css={{
              width: '100%',
              color: colors.white,
              marginTop: 0,
              marginRight: 0,
              marginLeft: 0,
              [media.greaterThan('xlarge', true)]: {
                paddingRight:
                  media.getSize('xlarge').column +
                  media.getSize('xlarge').gutter,
                paddingLeft:
                  media.getSize('xlarge').column +
                  media.getSize('xlarge').gutter
              },
              [media.between('large', 'xlarge', true)]: {
                paddingRight:
                  media.getSize('large').column +
                  media.getSize('large').gutter,
                paddingLeft:
                  media.getSize('large').column +
                  media.getSize('large').gutter
              },
              [media.between('medium', 'large', true)]: {
                paddingRight:
                  media.getSize('medium').column * 2 +
                  media.getSize('medium').gutter,
                paddingLeft:
                  media.getSize('medium').column * 2 +
                  media.getSize('medium').gutter * 2
              },
              [media.lessThan('medium', true)]: {}
            }}
          >
            {this.state.carouselDisplay ? (
              <TestimonialsCarousel
                entries={this.props.data.allHomepageJson.edges[0].node.data}
                breakPoint={this.props.breakPoint}
              />
            ) : (
              <TestimonialsList
                entries={this.props.data.allHomepageJson.edges[0].node.data}
                breakPoint={this.props.breakPoint}
              />
            )}
          </div>
        </Flex>
      </section>
    );
  }
}

class Testimonials extends Component {
  static contextType = ReactReduxContext;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allHomepageJson(filter: { name: { eq: "testimonials" } }) {
              edges {
                node {
                  name
                  data {
                    text
                    author
                  }
                }
              }
            }
          }
        `}
        render={data => <Testimonial data={data} {...this.props} />}
      />
    );
  }
}

export default connect(state => ({
  breakPoint: state.app.breakPoint
}))(Testimonials);
