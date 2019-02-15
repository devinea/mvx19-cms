import React from 'react';

import SEO from '../SEO';
import Flex from '../Flex';
import Footer from '../LayoutFooter';
import Header from '../LayoutHeader';
import HamburgerMenu from './../Hamburger/Menu';

import { header, media } from '../theme';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuToggle: false,
      searchToggle: false,
      hasScroll: false
    };
    this.mediaQueryListener = null;
    this.onMatchMQ = mediaQueryListener => this._onMatchMQ(mediaQueryListener);
    this.toggleMenu = toggle => this._toggleMenu(toggle);
    this.toggleSearch = toggle => this._toggleSearch(toggle);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this._handleOnScroll);

    if (!window.matchMedia) return;
    const large = media.getSize('large');
    this.mediaQueryListener = window.matchMedia(`(max-width: ${large.min}px)`);
    this.mediaQueryListener.addListener(this.onMatchMQ);
    this.onMatchMQ();
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this._handleOnScroll);

    this.mediaQueryListener && this.mediaQueryListener.removeListener(this.onMatchMQ);
  };

  componentDidUpdate = prevprops => {
    if (
      this.props.location !== prevprops.location &&
      (this.props.location.state && this.props.location.state.fromHamburger)
    ) {
      document.body.style.overflow = 'auto';
      this.toggleMenu(false);
    }
  };

  _onMatchMQ() {
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

  _toggleSearch(toggle) {
    this.setState({ searchToggle: toggle });
  }

  render() {
    const { children, location } = this.props;

    return (
      <Flex
        direction='column'
        halign='normal'
        css={{
          minHeight: '100vh'
        }}
      >
        <SEO />
        <Header
          location={location}
          onHamburgerButton={this.toggleMenu}
          hamburgerButtonActive={this.state.menuToggle}
          onSearchButton={this.toggleSearch}
          searchButtonActive={this.state.searchToggle}
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
            marginTop: header.height
          }}
        >
          {children}
        </Flex>
        <Footer />
      </Flex>
    );
  }
}

export default Layout;
