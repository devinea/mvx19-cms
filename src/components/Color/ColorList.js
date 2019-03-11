import React from 'react'
import Color from './Color'

class ColorList extends React.Component {

  render() {

    let colorObject = JSON.parse(JSON.stringify(this.props.colors)); // Put in try/catch and a couple of console logs to show reasoning being this code.

    return (
    <section>
    <h2>Color Group: {this.props.name}</h2>
    <div>
        { colorObject.map((color, index) => 
        <Color
            id={index}
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

export default ColorList