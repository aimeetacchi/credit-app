import React, { Component } from 'react'

export default class card extends Component {

  state = {
    totalCredit: 0,
  }

  chooseCard = (creditAvailable) => {
    // console.log(creditAvailable)
    //this.setState({buttonPress1: !this.props.applicant.buttonPress1})
    const total = creditAvailable + this.state.totalCredit;
    console.log(total);
    this.setState({totalCredit: total});
  }

  removeCard = (creditAvailable) => {
    const total = this.state.totalCredit - creditAvailable;
    console.log(total);
    this.setState({totalCredit: total});
  }

  render() {
    const {annualincome, employmentstatus } = this.props.applicant;
    
    const cardwidth = {
      width: '18rem',
    };

    const anytimecard = (
        <div className="card text-white bg-secondary mb-3" style={cardwidth}>
          <div className="card-header"><strong>{this.props.cards[0].cardName}</strong></div>
          
          <div className="card-body">
            <p className="card-text"><strong>Credit Available:</strong> £{this.props.cards[0].creditAvailable}</p>
            <p className="card-text"><strong>ARP:</strong> {this.props.cards[0].Apr}</p>
            <p className="card-text"><strong>Balance Transfer Offer Duration:</strong> {this.props.cards[0].BalanceTransferOfferDuration}</p>
            <p className="card-text"><strong>Purchase Offer Duration:</strong> {this.props.cards[0].PurchaseOfferDuration}</p>
            <button className="btn btn-success" onClick={(e) => this.chooseCard(parseInt(this.props.cards[0].creditAvailable))}>Choose</button>
            <button className="btn btn-danger" onClick={(e) => this.removeCard(parseInt(this.props.cards[0].creditAvailable))}> Remove</button>
          </div>
        </div>)

    const studentcard = (
        <div className="card text-white bg-info mb-3" style={cardwidth}>
          <div className="card-header"><strong>{this.props.cards[1].cardName}</strong></div>
          
          <div className="card-body">
            <p className="card-text"><strong>Credit Available: </strong> £{this.props.cards[1].creditAvailable}</p>
            <p className="card-text"><strong>APR: </strong> {this.props.cards[1].Apr}</p>
            <p className="card-text"><strong>Balance Transfer Offer Duration:</strong> {this.props.cards[1].BalanceTransferOfferDuration}</p>
            <p className="card-text"><strong>Purchase Offer Duration:</strong> {this.props.cards[1].PurchaseOfferDuration}</p>
            <button className="btn btn-success" onClick={(e) => this.chooseCard(parseInt(this.props.cards[1].creditAvailable))}>Choose</button>
            <button className="btn btn-danger" onClick={(e) => this.removeCard(parseInt(this.props.cards[1].creditAvailable))}> Remove</button>
          </div>
        </div>)

    const liquidcard = (
      <div className="card bg-warning mb-3" style={cardwidth}>
        <div className="card-header"><strong>{this.props.cards[2].cardName}</strong></div>
    
      <div className="card-body">
        <p className="card-text"><strong>Credit Available:</strong> £{this.props.cards[2].creditAvailable}</p>
        <p className="card-text"><strong>APR:</strong> {this.props.cards[2].Apr}</p>
        <p className="card-text"><strong>Balance Transfer Offer Duration:</strong>  {this.props.cards[2].BalanceTransferOfferDuration}</p>
        <p className="card-text"><strong>Purchase Offer Duration:</strong>  {this.props.cards[2].PurchaseOfferDuration}</p>
        <button className="btn btn-success" onClick={(e) => this.chooseCard(parseInt(this.props.cards[2].creditAvailable))}>Choose</button>
        <button className="btn btn-danger" onClick={(e) => this.removeCard(parseInt(this.props.cards[2].creditAvailable))}> Remove</button>
      </div>
  </div>)


    return (
      <div>
        <p>Your Total credit is <strong>{this.state.totalCredit}</strong></p>
        {
          // if student ====
          employmentstatus.toUpperCase() === 'STUDENT' ? 
          // if salary over 16000 ---
          parseInt(annualincome) > 16000 ?
          (<div className="row"> {studentcard}<br/>{liquidcard} <br/> {anytimecard} </div>) : (<div className="row"> {studentcard} <br/> {anytimecard} </div>) : 
          // if not student
          employmentstatus.toUpperCase() !== 'STUDENT' ?
          // salary over 16000
          parseInt(annualincome) > 16000 ?
          (<div className="row">{liquidcard} <br/> {anytimecard} </div>)
          : (<div className="row">  {anytimecard} </div>) : null
      }
      </div>
    )
  }
}
