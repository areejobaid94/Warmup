 // Given a number return the closest number to it that is divisible by 10.
 // Example :
	// 22 ===> 20
	// 25 ===> 30
	// 37 ===> 40
 
 function closestMultipleOf10(num) {
var nnum = num + 10
var n = 0
for (var i = num ; i < nnum ; i++ ){
if (i % 10 == 0){
n = i
}
} 
return n 
 }