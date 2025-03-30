console.log('1)
console.log('sad')
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // Parse the response as JSON
  .then(data => console.log(data))   // Handle the data
  .catch(error => console.error('Error:', error)); // Handle errors
dfdasfa
