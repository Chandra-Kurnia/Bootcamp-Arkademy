const biodata = {
    name: 'Candra Kurniawan',
    age: 19,
    hobbies: ['film', 'editing', 'game'],
    IsMarried: false,
    schoolList: [
        {
            //Paud/TK
            name: 'Paud Aisyah',
            yearIn: '2007',
            yearOut: '2009',
            major: null
        },
        {
            //SD
            name: 'SDN 2 Sumurup',
            yearIn: '2009',
            yearOut: '2015',
            major: null
        },
        {
            //SMP
            name: 'SMPN 1 Bendungan',
            yearIn: '2015',
            yearOut: '2018',
            major: null
        },
        {
            //SMK
            name: 'SMKN 2 Trenggalek',
            yearIn: '2018',
            yearOut: '2021',
            major: "Rekayasa Perangkat Lunak"
        }
    ],
    skills: [
        {
            skillName: 'html',
            level: 'skilled',
        },
        {
            skillName: 'css',
            level: 'skilled',
        },
        {
            skillName: 'css bootsrap',
            level: 'begginer',
        },
        {
            skillName: 'js',
            level: 'average',
        },
        {
            skillName: 'laravel',
            level: 'skilled',
        },
        
    ],
    interestInCoding: true
}

function line(){
    console.log('====================================================');
}
line();
//panggil key & value
console.log("Nama : "+biodata.name)
console.log("Umur : "+biodata.age)
console.log("Hobi : "+biodata.hobbies)
console.log("Status Pernikahan : "+biodata.IsMarried)


//panggil array in object
// biodata.hobbies.forEach(element => {
//     console.log(element)
// });

line();
console.log("List Sekolah");
line();
//panggil array of object
// console.log(biodata.schoolList[0].yearIn); ambil 1 data
biodata.schoolList.forEach(element => { //ambil semua data
    for(data in element){
        console.log(data+" = "+element[data]);
    }
    line();
});

line();
console.log("List Sekolah");
biodata.skills.forEach(element => { //ambil semua data
    for(data in element){
        console.log(data+" = "+element[data]);
    }
    line();
});