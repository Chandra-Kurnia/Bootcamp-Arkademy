balik = (input) => {
    //Validasi input
    if(input){
        //2. Tampilkan kalimat secara terbalik
        let kalimat = input;
        let convert = kalimat.split(" ");
        let string = " ";
        
        for(let i = convert.length-1; i>=0; i--){
            string += convert[i]+" ";
        }
        
        console.log(string);
    }else{
        console.log('Tidak ada kalimat yang bisa diubah / dibalik');
    }
}

balik("saya belajar javasript dengan sungguh - sungguh");