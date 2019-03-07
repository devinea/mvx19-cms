import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import { colors, media, header } from '../../theme';

class CloseButton extends Component {
  constructor(props) {
    super(props);
  }

  _onClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div
        css={{
          float: 'right',
          right: 0,
          overflow: 'hidden',
          backgroundColor: 'transparent',
          transition: 'width 0.3s',
          webkitBackfaceVisibility: 'hidden',
          [media.lessThan('medium')]: {
            height: header.mobile.search.height
          },
          [media.greaterThan('medium')]: {
            height: header.mobile.search.height
          },
          [media.greaterThan('large')]: {
            height: header.desktop.search.height
          },
          [media.greaterThan('xlarge')]: {
            height: header.desktop.search.height
          },
          ...this.props.cssProps
        }}
      >
        <button
          type='reset'
          css={{
            outline: 0,
            border: 0,
            width: 24,
            height: '100%',
            overflow: 'hidden',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            ':hover': {
              '.closeIcon': {
                'path, circle, rect, polygon, line, polyline, ellipse': {
                  fill: colors.blue_300
                }
              }
            },
            '.closeIcon': {
              'path, circle, rect, polygon, line, polyline, ellipse': {
                fill: colors.gray_700
              }
            }
          }}
          onClick={this._onClick}
        >
          <SVG
            src='/img/icons/ico_cross_24x24.svg'
            className='closeIcon'
            css={{
              width: 24,
              height: 24,
              display: 'block'
            }}
          />
        </button>
      </div>
    );
  }
}

export default CloseButton;
