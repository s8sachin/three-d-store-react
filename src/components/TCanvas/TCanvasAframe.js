import React, { Component } from 'react';
// import threeEntryPoint from './ThreeHandlers/threeEntryPoint';
import * as THREE from 'three';
import './TCanvas.scss';
// import * as OBJLoader from 'three-obj-loader';
// import { MTLLoader, OBJLoader } from 'three-obj-mtl-loader';
import MTLLoader from './MTLLoader';
import OBJLoader from './OBJLoader';

MTLLoader(THREE);
OBJLoader(THREE);

class TCanvas extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.THREE = THREE;
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    // ADD SCENE
    this.scene = new THREE.Scene();
    // ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000,
    );
    this.camera.position.z = 4;
    // ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    // ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' });
    this.cube = new THREE.Mesh(geometry, material);

    const mtlLoader = new this.THREE.MTLLoader();

    const objLoader = new this.THREE.OBJLoader();

    // mtlLoader.load('./BisonPlains.mtl', (materials) => {
    //   console.log(materials)
    //   materials.preload();
    //   objLoader.setMaterials(materials);
    objLoader.load('./dog.obj', (object) => {
      this.scene.add(object);
      this.start();
    });
    // });
    // });
    // this.scene.add(this.cube);
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
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
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount; }}
      />
    );
  }
}

export default TCanvas;
