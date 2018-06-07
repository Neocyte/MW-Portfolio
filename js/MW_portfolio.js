(function hoverProject() {
  const project1 = document.querySelector('.project1');
  const projectPreview1 = document.querySelector('.project-preview1');

  const project2 = document.querySelector('.project2');
  const projectPreview2 = document.querySelector('.project-preview2');

  const project3 = document.querySelector('.project3');
  const projectPreview3 = document.querySelector('.project-preview2');

  project1.addEventListener('mouseover', function() {
    projectPreview1.setAttribute('src', 'images/memory game gif.gif');
  });

  project2.addEventListener('mouseover', function() {
    projectPreview2.setAttribute('src', 'images/frogger game gif.gif');
  });

  project3.addEventListener('mouseover', function() {
    projectPreview3.setAttribute('src', 'images/feedreader gif.gif');
  });
})();
