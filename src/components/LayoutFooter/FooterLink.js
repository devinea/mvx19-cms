import React from 'react';
import { Link } from 'gatsby';

import { colors } from '../theme';

const FooterLink = ({ children, target, to }) => (
  <Link
    css={{
      lineHeight: 2,
      color: colors.black,
      ':hover': {
        color: colors.lighter
      }
    }}
    to={to}
    target={target}
  >
    {children}
  </Link>
);

export default FooterLink;
