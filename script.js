function calculatePercentage() {
    const number = parseFloat(document.getElementById("number").value);
    const percentage = parseFloat(document.getElementById("percentage").value);

    if (isNaN(number) || isNaN(percentage)) {
        document.getElementById("result").textContent = "Please enter both values.";
        return;
    }

    const result = (number * percentage) / 100;

    document.getElementById("result").textContent =
        `${percentage}% of ${number} = ${result}`;
}
function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTenure = parseFloat(document.getElementById("loanTenure").value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
        document.getElementById("emiResult").textContent = "Please enter all values.";
        return;
    }

    const monthlyRate = interestRate / 12 / 100;
    const numberOfPayments = loanTenure * 12;

    const emi =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const formattedEMI = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
}).format(emi);

document.getElementById("emiResult").textContent =
    `Monthly EMI = ₹${formattedEMI}`;
}
function calculateAge() {
    const dateParts = document.getElementById("birthDate").value.split("/");
    const birthDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    const today = new Date();

    if (!document.getElementById("birthDate").value) {
        document.getElementById("ageResult").textContent =
            "Please select your birth date.";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("ageResult").textContent =
        `Your age is ${age} years`;
}
function openCalendar() {
    document.getElementById("hiddenDate").showPicker();
}

function selectDate() {
    const date = document.getElementById("hiddenDate").value;

    if (!date) return;

    const parts = date.split("-");
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;

    document.getElementById("birthDate").value = formattedDate;
}document.getElementById("birthDate").addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 8) {
        value = value.substring(0, 8);
    }

    if (value.length > 4) {
        value = value.substring(0, 2) + "/" +
                value.substring(2, 4) + "/" +
                value.substring(4);
    } else if (value.length > 2) {
        value = value.substring(0, 2) + "/" +
                value.substring(2);
    }

    this.value = value;
});
function calculateDiscount() {
    const originalPrice = parseFloat(document.getElementById("originalPrice").value);
    const discountPercent = parseFloat(document.getElementById("discountPercent").value);

    if (isNaN(originalPrice) || isNaN(discountPercent)) {
        document.getElementById("discountResult").textContent =
            "Please enter both values.";
        return;
    }

    const discountAmount = (originalPrice * discountPercent) / 100;
    const finalPrice = originalPrice - discountAmount;

    const formattedDiscount = new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(discountAmount);

    const formattedFinalPrice = new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(finalPrice);

    document.getElementById("discountResult").textContent =
        `You save ₹${formattedDiscount} | Final price ₹${formattedFinalPrice}`;
}
function calculateGST() {
    const amount = parseFloat(document.getElementById("gstAmount").value);
    const gstRate = parseFloat(document.getElementById("gstRate").value);

    if (isNaN(amount) || isNaN(gstRate)) {
        document.getElementById("gstResult").textContent =
            "Please enter both values.";
        return;
    }

    const gstAmount = (amount * gstRate) / 100;
    const totalAmount = amount + gstAmount;

    const formattedGST = new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(gstAmount);

    const formattedTotal = new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(totalAmount);

    document.getElementById("gstResult").textContent =
        `GST = ₹${formattedGST} | Total = ₹${formattedTotal}`;
}
function showCalculator(id) {
    document.querySelector(".calculator-options").style.display = "none";

    document.querySelectorAll(".calculator-card").forEach(function(calculator) {
        calculator.style.display = "none";
    });

    document.getElementById(id).style.display = "inline-block";
}
document.querySelectorAll(".calculator-card").forEach(function(calculator) {
    calculator.style.display = "none";
});
function showCalculatorOptions() {
    document.querySelectorAll(".calculator-card").forEach(function(calculator) {
        calculator.style.display = "none";
    });

    document.querySelector(".calculator-options").style.display = "flex";
}
function calculateSIP() {
    const monthlyInvestment = parseFloat(document.getElementById("sipInvestment").value);
    const annualRate = parseFloat(document.getElementById("sipRate").value);
    const years = parseFloat(document.getElementById("sipYears").value);

    if (isNaN(monthlyInvestment) || isNaN(annualRate) || isNaN(years)) {
        document.getElementById("sipResult").textContent =
            "Please enter all values.";
        return;
    }

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    const futureValue =
        monthlyInvestment *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);

    const totalInvestment = monthlyInvestment * months;
    const estimatedReturns = futureValue - totalInvestment;

    const format = new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    document.getElementById("sipResult").textContent =
        `Invested ₹${format.format(totalInvestment)} | Returns ₹${format.format(estimatedReturns)} | Value ₹${format.format(futureValue)}`;
}
document.querySelectorAll(".calculator-card").forEach(function(calculator) {
    const inputs = calculator.querySelectorAll("input");

    inputs.forEach(function(input, index) {
        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();

                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    const calculateButton = calculator.querySelector("button");
                    if (calculateButton) {
                        calculateButton.click();
                    }
                }
            }
        });
    });
});