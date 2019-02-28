import React from 'react';
import { Link } from 'gatsby';

import { colors } from '../../theme';

const InternalMenuLink = ({ children, target, to }) => (
  <Link
    css={{
      lineHeight: 2,
      color: colors.gray_600,
      fontSize: 18,
      fontWeight: 'normal',
      width: '100%',
      height: '100%',
      display: 'inline-block',
      padding: 20,
      ':hover': {
        color: colors.gray_700
      }
    }}
    to={to}
    target={target}
    state={{ fromHamburger: true }}
  >
    {children}
  </Link>
);

export default InternalMenuLink;
