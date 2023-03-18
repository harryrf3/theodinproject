const container = document.querySelector('.container')

function displayMain() {
  const main = document.createElement('main')
  main.setAttribute('class', 'main')
  main.innerHTML = 'hello from main'
  container.appendChild(main)
}

export { displayMain }