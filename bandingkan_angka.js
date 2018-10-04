var angka1 = 3
var angka2 = 6

function perbandingan(angka1, angka2) {
	if(angka1 == angka2){
		return -1
	}
	return angka1 < angka2
}
console.log(perbandingan(angka1, angka2))
console.log(perbandingan(angka2, angka1))
console.log(perbandingan(angka2, angka2))