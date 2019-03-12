import React from 'react'
import PropTypes from 'prop-types'
import ColorList from '../../components/Color/ColorList'

const ColorCollectionPreview = ({ entry, widgetsFor }) => {
    return (
        <section>
            <div
                css={{
                    borderBottom: 3,
                    borderBottomStyle: 'double',
                    marginBottom: 30
                }}
            >
                <h1>{entry.getIn(['data', 'title'])}</h1>
                <h2>Version: {entry.getIn(['data', 'version'])}</h2>
            </div>
            <div>
                { widgetsFor('colorGroups').map((colorGroups, index) => 
                <ColorList 
                    key={index}
                    name={colorGroups.getIn(['data', 'name'])}
                    colors={colorGroups.getIn(['data', 'colors'])} // Returns an 'array of objects' containing color 'data' from CMS
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