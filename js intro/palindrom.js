palindrom = (input) => {
    //validasi input
    if(input){
        //1. Cek kata Palindrom
        let kata = input;
        let convert = kata.split('');
        let string = "";
        
        for(let i = convert.length-1; i>=0; i--){
            string += convert[i];
        }
        
        if(kata==string){
            console.log(`Kata "${kata}" Palindrom`);
        }else{
            console.log(`Kata "${kata}" bukan Palindrom`);
        }
    }else{
        console.log('Tidak ada kata');
    }
}
palindrom('malam ka');