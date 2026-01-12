const users = {
    "Ritesh Alone": { pin: "2006", balance: 100000 },
    "Purushottam alone": { pin: "1972", balance: 500000 }
};

let currentUser = "";
let currentPin = "";

function press(n) {
    if (currentPin.length < 4) {
        currentPin += n;
        document.getElementById('pin-display').value = "*".repeat(currentPin.length);
    }
}

function clearPin() {
    currentPin = "";
    document.getElementById('pin-display').value = "";
}

function validatePin() {
    const selected = document.getElementById('user-selector').value;
    if (currentPin === users[selected].pin) {
        currentUser = selected;
        document.getElementById('login-section').style.display = "none";
        document.getElementById('main-menu').style.display = "block";
        document.getElementById('display-msg').innerText = "Welcome, " + currentUser;
    } else {
        alert("Wrong PIN!");
        clearPin();
    }
}

function showBalance() {
    alert("Current Balance: ₹" + users[currentUser].balance.toLocaleString('en-IN'));
}

function showInput(type) {
    document.getElementById('main-menu').style.display = "none";
    document.getElementById('transaction-area').style.display = "block";
    document.getElementById('trans-label').innerText = "Enter " + type + " amount:";
    document.getElementById('confirm-btn').onclick = () => process(type);
}

function process(type) {
    const val = parseInt(document.getElementById('amount-input').value);
    if (!val || val <= 0) return;

    if (type === 'withdraw' && val > users[currentUser].balance) {
        alert("Insufficient balance!");
    } else {
        users[currentUser].balance += (type === 'deposit' ? val : -val);
        alert("Success! Current Balance: ₹" + users[currentUser].balance.toLocaleString('en-IN'));
        backToMenu();
    }
}

function backToMenu() {
    document.getElementById('transaction-area').style.display = "none";
    document.getElementById('main-menu').style.display = "block";
}
