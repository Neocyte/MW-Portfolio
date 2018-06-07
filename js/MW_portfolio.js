(function hoverProject() {
  const project1 = document.querySelector('.project-preview1');
  const project2 = document.querySelector('.project-preview2');
  const project3 = document.querySelector('.project-preview3');

  project1.addEventListener('animationstart', function() {
    project1.setAttribute('src', 'images/memory game gif.gif');
  });

  project2.addEventListener('animationstart', function() {
    project2.setAttribute('src', 'images/frogger game gif.gif');
  });

  project3.addEventListener('animationstart', function() {
    project3.setAttribute('src', 'images/feedreader gif.gif');
  });
})();
