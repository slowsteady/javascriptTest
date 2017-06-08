//javascript data structures.

var isEven = function(x){
	console.log(x);
  return (x % 2 == 0)? true : false;
}

var numbers = [1,2,3,4,5,6,7,8,9];
console.log("numbers.every(isEven)");
console.log("---------------------");
numbers.every(isEven);
// 1

console.log("numbers.some(isEven)");
console.log("---------------------");
numbers.some(isEven);
// 1
// 2
console.log("numbers.forEach(function(x)");
console.log("---------------------");

numbers.forEach(function(x){
	console.log((x % 2 == 0));
});

console.log("var myMap = numbers.map(isEven)");
console.log("---------------------");

var myMap = numbers.map(isEven); // array로 만들어줌.
console.log("myMap:"+myMap);
//myMap:false,true,false,true,false,true,false,true,false

console.log("var trueMap = numbers.filter(isEven);");
console.log("---------------------");
var trueMap = numbers.filter(isEven);
console.log("trueMap:"+trueMap);
//filter true value

console.log("var myreduce = numbers.reduce(function(previous, current, index)");
console.log("---------------------");
var myreduce = numbers.reduce(function(previous, current, index){
	return previous + current;
})
//myreduce :45
console.log("myreduce :"+myreduce);
