import React from 'react';
import Layout from '../../components/Layout';

import GuidelineHeader from '../../components/guideline-header/guideline-header';
import GuidelineLeftNav from '../../components/guideline-left-nav/guideline-left-nav';

import designImg from './../../img/design.png';

export default class DesignGuidelineIndexPage extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <GuidelineHeader />
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            width: '100%'
          }}
        >
          <GuidelineLeftNav />
          <div
            css={{
              width: '100%'
            }}
          >
            <div
              css={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f8f9fb',
                height: '682px',
                backgroundImage: 'url(' + designImg + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top right'
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}
