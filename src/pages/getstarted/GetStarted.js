import React from 'react';

import Layout from '../../components/Layout';
import Flex from '../../components/Flex';

import { colors, media } from '../../components/theme';

import ResourcesCarousel from './ResourcesCarousel';
import ResourcesList from './ResourcesList';
import LearningList from './LearningList';

class GetStarted extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mediumSize: false
    };

    this.mediaQueryListener = null;
    this.onMatchMQ = mediaQueryListener => this._onMatchMQ(mediaQueryListener);
    this.isSmallSize = toggle => this._isSmallSize(toggle);
  }

  componentDidMount = () => {
    if (!window.matchMedia) return;
    const medium = media.getSize('medium');
    this.mediaQueryListener = window.matchMedia(`(max-width: ${medium.max}px)`);
    this.mediaQueryListener.addListener(this.onMatchMQ);

    this.setState({ mediumSize: this.mediaQueryListener.matches });
  };

  componentWillUnmount = () => {
    this.mediaQueryListener &&
      this.mediaQueryListener.removeListener(this.onMatchMQ);
  };

  _onMatchMQ(mql) {
    this.setState({ mediumSize: mql.matches });
  }


  render() {
    const { location } = this.props;

    return (
      <Layout location={location}>
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
              fontSize: 46,
              fontWeight: 700,
              color: colors.gray_600,
              marginTop: 100,
              marginBottom: 105,
              [media.lessThan('medium')]: {
                fontSize: 26,
                lineHeight: '43px',
                marginTop: 60,
                marginBottom: 60
              }
            }}
          >
            Get started with Fiori.
          </h1>
          <LearningList />
        </Flex>
        {this.state.mediumSize ? <ResourcesCarousel /> : <ResourcesList />}
      </Layout>
    );
  }
}

export default GetStarted;
