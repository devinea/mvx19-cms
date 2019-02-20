import React from 'react';
import queryString from 'query-string';
import { navigate } from 'gatsby';

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
      searchValue: '',
      hasScroll: false
    };
    this.mediaQueryListener = null;
    this.onMatchMQ = mediaQueryListener => this._onMatchMQ(mediaQueryListener);
    this.toggleMenu = toggle => this._toggleMenu(toggle);
    this.toggleSearch = toggle => this._toggleSearch(toggle);
    this.onSearch = toggle => this._onSearch(toggle);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this._handleOnScroll);

    if (!window.matchMedia) return;
    const large = media.getSize('large');
    this.mediaQueryListener = window.matchMedia(`(max-width: ${large.min}px)`);
    this.mediaQueryListener.addListener(this.onMatchMQ);
    this.onMatchMQ();


    const values = queryString.parse(this.props.location.search);
    if (values.q) {
      this.toggleSearch(true);
      this.setState({ searchValue: values.q });
    } else {
      this.toggleSearch(false);
      this.setState({ searchValue: '' });
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this._handleOnScroll);

    this.mediaQueryListener &&
      this.mediaQueryListener.removeListener(this.onMatchMQ);
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
    // if hamburger menu is open then close it
    if (toggle && this.state.menuToggle) {
      this.toggleMenu(false);
    }
  }

  _onSearch(options) {
    navigate('/search?q=' + options, {
      replace: true
    });
  }

  render() {
    const { children, location, search } = this.props;

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
          onSearch={this.onSearch}
          searchButtonActive={this.state.searchToggle}
          searchValue={this.state.searchValue}
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
