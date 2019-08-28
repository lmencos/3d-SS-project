import React from 'react';
import './styles/Badge.css';
import imageUrlA from '../back-images/mask-05.png';
import imageUrlB from '../back-images/mask-06.png';


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
                  src={imageUrlA} 
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
                src={imageUrlB} 
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