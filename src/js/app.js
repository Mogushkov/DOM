function Position() {
    return Math.floor(Math.random() * (15 + 1)) + 0;
}

const timerId = setInterval(setActive, 1000);
const parentDiv = document.getElementsByClassName('wrapper')[0];
const img = document.images[0];
img.parentElement.removeChild(img);
  
for (let i = 0; i < 16; i += 1) {
    const div = document.createElement('div');
    parentDiv.appendChild(div);
}
  
function setActive() {
    if (document.images[0]) {
        const activeDiv = document.images[0].parentElement;
        activeDiv.removeChild(img);
    }
  
const childDivs = parentDiv.children;
const index = Position();
childDivs[index].appendChild(img);
}
  
  
  