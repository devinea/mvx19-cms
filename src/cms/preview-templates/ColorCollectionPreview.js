import React from 'react'
import PropTypes from 'prop-types'

const ColorCollectionPreview = ({ entry, widgetFor, fieldsMetaData }) => {
  return (
    <div>{ entry.getIn(['data', 'colorGroups', 'colors', 'light']) }</div>
  )
}

ColorCollectionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ColorCollectionPreview