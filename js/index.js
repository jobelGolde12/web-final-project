document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.video-list');
    list.addEventListener('click', () => {
        window.location.href = '../pages/videos/videos.html';

    })
})
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.bi-house');
  list.addEventListener('click', () => {
      window.location.href = '../../index.html';

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

  function switchToDarkTheme() {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
    let elements = document.querySelectorAll('*');
    elements.forEach((element) => {
        element.style.color = '#fff';
    });
}

function switchToLightTheme() {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
    let elements = document.querySelectorAll('*');
    elements.forEach((element) => {
        element.style.color = '#333';
    });
}