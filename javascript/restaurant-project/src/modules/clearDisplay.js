const container = document.querySelector('.container');


function clearDisplay() {
  const content = document.querySelector('.content');
  container.removeChild(content);
}

export { clearDisplay };