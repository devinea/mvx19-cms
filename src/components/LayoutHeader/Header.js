import React from 'react';
import { Link } from 'gatsby';

import HamburgerButton from './../Hamburger/Button';
import SearchButton from './../SearchNew/Button';
import SearchInput from './../SearchNew/Input';
import Container from './../Container';
import HeaderLink from './HeaderLink';
import { sectionListHeaderLinks } from '../../../utils/sectionList';
import { colors, header, media } from '../theme';

import logoSvg from './../../img/logo.svg';

class Header extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <header
        css={{
          backgroundColor: colors.white,
          ...(this.props.hasScroll && {
            boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.30)'
          }),
          color: colors.black,
          transition: 'box-shadow 0.5s',
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          top: 0,
          left: 0
        }}
      >
        <Container>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: header.height,
              position: 'relative'
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
                left: 0,
                transition: 'left 0.3s',
                ...(this.props.searchButtonActive && {
                  left: '-180px'
                })
              }}
            >
              <HamburgerButton
                onPress={this.props.onHamburgerButton}
                active={this.props.hamburgerButtonActive}
              />
              <Link
                css={{
                  display: 'flex',
                  marginRight: 10,
                  height: '100%',
                  alignItems: 'center'
                }}
                to='/'
              >
                <img src={logoSvg} alt='SAP' width='63' height='32' />
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
                opacity: 1,
                transition: 'opacity 0.3s',
                ...(this.props.searchOn && {
                  opacity: 0
                })
              }}
            >
              <nav
                css={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  overflowX: 'auto',
                  overflowY: 'hidden',
                  height: '100%',
                  opacity: 1,

                  transition: 'opacity 0.5s',
                  ...(this.props.searchButtonActive && {
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
                    [media.lessThan('large')]: {
                      display: 'none'
                    }
                  }}
                >
                {sectionListHeaderLinks.map(section => {
                  const defaultItem = section.items;
                  return (
                    <HeaderLink
                      isActive={location.pathname.includes(defaultItem[0].id) || location.hash.includes(defaultItem[0].id)}
                      title={section.title}
                      to={defaultItem[1].url}
                      key={defaultItem[0].id}
                    />
                  );
                })}
                </div>
                <SearchButton
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
          />
        </Container>
      </header>
    );
  }
}

export default Header;
