import React from 'react';
import './styles/SignIn.css'

class SignIn extends React.Component {
  render (){
    return (
      <div className="BigContainer">
        <div className="container">
          <div>
          <div className="form-group Form-signIn">
              <div className="Form-container">
                <div className="col-9">
                  <label className="text-user" htmlFor="">User:</label>
                  <input 
                  className="form-control" 
                  type="text" 
                  name="firstName" 
                  // value=""
                  placeholder="user name"
                  />
                </div>
              </div>

              <div className="Form-container">
                <div className="col-9">
                  <label className="text-user" htmlFor="">Password:</label>
                  <input
                  className="form-control" 
                  type="text" 
                  name="firstName" 
                  // value=""
                  placeholder="password"
                  />
                </div>
              </div>

              <div className="container">
                <button type="button" 
                  // onClick={this.handleClick} 
                  className="btn btn-dark" 
                  // onClick=""
                  >Enter</button>
              </div>
            </div>
          </div>

        </div>
    </div>
    )
  }
}
export default SignIn;