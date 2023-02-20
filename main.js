// function fibs(num){
//   const result=[0,1];
//   for(let i=0;i<num-2;i++){
//     result.push(result[i]+result[i+1]);
//   }
//   console.log(result);
// }
// fibs(8);

// const result=[0,1];
// let i=0;
// function fibsRec(num){
//   if(num===2){
//     return
//   }
//   result.push((result[i]+result[i+1]))
//   i++;
//   fibsRec(num-1);
// }

// fibsRec(25);
// console.log(result)

// function mergeSort(arr){
//   if(arr.length===1){
//     return
//   }
// }

// mergeSort([9,8,7,6,5,4,3,2,1]);

// const result=[];
// function recursion(num){
//   if(num===1){
//     result[num]=1;
//     return 1;
//   }else if(num===0){
//     result[num]=0;
//     return 0;
//   }
//   return result[num]=(recursion(num-1)+recursion(num-2));
// }

// console.log(recursion(8));
// console.log(result);

function mergeSort(arr){
  if(arr.length===1){
    return
  }
}

mergeSort([9,1,2,7,3,4,5,8,6])
