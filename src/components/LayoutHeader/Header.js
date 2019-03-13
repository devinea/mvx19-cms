import React from 'react';
import { Link } from 'gatsby';

import SVG from 'react-inlinesvg';

import HamburgerButton from './../Hamburger/Button';
import SearchButton from './../SearchNew/SearchButton';
import SearchInput from './../SearchNew/Input';
import Container from './../Container';
import HeaderLink from './HeaderLink';

import { sectionListHeaderLinks } from '../../../utils/sectionList';
import { colors, header, media } from '../theme';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearchPage: false
    };
  }

  render() {
    const { location } = this.props;

    return (
      <header
        css={{
          backgroundColor: colors.white,
          boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.15)',
          color: colors.black,
          transition: 'height 0.3s',
          position: 'fixed',
          zIndex: 10,
          width: '100%',
          top: 0,
          left: 0,
          [media.lessThan('large')]: {
            height: header.mobile.height
          },
          [media.greaterThan('large')]: {
            height: header.desktop.height
          }
        }}
      >
        <Container
          cssProps={{
            height: '100%'
          }}
        >
          <div
            css={{
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              opacity: 1,
              zIndex: 0,
              transition: 'opacity 0.3s',
              ...(this.props.searchButtonActive && {
                zIndex: -1,
                opacity: 0
              })
            }}
          >
            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                overflowX: 'auto',
                overflowY: 'hidden',
                height: '100%',
                position: 'relative',
                left: 0
              }}
            >
              <HamburgerButton />
              <Link
                css={{
                  display: 'flex',
                  marginRight: 10,
                  height: '100%',
                  alignItems: 'center'
                }}
                to='/'
              >
                <SVG
                  src='/img/svg/logo-sap.svg'
                  css={{
                    [media.lessThan('large')]: {
                      width: 40,
                      height: 20,
                      svg: {
                        width: 40,
                        height: 20
                      }
                    },
                    [media.greaterThan('large')]: {
                      width: 48,
                      height: 24,
                      svg: {
                        width: 48,
                        height: 24
                      }
                    },
                    display: 'block'
                  }}
                />

                <span
                  css={{
                    color: 'inherit',
                    marginLeft: 10,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: '20px'
                  }}
                >
                  Fiori
                </span>
              </Link>
            </div>
            <div
              css={{
                display: 'block',
                flexDirection: 'row',
                alignItems: 'stretch',
                overflowX: 'auto',
                overflowY: 'hidden',
                height: '100%',
                opacity: 1
              }}
            >
              <nav
                css={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  overflow: 'hidden',
                  height: '100%',
                  opacity: 1
                }}
              >
                <div
                  css={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    overflow: 'hidden',
                    height: '100%',
                    [media.lessThan('large')]: {
                      display: 'none'
                    }
                  }}
                >
                  {sectionListHeaderLinks.map(section => {
                    const defaultItem = section.items;
                    return (
                      <HeaderLink
                        isActive={
                          location.pathname.includes(defaultItem[0].id) ||
                          location.hash.includes(defaultItem[0].id)
                        }
                        title={section.title}
                        to={defaultItem[1].url}
                        key={defaultItem[0].id}
                      />
                    );
                  })}
                </div>
                <SearchButton
                  cssProps={{
                    overflow: 'hidden',
                    transition: 'right 0.5s',
                    ...(this.props.hamburgerButtonActive && {
                      right: '-50px'
                    })
                  }}
                  onPress={this.props.onSearchButton}
                  active={this.props.searchButtonActive}
                />
              </nav>
            </div>
          </div>
          <SearchInput
            active={this.props.searchButtonActive}
            onEnter={this.props.onSearch}
            onClose={this.props.onSearchButton}
            value={this.props.searchValue}
            fromUrl={this.props.searchFromUrl}
            backBtn={this.props.searchBackBtn}
          />
        </Container>
      </header>
    );
  }
}

export default Header;
