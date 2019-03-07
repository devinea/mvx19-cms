import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../components/theme';

const ColorCollectionPreview = ({ entry, widgetsFor, widgetFor }) => {
    return (
        <section>
            <h1>{entry.getIn(['data', 'title'])}</h1>
            <h2>{entry.getIn(['data', 'srcTemplateKey'])}</h2>

            <div>
                { widgetsFor('colorGroups').map((colorGroups, index) => <li><div>{index}</div><div>{colorGroups}</div></li>)}
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