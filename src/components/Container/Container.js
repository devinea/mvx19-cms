import React from 'react';
import { media } from '../theme';

const Container = ({ children, cssProps = {} }) => (
  <div
    css={{

      [media.lessThan('medium')]: {
        paddingLeft: 20,
        paddingRight: 20
      },
      [media.greaterThan('medium')]: {
        paddingLeft: 20,
        paddingRight: 20
      },
      [media.greaterThan('large')]: {
        paddingLeft: 40,
        paddingRight: 40
      },
      [media.greaterThan('xlarge')]: {
        paddingLeft: 40,
        paddingRight: 40
      },
      marginLeft: 'auto',
      marginRight: 'auto',
      ...cssProps
    }}
  >
    {children}
  </div>
);

export default Container;
