import React, { Component } from 'react'

export default class card extends Component {
  render() {
    const { cardName, Apr, BalanceTransferOfferDuration, PurchaseOfferDurationm, creditAvailable } = this.props.cards[0];

    const cardwidth = {
      width: '18rem',
    };

    return (
      <div>
  
        {console.log(this.props.cards[0])}

        <div className="card" style={cardwidth}>
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">{cardName}</h5>
              <p className="card-text">{creditAvailable}</p>
              <p className="card-text">{Apr}</p>
              <p className="card-text">{BalanceTransferOfferDuration}</p>
              <p className="card-text">{PurchaseOfferDurationm}</p>

              <button className="btn btn-primary">Choose</button>
            </div>
          </div>

      </div>
    )
  }
}
