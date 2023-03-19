const container = document.querySelector('.container');

function displayMain() {
  const main = document.createElement('main');
  main.setAttribute('class', 'main');
  const todo = document.createElement('div');
  todo.setAttribute('class', 'todo');
  todo.innerHTML = `
  <form>
    <label for="title">Title:</label>
    <input type="text" id="title"><br/>
    <label for="description">Description</label>
    <input type="text" id="description"><br/>
    <label for="dueDate">Due Date:</label>
    <input type="date" id="dueDate"><br/>
    <label for="priority">Priority:</label>
    <select id="priority" name="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select><br/>
    <button>Submit</button>
  </form>
  `;
  main.appendChild(todo);
  return container.appendChild(main);
}

export { displayMain };