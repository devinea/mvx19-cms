import React from 'react';
import { navigate } from 'gatsby';

import { ReactReduxContext, connect } from 'react-redux';
import queryString from 'query-string';
import SEO from '../SEO';
import Flex from '../Flex';
import Footer from '../LayoutFooter';
import Header from '../LayoutHeader';
import HamburgerMenu from './../Hamburger/Menu';

import { header, media } from '../theme';
import { toggleHamburgerMenu as toggleHamburgerMenuAction } from '../../state/app';

class Layout extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchToggle: false,
      searchValue: '',
      searchFromUrl: '/',
      searchBackBtn: false
    };
    this.toggleSearch = toggle => this._toggleSearch(toggle);
    this.onSearch = toggle => this._onSearch(toggle);
  }

  static contextType = ReactReduxContext;

  componentDidMount = () => {
    if (this.props.location.pathname.startsWith('/search')) {
      const values = queryString.parse(this.props.location.search);
      if (values.q) {
        this.toggleSearch(true);
        this.setState({ searchBackBtn: true });
        this.setState({ searchValue: values.q });
      }
    }
  }

  componentDidUpdate = prevprops => {
    if (
      this.props.location !== prevprops.location &&
      (this.props.location.state && this.props.location.state.fromHamburger)
    ) {
      document.body.style.overflow = 'auto';
      this.context.store.dispatch(toggleHamburgerMenuAction(false));
    }
    if (this.props.location !== prevprops.location && this.state.searchToggle) {
      if (!this.props.location.pathname.startsWith('/search')) {
        this.toggleSearch(false);
        this.setState({ searchValue: '' });
        this.setState({ searchBackBtn: false });
      }
    }

  };

  _toggleSearch = toggle => {
    this.setState({ searchToggle: toggle });
    const isHamburgerMenuOpen = this.context.store.getState().app.isHamburgerMenuOpen;
    // if hamburger menu is open then close it
    if (toggle && isHamburgerMenuOpen) {
      this.context.store.dispatch(toggleHamburgerMenuAction(false));
    }
  };

  _onSearch = options => {
    navigate('/search?q=' + options, {
      replace: true,
      state: { fromUrl: this.props.location.pathname }
    });
  };

  render() {
    const { children, location} = this.props;

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
          onSearchButton={this.toggleSearch}
          onSearch={this.onSearch}
          searchButtonActive={this.state.searchToggle}
          searchValue={this.state.searchValue}
          searchFromUrl={this.state.searchFromUrl}
          searchBackBtn={this.state.searchBackBtn}
        />
        <HamburgerMenu />
        <Flex
          direction='column'
          shrink='0'
          grow='1'
          overflow='auto'
          valign='stretch'
          css={{
            [media.lessThan('large')]: {
              marginTop: header.mobile.height
            },
            [media.greaterThan('large')]: {
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

export default connect(
  state => ({ isHamburgerMenuOpen: state.app.isHamburgerMenuOpen })
)(Layout);
