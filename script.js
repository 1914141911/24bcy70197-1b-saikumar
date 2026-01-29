let balance = 1000;

// Elements
const balanceDisplay = document.getElementById("balance-display");
const amountInput = document.getElementById("amount");
const errorMessage = document.getElementById("error-message");
const withdrawBtn = document.getElementById("withdraw-btn");

// Update balance text
function updateBalance() {
  balanceDisplay.textContent = `Balance: $${balance.toFixed(2)}`;
}

// Deposit function (CALLED FROM HTML)
function handleDeposit() {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    errorMessage.style.display = "block";
    return;
  }

  balance += amount;
  amountInput.value = "";
  errorMessage.style.display = "none";
  updateBalance();
}

// Withdraw function
withdrawBtn.addEventListener("click", function () {
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0 || amount > balance) {
    errorMessage.style.display = "block";
    return;
  }

  balance -= amount;
  amountInput.value = "";
  errorMessage.style.display = "none";
  updateBalance();
});

// Initialize
updateBalance();
