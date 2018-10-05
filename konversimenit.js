function konversi_Menit(menit) {

  var jam = Math.floor(menit / 60)
  var sisa_waktu = (menit % 60)
  
  if (String(sisa_waktu).length == 1) {
    detik = "0"+ sisa_waktu
  }
  var hasil = jam + ":"+ sisa_waktu
  return String (hasil) 
}
console.log(konversi_Menit(63))
console.log(konversi_Menit(60))
