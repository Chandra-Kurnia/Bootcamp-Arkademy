//membuat function untuk cek hari kerja
const cekHariKerja = day => {
  return new Promise((resolve, reject) => { //membuat promise baru
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]; //data hari
      let cek = dataDay.find(item => item === day); //mencari data didalam array dataDay yang sama dengan parameter day
      if (cek) {
        resolve(cek); //tindakan yang dilakukan ketika cek bernilai true / cek ada datanya
      } else {
        reject(new Error("Hari ini bukan hari kerja", [])); //tindakan yang dilakukan ketika cek bernilai false / cek tidak ada datanya
      }
    }, 3000);//set batas timeOut, disini diset 3000ms, atau sama dengan 3s
  });
};

const number = arr => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if(!arr | arr == ''){
              reject("Data Array yang anda masukan salah")
          }else{
              genap = arr.filter(element => element%2 == 0)
              resolve(genap)
          }
      }, 2000);
  })
}
angka = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
console.log("Sinkron 1");
//then catch
cekHariKerja("senin")
  .then(res => console.log("Then catch : " + res))
  .catch(err => console.log(err))
  // .then((res) => {
  //   console.log("Then Catch : " + res);
  // })
  // .catch((err) => {
  //   console.log(err.message);
  // });

  console.log("Sinkron 2");
//try catch
//membuat function asinkron
const getDay = async () => {
    try {//menangkap resolve
        const num = await number(angka)
        const day = await cekHariKerja('senin') //tunggu data diambil / di cek dulu, kalau sudah maka bisa lanjut ke code selanjutnya
        console.log("Try Catch : " + day);
        console.log("Try Catch : " + num);
    } catch (err) {//menangkap reject
        console.log(err);
    }
}

getDay(); //jalankan fungsi getDay()
console.log("Sinkron 3");