const container = document.querySelector('.container')

function displayMain() {
  const main = document.createElement('main')
  main.setAttribute('class', 'main')
  const todo = document.createElement('div')
  todo.setAttribute('class', 'todo')
  main.appendChild(todo)
  container.appendChild(main)
}

export { displayMain }