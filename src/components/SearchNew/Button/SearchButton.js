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
          position: 'relative',
          width: 0,
          minWidth: 24,
          height: header.height,
          float: 'right',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          transition: 'width 0.3s',
          '-webkit-backface-visibility': 'hidden'
        }}
      >
        <button
          type='reset'
          css={{
            outline: 0,
            border: 0,
            width: 24,
            height: '100%',
            cursor: 'pointer',
            fontFamily: 'SAP-icons',
            fontSize: 18,
            color: colors.grey_625,
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
