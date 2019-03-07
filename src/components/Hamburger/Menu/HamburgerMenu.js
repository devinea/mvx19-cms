import React from 'react';

import { colors, media, header } from '../../theme';
import InternalMenuLink from './InternalMenuLink';
import { sectionListHeaderLinks } from '../../../../utils/sectionList';

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        css={{
          zIndex: 1,
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
          ...(this.props.active && {
            height: '100%'
          }),
          [media.lessThan('medium')]: {
            paddingTop: header.mobile.height
          },
          [media.greaterThan('medium')]: {
            paddingTop: header.mobile.height
          },
          [media.greaterThan('large')]: {
            paddingTop: header.desktop.height
          },
          [media.greaterThan('xlarge')]: {
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
                <InternalMenuLink
                  to={defaultItem[1].url}
                >
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

export default HamburgerMenu;
