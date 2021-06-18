//create data array
const arr = [1,2,3,5,7,9,10,14,17,19,20,27];
// const tes = [1,4,5]


function validate(nilaiAwal, nilaiAkhir, array, callback){
    if(nilaiAwal === '' | isNaN(nilaiAwal) | nilaiAwal<0 | nilaiAkhir === '' | isNaN(nilaiAkhir) | nilaiAkhir<0 | array.length < 5){
        console.log('Data yang anda masukan salah');
    }else{
        callback(nilaiAwal, nilaiAkhir, array);
    }
}

function seleksi(awal, akhir, array) { 
    if(awal > akhir){
        console.log('Nilai awal harus lebih kecil dari nilai akhir.');
    }else{
        const output = array.filter(a => a>awal && a<akhir);
        if(output.length == 0){
            console.log('Data Array tidak ditemukan');
        }else{
            console.log(output);
        }
    }
 }

validate(5, 14, arr, seleksi)