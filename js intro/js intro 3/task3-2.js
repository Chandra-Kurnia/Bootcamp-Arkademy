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

//then catch
// .then((type) => {
//     console.log(type);
// })
// .catch((err) => {
//     console.log(err);
// })
console.log("Sinkron 1");
number(angka)
.then(num => console.log("Then Catch : " + num))
.catch(err => console.log(err))

console.log("Sinkron 2");
//try catch
const getNumber = async () => {
    try {//menangkap resolve
        const num = await number(angka)
        console.log("Try Catch : " + num);
    } catch (err) {//menangkap reject
        console.log(err);
    }
}

getNumber();
console.log("Sinkron 3");