// Soal Nomor 1

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
function arrayToObject(arr) {
    var object = {}
    object.firstName = arr[0][0]
    object.lastName = arr[0][1]
    object.gender = arr[0][2]
    var now = new Date()
    var thisYear = now.getFullYear()
    object.age = thisYear - arr[0][3];
    object.firstName2 = arr[1][0]
    object.lastName2 = arr[1][1]
    object.gender2 = arr[1][2]
    object.age2 = thisYear - arr[1][3];
    console.log("1. " + object.firstName + " " + object.lastName + " : {")
    console.log("   " + "firstName: \"" + object.firstName + "\",");
    console.log("   " + "lastName: \"" + object.lastName + "\",");
    console.log("   " + "gender: \"" + object.gender + "\",");
    console.log("   " + "age: \"" + object.age + "\",");
    console.log("}");
    console.log("2. " + object.firstName2 + " " + object.lastName2 + " : {")
    console.log("   " + "firstName: \"" + object.firstName2 + "\",");
    console.log("   " + "lastName: \"" + object.lastName2 + "\",");
    console.log("   " + "gender: \"" + object.gender2 + "\",");
    console.log("   " + "age: \"" + "Invalid Birth Year" + "\",");
    console.log("}");
}

arrayToObject(people);

var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]

arrayToObject(people2)


// Soal Nomor 2

function shoppingTime(Id, money) {
    object2 = {}
    object2.memberId = Id;
    object2.money = money;
    object2.listPurchased = [];
    object2.changeMoney = undefined;
    
    if (Id == "") {
        console.log("\"Mohon maaf, toko X hanya berlaku untuk member saja\"");
    } else {
        if (money < 50000) {
            console.log("\"Mohon maaf, uang tidak cukup\"");
        } else {
            if (money >= 1500000) {
                object2.listPurchased = "Sepatu Stacattu";
                money = money - 1500000;
                object2.changeMoney = money;
                if (money >= 500000) {
                    object2.listPurchased = ["Sepatu Stacattu", "Baju Zoro"];
                    money = money - 500000;
                    object2.changeMoney = money;
                    if (money >= 250000) {
                        object2.listPurchased.push("Baju H&N");
                        money = money - 250000;
                        if (money >= 175000) {
                            object2.listPurchased.push("Sweater Uniklooh");
                            money = money - 175000;
                            if (money >= 50000) {
                                object2.listPurchased.push("Casing Hp")
                                money = money - 50000;
                                object2.changeMoney = money;
                            }
                        }
                    }
                } else if (money >= 250000) {
                    object2.listPurchased.push("Baju H&N");
                    money = money - 250000;
                    if (money >= 175000) {
                        object2.listPurchased.push("Sweater Uniklooh");
                        money = money - 175000;
                        if (money >= 50000) {
                            object2.listPurchased.push("Casing Hp")
                            money = money - 50000
                            object2.changeMoney = money;;
                } else if (money >= 175000) {
                    object2.listPurchased.push("Sweater Uniklooh");
                    money = money - 175000;
                    if (money >= 50000) {
                        object2.listPurchased.push("Casing Hp")
                        money = money - 50000;
                        object2.changeMoney = money;
                    }   
                } else if ( money >= 50000) {
                    object2.listPurchased.push("Casing Hp")
                    money = money - 50000;
                    object2.changeMoney = money;
                }
                object2.changeMoney = money;
            } else if (money >= 500000 && money < 1500000) {
                object2.listPurchased = "Baju Zoro";
            } else if ( money >= 250000 && money < 500000) {
                object2.listPurchassed = "Baju H&N";
            } else if ( money >= 175000 && money < 250000) {
                object2.listPurchsed = "Sweater Uniklooh";
            } else {
                object2.listPurchased = "Casing handphone";
            }       
            }
            }
        console.log(object2);
        }
    }
}


shoppingTime('1820RzKrnWn08', 2475000);