import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../../components/Flex'

class Color extends React.Component {
  render() {

    const { name, light, dark, description } = this.props;

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
    <h3>{name}</h3>
    <Flex>
    <div
      css={{
        display: 'flex',
        height: 100,
        width: 80,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0
    }}
    >
    <span css={{ textAlign: 'center' }}>Light: {light}</span>
    </div>
    <div 
      css={{
        height: 100,
        width: 100,
        backgroundColor: light,
        borderRadius: 50,
        margin: 10,
        flexShrink: 0
    }}
    />
    <div
      css={{
        display: 'flex',
        height: 100,
        width: 80,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0
    }}
    >
    <span css={{ textAlign: 'center' }}>Dark: {dark}</span>
    </div>
    <div 
      css={{
        height: 100,
        width: 100,
        backgroundColor: dark,
        borderRadius: 50,
        margin: 10,
        flexShrink: 0
    }}
    />
    <div
      css={{
        display: 'flex',
        height: 100,
        flex: 1,
        margin: 10,
        alignItems: 'center',
        flexShrink: 0
    }}
    >
    <span>{description}</span>
    </div>
    </Flex>
    </section>
    )
  }
}

Color.defaultProps = {
  name: "<Color Name>",
  description: "<Description>",
}

Color.propTypes = {
  name: PropTypes.string,
  light: PropTypes.string,
  dark: PropTypes.string,
  description: PropTypes.string
}

export default Color