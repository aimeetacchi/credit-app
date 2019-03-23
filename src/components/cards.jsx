import React, { Component } from 'react'

export default class cards extends Component {
  render() {
    return (
      <div>
          <h1>Hello, {this.props.applicant.name} These are all the cards you're eligible for </h1>

      </div>
    )
  }
}
