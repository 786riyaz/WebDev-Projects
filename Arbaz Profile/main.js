let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Selection.array.forEach(sec => {
      let top = window.screenY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');    
  
      if(top >= offset && top < offset + height){
        navlink.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        })
      }
    });
  }
  