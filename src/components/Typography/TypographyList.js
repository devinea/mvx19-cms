import React from 'react'
import PropTypes from 'prop-types'
import Typography from './Typography'

class TypographyList extends React.Component {
  render() {
    const { name, styles } = this.props;
    return (
    <section
        css={{
            borderRadius: 7,
            paddingBottom: 30,
            padding: 10,
            margin: 25,
            boxShadow: '0 0 22px 0 rgba(0, 0, 0, 0.10)'
        }}
    >
    <h2>Typography Group: {name}</h2>
    <div>
        { styles.map((styles, index) => 
        <Typography
            key={index}
            name={styles.name}
            uppercase={styles.uppercase}
            style={styles.style}
            color={styles.color}
            size={styles.size}
            height={styles.height}
        />
        )}
    </div>
    </section>
    )
  }
}

TypographyList.defaultProps = {
  name: "<Typography Group Name>",
  styles: [{}],
}

TypographyList.propTypes = {
  name: PropTypes.string,
  styles: PropTypes.array,
}

export default TypographyList