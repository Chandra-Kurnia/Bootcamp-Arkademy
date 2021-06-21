const getmonth = (callback) => {
  setTimeout(() => {
    let error = true;
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
      callback(null, month);
    } else {
      callback(new Error("sorry Data Not Found", []));
    }
  },2000);
};

getmonth((status, array) => {
  if (status == null) {
    array.map((data) => console.log(data));
  }else{
    console.log(status);
  }
});
