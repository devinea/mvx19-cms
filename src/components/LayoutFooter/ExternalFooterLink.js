import React from 'react';

import { colors } from '../theme';

const ExternalFooterLink = ({ children, href, target, rel }) => (
  <a
    css={{
      lineHeight: 2,
      color: colors.black,
      ':not(:last-child)': {
          paddingRight: 30,
      },
      ':hover': {
        color: colors.lighter
      }
    }}
    href={href}
    target={target}
    rel={rel}
  >
    {children}
  </a>
);

export default ExternalFooterLink;
