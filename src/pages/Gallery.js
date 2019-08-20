import React from 'react';
import Badge from '../containers/Badge';

class Gallery extends React.Component {
  render (){
    return (
      <div>
        <Badge 
          badgeType="Real Model photo" 
          artist="Daniel Cabrera G."
          twitter="DanielCabrera"
          />
      </div>
    )
  }
}
export default Gallery;