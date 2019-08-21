import React, { Component } from 'react';
import './styles/BadgesList.css';
import silueta from '../containers/images/siluetajpg.jpg'

class BadgesList extends Component {
  render() {
    return (
      <div>
        {this.props.badges.map((badge) => {
          return (
            <ul className="list-unstyled" key={badge.id}>
              <div className="Badge">
                <div className="Badge__header">
                  <h3>{ badge.badgeTitle }</h3>
                </div>
                <div className="Badge__section-name">
                  <div className=" Badge__section-name"  >
                    <img
                      className="Badge__avatar"
                      src=""
                      width="40%"
                      alt="Real Model" />
                    <span> <strong className="Badge__type"> {badge.badgeTypeA} </strong><br />
                      <small>Artist: {badge.artistA} </small><br />
                      <h6>Twitter: @{badge.twitterA}</h6>
                    </span>
                  </div>
                  <div className=" Badge__section-name" >
                    <img
                      className="Badge__avatar"
                      src={badge.modelImageA}
                      width=""
                      alt="Real Model" />
                  </div>
                  <span> <strong className="Badge__type"> {badge.badgeTypeB} </strong><br />
                    <small>Artist: {badge.artistB}</small><br />
                    <h6>Twitter: @{badge.twitterB}</h6>
                  </span>
                </div>
                <div className="Badge__footer">
                  <h6>Real Model vs 3D render</h6>
                </div>
              </div>
            </ul>
          );
        })}
      </div>
    );
  };
};
export default BadgesList;