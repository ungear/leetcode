console.log(1);

// creates a task
setTimeout(() => {console.log(4)})

console.log(3)

// creates a microtask
new Promise((res, rej) => {
  res('value')
}).then(() => {
  console.log(2)
})