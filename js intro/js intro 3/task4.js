fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => data.map((item) => console.log(item.name)))

  //using normal function
//   .then((respone) => {
//       return respone.json()
//   })
//   .then((data) =>{
//       return data.map((item) => {
//           console.log(item.name);
//       })
//   })