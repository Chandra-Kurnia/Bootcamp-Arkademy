const number = 1324023410321465;

const validate = (number, callback) => {
  if (isNaN(number) | (number == "") | !number) {
    console.log("Angka yang anda masukan salah");
  } else {
    callback(number)
  }
};

const sorter = (number) => {
    if (number) {
      const string = number.toString();
      const arr = string.split("0");
      const result = arr
          .map((element) => element.split(""))
          .map((item) => item.sort())
          .join('')
          .replace(/,/g, "");
        const res = parseInt(result);
        console.log(res);
        // console.log(result);
    } else {
      console.log("System Error");
    }
};

validate(number,sorter);