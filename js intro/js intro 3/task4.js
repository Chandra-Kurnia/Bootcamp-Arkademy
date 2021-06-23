fetch("https://jsonplaceholder.typicode.com/users")
    // .then((response) => response.json()) //mengambil promise resolve dari fetch
    .then(function (response){
        return response.json()
    })
    .then((data) => data.map((item) => console.log(item.name))) //mengambil promise resolve dari .then(respone)
    .catch(err => console.log(err))


    
//using normal function
//   .then((respone) => {
//       return respone.json()
//   })
//   .then((data) =>{
//       return data.map((item) => {
//           console.log(item.name);
//       })
//   })