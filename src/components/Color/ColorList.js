import React from 'react'
import Color from './Color'

class ColorList extends React.Component {

  render() {
    const { key, name, colors } = this.props;
    /*
    The following block of code has been included to deal with the atypical format of
    the 'Color Groups' data form the CMS and accomodate the addition/deletion of 
    Color Groups or individual Colors.

    Please provide feedback as this could likely be done in a more elegant/correct 
    manner using React states or component lifecycle hooks. 
    */
    try {
      // Console log presenting the format that data is passed to component
      console.log('Format of *Array of Objects* passed from CMS: ', colors);
      var colorsArray;
      // The following if...else statement avoids 'unexpected token u in json at position 0' error when user adds a new 'Color Group'
      if (typeof colors === 'undefined') { // Check if incoming 'colors' property is undefined
        colorsArray=[{}]; // Create array containing an empty object
      } else { // If not undefined, clone the 'Array of Objects'
        colorsArray = JSON.parse(JSON.stringify(colors)); // Creates new array in a format where data can be mapped and accessed
      }

      console.log('New Format: ', colorsArray);
    } catch(error) {
      console.error(error);
    }
    // End of block

    return (
    <section>
    <h2>Color Group: {name}</h2>
    <div>
        { colorsArray.map((color, index) => 
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