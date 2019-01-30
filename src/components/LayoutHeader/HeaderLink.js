import React from 'react';

import { Link } from 'gatsby';
import { colors } from '../theme';

const HeaderLink = ({ isActive, title, to }) => (
  <Link css={[style, isActive && activeStyle]} to={to}>
    {title}
  </Link>
);

const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: colors.black,
  transition: 'color 0.2s ease-out',
  paddingLeft: 15,
  paddingRight: 15,
  fontWeight: 300,
  textDecoration: 'none',

  ':focus': {
    outline: 0,
    color: colors.gray
  }
};

const activeStyle = {
  color: colors.lighter
};

export default HeaderLink;
