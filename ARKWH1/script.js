//data
const harga = 75000;
const voucher = "ARKAFOOD5";
const jarak = 5;
const pajak = true;

function arkaFood(harga, voucher, jarak, pajak, calculate) { //validate
  if (
    (harga == "") |
    isNaN(harga) |
    (harga < 0) |
    (jarak == "") |
    isNaN(jarak) |
    (jarak < 0)
  ) {
    console.log("Data yang anda inputkan salah");
  } else {
    calculate(harga, voucher, jarak, pajak);
  }
}

function calculate(harga, voucher, jarak, pajak) {
  //Cek diskon
  diskon = 0;
  if (harga >= 50000) {
    //cek apakah harga pembelian > 50000
    if (voucher == "ARKAFOOD5") {
      //cek apakah punya voucher
      diskon = harga * 0.5; //memberikan diskon
      if (diskon > 50000) {
        //cek apakah diskon > 50000
        diskon == 50000;
      }
    }
  } else if (harga >= 25000 && harga < 50000) {
    if (voucher == "DITRAKTIRARKADEMY") {
      diskon = harga * 0.6;
      if (diskon >= 30000) {
        diskon = 30000;
      }
    }
  }

  //cek jarak
  if(jarak > 2){
    ongkir = 5000 + 3000 * (jarak - 2)
  }else{
      ongkir = 5000;
  }
  
  //cek pajak
  if(pajak == true){
    pajak = harga * 0.05;
  }else{
    pajak = 0
  }

  subtotal = harga - diskon + ongkir + pajak;

  bayar = harga - diskon;
  console.log("Harga : Rp. " + harga+',00');
  console.log("Diskon : Rp. " + diskon+',00');
  console.log("Biaya Antar : Rp. " + ongkir+',00');
  console.log("Pajak : Rp. " + pajak+',00');
  console.log("Subtotal : Rp. "+ subtotal+',00');
}

arkaFood(harga, voucher, jarak, pajak, calculate);