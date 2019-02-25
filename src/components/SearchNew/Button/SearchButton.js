import React, { Component } from 'react';

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
          position: 'absolute',
          width: 0,
          minWidth: 24,
          height: header.height,
          float: 'right',
          right: 0,
          overflow: 'hidden',
          backgroundColor: 'transparent',
          transition: 'width 0.3s',
          webkitBackfaceVisibility: 'hidden',
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
            fontFamily: 'SAP-icons',
            fontSize: 18,
            color: colors.gray_500,
            backgroundColor: 'transparent',
            '::before': {
              content: 'attr(data-sap-ui-icon-content)'
            }
          }}
          data-sap-ui-icon-content=''
          onClick={this._setActiveState}
        />
      </div>
    );
  }
}

export default SearchButton;
