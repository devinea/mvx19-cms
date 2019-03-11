import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../components/theme'
import ColorList from '../../components/Color/ColorList'

const ColorCollectionPreview = ({ entry, widgetsFor }) => {
    return (
        <section>
            <h1>{entry.getIn(['data', 'title'])}</h1>
            <div>
                { widgetsFor('colorGroups').map((colorGroups, index) => 
                <ColorList 
                    key={index}
                    name={colorGroups.getIn(['data', 'name'])}
                    colors={colorGroups.getIn(['data', 'colors'])} // Object containing color 'data'
                />
                )}
            </div>
        </section>
  )
}

ColorCollectionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetsFor: PropTypes.func,
}

export default ColorCollectionPreview