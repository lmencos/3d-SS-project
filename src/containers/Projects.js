import React, { Component } from "react";
import THREE from './Three';
import ft from './images/arid2_ft.jpg'
import bk from './images/arid2_bk.jpg'
import up from './images/arid2_up.jpg'
import dn from './images/arid2_dn.jpg'
import rt from './images/arid2_rt.jpg'
import lf from './images/arid2_lf.jpg'
import Navbar from "./Navbar";
// import * as THREE from "three"
// const OrbitControls = require("three-orbit-controls")(THREE);

class Sky extends Component {

  componentDidMount() {

    // === THREE.JS CODE START ===
    let scene, camera, renderer;
    const init = () => {
      scene = new THREE.Scene();
      //scene.background = new THREE.Color(0xffffff);

      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        45,
        30000
      );
      camera.position.set(-900, -200, -900);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      let controls = new THREE.OrbitControls(camera);
      controls.addEventListener('change', renderer);
      controls.minDistance = 500;
      controls.maxDistance = 1500;


      window.addEventListener('resize', () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        renderer.setSize( width, height );
        camera.aspect = width / height;
        camera.updateProjectionMatrix( );
      } )


      let materialArray = [];

      let texture_ft = new THREE.TextureLoader().load(ft);
      let texture_bk = new THREE.TextureLoader().load(bk);
      let texture_up = new THREE.TextureLoader().load(up);
      let texture_dn = new THREE.TextureLoader().load(dn);
      let texture_rt = new THREE.TextureLoader().load(rt);
      let texture_lf = new THREE.TextureLoader().load(lf);

      // let texture_ft = new THREE.TextureLoader().load('./images/barren_ft.jpg');
      // let texture_bk = new THREE.TextureLoader().load('./images/barren_bk.jpg');
      // let texture_up = new THREE.TextureLoader().load('./images/barren_up.jpg');
      // let texture_dn = new THREE.TextureLoader().load('./images/barren_dn.jpg');
      // let texture_rt = new THREE.TextureLoader().load('./images/barren_rt.jpg');
      // let texture_lf = new THREE.TextureLoader().load('./images/barren_lf.jpg');

      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
      materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

      for (let i = 0; i < 6; i++)
        materialArray[i].side = THREE.BackSide;

      let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
      let skybox = new THREE.Mesh(skyboxGeo, materialArray);
      scene.add(skybox);

      animate();
    }

    let animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    init();
    // === THREE.JS EXAMPLE CODE END ===
    
  };

  render() {
      return (
        <div>
          <Navbar />
          <div ref={ref => (this.mount = ref)} />
        </div>
      )
    }
  }

export default Sky;