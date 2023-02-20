/*=========================*/
/*FIBONACCI USING ITERATION*/
/*=========================*/
function fibs(num){
  const result=[0,1];
  for(let i=0;i<num-2;i++){
    result.push(result[i]+result[i+1]);
  }
  console.log(result);
}
fibs(8); // will log [0,1,1,2,3,5,8,13]
/*=========================*/
/*FIBONACCI USING RECURSION*/
/*=========================*/
function fibonacciRecursion(num){
  const result=[];
    function recursion(num){
      if(num<=2){
        result[num-1]=num-1;
        return num-1;
      }
      return result[num-1]=(recursion(num-1)+recursion(num-2));
    }
  recursion(num);
  return result;
}

console.log(fibonacciRecursion(8)); // will log [0,1,1,2,3,5,8,13]
/*=========================*/