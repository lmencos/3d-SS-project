import React from 'react';
import Chichen from '../back-images/chichen.jpg';
import './styles/Badge.css';
import mascara from '../back-images/mask-05.png';
import mascara1 from '../back-images/mask-06.png';
import enviroment from '../back-images/enviroment.png';


const Badge =(props) => {
    return(        
      <div className="Badge">

          <div className="Badge__header">
          {console.log("badgeProps",props.badgeTitle)}
            <h3>{props.badgeTitle}</h3>
          </div> 
        <div className=" Badge__section-content1">
          
            <div className="Badge-image">
              <label className="Badge__type"> {props.badgeTypeA}</label> 
              <div>
                <img
                  className="Badge__avatar" 
                  src={mascara} 
                  width="50%" 
                  alt="Real Model"/>
              </div>
            
              <div className="Artist"> 
                Artist: {props.artistA}<br/>
                <h6>Twitter: @{props.twitterA}</h6>
              </div>
            </div>
        </div>
          
        <div className=" Badge__section-content1">
          
          <div className="Badge-image">
            <label className="Badge__type"> {props.badgeTypeB}</label> 
            <div>
              <img
                className="Badge__avatar" 
                src={mascara1} 
                width="50%" 
                alt="Real Model"/>
            </div>
          
            <div className="Artist"> 
              Artist: {props.artistB}<br/>
              <h6>Twitter: @{props.twitterB}</h6>
            </div>
          </div>
      </div>

       
        <div className="Badge__footer">
          <h6>Real Model vs 3D render</h6>
        </div>

      </div>
    );
};
  export default Badge;