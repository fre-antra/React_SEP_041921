// // 1. Write a JavaScript function that reverse a number. Example x = 32243;
// // Expected Output : 34223

// const numReverse = num => {
//     num = num.toString().split('')
//     for(let i=0; i<num.length/2; i++ ){
//         [num[i], num[num.length-i-1]] = [num[num.length-i-1], num[i]] 
//     }
//     num = parseInt(num.join(''))
//     return num
// }

// console.log(numReverse(12346789))

// // 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// // A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run

// const isPalindrome = str => {
//     //Check value of index from 0- half string
//     let i=0
//     while(i < str.length/2) {
//         if(str[i] !== str[str.length-i-1]){
//             return false
//         }
        
//         i++
//     }

//     return true
// }

// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('racecar '))

// // 3. Write a JavaScript function that generates all combinations of a string. 
// // Example string : 'dog' Expected Output : d,do,dog,o,og,g
// // dog, "", [] -> dog
// // do, "g" [dog,g]

// const allCombination = (str, idx=0, output = []) => {
//     //Edge case str.length = 1
//     if (subStr.length === 0) {
//         output.push(str)
//     }
//     //recursive
//     str 

//     //forward process
// }

// // 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// // Example string : 'webmaster' Expected Output : 'abeemrstw'
// // Assume punctuation and numbers symbols are not included in the passed string.

// const orderedLetter = str => {
//     let dict = 'abcdefghijklmnopqrstuvwxyz'
//     str = str.toLowerCase().split('')
//     str = str.sort()
//     str = str.join('')
//     return str
// }

// console.log(orderedLetter('Webmaster'))

// // 5. Write a JavaScript function that accepts a string as a parameter and converts the 
// // first letter of each word of the string in upper case. 
// // Example string : 'the quick brown fox' 
// // Expected Output : 'The Quick Brown Fox '
// const capitalize = str => {
//     str = str.split(' ')
//     return str.reduce((acc,cur) => {
//         cur = cur[0].toUpperCase() + cur.slice(1) + ' '
//         return acc + cur
//     },'')    
// }

// console.log(capitalize('the quick brown fox'))

// // 6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string. 
// // Example string : 'Web Development Tutorial' Expected Output : 'Development'

// const longestStr = str => {
//     str = str.split(' ')
//     let output = ''
//     for (let i=0; i<str.length; i++){
//         if(str[i].length > output.length){
//             output = str[i]
//         }
//     }
//     return output
// }

// console.log(longestStr('Web Development Tutorial'))

// // 7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string.  
// // Example string : 'The quick brown fox' Expected Output : 5

// const countVowels = str => {
//     const vowels = 'aeiou'
//     let count = 0
//     str = str.toLowerCase()
//     for (let i=0; i<str.length; i++) {
//         for (let j=0; j<vowels.length; j++){
//             if(str[i] === vowels[j]){
//                 count += 1
//             }
//         }
//     }

//     return count
// } 

// console.log(countVowels('The quick brown fox'))

// // 8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not. 
// // Note : A prime number (or a prime) is a natural number greater than 1 that has no positivedivisors other than 1 and itself.

// const isPrime = num => {
//     if(isNaN(num) == true){
//         return false
//     }
//     num = parseInt(num)
//     //check if number  can divide by 2
//     if (num % 2 === 0) {
//         return false
//     } 
//     //check from 3 up to sqrt(num), avoid even number    
//     for (let i = 3; i<Math.sqrt(num); i+=2){
//         console.log(`If ${num} is divisible by ${i}` )
//         if(num % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime('2623'))

// // 9. Write a JavaScript function which accepts an argument and returns the type. 
// // Note: There are six possible values that typeof 
// // returns: object, boolean, function, number,string, and undefined.

// const checkTypeofArg = arg => {
//     console.log(typeof(arg))
// }

// checkTypeofArg()

// // 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

// const createMatrix = (row,col) => {
//     let output = []
//     for (let j=0; j<col; j++){
//         let _row = []
//         for (let i = 0; i< row; i++){
//             if(i === j){
//                 _row.push(1)
//                 console.log(`Row ${j} & i=${i}`, _row)
//             } else {
//                 _row.push(0)  
//             }
//             console.log(`Row ${j} & i=${i}`, _row)
//         }
//         console.log(output)
//         output.push(_row)

//     }
//     return output
// }

// console.log(createMatrix(4,3))

// // 11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest 
// // and second greatest numbers, respectively. 
// // Sample array : [1,2,3,4,5]Expected Output : 2,4 

// const secondMinMax = arr => {
//     const findMin = arr => {
//         let min = arr[0]
//         let idx = 0
//         for (let i=1; i<arr.length; i++){
//             if(arr[i] < min){
//                 min = arr[i]
//                 idx = i
//             }
//         }
//         return [idx,min]
//     }

//     const findMax = arr => {
//         let max = arr[0]
//         let idx = 0
//         for (let i=1; i<arr.length; i++){
//             if(arr[i] > max){
//                 max = arr[i]
//                 idx=i
//             }             
//         }
//         return [idx,max]
//     }

//     const [minIdx,minVal] = findMin(arr)
//     const [maxIdx,maxVal] = findMax(arr)

//     const[min2Idx, min2Val] = findMin([...arr.slice(0,minIdx),...arr.slice(minIdx+1)])
//     const[max2Idx, max2Val] = findMax([...arr.slice(0,maxIdx),...arr.slice(maxIdx+1)]) 

//     return [min2Val,max2Val]

//     }
    
// console.log(secondMinMax([7,3,2,6,5]))

// //Find all factors
// const calcFactors = num => {
//     let output = []
//     for(i=1; i<num; i++){
//         if(num % i === 0){
//             output.push(i)
//         }
//     }
//     return output
// }

// // 12. Write a JavaScript function which says whether a number is perfect.
// // Note: it is a positive integer that is equal to the sum of its proper divisors

// const isPerfectNum = num => {
//     if(num < 1){
//         console.log('Please enter valid positive integer')
//     }

//     let factors = calcFactors(num)
//     const sum = factors.reduce((acc,cur) => {
//         return acc+cur
//     })

//     if(sum === num){
//         return true
//     }

//     return false
// }

// console.log(isPerfectNum(8128))

// // 14. Write a JavaScript function to convert an amount to coins. 
// // Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// // Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// // Output : 25, 10, 10, 1

// const amountToCoins = (amount,coins, change =[]) => {
//     //base case
//     if(coins.length === 0 && amount > 0){
//         console.log('******************')
//         console.log(`Cannot make change, amount left is ${amount}`)        
//         return change
//     } else if (coins.length === 0 && amount === 0){
//         console.log('******************')
//         console.log("Here is your change!!")
//         return change
//     }
//     //forward
//     sortCoins = coins.sort((a,b) => b-a) //sort coins just in case 
//     const [first,...otherCoins] = sortCoins //destructure coins array
//     console.log('******************')
//     console.log(`Calculating change for ${first} cents`)
//     if(amount >= first) {
//         change.push(first)
//         amount = amount - first
//     } else {
//         coins = otherCoins
//     }
//     console.log('Total change: ',change)
//     //recursive
//     return amountToCoins(amount,coins,change)
// }

// console.log(amountToCoins(46,[10,25,5,2,1]))

// // 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases. 
// // Accept b and n from the user and display the result.

// const calcExp = (b,n) => {
//     let i = 0
//     let output = b
//     while (i<n-1){
//         output = output*b
//         i++
//     }
//     return output
// }

// console.log(calcExp(2,4))

// // 17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring.
// const countLetter = str => {
//     const dict = 'abcdefghijklmnopqrstuvwxyz'

//     const output =[] 
//     let count = 0

//     for (let i=0; i<dict.length; i++){
//         for (let j=0; j<str.length; j++){
//             if (dict[i] === str[j]){
//                 count++
//             }
//         }
//         if (count > 0){
//             output.push([dict[i],count])
//         }
//         count = 0
//     }
//     return output   
// }

// console.log(countLetter('the quick brown fox'))

// // 18. Write a function for searching JavaScript arrays with a binary search. 
// // Note : A binary search searches by splitting an array into smaller and smaller chunks until it findsthe desired value

// const binarySearch = (arr,val, idx=0) => {    
//     arr = arr.sort((a,b)=>a-b)
//     //base case
//     if (val === arr[idx]){
//         return true
//     } 
//     if (idx >= arr.length){
//         return false
//     }
        
//     //forward process
//     if (val > arr[idx]){
//         idx = Math.ceil((idx+arr.length)/2)
//     } 
//     if (val < arr[idx]){
//         idx = Math.ceil(idx/2)
//     }
    
//     //recursive
//     return binarySearch(arr,val,idx)
// }

// console.log(binarySearch([22,5,11,9,20,41],9))

// // 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// // Samplecharacterlist:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

// const iDgenerate = num => {
//     let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     let str =''
//     const rand = () => {        
//         return Math.floor(Math.random()*letters.length)
//     }

//     for (let i=0; i<num; i++){
//         random = rand()
//         str += letters[random]
//     }

//     return str
// }

// console.log(iDgenerate(10))

// // 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array. 
// // Sample array : [1, 2, 3] and subset length is 2 
// // Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

// const subSet = (arr, num, idx=0, output =[]) => {
//     //base case
//     let length = num - 1
//     if (idx === arr.length-1) {
//         return output
//     }
//     //forward process
//     for (let i=idx+length; i<arr.length; i++ ){
//         if (idx === i) {
//             continue
//         }
//         output.push([arr[idx],arr[i]])
//     }

//     idx++

//     //recursive
//     return subSet(arr, length, idx, output)
// }

// console.log(subSet([1,2,3,4],2))

// // 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function 
// // will count the number of occurrences of the specified letter within the string

// const letterCount = (str, letter) => {
//     let count = 0
//     str = str.toLowerCase()

//     for (let i=0; i<str.length; i++){
//         if (str[i] === letter){
//             count++
//         }
//     }

//     return count
// }

// console.log(letterCount('the quick brown fox','o'))

// // 23. Write a JavaScript function to find the first not repeated character. 
// // Sample arguments : 'abacddbec' Expected output : 'e' 

// const countNotRepeated = str => {
//     let letter
//     for (let i=0; i<str.length-1; i++){
//         loop: for (let j=0; j<str.length; j++){
//             if(i===j){
//                 continue
//             }
//             console.log(`${str[i]} -- ${str[j]} // Letter = ${letter}`)
//                 if (str[i] === str[j]){
//                     console.log(`********${letter} is dup!`)
//                     letter = null
//                     break loop 
//                 } else {
//                     letter = str[i]
//                     console.log("Got letter! Letter "+letter)
//                 }
//             }
//             console.log("Out loop "+letter)
//             if (letter) {
//                 return letter
//             }
//         }
//         return null
// }

// console.log(countNotRepeated('abacddbecf'))

// // 24. Write a JavaScript function to apply Bubble Sort algorithm.
// const bubbleSort = arr => {
//     for (let i=0; i< arr.length; i++){
//         for (let j=0; j<arr.length-1; j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }

//     return arr
// }

// console.log(bubbleSort([5,7,1,2,9]))


// // 25. Write a JavaScript function that accept a list of country names as input and returns thelongest country name as output. 
// // Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// // Expected output : "United States of America"

// const longestCountryName = arr => {
//     let longest = 0
//     let idx = 0
//     for (let i=0; i<arr.length; i++){
//         if(arr[i].length > longest){
//             longest = arr[i].length
//             idx = i
//         }
//     }

//     return arr[idx]
// }

// console.log(longestCountryName(["Australia", "Germany", "United States of America"]))

// // 26. Write a JavaScript function to find longest substring in a given a string without repeatingcharacters.

// const longestSubWithoutRepeated = str => {
//     str = str.split(" ")
//     count = 0
//     idx = 0
//     longestSub = 0
//     str.forEach((subStr,index) => {
//         count = subStr.length
//         let repeated = ''
//         let len = 0
        
//         for (let i=0; i<subStr.length; i++){
//             if(repeated !== subStr[i]){
//                 len++
//                 console.log(`Counting ${subStr} with length=${len}`)
//             }

//             for (let j=0; j<subStr.length; j++){
//                 console.log(`Comparing ${subStr[i]} & ${subStr[j]}`)
//                 if(i !== j){
//                     if(subStr[i].toLowerCase() === subStr[j].toLowerCase()){
//                         repeated = subStr[i]
//                         console.log(`Repeated!`)
//                     }
//                 }
//             }            
//         }
//         console.log(`Updating ${subStr} with length ${len}`)


//         if(len>longestSub){
//             longestSub = len
//             idx = index
//         }
//     });

//     return str[idx]
// }

// console.log(longestSubWithoutRepeated("Asadef Abcdef Abcccfff"))

// // 27. Write a JavaScript function that returns the longest palindrome in a given string.
// // Example output 'bananas' is 'anana' or 'abracadabra' is ['aca','ada'] abcd ab abc abcd bc bcd cd

// const palindromeSubString = str => {
//     let subStr = []
//     let palindromeSub = []
//     let count = 0

//     //Create sub string
//     for (let i=0; i<str.length; i++){
//         for (let j=1; j<str.length; j++){
//             if(i+j < str.length){
//                 subStr.push(str.slice(i,i+j+1))
//             }
//         }
//     }
//     subStr.forEach((string,index) => {
//         isPalindrome(string)
//             ? string.length > count 
//                 ? count = string.length : ""
//             : ""
//     })
    
//     subStr.forEach((string,index) => {
//         isPalindrome(string)
//             ? string.length === count
//                 ? palindromeSub.push(string)                
//                 : ""
//             : ""
//     })

//     return palindromeSub
// }

// console.log(palindromeSubString('bananas'))
// console.log(palindromeSubString('abracadabra'))

// // 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.
// const acceptFunctionOnly = (...params) => {
//     if(typeof params.toString() === 'function'){
//         return true
//     }
//     return false     
// }
// test = ''
// console.log(acceptFunctionOnly(isPalindrome))
// console.log(acceptFunctionOnly(test.toLowerCase()))

// 29. Write a JavaScript function to get the function name.



















