function ajaxFunc() {
    // let xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if(this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // }

    // xhttp.open("POST", "https://reqres.in/api/users", true);
    // xhttp.setRequestHeader("Content-Type", "application/json");
    // //xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhttp.send({
    //     "name": "morpheus",
    //     "job": "leader"
    // });


    fetch('https://reqres.in/api/users', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
         "name": "morpheus",
         "job": "leader"
    }),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

//     fetch('https://reqres.in/api/users?page=2')
//   .then(response => response.json())
//   .then(data => console.log(data));
}



ajaxFunc();