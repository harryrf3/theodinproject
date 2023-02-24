const clear = document.querySelector('.clear');
const grid = document.querySelector('.sketch');
const color = document.querySelector('.color-picker')

let size = 32;


grid.style.setProperty("--n", size);


for (let i = 0; i < size * size; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.addEventListener("mouseover", (e) => {
    e.target.setAttribute("style", `background-color:black;`);
  });
  grid.appendChild(div);
}



const clearGrid = () => {
  const gridArray = Array.from(grid.childNodes)
  gridArray.forEach((e) => {
    e.style.cssText = "background-color: white; transition: .2s"
  })
}

clear.addEventListener('click', clearGrid);