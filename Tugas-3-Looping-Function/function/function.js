// Soal Nomor 1

function teriak() {
    console.log('"Hallo Sanbers!"');
}

teriak();


// Soal Nomor 2

function kalikan(num1, num2) {
    return num1 * num2
}

var hasilKali = kalikan(4, 12);
console.log(hasilKali);


// Soal Nomor 3

function introduce(name, age, adress, hobby) {
    var result = "Nama saya " + name + ", umur saya " + age + " tahun, "
        + "alamat di " + adress + ", dan saya punya hobby yaitu " + hobby + "!"
    return result;
}

var perkenalan = introduce("Agus", "30", "Bandung", "Gaming");
console.log(perkenalan);