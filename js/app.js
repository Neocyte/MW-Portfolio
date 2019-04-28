// Animates project previews on hover
(function hoverProject() {
  const project1 = document.querySelector('.project1');
  const projectPreview1 = document.querySelector('.project-preview1');

  const project2 = document.querySelector('.project2');
  const projectPreview2 = document.querySelector('.project-preview2');

  const project3 = document.querySelector('.project3');
  const projectPreview3 = document.querySelector('.project-preview3');

  project1.addEventListener('mouseover', function() {
    projectPreview1.setAttribute('src', 'images/memory game gif.gif');
  });
  project1.addEventListener('mouseout', function() {
    projectPreview1.setAttribute('src', 'images/memory game static.jpg');
  });

  project2.addEventListener('mouseover', function() {
    projectPreview2.setAttribute('src', 'images/frogger game gif.gif');
  });
  project2.addEventListener('mouseout', function() {
    projectPreview2.setAttribute('src', 'images/frogger game static.jpg');
  });

  project3.addEventListener('mouseover', function() {
    projectPreview3.setAttribute('src', 'images/feedreader gif.gif');
  });
  project3.addEventListener('mouseout', function() {
    projectPreview3.setAttribute('src', 'images/feedreader static.jpg');
  });
})();

// Adds scrolling to the navigation links
(function navScroll() {
  const nav1 = document.querySelector('.nav-1');
  const nav2 = document.querySelector('.nav-2');
  const nav3 = document.querySelector('.nav-3');
  const intro = document.querySelector('.section-text');
  const project = document.querySelector('.section-project');
  const contact = document.querySelector('.section-contact');

  nav1.addEventListener("click", function(e) {
    e.preventDefault();
    intro.scrollIntoView({
      behavior: 'smooth'
    });
  });

  nav2.addEventListener("click", function(e) {
    e.preventDefault();
    project.scrollIntoView({
      behavior: 'smooth'
    });
  });

  nav3.addEventListener("click", function(e) {
    e.preventDefault();
    contact.scrollIntoView({
      behavior: 'smooth'
    });
  });
})();
