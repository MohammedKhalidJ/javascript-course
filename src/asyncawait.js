async function myPromise() {
    const timer = new Promise((resolve, reject) => {
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
    })

    document.getElementById("displayID").innerHTML = await timer;
}


myPromise();