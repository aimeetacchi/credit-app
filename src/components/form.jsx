import React, { Component } from 'react'

export default class form extends Component {
    constructor(props){
        super(props)
        this.state = {
            applicant: []
        }
    }

    handleChange = (e) => {
    
        const person = {
            email: e.target.email.value,
            address: e.target.address.value,
            city: e.target.city.value,
            postcode: e.target.postcode.value
        }
       this.setState({applicant: person});
       console.log(this.state);
      }

    handleSubmit = (e) => {
        console.log(e.target.email.value);
        console.log(e.target.address.value);
        console.log(e.target.city.value);
        console.log(e.target.postcode.value);
        e.preventDefault();
      }
    

  render() {
    return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>

            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" className="form-control" id="city" placeholder="London"/>
            </div>
            <div className="form-group">
                <label htmlFor="postcode">Postcode</label>
                <input type="text" className="form-control" id="postcode"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
        </div>
        
      
    )
  }
}
