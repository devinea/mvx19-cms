import React from 'react'
import Color from './Color'

class ColorList extends React.Component {
  render() {
    console.log(this.props)

    return (
    <section>
    <div>{this.props.name}</div>
    <div>
        { this.props.colors.map((colors, i) => 
        <Color
            id={i}
            colors={colors}
        />
        )}
    </div>
    </section>
    )
  }
}

export default ColorList