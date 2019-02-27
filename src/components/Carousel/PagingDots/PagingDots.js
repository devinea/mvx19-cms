import React from 'react';

import { colors } from '../../theme';

class PagingDots extends React.Component {
  getIndexes(count, inc) {
    const arr = [];
    for (let i = 0; i < count; i += inc) {
      arr.push(i);
    }
    return arr;
  }

  getListStyles() {
    return {
      position: 'relative',
      margin: 0,
      top: 30,
      padding: 0
    };
  }

  getListItemStyles() {
    return {
      listStyleType: 'none',
      display: 'inline-block'
    };
  }

  getButtonStyles(active) {
    return {
      border: 0,
      background: 'transparent',
      color: active ? colors.white : colors.gray_500,
      cursor: 'pointer',
      padding: 10,
      outline: 'none',
      fontSize: active ? 32 : 24,
      opacity: 1,
      lineHeight: '32px',
      verticalAlign: 'middle',
      maxHeight: 52
    };
  }

  render() {
    const indexes = this.getIndexes(
      this.props.slideCount,
      this.props.slidesToScroll
    );
    return (
      <ul style={this.getListStyles()}>
        {indexes.map(index => {
          return (
            <li style={this.getListItemStyles()} key={index}>
              <button
                style={this.getButtonStyles(this.props.currentSlide === index)}
                onClick={this.props.goToSlide.bind(null, index)}
              >
                &bull;
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PagingDots;
