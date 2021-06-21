const count = 5;

function triangle(count) {
  if (isNaN(count)) {
    console.log("count harus number");
  } else if (count === "") {
    console.log("count tidak boleh kosong");
  }else if(count <=0){
    console.log("count tidak boleh 0");
  }else {
    for (let i = count; i >= 1; i--) { //turun
      string = "";
      for (a = 1; a <= i; a++) { //baris
        string += a + ' ';
      }
      console.log(string);
    }
  }
}

triangle(5);
