// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration
  once: true, // Animate only once
});

// Three.js Globe Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const texture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5);
scene.add(light);

camera.position.z = 10;
function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});