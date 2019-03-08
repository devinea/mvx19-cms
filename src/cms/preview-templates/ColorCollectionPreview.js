import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../components/theme'
import ColorList from '../../components/Color/ColorList'

const ColorCollectionPreview = ({ entry, widgetsFor, widgetFor }) => {
    return (
        <section>
            <h1>{entry.getIn(['data', 'title'])}</h1>
            <h2>{entry.getIn(['data', 'srcTemplateKey'])}</h2>

            <div>
                { widgetsFor('colorGroups').map((colorGroups, index) => 
                <ColorList 
                    id={index}
                    name={colorGroups.getIn(['data', 'name'])}
                    colors={colorGroups.getIn(['data', 'colors'])}
                    colors2={colorGroups.getIn(['widgets', 'colors'])}
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