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

export { createTodo }