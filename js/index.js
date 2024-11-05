document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.video-list');
    list .addEventListener('click', () => {
        window.location.href = '../pages/videos/videos.html';

    })
})
window.addEventListener('scroll', () => {
    const logo = document.querySelector('.logo');
    const position = window.scrollY;
  
    if (position > 10) {
      logo.classList.add('animate-logo');
    } else {
      logo.classList.remove('animate-logo');
    }
  });