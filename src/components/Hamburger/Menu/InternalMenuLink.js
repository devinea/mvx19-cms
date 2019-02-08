import React from 'react';
import { Link } from 'gatsby';

import { colors } from '../../theme';

const InternalMenuLink = ({ children, target, to }) => (
  <Link
    css={{
      lineHeight: 2,
      color: colors.text,
      fontSize: 18,
      fontWeight: 'normal',
      ':hover': {
        color: colors.lighter
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
