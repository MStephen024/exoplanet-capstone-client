import React, { Component } from 'react'
import FaveFormTest from './FaveFormTest'

class FaveNewTest extends Component {
  constructor () {
    super()
    this.state = {
      exoplanet: {
        plName: ''
      }
    }
  }

  render () {
    return (
      <FaveFormTest
        tag={this.state.tag}
      />
    )
  }
}

export default FaveNewTest
