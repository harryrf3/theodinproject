// console.log('hello')

// const content = document.querySelector('.content');
// content.innerHTML = 'hello'
// document.body.appendChild(content)

function createTodo (title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority
  }
}

const newTodo1 = createTodo('testTitle', 'testDescription', 'testDate', 'testPriority')

console.log(newTodo1)