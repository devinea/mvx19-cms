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
          color: colors.gray_500,
          transition: 'color 0.2s ease-out',
          [media.greaterThan('large')]: {
            marginRight: 50
          },
          [media.greaterThan('xlarge')]: {
            marginRight: 70
          },
          fontWeight: 500,
          fontSize: 14,
          textDecoration: 'none',
          ':focus': {
            outline: 0,
            color: colors.blue_600
          },
          ':hover': {
            color: colors.blue_600
          },
          ...(this.props.isActive && {
            color: colors.blue_600
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
              height: 2,
              background: colors.blue_600,
              color: colors.blue_600,
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
