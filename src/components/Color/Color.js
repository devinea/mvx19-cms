import React from 'react'
import PropTypes from 'prop-types'
import Flex from '../../components/Flex'

class Color extends React.Component {
  render() {

    let lightHex = this.props.light;
    let darkHex = this.props.dark;

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
    <h3>{this.props.name}</h3>
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
    <span css={{ textAlign: 'center' }}>Light: {this.props.light}</span>
    </div>
    <div 
      css={{
        height: 100,
        width: 100,
        backgroundColor: lightHex,
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
    <span css={{ textAlign: 'center' }}>Dark: {this.props.dark}</span>
    </div>
    <div 
      css={{
        height: 100,
        width: 100,
        backgroundColor: darkHex,
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
    <span>{this.props.description}</span>
    </div>
    </Flex>
    </section>
    )
  }
}

Color.propTypes = {
  name: PropTypes.string,
  light: PropTypes.string,
  dark: PropTypes.string,
  description: PropTypes.string
}

export default Color