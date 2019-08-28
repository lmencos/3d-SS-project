import React from 'react';
import BadgesList from '../components/BadgesList';
import data from '../api.json'


const Gallery = () => {
    return (
      <div>
        <BadgesList data={data}  />
      </div>
    )
  }
export default Gallery;