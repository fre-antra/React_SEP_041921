const longestCountryName = (arr) => {
   arr.sort((a, b) => b.length - a.length)
   return arr[0]
}
console.log(longestCountryName(['Australia', 'Germany', 'United States of America']))

