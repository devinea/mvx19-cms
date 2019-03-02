import React from 'react';
import queryString from 'query-string';
import { navigate } from 'gatsby';

import SEO from '../SEO';
import Flex from '../Flex';
import Footer from '../LayoutFooter';
import Header from '../LayoutHeader';
import HamburgerMenu from './../Hamburger/Menu';
import LeftNav from '../../components/LeftNav';
import { ContextProviderComponent } from "./Context"

import { header, media } from '../theme';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const LeftNavData = React.createContext({
  navData: null,
  setNavData: () => {}
});

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.setNavData = (data) => {
      console.log('setting nav data!:', data);
      this.setState(state => ({
        navData: {
          edges: data.edges
        }
      }));
    };

    
    this.state = {
      menuToggle: false,
      searchToggle: false,
      searchValue: '',
      hasScroll: false,
      data: { edges: []},
      setNavData: this.setNavData
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


    if (this.props.search && this.props.search.display) {
      const values = queryString.parse(this.props.location.search);
      if (values.q) {
        this.toggleSearch(true);
        this.setState({ searchValue: values.q });
      } else {
        this.toggleSearch(false);
        this.setState({ searchValue: '' });
      }
    }

  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this._handleOnScroll);

    this.mediaQueryListener &&
      this.mediaQueryListener.removeListener(this.onMatchMQ);
  };

  componentDidUpdate = prevprops => {
    let value = this.context;
    console.log('VAL:', value);
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

    let inp = children;
    if (location.pathname.indexOf('design') != -1) {
      inp = <Flex
        direction='row'
        shrink='0'
        grow='1'
        overflow='auto'
        valign='stretch'
        css={{
          width: '100%',
          height: '100%'
        }}
      >
        {/* <ContextConsumer>
        {({ data }) => {
          this.leftNav = data;
          console.log('work!!!2:', data);              
        }}        
        </ContextConsumer>         */}
        <LeftNav title="Fiori For Web(from layout)" data={this.leftNav}/>   
        {inp}
       </Flex>
    }

    return (

<ContextProviderComponent>
      <LeftNavData.Provider value={this.state}>

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
          {inp}
        </Flex>
        <Footer />
      </Flex>

      </LeftNavData.Provider>
      </ContextProviderComponent>
    );
  }
}

export default Layout;
