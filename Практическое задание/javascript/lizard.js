window.addEventListener('DOMContentLoaded', function() {
 function createLizard() {
    const lizard = document.createElement('img');
    lizard.src = 'media/lizard.png'; 
    lizard.className = 'lizard';
    lizard.style.left = Math.random() * window.innerWidth + 'px'; 
    document.body.appendChild(lizard);

    let topPosition = -100; 
    const fallSpeed = 10; 
    function fall() {
      if (topPosition > window.innerHeight+600) {
        document.body.removeChild(lizard);
      } else {
        topPosition += fallSpeed;
        lizard.style.top = topPosition + 'px';
        requestAnimationFrame(fall);
      }
    }

    fall();
  }

  setInterval(createLizard, 10);
})