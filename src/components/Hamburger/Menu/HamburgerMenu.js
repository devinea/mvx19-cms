import React, { Component } from 'react';

import { ReactReduxContext, connect } from 'react-redux';

import InternalMenuLink from './InternalMenuLink';
import { sectionListHeaderLinks } from '../../../../utils/sectionList';

import { colors, media, header } from '../../theme';

class HamburgerMenu extends Component {
  static contextType = ReactReduxContext;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        css={{
          zIndex: 5,
          display: 'block',
          height: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          overflow: 'auto',
          backgroundColor: colors.white,
          paddingLeft: 0,
          paddingBottom: 0,
          paddingRight: 0,
          transition: 'all .56s cubic-bezier(0.52, 0.16, 0.24, 1)',
          ...(this.props.isHamburgerMenuOpen && {
            height: '100%'
          }),
          [media.lessThan('large')]: {
            paddingTop: header.mobile.height
          },
          [media.greaterThan('large')]: {
            paddingTop: header.desktop.height
          }
        }}
      >
        <ul
          css={{
            padding: 20,
            boxShadow: '0 2px 20px 0 rgba(198,198,198,0.30)'
          }}
        >
          {sectionListHeaderLinks.map(section => {
            const defaultItem = section.items;
            return (
              <li
                key={defaultItem[0].id}
                css={{
                  borderTopColor: colors.gray_200,
                  borderTopStyle: 'solid',
                  borderTopWidth: 1
                }}
              >
                <InternalMenuLink to={defaultItem[1].url}>
                  {section.title}
                </InternalMenuLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  isHamburgerMenuOpen: state.app.isHamburgerMenuOpen
}))(HamburgerMenu);
