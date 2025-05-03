import * as THREE from 'three';

//1 . Create a scene 
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000000')

// 2. Add the camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0,0,4);
camera.lookAt(0,0,0);


// const lines = new THREE.Group();
// const material1 = new THREE.LineBasicMaterial({color: 0xffffff});
// const points = [];
// points.push(new THREE.Vector3(100, 100, 100));
// points.push(new THREE.Vector3(1,1,0));
// points.push(new THREE.Vector3(10,0,0));
// const geometry1 = new THREE.BufferGeometry().setFromPoints(points);
// const line = new THREE.Line(geometry1,material1);
// lines.add(line);

// const lineInstance = lines.clone();
// scene.add(lineInstance);

// const lineInstance2 = lines.clone();
// lineInstance2.position.set(-10,0,0);
// scene.add(lineInstance2);


// 3. Create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color : '#468585', emissive: "#458585"});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 4. Add Lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1,1,1);
scene.add(light);

// 5. Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//  Update acc to window size
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})

let colorIndex = 0;
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

//6. Animate the scene
function animate () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    colorIndex = (colorIndex + 0.1) % colors.length;
    const color = colors[Math.floor(colorIndex)];
    cube.material.color.set(color);

    renderer.render(scene,camera);

}
animate();