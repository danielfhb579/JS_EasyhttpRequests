/**
 * Easy http (with async await)
 * 
 * 
 */

const http = new EasyHttp;

//user data
const data = {
    name: 'Daniel H',
    username: 'dfh',
    email: 'dfh@g.com'
}

//get request
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err =>  console.log(err));

//post request
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err =>  console.log(err));

// put request (update)
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err =>  console.log(err));

// delete request 
http.delete('https://jsonplaceholder.typicode.com/users/2')
   .then(data => console.log(data))
   .catch(err =>  console.log(err));