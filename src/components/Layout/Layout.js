import React, { Component } from 'react';

import SEO from '../SEO';
import Flex from '../Flex';
import Footer from '../LayoutFooter';
import Header from '../LayoutHeader';

import { media } from '../theme';

class Template extends Component {
  render() {
    const { children, location } = this.props;

    return (
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <SEO />
        <Header location={location} />
        <Flex
          direction='column'
          shrink='0'
          grow='1'
          overflow='auto'
          valign='stretch'
          css={{
            flex: '1 0 auto',
            marginTop: 60
          }}
        >
          {children}
        </Flex>
        <Footer />
      </div>
    );
  }
}

export default Template;
