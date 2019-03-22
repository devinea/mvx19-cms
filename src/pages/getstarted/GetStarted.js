import React, { Component } from 'react';

import { ReactReduxContext, connect } from 'react-redux';

import Flex from '../../components/Flex';

import ResourcesList from '../../components/ResourceList/ResourcesList';
import LearningList from './LearningList';
import ResourcesCarousel from '../../components/ResourcesCarousel/ResourcesCarousel';

import { colors, media } from '../../components/theme';

class GetStarted extends Component {
  static contextType = ReactReduxContext;

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
          this.props.breakPoint.breakpointName === 'medium' ||
          this.props.breakPoint.breakpointName === 'small'
        ) {
          this.setState({ carouselDisplay: true });
        } else {
          this.setState({ carouselDisplay: false });
        }
      }
    }
  };

  render() {
    const { location } = this.props;

    return (
      <div
        css={{
          width: '100%'
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
          <h1
            css={{
              textAlign: 'center',
              width: '100%',
              lineHeight: '43px',
              fontWeight: 700,
              color: colors.gray_700,
              marginBottom: 105,
              [media.greaterThan('small')]: {
                marginTop: 42,
                marginBottom: 50,
                fontSize: 28
              },
              [media.greaterThan('medium')]: {
                fontSize: 40,
                marginTop: 100
              },
              [media.greaterThan('large')]: {
                fontSize: 40,
                marginTop: 100
              },
              [media.greaterThan('xlarge')]: {
                fontSize: 60,
                marginTop: 100,
                marginBottom: 140
              }
            }}
          >
            Get started with Fiori.
          </h1>
          <LearningList />
        </Flex>
        {this.state.carouselDisplay ? <ResourcesCarousel /> : <ResourcesList />}
      </div>
    );
  }
}

export default connect(state => ({
  breakPoint: state.app.breakPoint
}))(GetStarted);
