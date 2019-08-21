import React from 'react';
import Badge from '../containers/Badge';
import BadgesList from '../containers/BadgesList';


class Gallery extends React.Component {
  state={
    data:[
      {
        id: '1',
        badgeTitle: "About space",
        badgeTypeA: 'Real model, photo',
        artistA: 'FDCabrera',
        twitterA: 'fdCabrera',
        badgeTypeB: '3D object, render',
        artistB: 'FDCabrera',
        twitterB: 'fdCabrera',
        modelImageA: "../containers/images/siluetajpg.jpg",
      },
      {
        id: '2',
        badgeTitle: "lookat",
        badgeTypeA: 'Real model, photo',
        artistA: 'FDCabrera',
        twitterA: 'fdCabrera',
        badgeTypeB: '3D object, render',
        artistB: 'FDCabrera',
        twitterB: 'fdCabrera',
        modelImageB: "../containers/images/siluetajpg.jpg",
      }
    ]
  };

  render (){
    return (
      <div>
        <BadgesList badges={this.state.data} />

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