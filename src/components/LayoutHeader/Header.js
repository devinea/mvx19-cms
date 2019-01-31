import React from 'react';
import { Link } from 'gatsby';

import Container from './../Container';
import HeaderLink from './HeaderLink';
import { colors } from '../theme';

import logoSvg from './../../img/logo.svg';

const Header = ({ location }) => (
  <header
    css={{
      backgroundColor: colors.white,
      boxShadow: '0 1px 6px 0 rgba(32, 33, 36, 0.28)',
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
        <nav
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            overflowX: 'auto',
            overflowY: 'hidden',
            height: '100%'
          }}
        >
          <HeaderLink
            isActive={location.pathname.includes('/design/')}
            title='Design'
            to='/design/guidelines'
          />
          <HeaderLink
            isActive={location.pathname.includes('/develop/')}
            title='Develop'
            to='/develop/guidelines'
          />
          <HeaderLink
            isActive={location.pathname.includes('/getstarted/')}
            title='Get Started'
            to='/getstarted'
          />
          <HeaderLink
            isActive={location.pathname.includes('/contact/')}
            title='Contribute'
            to='/contact/examples'
          />
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
