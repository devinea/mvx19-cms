import React from 'react'

class Color extends React.Component {
  render() {
    console.log(this.props)
    return (
    <section>
    <div>{this.props.id}</div>
    <div>{this.props.colors}</div>
    </section>
    )
  }
}

export default Color