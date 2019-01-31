import React from 'react';

import Flex from '../../components/Flex';
import Layout from '../../components/Layout';
import GuidelineHeader from '../../components/guideline-header/guideline-header';
import GuidelineLeftNav from '../../components/guideline-left-nav/guideline-left-nav';

import developImg from './../../img/develop.png';

export default class DeveloperGuidelineIndexPage extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <GuidelineHeader />
        <Flex
          direction='row'
          shrink='0'
          grow='1'
          overflow='auto'
          valign='stretch'
          css={{
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
                backgroundImage: 'url(' + developImg + ')',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top right'
              }}
            />
          </div>
        </Flex>
      </Layout>
    );
  }
}
