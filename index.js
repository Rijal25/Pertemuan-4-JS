// Teks awal
let teks = "Merah Putih"

// Mengubah teks menjadi Uppercase
let teksUpper = teks.toUpperCase()

// Mengubah teks menjadi lowercase
let teksLower = teks.toLowerCase()

// Mengubah "Putih" menjadi "Muda"
let teksReplace = teks.replace("Putih", "Muda")

// Mengukur panjang teks
let teksLength = teks.length

// Mendefinisikan variable elem
var elem = document.getElementsByTagName("body")[0]

// Menampilkan Teks Awal
elem.innerHTML += "<p>Teks Awal: " + teks + "</p>"
console.log("Teks awal: " + teks)

// Menampilkan Teks Uppercase
elem.innerHTML += "<p>Teks Uppercase: " + teksUpper + "</p>"
console.log("Teks uppercase: " + teksUpper)

// Menampilkan Teks lowercase
elem.innerHTML += "<p>Teks Lowercase: " + teksLower + "</p>"
console.log("Teks lowercase: " + teksLower)

// Menampilkan Teks Replace
elem.innerHTML += "<p>Teks Replace: " + teksReplace + "</p>"
console.log("Teks replace: " + teksReplace)

// Menampilkan Teks length
elem.innerHTML += "<p>Teks Length: " + teksLength + "</p>"
console.log("Teks length: " + teksLength)