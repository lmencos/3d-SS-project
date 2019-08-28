import React from 'react';
import './styles/BadgesList.css';
import Badge from './Badge';


const BadgesList = (props) => {
    const dataModel = props.data.dataModel
    console.log("dataModel",dataModel)
    return (
      <div>
      { dataModel.map((d)=>{
        console.log("d.BadgeTitle", d.badgeTitle)
        console.log("d.imageA", d.imageA)
        return <Badge key={d.id} {...d}/>
      })}
      </div>
    )
}
export default BadgesList;