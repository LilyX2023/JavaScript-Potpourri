//setAlarm
// const setAlarm = (employed, vacation)=> {
//     return employed && !vacation
// }
// console.log(setAlarm(true,false))
// console.log(setAlarm(false,false))
// console.log(setAlarm(true,true))
// console.log(setAlarm(false,true))

////////////////////////////////////////

//countOddNumber
// n = []
// const oddNumbercount = (num) => {
//     //count from the 0 to num
//     for (i=0; i<num; i++){
//         if (i%2!==0) {
//             //push the odd num in the n array
//             n.push(i)
//         }
//     }
// }
// oddNumbercount(15)
// //count the length of the n array
// console.log(n.length)

////////////////////////////////////////

//Disemvoweling 

// const trollsBeGone = (str) => {
//     return noVowels = str.replace(/[aeiou]/gi, '') 
// }
// console.log(trollsBeGone("This website is for losers LOL"))

/////////////////////////////////////////

//Bank Account Summary

const bankInfo = {
    savings: 600,
    checking: 800,
    moneyMarket: 200,
    creditCard: -2000
}

const bankAccountSummary = (v) => {
    let balance = 0;
    for (el in v) { // for in loop can be used for add up numbers; for of loop can only be used on the strings and array
        balance += v[el]
    }
    return balance
}
console.log(bankAccountSummary(bankInfo))
let bankTotal = bankAccountSummary(bankInfo)

const inTheRed = (t) => {
    return t < 0 
}
console.log(inTheRed(bankTotal))

//////////////////////////////////////////



