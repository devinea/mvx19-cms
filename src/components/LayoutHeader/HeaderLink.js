import React from 'react';

import { Link } from 'gatsby';
import { colors, media } from '../theme';

class HeaderLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  _hoverOn = () => {
    this.setState({ hover: true });
  };

  _hoverOff = () => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <Link
        onMouseEnter={this._hoverOn}
        onMouseLeave={this._hoverOff}
        css={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          color: colors.gray_700,
          transition: 'color 0.2s ease-out',
          [media.greaterThan('large')]: {
            marginRight: 40
          },
          [media.greaterThan('xlarge')]: {
            marginRight: 40
          },
          fontWeight: 700,
          fontSize: 14,
          lineHeight: '19px',
          textDecoration: 'none',
          ':focus': {
            outline: 0,
            color: colors.gray_700
          },
          ':hover': {
            color: colors.blue_300,
            ...(this.props.isActive && {
              color: colors.gray_700
            })
          },
          ...(this.props.isActive && {
            color: colors.gray_700
          })
        }}
        to={this.props.to}
      >
        {this.props.title}
        {this.props.isActive && (
          <span
            css={{
              position: 'absolute',
              bottom: 0,
              height: 3,
              background: colors.gray_700,
              color: colors.gray_700,
              left: 0,
              right: 0,
              zIndex: 1
            }}
          />
        )}
      </Link>
    );
  }
}

export default HeaderLink;
