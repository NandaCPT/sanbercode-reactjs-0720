// Jawaban Soal 1
var angka = 0;
var angka2 = 20;

console.log("LOOPING PERTAMA");
while ( angka <= 20){
	angka+=2;
	console.log( angka + "-" + "I Love Koding");
}
console.log("LOOPING KEDUA");
while ( angka2 > 0){
	console.log( angka2 + " " + "-" + " " + "I will become a frontend developer");
	angka2-=2;
}

// Jawaban Soal 2
for (var angka = 1; angka <=20; angka++) {
	if (((angka%3)==0) && (angka%2) ==1){
		console.log(angka + " " + "-" + " " + "I Love Coding");
	}
	else if((angka%2)==0){
		console.log(angka + " " + "-" + " " + "Berkualitas");
	}
	else if ((angka%2)==1){
		console.log(angka + " " + "-" + " " + "Santai");
	}
}

// Jawaban Soal 3
var pagar = "";
for (var i=0; i<=6; i++){
	for (var j=0; j<=i; j++){
		pagar += "#";
	}
	pagar += "\n";
}
console.log(pagar);

// Jawaban Soal 4
var kalimat="saya sangat senang belajar javascript"
var kalimat = kalimat.split(" ");
console.log(kalimat);

// Jawaban Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var daftarBuah = daftarBuah.sort();
for (var i=0; i<=4; i++){
console.log(daftarBuah[i]);
}
