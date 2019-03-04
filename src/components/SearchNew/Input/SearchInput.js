import React, { Component } from 'react';

import { colors, media } from '../../theme';
import searchIcon from './../../../img/search.svg';
import crossIcon from './../../../img/cross.svg';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.searchInput = React.createRef();
    this.state = {
      value: ''
    };
    this.handleChange = e => this._handleChange(e);

    this.onBack = this._onBack.bind(this);
  }

  componentDidUpdate = prevprops => {
    if (this.props.active !== prevprops.active) {
      if (this.props.active) {
        this.searchInput.current.focus();
      } else {
        this.searchInput.current.blur();
      }
      this.setState({ value: this.props.value });
    }
  };

  _handleChange = e => {
    this.setState({ value: e.target.value });
  };

  _onCloseSearch = event => {
    this.props.onClose(!this.props.active);
  };

  _onBack = event => {
    window.history.back();
  };

  _onKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.onEnter(this.state.value);
    }
  };

  render() {
    return (
      <div
        css={{
          position: 'absolute',
          textAlign: 'center',
          margin: '0 auto',
          width: 'calc(100% - 40px)',
          top: '12px',
          opacity: 0,
          zIndex: '-1',
          transition: 'opacity 0.3s',
          ...(this.props.active && {
            zIndex: 0,
            opacity: 1
          })
        }}
      >
        <div
          css={{
            backgroundImage: 'url(' + crossIcon + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '5px 50%',
            backgroundSize: '13px 13px',
            position: 'absolute',
            width: 20,
            height: 40,
            left: 0,
            top: 0,
            cursor: 'pointer',
            display: 'inline-block'
          }}
          onClick={this.onBack}
        />

        <div
          css={{
            margin: '0 auto',
            textAlign: 'right',
            position: 'relative',
            [media.lessThan('medium')]: {
              maxWidth: media.getSize('small').width
            },
            [media.greaterThan('medium')]: {
              maxWidth: media.getSize('medium').width
            },
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
            onKeyPress={this._onKeyPress}
            value={this.state.value}
            autoFocus={true}
            ref={this.searchInput}
            css={{
              border: 'none',
              backgroundColor: colors.gray_100,
              borderRadius: 20,
              height: 40,
              outline: 'none',
              color: colors.gray_500,
              paddingLeft: 40,
              paddingRight: 20,
              backgroundImage: 'url(' + searchIcon + ')',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '15px 50%',
              backgroundSize: '16px 16px',
              width: '100%'
            }}
            placeholder='Search...'
            type='search'
          />
        </div>
        <div
          css={{
            backgroundImage: 'url(' + crossIcon + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '5px 50%',
            backgroundSize: '13px 13px',
            position: 'absolute',
            width: 20,
            height: 40,
            right: 0,
            top: 0,
            cursor: 'pointer',
            display: 'inline-block'
          }}
          onClick={this._onCloseSearch}
        />
      </div>
    );
  }
}

export default SearchInput;
