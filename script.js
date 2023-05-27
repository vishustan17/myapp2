// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

// const unique = Array.from(new Set(numbers));

// if(numbers.length === unique.length) {
//     console.log(`Array doesn't contain duplicates.`);
// } else {
//     console.log(`Array contains duplicates.`);
// }
// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

// const set = new Set(numbers);
//========================================================

// const duplicates = numbers.filter(item => {
//     if (set.has(item)) 
//     {
//         set.delete(item);
//     } else 
//     {
//         return item;
//     }
// });

// console.log(duplicates);
//=========================================================

// var numbers = [1, 8,3, 3, 2, 2, 4, 5, 5, 6];

// var duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
// console.log(duplicates);
// //=====================================================

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index);
// //================================================================
// const arr = [1,1,2,2,3,4,4,5];
// const arr_unique1 = arr => {
//    const res = [];
//    for(let i = 0; i < arr.length; i++)
// {
//       if(arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i]))
//       {
//          continue;
//       };
//       res.push(arr[i]);
//    };
//    return res;
// };
// console.log(arr_unique1(arr));
//================================================================
let phrase = "aaabbbaaaabbb"

function getAllIndices(stringInput) 
{

  for (let i = 0; i < stringInput.length; i++) 
  {
    console.log(stringInput[i] -);
  }
}

getAllIndices(phrase);




