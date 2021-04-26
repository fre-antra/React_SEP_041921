// const arr = [0, 2, 3, 6, 7, 5, 4]
// let num = 6;

// const findPare = (arr, num) => {
//     const map = {};
//     for (let ele of arr) {
//         if (map[ele]) map
//     }
// }

// const findPare = (arr, num) => {
//     const res = [];
//     arr.sort(); // ⇐=======

//     let i = 0;
//     let j = arr.length - 1;
//     while (arr[i] < arr[j]) {
//         if (num > arr[i] + arr[j]) { // you right...
//             i++;
//         } else if (num < arr[i] + arr[j]) {
//             j--;
//         } else if (num === arr[i] + arr[j]) {
//             res.push([arr[i], arr[j]]);
//             i++;
//             j--;
//         }
//     }
//     return res;
// } // I pass the test on my side for this

// console.log(findPare(arr, num));

function strToLeet(str) {
    const leetMap = {
      'A': 4,
      'E': 3,
      'I': 1,
      'O': 0,
      'S': 5,
      'T': 7,
      'D': 5,
    }
    return [...str].map(char => {
        return leetMap[char] !== undefined ? leetMap[char] : char
      }).join('')
  }
  const input1 = "Let's have some fun."
  const expect1 = "L37'5 h4v3 50m3 fun."
  const input2 = "C is for cookie, that's good enough for me"
  const expect2 = "C 15 f0r c00k13, 7h47'5 g005 3n0ugh f0r m3"
  const input3 = "By the power of Grayskull!"
  const expect3 = "By 7h3 p0w3r 0f Gr4y5kull!"
  console.log(strToLeet(input1) === expect1)
  console.log(strToLeet(input2) === expect2)
  console.log(strToLeet(input3) === expect3)
