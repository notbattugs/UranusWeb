import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';

const App = ({ width, height }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let renderer: THREE.WebGLRenderer;
  let mesh: THREE.Mesh;

  const init = () => {
    renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });

    camera = new THREE.PerspectiveCamera(70, 1, 1, 100);
    camera.position.z = 20;

    scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(10, 100, 100);
    const material = new THREE.MeshPhongMaterial();

    material.map = new THREE.TextureLoader().load(
      //earth
      'http://s3-us-west-2.amazonaws.com/s.cdpn.io/1206469/earthmap1k.jpg'

      //uranus
      // 'https://i.ibb.co/rwgG4Rd/Screenshot-2023-08-23-at-2-01-01-PM.png'
      // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaxc1uL9Ui8KRGbGU2kB6L5bIulTZtyF3qA0xqxX9ji6uebvyAoHMmEG1_rF2syTWXHk&usqp=CAU'
    );

    mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x += 0.5;
    scene.add(mesh);

    const light1 = new THREE.AmbientLight(0xffffff);
    light1.position.set(100, 50, 100);
    scene.add(light1);
  };

  const resize = () => {
    const width = renderer.domElement.clientWidth;
    const height = renderer.domElement.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const animate = () => {
    resize();
    mesh.rotation.y -= 0.005;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    init();
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: width,
        height: height,
        zIndex: 0,
      }}
    />
  );
};

export default App;
