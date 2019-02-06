import React from 'react';
import { Link } from 'gatsby';

import HamburgerButton from './../Hamburger/Button';
import Container from './../Container';
import HeaderLink from './HeaderLink';
import { sectionListHeaderLinks } from '../../../utils/sectionList';
import { colors, media } from '../theme';

import logoSvg from './../../img/logo.svg';

class Header extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <header
        css={{
          backgroundColor: colors.white,
          ...(this.props.hasScroll && {
            boxShadow: '0 1px 6px 0 rgba(32, 33, 36, 0.28)'
          }),
          color: colors.black,
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
              height: 60
            }}
          >
            <div
              css={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                overflowX: 'auto',
                overflowY: 'hidden',
                height: '100%'
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
                <img src={logoSvg} alt='' width='63' height='32' />
                <span
                  css={{
                    color: 'inherit',
                    marginLeft: 10,
                    fontWeight: 700,
                    fontSize: 20,
                    lineHeight: '20px'
                  }}
                >
                  SAP Fiori
                </span>
              </Link>
            </div>
            <nav
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
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
