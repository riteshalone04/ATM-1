const accounts = {
    "Ritesh Alone": { pin: "2006", balance: 10000 },
    "Purushottam alone": { pin: "1972", balance: 15000 }
};

let inputPin = "";

function press(num) {
    if (inputPin.length < 4) {
        inputPin += num;
        document.getElementById('pin-display').value = "*".repeat(inputPin.length);
    }
}

function clearPin() {
    inputPin = "";
    document.getElementById('pin-display').value = "";
}

function validatePin() {
    const selectedUser = document.getElementById('user-selector').value;
    const user = accounts[selectedUser];

    if (inputPin === user.pin) {
        document.getElementById('display-msg').innerText = "Access Granted";
        document.getElementById('screen-content').style.display = "none";
        document.getElementById('menu').style.display = "block";
        document.getElementById('balance-text').innerText = "Balance: $" + user.balance;
    } else {
        alert("Incorrect PIN!");
        clearPin();
    }
}

function withdraw() {
    const selectedUser = document.getElementById('user-selector').value;
    if (accounts[selectedUser].balance >= 500) {
        accounts[selectedUser].balance -= 500;
        document.getElementById('balance-text').innerText = "Balance: $" + accounts[selectedUser].balance;
        alert("Please collect your $500 cash!");
    } else {
        alert("Insufficient Funds!");
    }
}
