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
      searchFromUrl: '/',
      searchBackBtn: false
    };
    this.mediaQueryListener = null;
    this.onMatchMQ = mediaQueryListener => this._onMatchMQ(mediaQueryListener);
    this.toggleMenu = toggle => this._toggleMenu(toggle);
    this.toggleSearch = toggle => this._toggleSearch(toggle);
    this.onSearch = toggle => this._onSearch(toggle);
  }

  componentDidMount = () => {
    if (!window.matchMedia) return;
    const large = media.getSize('large');
    this.mediaQueryListener = window.matchMedia(`(max-width: ${large.min}px)`);
    this.mediaQueryListener.addListener(this.onMatchMQ);
    this.onMatchMQ();

    if (this.props.search && this.props.search.display) {
      const values = queryString.parse(this.props.location.search);

      if (values.q) {
        this.toggleSearch(true);
        this.setState({ searchValue: values.q });
      } else {
        this.toggleSearch(false);
        this.setState({ searchValue: '' });
      }
      const fromUrl = this.props.location.state.fromUrl || '/';
      if (fromUrl) {
        this.setState({ searchFromUrl: fromUrl });
      }

      const backBtn = this.props.search.backBtn || false;
      this.setState({ searchBackBtn: backBtn });
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

  _onMatchMQ = () => {
    this.toggleMenu(false);
  };

  _toggleMenu = toggle => {
    this.setState({ menuToggle: toggle }, () => {
      if (!this.state.menuToggle) {
        document.body.style.overflow = 'auto';
        document.body.style.position = 'inherit';
      } else {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
      }
    });
  };

  _toggleSearch = toggle => {
    this.setState({ searchToggle: toggle });
    // if hamburger menu is open then close it
    if (toggle && this.state.menuToggle) {
      this.toggleMenu(false);
    }
  };

  _onSearch = options => {
    navigate('/search?q=' + options, {
      replace: true,
      state: { fromUrl: this.props.location.pathname }
    });
  };

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
          searchFromUrl={this.state.searchFromUrl}
          searchBackBtn={this.state.searchBackBtn}
        />
        <HamburgerMenu active={this.state.menuToggle} />
        <Flex
          direction='column'
          shrink='0'
          grow='1'
          overflow='auto'
          valign='stretch'
          css={{
            [media.lessThan('medium')]: {
              marginTop: header.mobile.height
            },
            [media.greaterThan('medium')]: {
              marginTop: header.mobile.height
            },
            [media.greaterThan('large')]: {
              marginTop: header.desktop.height
            },
            [media.greaterThan('xlarge')]: {
              marginTop: header.desktop.height
            }
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
