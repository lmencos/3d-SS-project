import React, {Component} from 'react';
import './styles/ContactUs.css';

class ContactUs extends Component {
  state = {
    "firstName": "",
    "lastName": "",
    "email":"",
    "twitter": "",
    "textBox": ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Button submit was clicked')
    console.log(this.state)
  };


  render (){
    return (
      <div>

        <div className="form-group global">
          <div className= "row Header">
            <h6  >would you like to contact us?</h6>
          </div>
          
          <div className="form-group">
            <div className="row " >
          
              <div className="col-6 ContactUs-title" >
          
                <div className="form-group firstName">
                <label htmlFor="">First Name</label>
                <input
                onChange={this.handleChange}  
                className="form-control" 
                type="text" 
                name="firstName" 
                value={this.state.firstName}
                />
                </div>
          
                <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input 
                  onChange={this.handleChange} 
                  className="form-control" 
                  type="text" 
                  name="lastName" 
                  value={this.state.lastName}
                />
                </div>
          
                <div className="form-group">
                  <label htmlFor="">email</label>
                  <input  
                  onChange={this.handleChange} 
                  className="form-control" 
                  type="email" 
                  name="email" 
                  value={this.state.email}
                  />
              </div>
          
              <div className="form-group">
                <label htmlFor="">Twitter</label>
                <input 
                onChange={this.handleChange}  
                className="form-control" 
                type="text" 
                name="twitter" 
                value={this.state.twitter}
                />
              </div>


              <div className="form-group">
                <small><textarea 
                  onChange={this.handleChange} 
                  name="textBox" 
                  className=" TextArea form-control form-control-lg" 
                  placeholder="what would you like to talk about?"
                  value={this.state.textBox}
                  >
                </textarea></small>
                <small className="form-text text-muted">
                  please remember to include a subject.
                </small>
              </div>

          
              <button type="button" 
                // onClick={this.handleClick} 
                className="btn btn-dark" 
                onClick={this.handleSubmit}
                >Submit</button>
          
          
          
          
              </div>
          
              
          
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default ContactUs;