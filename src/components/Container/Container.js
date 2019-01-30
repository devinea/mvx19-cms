import React from 'react';

const Container = ({ children, cssProps = {} }) => (
  <div
    css={{
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      ...cssProps
    }}
  >
    {children}
  </div>
);

export default Container;
