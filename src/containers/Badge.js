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
       
        <div className=" Badge__section-name" >
          <img
            className="Badge__avatar" 
            src={Chichen} 
            width="40%" 
            alt="Real Model"/>

          <p> <strong className="Badge__type"> {this.props.badgeType} </strong><br/>
          <small>Artist: {this.props.artist} </small><br/>
          <h6>Twitter: @{this.props.twitter}</h6>
          </p>
        </div>
  
  
        <div className=" Badge__section-name" >
          <img
            className="Badge__avatar" 
            src={Chichen} 
            width="40%" 
            alt="Real Model"/>

          <p> <strong className="Badge__type"> {this.props.badgeType} </strong><br/>
          <small>Artist: {this.props.artist}</small><br/>
          <h6>Twitter: @{this.props.twitter}</h6>
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