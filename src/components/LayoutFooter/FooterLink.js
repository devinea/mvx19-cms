import React from 'react';
import { Link } from 'gatsby';

import { colors } from '../theme';

const FooterLink = ({ children, target, to }) => (
  <Link
    css={{
      lineHeight: '20px',
      color: colors.grey_900,
      fontWeight: 700,
      fontSize: 12,
      ':hover': {
        color: colors.grey_600
      }
    }}
    to={to}
    target={target}
  >
    {children}
  </Link>
);

export default FooterLink;
