const http = new easyHttp;

// get request
http.get('https://jsonplaceholder.typicode.com/posts', 
    function (err, response) {
        if(err) {
            console.log(err);
        }else{
            console.log(response);
        }
    
});

// //get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', 
//     function (err, response) {
//         if(err) {
//             console.log(err);
//         }else{
//             console.log(response);
//         }
    
// });

// Create data
const data = {

    "title": "Custom: excepturi optio reprehenderit",
    "body": "Custom: quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

//post request
// http.post('https://jsonplaceholder.typicode.com/posts', data, 
//     function (err, response) {
//         if(err) {
//             console.log(err);
//         }else{
//             console.log(response);
//         }
    
// });

// put request
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, 
//     function (err, response) {
//         if(err) {
//             console.log(err);
//         }else{
//             console.log(response);
//         }
    
// });

// delete request
// http.delete('https://jsonplaceholder.typicode.com/posts/1', 
//     function (err, response) {
//         if(err) {
//             console.log(err);
//         }else{
//             console.log(response);
//         }
    
// });