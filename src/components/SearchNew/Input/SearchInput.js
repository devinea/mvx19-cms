import React, { Component } from 'react';
import { navigate } from 'gatsby';

import { colors, media, header } from '../../theme';
import searchIcon from './../../../../static/img/icons/ico_search_24x24.svg';

import BackButton from '../BackButton';
import CloseButton from '../CloseButton';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;

    this.searchInput = React.createRef();
    this.state = {
      value: '',
      fromUrl: '/',
      backBtn: false
    };
    this.handleChange = e => this._handleChange(e);
  }

  componentDidUpdate = prevprops => {
    if (this.props.active !== prevprops.active) {
      if (this.props.active) {
        this.searchInput.current.focus();
      } else {
        this.searchInput.current.blur();
      }
      this.setState({ value: this.props.value });
      this.setState({ fromUrl: this.props.fromUrl });
      this.setState({ backBtn: this.props.backBtn });
    }
  };

  _handleChange = e => {
    this.setState({ value: e.target.value });
  };

  _onCloseSearch = event => {
    this.props.onClose(!this.props.active);
  };

  _onBack = event => {
    navigate(this.state.fromUrl);
  };

  _onKeyPress = event => {
    if (event.key === 'Enter') {
      this.setState({ backBtn: true });
      this.setState({ fromUrl: location.pathname });
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
          width: 'calc(100% - 80px)',
          opacity: 0,
          zIndex: '-1',
          transition: 'opacity 0.3s',
          ...(this.props.active && {
            zIndex: 0,
            opacity: 1
          }),
          [media.lessThan('large')]: {
            width: `calc(100% - ${header.mobile.paddingLeft}px - ${
              header.mobile.paddingRight
            }px)`,
            top: `calc( ( ${header.mobile.height}px - ${
              header.mobile.search.height
            }px) / 2)`
          },
          [media.greaterThan('large')]: {
            width: `calc(100% - ${header.desktop.paddingLeft}px - ${
              header.desktop.paddingRight
            }px)`,
            top: `calc( ( ${header.desktop.height}px - ${
              header.desktop.search.height
            }px) / 2)`
          }
        }}
      >
        {this.state.backBtn ? (
          <BackButton
            onClick={this._onBack}
            cssProps={{
              position: 'absolute',
              cursor: 'pointer',
              width: 24,
              height: 40,
              left: 0,
              top: 0
            }}
          />
        ) : (
          ''
        )}

        <div
          css={{
            margin: '0 auto',
            textAlign: 'right',
            position: 'relative',
            [media.lessThan('large')]: {
              width: `calc(100% - 24px - ${
                header.mobile.paddingLeft
              }px - 24px - ${header.mobile.paddingRight}px)`
            },
            [media.greaterThan('large')]: {
              width: `calc(100% - 24px - ${
                header.desktop.paddingLeft
              }px - 24px - ${header.desktop.paddingRight}px)`
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
              fontSize: 14,
              border: 'none',
              backgroundColor: colors.gray_100,
              borderRadius: 20,
              outline: 'none',
              color: colors.gray_700,
              paddingLeft: 40,
              paddingRight: 20,
              backgroundImage: 'url(' + searchIcon + ')',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '10px 50%',
              backgroundSize: '24px 24px',
              width: '100%',
              transition: 'height 0.3s',
              borderColor: 'transparent',
              borderStyle: 'solid',
              borderWidth: 1,
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
              ':hover': {
                borderColor: colors.blue_300
              },
              ':focus': {
                backgroundColor: colors.white,
                borderColor: colors.gray_400
              },
              '::placeholder': {
                fontStyle: 'italic'
              }
            }}
            placeholder='Search...'
            type='search'
          />
        </div>

        <CloseButton
          onClick={this._onCloseSearch}
          cssProps={{
            position: 'absolute',
            cursor: 'pointer',
            width: 24,
            height: 40,
            right: 0,
            top: 0
          }}
        />
      </div>
    );
  }
}

export default SearchInput;
