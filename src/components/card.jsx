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
        <div className="card" style={cardwidth}>
          {/* <img src="..." className="card-img-top"alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">{this.props.cards[0].cardName}</h5>
            <p className="card-text">£{this.props.cards[0].creditAvailable}</p>
            <p className="card-text">{this.props.cards[0].Apr}</p>
            <p className="card-text">{this.props.cards[0].BalanceTransferOfferDuration}</p>
            <p className="card-text">{this.props.cards[0].PurchaseOfferDuration}</p>
            <button className="btn btn-primary" onClick={(e) => this.chooseCard(parseInt(this.props.cards[0].creditAvailable))}>Choose</button>
            <button className="btn btn-danger" onClick={(e) => this.removeCard(parseInt(this.props.cards[0].creditAvailable))}> Remove</button>
          </div>
        </div>)

    const studentcard = (
        <div className="card" style={cardwidth}>
          {/* <img src="..." className="card-img-top"alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">{this.props.cards[1].cardName}</h5>
            <p className="card-text">£{this.props.cards[1].creditAvailable}</p>
            <p className="card-text">{this.props.cards[1].Apr}</p>
            <p className="card-text">{this.props.cards[1].BalanceTransferOfferDuration}</p>
            <p className="card-text">{this.props.cards[1].PurchaseOfferDuration}</p>
            <button className="btn btn-primary" onClick={(e) => this.chooseCard(parseInt(this.props.cards[1].creditAvailable))}>Choose</button>
            <button className="btn btn-danger" onClick={(e) => this.removeCard(parseInt(this.props.cards[1].creditAvailable))}> Remove</button>
          </div>
        </div>)

    const liquidcard = (
      <div className="card" style={cardwidth}>
    {/* <img src="..." className="card-img-top"alt="..."/> */}
    <div className="card-body">
      <h5 className="card-title">{this.props.cards[2].cardName}</h5>
      <p className="card-text">£{this.props.cards[2].creditAvailable}</p>
      <p className="card-text">{this.props.cards[2].Apr}</p>
      <p className="card-text">{this.props.cards[2].BalanceTransferOfferDuration}</p>
      <p className="card-text">{this.props.cards[2].PurchaseOfferDuration}</p>
      <button className="btn btn-primary" onClick={(e) => this.chooseCard(parseInt(this.props.cards[2].creditAvailable))}>Choose</button>
      <button className="btn btn-danger" onClick={(e) => this.removeCard(parseInt(this.props.cards[2].creditAvailable))}> Remove</button>
    </div>
  </div>)


    return (
      <div>
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
          (<div className="row"> {liquidcard} <br/> {anytimecard} </div>)
          : (<div className="row"> {anytimecard} </div>) : null
      }
        {/* { parseInt(annualincome) > 16000 ? (<div className="row">{liquidcard} <br/> {anytimecard} </div>) : anytimecard } */}
        <p>Your Total credit is {this.state.totalCredit}</p>
      </div>
    )
  }
}
