var x = 0
var o = 0
function xo(String){
	for(var i = 0 ; i<= String.length; i++) {
		if (String[i] == 'x'){
			x++
		}
		else if (String[i] == 'o') {
			o++
		}
	}
	return x == o
}
console.log(xo('xoxoxoxoxo'))