// Optional 3D Animation Script for Header Hover
const homepage = document.getElementById('homepage');

homepage.addEventListener('mousemove', (e) => {
    let x = e.clientX / window.innerWidth - 0.5;
    let y = e.clientY / window.innerHeight - 0.5;

    homepage.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
});

homepage.addEventListener('mouseleave', () => {
    homepage.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
