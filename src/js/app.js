let name = "";
let surname = "";
let age = "";

while (name === "") {
    name = prompt("Adınızı daxil edin:");
    if (name === "") {
        alert("Xahiş edirik Adınızı daxil edin!");
    }
}

while (surname === "") {
    surname = prompt("Soyadınızı daxil edin:");
    if (surname === "") {
        alert("Xahiş edirik Soyadınızı daxil edin!");
    }
}

while (age === "") {
    age = parseInt(prompt("Yaşınızı daxil edin:"));
    if (isNaN(age)) {
        alert("Xahiş edirik Yaşınızı daxil edin!");
        age = "";
    }
}

if (age < 18) {
    alert("Qeydiyyat keçmək üçün yaşınız azdır!");
} else if (age > 18) {
    alert("Qeydiyyat üçün yaşınız çoxdur!");
} else {
    alert("Qeydiyyat uğurla tamamlandı!");
}
