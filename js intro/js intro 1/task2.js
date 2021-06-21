//input nilai
const mtk = 100;
const bindo = 100;
const bing = 100;
const ipa = 100;

const hitung = (mtk, bindo, bing, ipa) => { 
    if(mtk==='' | isNaN(mtk) | mtk<0 | mtk>100){
        console.log("Nilai mtk yang diberikan salah");
    }
    else if(bindo==='' | isNaN(bindo) | bindo<0 | bindo>100){
        console.log("Nilai bahasa Indonesia yang diberikan salah");
    }
    else if(bing==='' | isNaN(bing) | bing<0 | bing>100){
        console.log("Nilai bahasa Inggris yang diberikan salah");
    }
    else if(ipa==='' | isNaN(ipa) | ipa<0 | ipa>100){
        console.log("Nilai Ipa yang diberikan salah");
    }else{
        nilai = mtk+bindo+bindo+ipa;
        average = nilai/4;
        if(average>=0 && average<=59){
            grade = 'E'
        }else if(average>=60 && average<=69){
            grade = 'D'
        }else if(average>=70 && average<=79){
            grade = 'C'
        }else if(average>=80 && average<=89){
            grade = 'B'
        }else if(average>=90 && average<=100){
            grade = 'A'
        }
        console.log('rata - rata = ' + average);
        console.log('grade = ' + grade);
    }
 }

 hitung(mtk, bindo, bindo, ipa)

 
// function hitung(mtk, bindo, bing, ipa) { 
//     if(mtk==='' | isNaN(mtk) | mtk<0){
//         console.log("Nilai mtk yang diberikan salah");
//     }
//     else if(bindo=='' | isNaN(bindo) | bindo<0){
//         console.log("Nilai bahasa Indonesia yang diberikan salah");
//     }
//     else if(bing=='' | isNaN(bing) | bing<0){
//         console.log("Nilai bahasa Inggris yang diberikan salah");
//     }
//     else if(ipa=='' | isNaN(ipa) | ipa<0){
//         console.log("Nilai Ipa yang diberikan salah");
//     }else{
//         nilai = mtk+bindo+bindo+ipa;
//         average = nilai/4;
//         if(average>=0 && average<=59){
//             grade = 'E'
//         }else if(average>=60 && average<=69){
//             grade = 'D'
//         }else if(average>=70 && average<=79){
//             grade = 'C'
//         }else if(average>=80 && average<=89){
//             grade = 'B'
//         }else if(average>=90 && average<=100){
//             grade = 'A'
//         }else{
//             grade = 'grade tidak ditemukan'   
//         }
//         console.log('rata - rata = ' + average);
//         console.log('grade = ' + grade);
//     }
//  }