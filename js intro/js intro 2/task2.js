//array / data
const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function Validate(keyword, count, callback) {
  if ((keyword === "")| typeof(keyword) !=='string' | isNaN(count) | count<=0 | typeof callback !=="function"){ //validate
    console.log("Data yang anda masukan tidak sesuai");
  } else {
    const arrayLow = name.map(a => a.toLowerCase()); //mengubah setiap elemen array name menjadi huruf kecil
    const keywordLow = keyword.toLowerCase(); //mengubah keyword / parameter menjadi huruf kecil
    callback(arrayLow, keywordLow, count); //kirim parameter dengan menggunakan callback function
  }
}

function search(name, keyword, count) {
  const datas = name.filter(a => a.match(keyword)); //Mengambil data array yang sama/serupa dengan keyword
  const data = datas.map(a => a[0].toUpperCase() + a.slice(1)); //Membuat huruf depan setiap elemen menjadi huruf besar
  let output = [];

  if(datas.length == 0){
    console.log("Data tidak ditemukan");
  }else{
    if (datas.length < count) {
      //Validasi jika count lebih dari data yang ada didalam array
      count = datas.length;
    }
  
    //Membatasi index/nilai array yang akan ditampilkan
    for (i = 0; i < count; i++) {
      output.push(data[i]);
    }
    console.log(output); //Menampilkan data sesuai keyword
  }
}

Validate('an', 4, search); //jalankan function Validate()
