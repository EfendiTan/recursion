// function fibs(num){
//   const result=[0,1];
//   for(let i=0;i<num-2;i++){
//     result.push(result[i]+result[i+1]);
//   }
//   console.log(result);
// }
// fibs(8);

const result=[0,1];
let i=0;
function fibsRec(num){
  if(num===2){
    return
  }
  result.push((result[i]+result[i+1]))
  i++;
  fibsRec(num-1);
}

fibsRec(8);
console.log(result)
