import React from 'react';
import { colors } from '../theme';

const FooterTitle = ({ children, title, cssProps = {}, onDark = false }) => (
  <div
    css={{
      color: colors.black,
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      ...cssProps
    }}
  >
    {children}
  </div>
);

export default FooterTitle;
