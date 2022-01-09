import { GLTFLoader } from '@/../node_modules/three/examples/jsm/loaders/GLTFLoader.js';

export function loadModel(manager, url) {
  return new Promise(resolve => {
    console.log("here")
    new GLTFLoader(manager).load(url, resolve);
  });
}