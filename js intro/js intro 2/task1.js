//Membuat 10 method built in javascript

//create array
const angka = [10,9,6,7,3,4,5,1,2,8];
const huruf = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const hewan = ['sapi', 'kambing', 'kucing', 'ayam'];
const name = 'CANDRA kurniawan';
const kata = 'javascript'
const kalimat = 'javascript diciptakan oleh Brendan Eich'


//1. sort
console.log('Built in function SORT :');
console.log(angka.sort(function(a, b){ return a - b})); //mengurutkan array angka
console.log(huruf.sort());



//2. map
console.log('\n\nBuilt in function MAP :');
// const newAngka = angka.map(function(items){ //normal anonymous function
//     return items * 5;
// });
const newAngka = angka.map(a => a * 5) //arrow function
console.log(newAngka);



//3. filter
console.log('\n\nBuilt in function FILTER :');
// const fiterAngka = angka.filter(function (a) {  //normal anonymous function
//     return a >= 5;
//  }) 
const filterAngka = angka.filter(a => a >= 5); //arrow function
console.log(filterAngka);



//4. push
console.log('\n\nBuilt in function PUSH :');
hewan.push('monyet'); //masukan string 'monyet' ke array hewan diakhir array
console.log(hewan);



//5. unshift --------
console.log('\n\nBuilt in function UNSHIFT :');
console.log(hewan.unshift('Badak')); //masukan string 'badak' ke array hewan diawal array
console.log(hewan);



//6. pop ---------------
console.log('\n\nBuilt in function POP :');
const hewanTerakhir = hewan.pop();//menghilangkan / menghapus elemen array terakhir
console.log(hewanTerakhir); //menampilkan elemen array yang dihapus dengan pop
console.log(hewan); 



//7. shift
console.log('\n\nBuilt in function SHIFT :');
const hewanPertama = hewan.shift();
console.log(hewanPertama); //menghilangkan / menghapus elemen array pertama
console.log(hewan);//menampilkan elemen array yang dihapus dengan shift



//8. toLowerCase
console.log('\n\nBuilt in function TO LOWER CASE :');
const nameKecil = name.toLowerCase();//mengubah semua huruf yang ada di variabel name menjadi huruf kecil
console.log(nameKecil);



//9. toUpperCase
console.log('\n\nBuilt in function TO LOWER CASE :');
const nameBesar = name.toUpperCase();//mengubah semua huruf yang ada di variabel name menjadi huruf besar
console.log(nameBesar);



//10. split
console.log('\n\nBuilt in function SPLIT :');
const arrayKata = kata.split(''); //memecah kata menjadi array per huruf dengan menggunakan split('')
const arrayKalimat = kalimat.split(' '); //memecah kalimat menjadi array per kata dengan menggunakan split(' ')
console.log(arrayKata);
console.log(arrayKalimat);
