const number = arr => {
        return new Promise((resolve, reject) => {
            if(!arr){
                reject("Data Array yang anda masukan salah")
            }else{
                genap = arr.filter(element => element%2 == 0)
                resolve(genap)
            }
            
        })
}

angka = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

number(angka)
// .then((type) => {
//     console.log(type);
// })
.then(type => console.log(type))
// .catch((err) => {
//     console.log(err);
// })
.catch(err => console.log(err))