import React, { Component } from 'react'
import axios from 'axios';
import Cards from '../components/cards'
export default class form extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            name: '',
            address: '',
            postcode: '',
            annualincome: '',
            employmentstatus: '',
            submitted: false,
            creditcards: [],
        }
    }

    // recreating connecting to a database to get the data....
    componentDidMount() {
        axios.get(`http://localhost:3000/creditcards.json`)
            .then(res => {
                const data = res.data;
                // setting the creditcard array in the json to the state.
                this.setState({creditcards: data });
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       console.log(this.state);

        this.setState({
            submitted: !this.state.submitted
        });
      }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
      }
    
  render() {
    return (
        <div className="container">
       {!this.state.submitted ? (
          <form onSubmit={this.handleSubmit}>
            <h1>Fill in the form below to get your credit card choices</h1>
            <div className="form-group">
                <label htmlFor="city">Title</label>
                <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Mr, Mrs, Miss, Ms, Dr"
                value={this.state.title}
                onChange={this.handleInputChange}/>
            </div>

          <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="John Doe"
                value={this.state.name}
                onChange={this.handleInputChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="1234 Main St"
                value={this.state.address}
                onChange={this.handleInputChange}/>
            </div>
            
            <div className="form-group">
                <label htmlFor="postcode">Postcode</label>
                <input
                type="text"
                className="form-control"
                id="postcode"
                name="postcode"
                value={this.state.postcode}
                onChange={this.handleInputChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="annualincome">Annual Income can contain only numbers</label>
                <input
                type="tel"
                className="form-control"
                id="annualincome"
                name="annualincome" 
                placeholder="26000"
                value={this.state.annualincome}
                onChange={this.handleInputChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="employmentstatus">What is your employment status?</label>
                <input
                type="text"
                className="form-control"
                id="employmentstatus"
                name="employmentstatus"
                placeholder="full time"
                value={this.state.employmentstatus}
                onChange={this.handleInputChange}/>
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
       ) : <Cards applicant={this.state}/> }
        </div>
        
      
    )
  }
}
