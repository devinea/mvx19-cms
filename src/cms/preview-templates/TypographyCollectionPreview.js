import React from 'react'
import PropTypes from 'prop-types'
import TypographyList from '../../components/Typography/TypographyList'

const TypographyCollectionPreview = ({ entry, widgetsFor }) => {
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
                { widgetsFor('typography').map((typography, index) => 
                <TypographyList 
                    key={index}
                    name={typography.getIn(['data', 'name'])}
                    styles={typography.toJS().data.styles}
                />
                )}
            </div>
        </section>
  )
}

TypographyCollectionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetsFor: PropTypes.func,
}

export default TypographyCollectionPreview