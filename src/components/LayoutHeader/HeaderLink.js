import React from 'react';

import { Link } from 'gatsby';
import { colors } from '../theme';

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
          color: colors.text,
          transition: 'color 0.2s ease-out',
          paddingLeft: 15,
          paddingRight: 15,
          fontWeight: 300,
          fontSize: 14,
          textDecoration: 'none',
          ':focus': {
            outline: 0,
            color: colors.text
          },
          ...(this.props.isActive && {
            fontWeight: 500
          })
        }}
        to={this.props.to}
      >
        {this.props.title}
        {(this.props.isActive || this.state.hover) && (
          <span
            css={{
              position: 'absolute',
              bottom: 2,
              height: 2,
              background: colors.text,
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
