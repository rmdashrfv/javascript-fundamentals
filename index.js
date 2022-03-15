console.log('JavaScript is running!')
let score = 100

let input = document.querySelector('#input')
let h1 = document.getElementById('h1')
input.addEventListener('keyup', () => {
  console.log(input.value)
  h1.innerText = `Creating ${input.value}`
})