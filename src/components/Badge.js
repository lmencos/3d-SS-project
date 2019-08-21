import React from 'react';
import Chichen from '../back-images/chichen.jpg';
import './styles/Badge.css';

const Badge =(props) => {
    return(        
      <div className="Badge">

        <div className="Badge__header">
        {console.log("badgeProps",props.badgeTitle)}
          <h3>{props.badgeTitle}</h3>
        </div> 
       
        <div className="Badge__section-name">
        
          <div className=" Badge__section-name"  >
            <img
              className="Badge__avatar" 
              src={props.imageUrlA} 
              width="40%" 
              alt="Real Model"/>
          
            <span> <strong className="Badge__type"> {props.badgeTypeA} </strong><br/>
            <small>Artist: {props.artistA} </small><br/>
            <h6>Twitter: @{props.twitterA}</h6>
            </span>
          </div>
          
          
          <div className=" Badge__section-name" >
            <img
              className="Badge__avatar" 
              src={Chichen} 
              width="40%" 
              alt="Real Model"/>
        </div>

          <span> <strong className="Badge__type"> {props.badgeTypeB} </strong><br/>
          <small>Artist: {props.artistB}</small><br/>
          <h6>Twitter: @{props.twitterB}</h6>
          </span>
        </div>

        <div className="Badge__footer">
          <h6>Real Model vs 3D render</h6>
        </div>

      </div>
    );
};
  export default Badge;