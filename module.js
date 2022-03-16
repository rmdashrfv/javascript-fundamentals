/*
  Functions

  1. Functions allow us to bundle together a lot of functionality
  and then easily call it all at once by name (the function name)

  2. Functions allow to specify exactly WHEN we want to call all of
  this functionality

  3. the different syntaxes change the lexical meaning of the keyword 'this'
*/

const quiz = () => {
  let myName = prompt('Enter your name')
  let month = prompt('What month were you born?')
  let food = prompt('What is your favorite food?')
  console.log('My name is', myName)
  console.log('I was born in', month)
  console.log('My favorite food is', food)
}

const print = () => {
  console.log('I love to print text!')
}

const functionA = (f) => {
  console.log('FUNCTION A HAS BEEN CALLED!')
  f()
}

const functionB = () => {
  console.log('FUNCTION B HAS BEEN CALLED!')
}

const functionC = () => {
  console.log(new Date())
}

setInterval(functionC, 1000)

const greet = (person) => {
  console.log('HELLO', person)
}

const blender = (string) => {
  return string.split('')
}

// This is supposed to split the string
const xx = (yy) => {
  return yy.split('')
}

const square = (num, message) => {
  console.log('Message:', message)
  return num * num
}