import { GLTFExporter } from '@/../node_modules/three/examples/jsm/exporters/GLTFExporter.js';

export default function exportGLTF( input ) {
  const gltfExporter = new GLTFExporter();
  gltfExporter.parse(
    input,
    function ( result ) {

      if ( result instanceof ArrayBuffer ) {

        saveArrayBuffer( result, 'scene.glb' );

      } else {

        const output = JSON.stringify( result, null, 2 );
        console.log( output );
        saveString( output, 'scene.gltf' );

      }

    },
    function ( error ) {
      console.log( 'An error happened during parsing', error );
    },
  );
}


function saveString( text, filename ) {

  save( new Blob( [ text ], { type: 'text/plain' } ), filename );

}

function saveArrayBuffer( buffer, filename ) {

  save( new Blob( [ buffer ], { type: 'application/octet-stream' } ), filename );

}

const link = document.createElement( 'a' );
link.style.display = 'none';
document.body.appendChild( link ); // Firefox workaround, see #6594


function save( blob, filename ) {

  link.href = URL.createObjectURL( blob );
  link.download = filename;
  link.click();
}