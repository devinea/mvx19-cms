import React from 'react';

import Flex from '../../components/Flex';
import Layout from '../../components/Layout';

import LeftNav from '../../components/LeftNav';
import designImg from './../../img/design.png';

export default class DesignGuidelineIndexPage extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <Flex
          direction='row'
          shrink='0'
          grow='1'
          overflow='auto'
          valign='stretch'
          css={{
            width: '100%',
          }}
        >
          <LeftNav title="Fiori For Web"/>
          <div
            css={{
              width: '100%'
            }}
          >
            <div
              css={{
                width: '100%',
                backgroundColor: '#f8f9fb',
                height: '682px',
                backgroundImage: 'url(' + designImg + ')',
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
