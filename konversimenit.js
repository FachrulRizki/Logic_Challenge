function konversi_Menit(menit) {

  var jam = Math.floor(menit / 60)
  var sisa_waktu = (menit % 60)
  
  if (sisa_waktu <= 88) {
    return jam+' : 0'+ sisa_waktu
  }
 
}
console.log(konversi_Menit(63))