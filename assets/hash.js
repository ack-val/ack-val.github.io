//MADE BY ACK
//YES I KNOW ITS GARBAGE NOW SHUT UP
//    _______________________________________________________________________________    
//   /|-----/----\--------/--͟-͟-͟-|--|--|-/--/---------\--\--------/----\--------------|\  
//  / |----/--/\--\------/--/------|--|/--/-----------\--\------/--/\--\-------------| \ 
// |  |---/--/__\--\----/--/-------|-----/-------------\--\----/--/--\--\------------|  |
// |  |--/--͟-͟-͟-͟-͟-͟---\---\--\-------|-----\--------------\--\--/--/----\--\-----------|  |
//  \ |-/--/------\--\---\--\̲-̲-̲----|--|\--\---̲-̲-̲-̲-̲-̲-̲-̲----\--\/--/------\--\̲-̲-̲-̲-̲-̲-̲-̲-̲-̲-| / 
//   \|/--/--------\--\---\-----|--|--|-\--\-|--------|---\----/--------\------------|/  
//    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾    
//VERSION AUTO
//{encode0,decode0,encode1,decode1,
//cipher,decipher,cipher64,decipher64,hashv0,hashv1,hashv2}
import * as hash0 from "/assets/hash-modules/hashv0.js"
import * as hash1 from "/assets/hash-modules/hashv1.js"
import * as hashreq from "/assets/hash-modules/hashreq.js"
function inputhandler(input){

}
function hashFile(file,outlength,destination) {
    ;(async function() {
        let blob = file
        let reader = new FileReader()
        reader.readAsText(blob)
        await new Promise(resolve => reader.onload = () => resolve());
        let dataUrl = reader.result
        console.log(dataUrl.toString())
        document.getElementById(destination).value = window.hash.hashv2([dataUrl.toString(),outlength])
    })()
    return('processing')
}
window.hash = {
    test(input){return(hash1.test(input))},
    encode0(input){return(hash0.encode0(input))},
    decode0(input){return(hash0.decode0(input))},
    encode1(input){return(hash0.encode1(input))},
    decode1(input){return(hash0.decode1(input))},
    cipher(input){return(hash0.cipher(input))},
    decipher(input){return(hash0.decipher(input))},
    cipher64(input){return(hash0.cipher64(input))},
    decipher64(input){return(hash0.decipher64(input))},
    hashv0(input){return(hash0.hashv0(input))},
    hashv1(input){return(hash0.hashv1(input))},
    hashv2(input){return(hash1.hashv2(input))},
    letterGen(input){return(hash1.letterGen(input))},
    pBI(input){return(hashreq.parseBigInt(input[0],input[1],input[2]))},
    fBI(input){return(hashreq.fromBigInt(input[0],input[1],input[2]))},
    sRNG(input){return(hashreq.seededRandom(input[0],input[1]))},
    hashFile(input){return(hashFile(input[0],input[1],input[2]))}
}
