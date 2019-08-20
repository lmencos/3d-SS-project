import React from 'react';
import './styles/ContactUs.css';
import ContactUsCol from '../../src/back-images/blackAdnWhite.jpg'

class ContactUs extends React.Component {
  render (){
    return (
      <div>

        <form>
          <div className= "Header">
            <h3  >would you like to contact us?</h3>
          </div>
          
          <div className="container">
            <div className="row " >
              <div className="col-2 mt-4 mr-5 img-izq" >
              {/* <h3>Soy columna izq</h3> */}
                <img src={ContactUsCol} height="7%" alt="contactus"/>
              </div>
          
              <div className="col-4 mt-4 ContactUs-title" >
          
                <div className="form-group">
                <label htmlFor="">First Name</label>
                <input  
                className="form-control" 
                type="text" 
                name="firstName" 
                // onChange={this.props.onChange}
                // value={this.props.formValues.firstName}
                />
                </div>
          
                <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input  
                  className="form-control" 
                  type="text" 
                  name="lastName" 
                  // onChange={this.props.onChange}
                  // value={this.props.formValues.lastName}
                />
                </div>
          
          
          
                <div className="form-group">
                  <label htmlFor="">email</label>
                  <input  
                  className="form-control" 
                  type="email" 
                  name="email" 
                  // onChange={this.props.onChange}
                  // value={this.props.formValues.email}
                  />
              </div>
          
              <div className="form-group">
                <label htmlFor="">Twitter</label>
                <input  
                className="form-control" 
                type="text" 
                name="twitter" 
                // onChange={this.props.onChange}
                // value={this.props.formValues.twitter}
                />
              </div>


              <div className="form-group">
                <small><textarea 
                  name="text" 
                  classNAme="form-control form-control-lg" 
                  placeholder="what would you like to talk about?">
                </textarea></small>
                <small className="form-text text-muted">
                  please remember to include a subject.
                </small>
              </div>

          
              <button type="button" 
                // onClick={this.handleClick} 
                className="btn btn-dark" >Submit</button>
          
          
          
          
              </div>
          
              
          
            </div>
          </div>
        </form>

      </div>
    )
  }
}
export default ContactUs;