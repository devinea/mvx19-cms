import React from 'react';

const FooterNav = ({ children, title }) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingTop: 40,
      paddingBottom: 20
    }}
  >
    <div
      css={{
        display: 'inline-flex',
        flexDirection: 'column'
      }}
    >
      {children}
    </div>
  </div>
);

export default FooterNav;
