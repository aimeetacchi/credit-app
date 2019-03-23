import React, { Component } from 'react'
import Card from '../components/card'

export default class cards extends Component {
  render() {
    return (
      <div>
          <h1>Hello, {this.props.applicant.name} These are all the cards you're eligible for </h1>
        

            <Card cards={this.props.applicant.creditcards} />
        
      </div>
    )
  }
}
