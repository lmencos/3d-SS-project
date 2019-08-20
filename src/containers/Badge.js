import React, { Component } from 'react';
import Chichen from '../back-images/chichen.jpg';
import './styles/Badge.css'

class Badge extends Component {
  render(){
    return(
      <div className="Badge">
        <div className="">

        </div>

        <div className="Badge__header">
          <h3>Chichén Itzá</h3>
        </div> 
       
        <div className="Badge__section-name" >
          <img
            className="Badge__avatar" 
            src={Chichen} 
            width="40%" 
            alt="Real Model"/>

          <p> <strong className="Badge__type"> Real Model photo </strong><br/>
          <small>Artist: Daniel Cabrera</small><br/>
          <h6>Twitter: @DanielCabrera</h6>
          </p>
        </div>
  
  
        <div className="Badge__section-name" >
          <img
            className="Badge__avatar" 
            src={Chichen} 
            width="40%" 
            alt="Real Model"/>

          <p> <strong className="Badge__type"> 3d Model Render </strong><br/>
          <small>Artist: Daniel Cabrera</small><br/>
          <h6>Twitter: @DanielCabrera</h6>
          </p>
        </div>

        <div className="Badge__footer">
          <h6>Real Model vs 3D render</h6>
        </div>

      </div>
    );
  };
};
  export default Badge;