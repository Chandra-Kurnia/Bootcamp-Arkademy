const getmonth = callback => {
  return Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      let month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Juni",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Desember",
      ];
      if (!error) {
        resolve(month);
      } else {
        // callback(new Error("sorry Data Not Found", []));
        reject("Error")
      }
    },2000);
  })
};


getmonth()
.then()
// getmonth((res, array) => {
//   if (res == null) {
//     array.map(data => console.log(data))
//   }else{
//     console.log(res);
//   }
// });