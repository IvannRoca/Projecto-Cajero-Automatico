

var cuentas = [
    { nombre: "Laura", saldo: 200, password: "1234" },
    { nombre: "Lucas", saldo: 290, password: "1234" },
    { nombre: "Alfredo", saldo: 67, password: "1234" }
];

var selectedAccount = null;


document.addEventListener("DOMContentLoaded", function() {
    var accountSelect = document.getElementById("account");
    cuentas.forEach((cuenta, index) => {
        var option = document.createElement("option");
        option.value = index;
        option.text = cuenta.nombre;
        accountSelect.appendChild(option);
    });
});

document.getElementById("select-account").addEventListener("click", function() {
    var accountIndex = document.getElementById("account").value;
    if (accountIndex !== "") {
        selectedAccount = cuentas[accountIndex];
        document.getElementById("account-selection").classList.add("hidden");
        document.getElementById("password-section").classList.remove("hidden");
    } else {
        alert("Por favor, selecciona una cuenta.");
    }
});

document.getElementById("enter-password").addEventListener("click", function() {
    var enteredPassword = document.getElementById("password").value;
    if (enteredPassword === selectedAccount.password) {
        document.getElementById("password-section").classList.add("hidden");
        document.getElementById("actions-section").classList.remove("hidden");
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
});

document.getElementById("check-balance").addEventListener("click", function() {
    document.getElementById("result").textContent = `Tu saldo actual es $${selectedAccount.saldo}.`;
    document.getElementById("result").classList.remove("hidden");
});

document.getElementById("deposit-money").addEventListener("click", function() {
    var amount = prompt("¿Cuánto deseas ingresar?");
    if (amount !== null && !isNaN(amount)) {
        amount = parseFloat(amount);
        if (selectedAccount.saldo + amount <= 990) {
            selectedAccount.saldo += amount;
            document.getElementById("result").textContent = `Has ingresado $${amount}. Tu nuevo saldo es $${selectedAccount.saldo}.`;
        } else {
            alert("No puedes tener más de $990 en tu cuenta.");
        }
    } else {
        alert("Por favor, ingresa un monto válido.");
    }
    document.getElementById("result").classList.remove("hidden");
});

document.getElementById("withdraw-money").addEventListener("click", function() {
    var amount = prompt("¿Cuánto deseas retirar?");
    if (amount !== null && !isNaN(amount)) {
        amount = parseFloat(amount);
        if (selectedAccount.saldo - amount >= 10) {
            selectedAccount.saldo -= amount;
            document.getElementById("result").textContent = `Has retirado $${amount}. Tu nuevo saldo es $${selectedAccount.saldo}.`;
        } else {
            alert("No puedes tener menos de $10 en tu cuenta.");
        }
    } else {
        alert("Por favor, ingresa un monto válido.");
    }
    document.getElementById("result").classList.remove("hidden");
});

document.getElementById("logout").addEventListener("click", function() {
    selectedAccount = null;
    document.getElementById("actions-section").classList.add("hidden");
    document.getElementById("password-section").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("account-selection").classList.remove("hidden");
    document.getElementById("password").value = "";
    
});
