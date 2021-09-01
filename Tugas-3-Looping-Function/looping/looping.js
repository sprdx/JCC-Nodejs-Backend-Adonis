// Soal Nomor 1

console.log("LOOPING PERTAMA");

var demo = 2;

while (demo <= 20) {
    console.log(demo + " - I love coding");
    demo = demo + 2;
}

console.log("LOOPING KEDUA");

var demo2 = 20;

while (demo2 >= 2) {
    console.log(demo2 + " - I will become a mobile developer");
    demo2 = demo2 - 2;
}

// Soal Nomor 2


for (i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        if (i % 3 == 0) {
            console.log(i + " - I love coding");
        } else {
            console.log(i + " - Santai");
        }
    } else {
        console.log(i + " - Berkualitas");
    }
}


// Soal Nomor 3

var text = "########";
var j = 1;

do {
    console.log(text);
    j++;
}
while (j < 5);

// Soal Nomor 4

var tangga = ""
var k = 0

do {
    console.log(tangga);
    tangga += "#";
    k++;
}
while (k < 8);

// Soal Nomor 5

var catur1 = " # # # #";
var catur2 = "# # # # ";
var l = 1;

do{
    console.log(catur1);
    console.log(catur2);
    l++;
}
while (l < 5);