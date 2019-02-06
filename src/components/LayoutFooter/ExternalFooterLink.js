import React from 'react';

import { media, colors } from '../theme';

const ExternalFooterLink = ({ children, href, target, rel }) => (
  <a
    css={{
      lineHeight: '20px',
      color: colors.grey_400,
      fontSize: 12,
      whiteSpace: 'nowrap',
      ':not(:last-child)': {
          paddingRight: 30,
      },
      ':hover': {
        color: colors.lighter
      },
      [media.size('small')]: {
        marginTop: 10
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
