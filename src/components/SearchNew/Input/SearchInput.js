import React, { Component } from 'react';

import { colors, header, media } from '../../theme';
import searchIcon from './../../../img/search.svg';
import crossIcon from './../../../img/cross.svg';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.searchInput = React.createRef();
    this.state = {
      value: '',
      isFocused: false
    };
    this.handleChange = e => this._handleChange(e);

    this.focusSearchInput = this._focusSearchInput.bind(this);
  }

  componentDidUpdate = (nextProps, nextState) => {
    this.focusSearchInput();
  };

  _handleChange = e => {
    this.setState({ value: e.target.value });
  };

  _focusSearchInput = () => {
    this.searchInput.current.focus();
  };

  _setActiveState = event => {
    this.props.onClose(!this.props.active);
  };

  render() {
    return (
      <div
        css={{
          position: 'absolute',
          textAlign: 'center',
          margin: '0 auto',
          width: 'calc(100% - 40px)',
          top: 0,
          zIndex: -1,
          transition: 'opacity 0.3s',
          opacity: 0,
          ...(this.props.active && {
            zIndex: 10,
            opacity: 1
          })
        }}
      >
        <div
          css={{
            margin: '0 auto',
            textAlign: 'right',
            position: 'relative',
            [media.greaterThan('large')]: {
              maxWidth: media.getSize('large').width
            },
            [media.greaterThan('xlarge')]: {
              maxWidth: media.getSize('xlarge').width
            }
          }}
        >
          <input
            onChange={this.handleChange}
            value={this.state.value}
            autoFocus={true}
            ref={this.searchInput}
            css={{
              width: 0,
              border: 'none',
              backgroundColor: colors.grey_200,
              borderRadius: 20,
              padding: '5px 20px 5px 40px',
              height: 40,
              marginTop: 12,
              marginRight: 30,
              transition: 'width 0.6s',
              outline: 'none',
              color: colors.grey_625,
              backgroundImage: 'url(' + searchIcon + ')',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '15px 50%',
              backgroundSize: '16px 16px',
              ...(this.props.active && {
                width: 'calc(100% - 30px)'
              })
            }}
            placeholder='Search...'
            type='search'
          />
          <div
            css={{
              backgroundImage: 'url(' + crossIcon + ')',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '5px 50%',
              backgroundSize: '13px 13px',
              width: 20,
              height: 40,
              marginTop: 12,
              right: 0,
              position: 'absolute',
              cursor: 'pointer',
              display: 'inline-block'
            }}
            onClick={this._setActiveState}
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
