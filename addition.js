// SUM OF ELEMENTS
let sum=function (a){

return function (b){
  if(b){

    return sum(b+a);
  }
else {
  return a;
}
}
}
console.log(sum(1)(2)(3)(8)());
