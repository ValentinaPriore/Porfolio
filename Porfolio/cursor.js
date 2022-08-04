const cursorRounded = document.querySelector('.roundedcur');
const cursorPointed = document.querySelector('.pointedcur');


const moveCursor = (e)=> {
  const mouseY = e.pageY;
  const mouseX = e.pageX;
   
  cursorRounded.style.transform = `translate3d(`+mouseX+`px, `+mouseY+`px, 0)`;
  
  cursorPointed.style.transform = `translate3d(`+mouseX+`px, `+mouseY+`px, 0)`;
 
}

document.onmousemove=moveCursor
//window.addEventListener('mousemove', moveCursor)