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
//ACK'S CRYPTOGRAPHY
import{charset256,charset128,charset64,charset62,parseBigInt,fromBigInt,seededRandom}from "/assets/hash-modules/hashreq.js"
/*
convert text to charcode then join into a string. conv to hex (4 digit) and parse each number individually as a base32 number. use a method to add all the numbers in the generated array then use some fancy math and bitlogic to force a certain length
*/
function hashv2(input1){//DONOTEDIT
    let input = input1[0].toString()
    let outlength = input1[1]
    if(outlength==null|undefined)throw new Error('specify the length of the output please')
    if(outlength>8192)throw new Error('limit is 4096. going any higher will take next to forever')
    let stg1 = []
    for(let a=0;a<input.length;a++){
        stg1.push(input.charCodeAt(a))
    }//gets charcode of each character
    stg1 = stg1.join('')
    let stg2 = BigInt(stg1).toString(16).match(/.{1,4}/g)//converts to hex then splits to 4 digits
    stg1 = null
    let stg3 = []
    let stg7 = BigInt(0)
    for(let i=0;i<stg2.length;i++){
        stg3.push(parseBigInt(stg2[i],128))
        stg7=stg7 + (parseBigInt(stg2[i],36)*BigInt(i+1))
    }//convert each as a base32 number
    let stg4 = BigInt('0')
    for(let q=0;q<stg2.length;q++){
        let a3 = BigInt('6445812')
        stg4 = stg4 + (stg3[q]*a3)*BigInt(170)
    }
    stg2 = null
    stg3 = null
    let stg5 = stg7*BigInt(69)
    stg7 = null
    stg4 = fromBigInt(`${stg4}`,16)
    stg4 = parseBigInt(`${stg4}`,62)
    stg4 = fromBigInt(`${stg4}`,32)
    stg4 = parseBigInt(`${stg4}`,128)
    stg4 = fromBigInt(`${stg4}`,16)
    stg4 = parseBigInt(`${stg4}`,62)
    stg4 = fromBigInt(`${stg4}`,32)
    stg4 = parseBigInt(`${stg4}`,128)
    stg4 = stg4 * BigInt(stg5)
    stg5 = null
    stg4 = stg4 * BigInt(outlength)
    let stg6 = seededRandom(stg4,outlength)
    stg4 = null
    return(stg6)
}
function letterGen(input){
    //vertical = 0 horizontal = 1
    const letters = {//A-Z,0-9
        A:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░▓',
            L3:'▓▓▓▓▓',
            L4:'▓░░░▓',
            L5:'▓░░░▓'
        },
        B:{
            L1:'▓▓▓▓░',
            L2:'▓░░░▓',
            L3:'▓▓▓▓░',
            L4:'▓░░░▓',
            L5:'▓▓▓▓░'
        },
        C:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░░',
            L3:'▓░░░░',
            L4:'▓░░░░',
            L5:'▓▓▓▓▓'
        },
        D:{
            L1:'▓▓▓▓░',
            L2:'▓░░░▓',
            L3:'▓░░░▓',
            L4:'▓░░░▓',
            L5:'▓▓▓▓░'
        },
        E:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░░',
            L3:'▓▓▓▓░',
            L4:'▓░░░░',
            L5:'▓▓▓▓▓'
        },
        F:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░░',
            L3:'▓▓▓▓░',
            L4:'▓░░░░',
            L5:'▓░░░░'
        },
        G:{
            L1:'░▓▓▓░',
            L2:'▓░░░░',
            L3:'▓░▓▓▓',
            L4:'▓░░░▓',
            L5:'░▓▓▓░'
        },
        H:{
            L1:'▓░░░▓',
            L2:'▓░░░▓',
            L3:'▓▓▓▓▓',
            L4:'▓░░░▓',
            L5:'▓░░░▓'
        },
        I:{
            L1:'▓▓▓▓▓',
            L2:'░░▓░░',
            L3:'░░▓░░',
            L4:'░░▓░░',
            L5:'▓▓▓▓▓'
        },
        J:{
            L1:'▓▓▓▓▓',
            L2:'░░▓░░',
            L3:'░░▓░░',
            L4:'░░▓░░',
            L5:'▓▓▓░░'
        },
        K:{
            L1:'▓░░░▓',
            L2:'▓░░▓░',
            L3:'▓▓▓░░',
            L4:'▓░░▓░',
            L5:'▓░░░▓'
        },
        L:{
            L1:'▓░░░░',
            L2:'▓░░░░',
            L3:'▓░░░░',
            L4:'▓░░░░',
            L5:'▓▓▓▓▓'
        },
        M:{
            L1:'▓░░░▓',
            L2:'▓▓░▓▓',
            L3:'▓░▓░▓',
            L4:'▓░░░▓',
            L5:'▓░░░▓'
        },
        N:{
            L1:'▓░░░▓',
            L2:'▓▓░░▓',
            L3:'▓░▓░▓',
            L4:'▓░░▓▓',
            L5:'▓░░░▓'
        },
        O:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░▓',
            L3:'▓░░░▓',
            L4:'▓░░░▓',
            L5:'▓▓▓▓▓'
        },
        P:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░▓',
            L3:'▓▓▓▓▓',
            L4:'▓░░░░',
            L5:'▓░░░░'
        },
        Q:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░▓',
            L3:'▓░░░▓',
            L4:'▓░░▓░',
            L5:'▓▓▓░▓'
        },
        R:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░▓',
            L3:'▓▓▓▓░',
            L4:'▓░░░▓',
            L5:'▓░░░▓'
        },
        S:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░░',
            L3:'▓▓▓▓▓',
            L4:'░░░░▓',
            L5:'▓▓▓▓▓'
        },
        T:{
            L1:'▓▓▓▓▓',
            L2:'░░▓░░',
            L3:'░░▓░░',
            L4:'░░▓░░',
            L5:'░░▓░░'
        },
        U:{
            L1:'▓░░░▓',
            L2:'▓░░░▓',
            L3:'▓░░░▓',
            L4:'▓░░░▓',
            L5:'▓▓▓▓▓'
        },
        V:{
            L1:'▓░░░▓',
            L2:'▓░░░▓',
            L3:'▓░░░▓',
            L4:'░▓░▓░',
            L5:'░░▓░░'
        },
        W:{
            L1:'▓░▓░▓',
            L2:'▓░▓░▓',
            L3:'▓░▓░▓',
            L4:'▓░▓░▓',
            L5:'░▓░▓░'
        },
        X:{
            L1:'▓░░░▓',
            L2:'░▓░▓░',
            L3:'░░▓░░',
            L4:'░▓░▓░',
            L5:'▓░░░▓'
        },
        Y:{
            L1:'▓░░░▓',
            L2:'▓░░░▓',
            L3:'▓▓▓▓▓',
            L4:'░░▓░░',
            L5:'░░▓░░'
        },
        Z:{
            L1:'▓▓▓▓▓',
            L2:'░░░▓░',
            L3:'░░▓░░',
            L4:'░▓░░░',
            L5:'▓▓▓▓▓'
        },
        1:{
            L1:'░░▓░░',
            L2:'▓▓▓░░',
            L3:'░░▓░░',
            L4:'░░▓░░',
            L5:'▓▓▓▓▓'
        },
        2:{
            L1:'░▓▓▓░',
            L2:'▓░░░▓',
            L3:'░░▓▓░',
            L4:'░▓░░░',
            L5:'▓▓▓▓▓'
        },
        3:{
            L1:'▓▓▓▓░',
            L2:'░░░░▓',
            L3:'▓▓▓▓░',
            L4:'░░░░▓',
            L5:'▓▓▓▓░'
        },
        4:{
            L1:'▓░░▓░',
            L2:'▓░░▓░',
            L3:'▓░░▓░',
            L4:'▓▓▓▓▓',
            L5:'░░░▓░'
        },
        5:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░░',
            L3:'▓▓▓▓░',
            L4:'░░░░▓',
            L5:'▓▓▓▓░'
        },
        6:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░░',
            L3:'▓▓▓▓▓',
            L4:'▓░░░▓',
            L5:'▓▓▓▓▓'
        },
        7:{
            L1:'▓▓▓▓▓',
            L2:'░░░░▓',
            L3:'░░░▓░',
            L4:'░░▓░░',
            L5:'░▓░░░'
        },
        8:{
            L1:'░▓▓▓░',
            L2:'▓░░░▓',
            L3:'░▓▓▓░',
            L4:'▓░░░▓',
            L5:'░▓▓▓░'
        },
        9:{
            L1:'▓▓▓▓▓',
            L2:'▓░░░▓',
            L3:'▓▓▓▓▓',
            L4:'░░░░▓',
            L5:'░░░░▓'
        },
        0:{
            L1:'▓▓▓▓▓',
            L2:'▓▓░░▓',
            L3:'▓░▓░▓',
            L4:'▓░░▓▓',
            L5:'▓▓▓▓▓'
        },
        ' ':{
            L1:'░░░░░░',
            L2:'░░░░░░',
            L3:'░░░░░░',
            L4:'░░░░░░',
            L5:'░░░░░░'
        },
        SPECIAL:{
            SPACERHOR:'░',
            SPACERVER:'░░░░░'
        }
    }
    const letterIndex = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0',' ']
    input.toString()
    input = input.toUpperCase()
    let result = []
        result.push([],[],[],[],[])
        for(let a=0;a<input.length;a++){
            if(letterIndex.indexOf(input.charAt(a))==-1){return('input must be from A-Z (CAPITALS ONLY) AND 0-9')}
            let letter = input.charAt(a).toString()
            result[0].push(letters[letter].L1)
            result[0].push(letters.SPECIAL.SPACERHOR)
            result[1].push(letters[letter].L2)
            result[1].push(letters.SPECIAL.SPACERHOR)
            result[2].push(letters[letter].L3)
            result[2].push(letters.SPECIAL.SPACERHOR)
            result[3].push(letters[letter].L4)
            result[3].push(letters.SPECIAL.SPACERHOR)
            result[4].push(letters[letter].L5)
            result[4].push(letters.SPECIAL.SPACERHOR)
        }
        result[0]=result[0].join('')
        result[1]=result[1].join('')
        result[2]=result[2].join('')
        result[3]=result[3].join('')
        result[4]=result[4].join('')
        result=result.join('\n')
        result = `\`\`\n${result}\n\`\``
    return(result)
}
export{hashv2,letterGen}
