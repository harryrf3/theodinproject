const container = document.querySelector('.container')


// gameboard frame
for (let i = 0; i < 9; i++) {
  const div = document.createElement('div')
  container.append(div)
}