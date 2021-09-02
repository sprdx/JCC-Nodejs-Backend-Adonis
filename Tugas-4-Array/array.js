// Soal Nomor 1

function range(startNum, finishNum) {
    var arr = [];
    var i = startNum;
    if (startNum < finishNum) {
        do {
            arr.push(i);
            i++;
        }
        while (i <= finishNum);
    } else if (startNum == undefined) {
        arr.pop();
    } else {
        do {
            arr.push(i);
            i--;
        }
        while (i >= finishNum);
    }
    console.log(arr);
}

range(1, 10);
range(54, 50);
range(1);
range();


// Soal Nomor 2

function rangeWithStep(startNum2, finishNum2, step = 1) {
    var arr2 = [];
    var j = startNum2;
    if (startNum2 < finishNum2) {
        do {
            arr2.push(j);
            j = j + step;
        }
        while (j <= finishNum2);
    } else if (startNum2 == undefined) {
        arr2.pop();
    } else {
        do {
            arr2.push(j);
            j = j - step;
        }
        while (j >= finishNum2);
    }
    console.log(arr2);
}

rangeWithStep(1, 10, 2);
rangeWithStep(5, 2, 1);


// Soal Nomor 3

function sum(startNum2, finishNum2, step = 1) {
    var arr2 = [];
    var j = startNum2;
    if (startNum2 < finishNum2) {
        do {
            arr2.push(j);
            j = j + step;
        }
        while (j <= finishNum2);
    } else if (startNum2 == undefined) {
        arr2.pop();
    } else {
        do {
            arr2.push(j);
            j = j - step;
        }
        while (j >= finishNum2);
    }
    var total = 0;
    for (k = 0; k < arr2.length; k++) {
        total = total + arr2[k];
    }
    console.log(total);
}

sum(1, 10);
sum(5, 50, 2);
sum(1);


// Soal Nomor 4


var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(n) {
    console.log("Nomor ID: " + input[n][0]);
    console.log("Nama Lengkap: " + input[n][1]);
    console.log("TTL: " + input[n][2] + " " + input[n][3]);
    console.log("Hobi: " + input[n][4]);
}

dataHandling(0);
dataHandling(1);
dataHandling(2);
dataHandling(3);


// Soal Nomor 5

function balikKata(kata) {
    var baru = "";
    for(var l = kata.length - 1; l >= 0; l--) {
        baru = baru + kata[l];
      }
    console.log(baru);
}

balikKata("Sanbercode");
balikKata("racecar");
balikKata("kasur rusak");
balikKata("haji ijah");
balikKata("I am Sanbers");







