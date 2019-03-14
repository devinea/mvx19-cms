import React from 'react'
import PropTypes from 'prop-types'
import Color from './Color'

class ColorList extends React.Component {
  render() {
    const { name, colors } = this.props;
    return (
    <section>
    <h2>Color Group: {name}</h2>
    <div>
        { colors.map((color, index) => 
        <Color
            key={index}
            name={color.name}
            light={color.light}
            dark={color.dark}
            description={color.description}
        />
        )}
    </div>
    </section>
    )
  }
}

ColorList.defaultProps = {
  name: "<Color Group Name>",
  colors: [{}],
}

ColorList.propTypes = {
  name: PropTypes.string,
  colors: PropTypes.array,
}

export default ColorList