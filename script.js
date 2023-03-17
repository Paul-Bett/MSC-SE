const menuItems = document.querySelectorAll('.fisheye-menu li');

menuItems.forEach(item => {
  item.addEventListener('mousemove', function(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    const centerX = item.offsetWidth / 2;
    const centerY = item.offsetHeight / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const radius = Math.min(item.offsetWidth, item.offsetHeight) * 2;
    const scale = 1 + (distance / radius) * 0.5;
    item.style.transform = `scale(${scale}) rotate(${angle}rad)`;
  });
  
  item.addEventListener('mouseleave', function() {
    item.style.transform = 'scale(0.5)';
  });
});
