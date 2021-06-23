const number = 1324023410321465;

const validate = (number, callback) => {
  if (isNaN(number) | (number == "") | !number) {
    console.log("Angka yang anda masukan salah");
  } else {
    callback(number)
      .then((number) => {
        const result = number
          .map((element) => element.split(""))
          .map((item) => item.sort())
          .join()
          .replace(/,/g, "");
        const res = parseInt(result);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
};

const sorter = (number) => {
  return new Promise((resolve, reject) => {
    if (number) {
      const string = number.toString();
      const arr = string.split("0");
      resolve(arr);
    } else {
      reject("System Error");
    }
  });
};

validate(number,sorter);
// .then(data => {
//     const result = arr.map(element => element.split('')).map(item => item.sort()).join().replace(/,/g,'')
// })
