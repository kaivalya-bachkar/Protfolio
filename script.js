// Optional 3D Animation for homepage on mouse movement
const homepage = document.getElementById('homepage');

homepage.addEventListener('mousemove', (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 30; // Adjust for 3D effect
    let y = (e.clientY / window.innerHeight - 0.5) * 30;
    
    homepage.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

homepage.addEventListener('mouseleave', () => {
    homepage.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
