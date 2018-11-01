import React, { Component } from 'react';
// import threeEntryPoint from './ThreeHandlers/threeEntryPoint';
import * as THREE from 'three';
import './TCanvas.scss';
// import * as OBJLoader from 'three-obj-loader';
import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader';
// import MTLLoader from './MTLLoader';
// import OBJLoader from './OBJLoader';

MTLLoader(THREE);
OBJLoader(THREE);

class TCanvas extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.THREE = THREE;
    this.state = { loading: true, load: '0%' };
  }

  componentDidMount() {
    this.loadCanvas();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  loadCanvas() {
    const { selectedModel } = this.props;
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 10000);
    this.camera.position.set(0, 0, 500);
    this.scene.add(this.camera);

    // Add a light in the scene
    this.directionalLight = new THREE.DirectionalLight(0xffffff);
    // this.directionalLight.position.set(0, 0, 350);
    this.directionalLight.lookAt(new THREE.Vector3(0, 0, 5));
    this.scene.add(this.directionalLight);

    const manager = new THREE.LoadingManager();
    // Loader for Obj from Three.js
    manager.onProgress = function (item, loaded, total) {
      this.setState({ load: (`${loaded / total * 100}%`) });
    }.bind(this);
    this.texture = new THREE.Texture();
    // let loader = new THREE.ImageLoader(manager);
    // loader.load(selectedModel.thumb, (image) => {
    //   this.texture.image = image;
    //   this.texture.needsUpdate = true;
    // });
    const loader = new this.THREE.OBJLoader(manager);
    // const mtlLoader = new this.THREE.MTLLoader(manager);
    // mtlLoader.load(dogmtl, (materials) => {
    // materials.preload();
    // loader.setMaterials(materials);
    // Launch loading of the obj file, addBananaInScene is the callback when it's ready
    const obj = selectedModel.obj.replace(/ /g, '%2B').replace(/\+/g, '%2B');
    loader.load(obj, (object) => {
      this.banana = object;
      // Move the banana in the scene
      this.banana.rotation.x = 0;
      this.banana.position.y = 100;
      this.banana.position.z = 0;
      const box = new THREE.Box3().setFromObject(this.banana);
      this.banana.scale.set(3, 3, 3);
      // Go through all children of the loaded object and search for a Mesh
      object.traverse((child) => {
        // This allow us to check if the children is an instance of the Mesh constructor
        if (child instanceof THREE.Mesh) {
          // child.material.color = new THREE.Color(0X00FF00);
          // Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
          child.geometry.computeVertexNormals();
          // child.material.map = this.texture;
        }
      });
      // Add the 3D object in the scene
      this.scene.add(this.banana);
      this.start();
    });
    // });
  }


  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    // this.cube.rotation.x += 0.01;
    this.banana.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
    this.setState({ loading: false });
  }

  render() {
    const { loading, load } = this.state;
    return (
      <React.Fragment>
        <div className={loading ? 'd-block' : 'd-none'}>
          Loading ...
        </div>
        <div
          style={{ width: '400px', height: '400px' }}
          ref={(mount) => { this.mount = mount; }}
        />
      </React.Fragment>
    );
  }
}

export default TCanvas;
