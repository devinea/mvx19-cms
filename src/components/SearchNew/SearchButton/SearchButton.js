import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import { colors, header, media } from '../../theme';

class SearchButton extends Component {
  constructor(props) {
    super(props);
  }

  _setActiveState = event => {
    this.props.onPress(!this.props.active);
  };

  render() {
    return (
      <div
        css={{
          width: 0,
          minWidth: 24,
          float: 'right',
          right: 0,
          overflow: 'hidden',
          backgroundColor: 'transparent',
          transition: 'width 0.3s',
          webkitBackfaceVisibility: 'hidden',
          [media.lessThan('medium')]: {
            height: header.mobile.height
          },
          [media.greaterThan('medium')]: {
            height: header.mobile.height
          },
          [media.greaterThan('large')]: {
            height: header.desktop.height
          },
          [media.greaterThan('xlarge')]: {
            height: header.desktop.height
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
              '.searchIcon': {
                'path, circle, rect, polygon, line, polyline, ellipse': {
                  fill: colors.blue_300
                }
              }
            },
            '.searchIcon': {
              'path, circle, rect, polygon, line, polyline, ellipse': {
                fill: colors.gray_700
              }
            }
          }}
          onClick={this._setActiveState}
        >
          <SVG
            src='/img/icons/ico_search_24x24.svg'
            className='searchIcon'
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

export default SearchButton;
