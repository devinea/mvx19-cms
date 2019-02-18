import React, { Component } from 'react';

import { media, colors } from '../../theme';

class HamburgerButton extends Component {
  constructor(props) {
    super(props);
  };

  _setActiveState = event => {
    this.props.onPress(!this.props.active);
  };

  render() {
    return (
      <div
        css={{
          width: 18,
          height: 60,
          minWidth: 18,
          marginRight: 16,
          position: 'relative',
          transitionDuration: '0.5s',
          display: 'block',
          ':hover': {
            cursor: 'pointer'
          },
          [media.greaterThan('large')]: {
            display: 'none'
          }
        }}
        onClick={this._setActiveState}
      >
        <div
          css={{
            width: 18,
            height: 60,
            position: 'absolute',
            transitionDuration: '0.3s',
            height: 2,
            width: 18,
            top: 30,
            backgroundColor: colors.gray_700,
            ...(this.props.active && {
              transitionDuration: '0.3s',
              background: 'transparent'
            }),
            '::before': {
              transitionDuration: '0.3s',
              position: 'absolute',
              width: 18,
              height: 2,
              backgroundColor: colors.gray_700,
              content: `''`,
              top: -6,
              ...(this.props.active && {
                transform:
                  'rotateZ(45deg) scaleX(0.9) translate(3.5px, 5.5px)'
              })
            },
            '::after': {
              transitionDuration: '0.3s',
              position: 'absolute',
              width: 18,
              height: 2,
              backgroundColor: colors.gray_700,
              content: `''`,
              top: 6,
              ...(this.props.active && {
                transform:
                  'rotateZ(-45deg) scaleX(0.9) translate(3.5px, -5.5px)'
              })
            }
          }}
        />
      </div>
    );
  }
}

export default HamburgerButton;
