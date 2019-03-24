import React, { Component } from 'react'

export default class card extends Component {

  state = {
    totalCredit: 0,
  }

  chooseCard = (creditAvailable) => {
    // console.log(creditAvailable)
    const total = creditAvailable + this.state.totalCredit;
    console.log(total);
    this.setState({totalCredit: total});
  }
  removeCard = (creditAvailable) => {
    const total = creditAvailable - this.state.totalCredit;
    console.log(total);
    this.setState({totalCredit: total});
  }

  render() {
    const { cardName, Apr, BalanceTransferOfferDuration, PurchaseOfferDurationm, creditAvailable } = this.props.cards[0];
    const {annualincome } = this.props.applicant;
    
    
    const cardwidth = {
      width: '18rem',
    };
    return (
      <div>
        { parseInt(annualincome) > 16000 ? <p>Over <strong>16000</strong>, you are allowed Liquid card and anywhere card</p> : <p>under 16000 - you can have anywhere card</p> }
        <p>Your Total credit is {this.state.totalCredit}</p>
        <div className="card" style={cardwidth}>
            {/* <img src="..." className="card-img-top"alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">{cardName}</h5>
              <p className="card-text">£{creditAvailable}</p>
              <p className="card-text">{Apr}</p>
              <p className="card-text">{BalanceTransferOfferDuration}</p>
              <p className="card-text">{PurchaseOfferDurationm}</p>
              <button className="btn btn-primary" onClick={(e) => this.chooseCard(parseInt(creditAvailable))}>Choose</button>
              <button className="btn btn-danger" onClick={(e) => this.removeCard(parseInt(creditAvailable))}> Remove</button>
            </div>
          </div>

      </div>
    )
  }
}
