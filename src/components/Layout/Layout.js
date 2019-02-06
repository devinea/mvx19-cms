import React from 'react';

import SEO from '../SEO';
import Flex from '../Flex';
import Footer from '../LayoutFooter';
import Header from '../LayoutHeader';
import HamburgerMenu from './../Hamburger/Menu';

import { media } from '../theme';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuToggle: false,
      hasScroll: false
    };
    this.mql = null;
    this.onMatchMQ = mql => this._onMatchMQ(mql);
    this.toggleMenu = toggle => this._toggleMenu(toggle);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this._handleOnScroll);

    if (!window.matchMedia) return;
    const large = media.getSize('large');
    this.mql = window.matchMedia(`(max-width: ${large.min}px)`);
    this.mql.addListener(this.onMatchMQ);
    this.onMatchMQ(this.mql);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this._handleOnScroll);

    this.mql && this.mql.removeListener(this.onMatchMQ);
  };

  componentDidUpdate = prevprops => {
    if (this.props.location !== prevprops.location) {
      if (
        this.props.location.state &&
        this.props.location.state.fromHamburger
      ) {
        document.body.style.overflow = 'auto';
        this.toggleMenu(false);
      }
    }
  };

  _onMatchMQ(mql) {
    this.toggleMenu(false);
  }

  _handleOnScroll = () => {
    this.setState({
      hasScroll: !!window.scrollY
    });
  };

  _toggleMenu(toggle) {
    this.setState({ menuToggle: toggle }, () => {
      if (!this.state.menuToggle) {
        document.body.style.overflow = 'auto';
      } else {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
      }
    });
  }

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
        <Header
          location={location}
          onHamburgerButton={this.toggleMenu}
          hamburgerButtonActive={this.state.menuToggle}
          hasScroll={this.state.hasScroll}
        />
        <HamburgerMenu active={this.state.menuToggle} />
        <Flex
          direction='column'
          shrink='0'
          grow='1'
          overflow='auto'
          valign='stretch'
          css={{
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

export default Layout;
