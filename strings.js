// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (n, s) {
		var str = "" ; 
for (var i = 0; i < n; i++) {
	str = str + s ;
}
return str ; 
	}