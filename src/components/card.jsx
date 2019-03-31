import React, { Component } from 'react'

export default class card extends Component {

  state = {
    totalCredit: 0,
    isHiddenCard1: true,
    isHiddenCard2: true,
    isHiddenCard3: true,
    disabledButton1: false,
  }

  chooseCard = (creditAvailable) => {
    const total = creditAvailable + this.state.totalCredit;
    console.log(total);
    this.setState({totalCredit: total});
  }

  removeCard = (creditAvailable) => {
    const total = this.state.totalCredit - creditAvailable;
    console.log(total);
    this.setState({totalCredit: total});
  }

  toggleHidden1 = () => {
      this.setState({
        isHiddenCard1: !this.state.isHiddenCard1
      })
  }

  toggleHidden2 = () => {
    this.setState({
      isHiddenCard2: !this.state.isHiddenCard2
    })
  }

  toggleHidden3 = () => {
    this.setState({
      isHiddenCard3: !this.state.isHiddenCard3
    })
  }

  render() {
    const {annualincome, employmentstatus } = this.props.applicant;
    
    const cardwidth = {
      width: '18rem',
    };

    const anytimecard = (
        <div className="card text-white bg-secondary mb-3" style={cardwidth}>
          <div onClick={this.toggleHidden1} className="card-header"><strong>{this.props.cards[0].cardName}</strong> <i className="fas fa-chevron-down"></i></div>
          
          {!this.state.isHiddenCard1 && <div className="card-body">
            <img className="card-img-top" src="./img/card.png" alt="card"/>
            
            <p className="card-text"><strong>ARP:</strong> {this.props.cards[0].Apr}</p>
            <p className="card-text"><strong>Balance Transfer Offer Duration:</strong> {this.props.cards[0].BalanceTransferOfferDuration}</p>
            <p className="card-text"><strong>Purchase Offer Duration:</strong> {this.props.cards[0].PurchaseOfferDuration}</p>
            <p className="card-text"><strong>Credit Available:</strong> £{this.props.cards[0].creditAvailable}</p>

            <input type="submit" value="Choose" disabled={this.state.disabledButton1} className="btn btn-success" onClick={(e) => this.chooseCard(parseInt(this.props.cards[0].creditAvailable))}/>
            
            <input type="submit" value="Remove" className="btn btn-danger" onClick={(e) => this.removeCard(parseInt(this.props.cards[0].creditAvailable))}/>
          </div>}
        </div>)

    const studentcard = (
        <div className="card text-white bg-info mb-3" style={cardwidth}>
          <div onClick={this.toggleHidden2}  className="card-header"><strong>{this.props.cards[1].cardName}</strong> <i className="fas fa-chevron-down"></i></div>
          
          {!this.state.isHiddenCard2 &&<div className="card-body">
            <img className="card-img-top" src="./img/card.png" alt="card"/>
            
            <p className="card-text"><strong>APR: </strong> {this.props.cards[1].Apr}</p>
            <p className="card-text"><strong>Balance Transfer Offer Duration:</strong> {this.props.cards[1].BalanceTransferOfferDuration}</p>
            <p className="card-text"><strong>Purchase Offer Duration:</strong> {this.props.cards[1].PurchaseOfferDuration}</p>
            <p className="card-text"><strong>Credit Available: </strong> £{this.props.cards[1].creditAvailable}</p>

            <button className="btn btn-success" disabled={this.state.disabledButton2} onClick={(e) => this.chooseCard(parseInt(this.props.cards[1].creditAvailable))}>Choose</button>

            <button className="btn btn-danger" onClick={(e) => this.removeCard(parseInt(this.props.cards[1].creditAvailable))}> Remove</button>
          </div>}
        </div>)

    const liquidcard = (
      <div className="card bg-warning mb-3" style={cardwidth}>
        <div onClick={this.toggleHidden3}  className="card-header"><strong>{this.props.cards[2].cardName}</strong> <i className="fas fa-chevron-down"></i></div>
    
        {!this.state.isHiddenCard3 && <div className="card-body">
          <img className="card-img-top" src="./img/card.png" alt="card"/>
        
        <p className="card-text"><strong>APR:</strong> {this.props.cards[2].Apr}</p>
        <p className="card-text"><strong>Balance Transfer Offer Duration:</strong>  {this.props.cards[2].BalanceTransferOfferDuration}</p>
        <p className="card-text"><strong>Purchase Offer Duration:</strong>  {this.props.cards[2].PurchaseOfferDuration}</p>
        <p className="card-text"><strong>Credit Available:</strong> £{this.props.cards[2].creditAvailable}</p>

        <button className="btn btn-success" onClick={(e) => this.chooseCard(parseInt(this.props.cards[2].creditAvailable))}>Choose</button>
        <button className="btn btn-danger" onClick={(e) => this.removeCard(parseInt(this.props.cards[2].creditAvailable))}> Remove</button>
      </div>}
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
