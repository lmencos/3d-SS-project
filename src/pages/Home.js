import React from 'react';
import './styles/Home.css';
import spaider1 from '../back-images/telaraña01.jpg';
import black from '../back-images/blackAdnWhite.jpg';
import cubo from '../back-images/cubo01.jpg';



class ContactUs extends React.Component {
  render (){
    return (
      <div className="Big-container">
            <h4 className="Home-title Home-main">Can you see this 3D image?</h4>
        <div className="Home-intro">
          <div className="row Stereogram">
            <img  
              className="" 
              src={spaider1} alt="Home Background" 
              width="7%"/>
          </div>
          <div className="container Stereogram">
            <img  
              className="" 
              src={black} alt="Home Background" 
              width="10%"/>
          </div>
          <div className="container-text">
            <img  
              className="Home-image02" 
              src={cubo} alt="Home Background" 
              width="5%"/>
          </div>
        </div>
            <h6 className="Home-lookText">This is a 3d wall, 
            just look at it in a diferent way</h6>
        <div>
          <article>
            <section>
              <main className="Home-main">
                <span className="font-weight-light" >Interpreting reality is much more complex than 
                seeing a stereogram.</span> <span className="font-weight-bold" >Scannin, vectorizing, rotopolizing, 
                texturizing, animating</span>, etc., 
                to achieve a scene is our passion.
              </main>
              <main className="Home-main" >
                <span className="font-weight-light" >Trying to replicate reality by building a scene 
                is our art.</span>
                <span className="font-weight-bold"> From a model that fits in the palm of your hand,
                even a historical monument</span> can be scanned by 
                our team of experts.
              </main> 
            </section>
          </article>
        <div>

        </div>

        </div>
      </div>
    )
  }
}
export default ContactUs  