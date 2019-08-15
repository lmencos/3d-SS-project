import React, { Component } from "react";
import THREE from './Three';
import ModelMask from './model/scene.gltf';


class Mask extends Component {

  componentDidMount() {
    
    console.log('3. componentDidMount()')
    // === THREE.JS CODE START ===
    let scene, camera, renderer;
    const init = () => {
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);

      camera = new THREE.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        .3,
        500
      );

      camera.rotation.y = 45 / 180 * Math.PI;
      camera.position.x = 0;
      camera.position.y = 1;
      camera.position.z = 2;

      let controls = new THREE.OrbitControls(camera);
      controls.addEventListener('change', renderer);

      let hlight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(hlight);

      let directionalLight = new THREE.DirectionalLight(0xffa647, 0.5);
      directionalLight.position.set(0, 1, 0);
      directionalLight.castShadow = true;
      scene.add(directionalLight);

      let light = new THREE.PointLight(0xfccf9f, 0.9);
      light.position.set(0, 30, 50);
      scene.add(light);

      let light2 = new THREE.PointLight(0xffa647, 1.2);
      light2.position.set(50, 10, 0);
      scene.add(light2);

      let light3 = new THREE.PointLight(0xfffdfa, 1.8);
      light3.position.set(0, 100, -500);
      scene.add(light3);

      let light4 = new THREE.PointLight(0xfffdfa, 1.8);
      light4.position.set(-500, 300, 500);
      scene.add(light4);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth * 1, window.innerHeight * 1);
      document.body.appendChild(renderer.domElement);

      window.addEventListener('resize', () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      });


      const loader = new THREE.GLTFLoader();
      const url = ModelMask;
      loader.load(
        url,
        (gltf) => {
          let mask = gltf.scene.children[0];
          mask.scale.set(0.5, 0.5, 0.5);
          scene.add(gltf.scene);
          animate();
          scene.remove(mask);
          mask.dispose();
        },
        (xhr) => {
          console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
        },
        (error) => {
          console.error('An error has happened', error)
        },
        );
      }
      
      let animate = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

    init();

    // === THREE.JS EXAMPLE CODE END ===
  }; //didMount ends

  // stop = () => {
  //   if (!this.frameId) {
  //     console.log("stop() - not running");
  //   };
  //   cancelAnimationFrame(this.frameId)
  //   this.frameId = null;
  // };

  // componentDidUpdate(prevProps, prevState){
  //   console.log('componentDidUpdate')
  //   console.log({
  //     prevPros: prevProps, prepState: prevState
  //   });
  //   console.log({
  //     props: this.props, state: this.state
  //   });
  // };

  // componentWillUnmount() {
  //   console.log('6. componentWillUnmount()')
  //   // window.removeEventListener("resize", this.handleResize);
  //   this.stop();
  //   this.loader = null;
  //   this.camera = null;
  //   this.controls = null;
  //   this.renderer = null;
  //   this.mask = null;
    // this.ref.removeChild(this.renderer.domElement);
  // ;}

  render() {
    console.log('2. render()')
    return (
      <React.Fragment>
        <h2>I am an ancient mexican mask coming from Three js</h2>
        <small>Object: gltf made in Blender 2.8  </small>
        <small>  Author: Daniel Cabrera </small>
        <div ref={ref => (this.mount = ref)} />
      </React.Fragment>
    );
  };
}
export default Mask;