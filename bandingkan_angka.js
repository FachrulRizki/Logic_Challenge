function perbandingan(angka1,angka2) {
	if (angka2 > angka1){
		return true
	}if (angka1 > angka2){
		return false
	}if (angka2 == angka1){
		return -1
	}
}	console.log(perbandingan(2,6))
	console.log(perbandingan(6,2))
	console.log(perbandingan(6,6))
