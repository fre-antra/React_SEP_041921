function reverse(num){
    //Num->Str: String(num) || num.toString() || ""+num
    //Str->Num: + num
    return +num.toString().split('').reverse().join('')
    
}
//console.log('(1)Reverse:',reverse(12456))

function isPalindrome(str){
    let newStr= str.replaceAll(" ","")
    let revStr= newStr.split('').reverse().join('')
    return (newStr=== revStr)? true: false
}
//console.log('(2):',isPalindrome('nurses run'))

function strCombination(str){
    let result=[]
    for (let i=0; i<str.length; i++){
        for (let j=i+1; j<=str.length; j++){
            result.push(str.substring(i,j))
        }

    }
    return result
}
//console.log('(3):', strCombination('dog'))

function sortStr(str){
    return str.split('').sort().join('')
}
//console.log('(4):', sortStr('webmaster'))

function capitalizeFirstLetter(str){
    return str.split(' ').map(s=>s[0].toUpperCase()+s.slice(1)).join(" ")
}
//console.log('(5):',capitalizeFirstLetter('the quick brown fox'))

function findLongestWord(str){
 return str.split(' ').sort((a,b)=>b.length-a.length)[0]
}
//console.log('(6):',findLongestWord('Web Development Tutorial') )

function countTheVowes(str){
    let vowes=['a','e','i','o','u']
    return str.toLowerCase().split('').filter(letter=>vowes.includes(letter)).length
}
//console.log('(7):', countTheVowes('The quick brown fox'))

function isPrime(num){
    let isPrime= true;
    if (num ===1) {
        return '1 is neither prime nor composite number'
    }
    else if (num >1){
        for (let i=2; i<num; i++){
            if (num%i ===0){
                isPrime= false;
                break;
            }
        }
        return (isPrime)? `${num} is a prime number` : `${num} is NOT a prime numberber`
    }
}
//console.log('(8):',isPrime(4) )

function getType(variable){
    return typeof(variable)
}
//console.log('(9):', getType(65) )

function getMatrix(n){
    const res = [];
    for (let i = 0; i < n; i++) {
        res[i] = new Array(n).fill(0);
    }
    // let res = new Array(n).fill(0).map(_ => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        res[i][i] = 1;
    }
    return res;
}
console.log('(10):', getMatrix(2) )

function findNumbers(arr){
    //second lowest and second greatest
    arr.sort()
    return [arr[1], arr[arr.length-2]]
}
//console.log('(11):', findNumbers([5,3,2,1,4]) )

function isPerfect(num){
    let divisors=[]
    for (let i=1;i<num;i++){
        if (num%i ===0) divisors.push(i)
    }
    let total = divisors.reduce((acc,num)=>acc+num)
    return (total===num)? `${num} is a perfect number` : `${num} is NOT a perfect number`
}
//console.log('(12):', isPerfect(6) )

function factors(num){
    //compute the factor of a number
    let divisors= Array(num).fill().map((_,i)=>i+1).filter(i=>num%i===0)
    let factors= divisors.slice(0,divisors.length/2).map(i=>[i,num/i])
    return factors;
}
//console.log('(13):',factors(12) )

function amountTocoins(amount, coins){
    coins.sort((a,b)=>b-a)
    let result=[];
    for(let i = 0; i < coins.length; i++){
        if (amount < coins[i]) continue;
        let count= Math.floor(amount/coins[i])
        result= result.concat(Array(count).fill(coins[i]))
        //result= [...Array(count).fill(coins[i])]
        amount= amount%coins[i]
        if (amount === 0) break;
    }
    return result;
}
let coins= [10,25,1,2,5]
let amount= 148
console.log('(14):',amountTocoins(amount,coins) )

//15-19

function computeExp(base, exp){
    if (exp===0) {
        return 1;
    }
    return base*compute(base, exp-1) //recursive
}
//console.log('(15):',compute(3,3) )

function extractChar(str){
    const set= new Set();
    for (let i = 0; i < str.length; i++) {
        if (!set.has(str[i])) {
            set.add(str[i]);
            continue;
        }
        str = str.substring(0, i)+ str.slice(i + 1);
        i--;
    }
    return str;
}
const str1= "thequickbrownfoxjumpsoverthelazydog"
console.log('(16):', extractChar(str1) )

function occurrences (str){
  let s= str.replaceAll(" ","").toUpperCase()
  let obj={}
  for (let i=0; i<s.length; i++){
    if (!Object.keys(obj).includes(s[i])){
        obj[s[i]] =1
    }
    else obj[s[i]] +=1
  }
  return obj
}
//console.log('(17):',occurrences('Tet Vietnam') )

function binary(arr,target){
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] > target) end = mid;
        if (arr[mid] <= target) start = mid;
    }
    if (arr[start] === target || arr[end] === target) return true;
    return false;
}
const arr2= [2, 5, 6, 8, 1, 12, 14, 16];
const target = 6;
console.log('(18):',binary(arr2, target) )

function searchElement(arr,num){
    return arr.filter(e=>e>num)
}
//console.log('(19):', searchElement([1,2,3],2) )

//20-24

function generateId(lg){
    const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*?";
    let res = "";
    while (lg) {
        res += list[Math.floor(list.length * Math.random())];
        lg--;
    }
    return res;
}
let letters = /^[A-Za-z]+$/;
//console.log(letters)
//console.log('(20):',generateId(10))

function subset(array,length){

}
console.log('(21):', )

function countLetter(str, letter){
    return str.split('').filter(e=>e===letter).length
}
//console.log('(22):',countLetter('Tet Vietnam','e'))

function findNotRepeatedLetter(str){

}
console.log('(23):', )

function bubbleSort(){

}
console.log('(24):', )

//25-27

function longestCountryName(arr){
    return arr.sort((a,b)=>b.length-a.length)[0]
}
let countries=["Australia", "Germany", "United States of America"]
//console.log('(25):',longestCountryName(countries))

function longestSubstr(str){

}
console.log('(26):', )

function longestPalindrome(str){

}
console.log('(27):', )

//28 write a JS program to pass a JS function as parameter
const funcAsParam = (cb,argu)=>{
    return cb(argu)
}
const helper= num=>num+10;
//console.log('(28):',funcAsParam(helper,15))

//29 write a JS function to get the function name
const getName= (func)=>{
    //console.log(Object.keys(func))
    return func.name;
}
//console.log('(29)',getName(reverse))


