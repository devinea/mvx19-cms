import React, { Component } from 'react';

import { ReactReduxContext, connect } from 'react-redux';

import { media, colors, header } from '../../theme';
import { isLarge, isXLarge, isXXLarge } from '../../../../utils/breakpoints';
import { toggleHamburgerMenu as toggleHamburgerMenuAction } from '../../../state/app';

class HamburgerButton extends Component {
  static contextType = ReactReduxContext;

  constructor(props) {
    super(props);
    this.toggleBodyStyle = toggle => this._toggleBodyStyle(toggle);
  }

  componentDidUpdate = prevProps => {
    if (this.props.breakPoint) {
      if (
        this.props.breakPoint.breakpointName !==
          prevProps.breakPoint.breakpointName &&
        (isLarge(this.props.breakPoint.breakpointName) ||
          isXLarge(this.props.breakPoint.breakpointName) ||
          isXXLarge(this.props.breakPoint.breakpointName))
      ) {
        this.toggleBodyStyle(false);
        this.context.store.dispatch(toggleHamburgerMenuAction(false));
      }
    }
  };

  _toggleBodyStyle = toggle => {
    if (!toggle) {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'inherit';
    } else {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
    }
  };

  render() {
    return (
      <div
        css={{
          width: 18,
          minWidth: 18,
          marginRight: 16,
          position: 'relative',
          transitionDuration: '0.5s',
          display: 'block',
          ':hover': {
            cursor: 'pointer'
          },
          [media.lessThan('medium')]: {
            height: header.mobile.height
          },
          [media.greaterThan('medium')]: {
            height: header.mobile.height
          },
          [media.greaterThan('large')]: {
            display: 'none'
          }
        }}
        onClick={() => {
          this.toggleBodyStyle(!this.props.isHamburgerMenuOpen);
          this.props.toggleHamburgerMenu(!this.props.isHamburgerMenuOpen);
        }}
      >
        <div
          css={{
            width: 18,
            height: 60,
            position: 'absolute',
            transitionDuration: '0.3s',
            height: 3,
            borderRadius: 1,
            width: 18,
            [media.lessThan('large')]: {
              top: 24
            },
            [media.greaterThan('large')]: {
              top: 30
            },
            backgroundColor: colors.gray_700,
            ...(this.props.isHamburgerMenuOpen && {
              transitionDuration: '0.3s',
              background: 'transparent'
            }),
            '::before': {
              transitionDuration: '0.3s',
              position: 'absolute',
              width: 18,
              height: 3,
              borderRadius: 1,
              backgroundColor: colors.gray_700,
              content: `''`,
              top: -6,
              ...(this.props.isHamburgerMenuOpen && {
                transform: 'rotateZ(45deg) translate(3px, 5px)'
              })
            },
            '::after': {
              transitionDuration: '0.3s',
              position: 'absolute',
              width: 18,
              height: 3,
              borderRadius: 1,
              backgroundColor: colors.gray_700,
              content: `''`,
              top: 6,
              ...(this.props.isHamburgerMenuOpen && {
                transform: 'rotateZ(-45deg) translate(3.5px, -5.5px)'
              })
            }
          }}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    isHamburgerMenuOpen: state.app.isHamburgerMenuOpen,
    breakPoint: state.app.breakPoint
  }),
  dispatch => ({
    toggleHamburgerMenu: open => dispatch(toggleHamburgerMenuAction(open))
  })
)(HamburgerButton);
