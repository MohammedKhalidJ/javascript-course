let myFetch = new Promise((resolve, reject) => {
    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function () {
        if (xhttp.status == 200) {
            resolve(this.responseText)
        } else {
            reject(new Error(this.statusText))
        }
    }

    // Send a request
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xhttp.send();
}).finally(()=>console.log("Promise is ready"))

const result = (result) => console.log(result);
const error = (error) => console.log(error);

myFetch.then((succMessage) => result(succMessage),
    (errMessage) => error(errMessage))