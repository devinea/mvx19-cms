import React from 'react';
import { Link } from 'gatsby';

import { colors } from '../theme';

const FooterLink = ({ children, target, to }) => (
  <Link
    css={{
      lineHeight: '20px',
      color: colors.grey_700,
      marginTop: 10,
      fontSize: 14,
      ':hover': {
        color: colors.grey_800
      }
    }}
    to={to}
    target={target}
  >
    {children}
  </Link>
);

export default FooterLink;
