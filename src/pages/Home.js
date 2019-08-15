import React from 'react';
import './styles/Home.css';
import homeBackground from '../back-images/tablero01.png'

class ContactUs extends React.Component {
  render (){
    return (
      <div className="Home-container">

        <h1>Soy Home</h1>
        <div>
          <img src={homeBackground} width="100%" alt=""/>
        </div>
      </div>
    )
  }
}
export default ContactUs