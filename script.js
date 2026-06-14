function showTime(){
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if(hours<10){
        hours = "0" + hours;
    }

    if(minutes<10){
        minutes = "0" + minutes;
    }

    if(seconds<10){
        seconds = "0" + seconds;
    }

    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerHTML = time;
}

showTime();
setInterval(showTime, 1000);

const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tipPercent');
const peopleInput = document.getElementById('people');
const tipCalcBtn = document.getElementById('tipCalcBtn');
const tipResultsDiv = document.getElementById('tipResults');

const tipDisplay = document.getElementById('tipAmount');
const totalDisplay = document.getElementById('totalBill');
const eachDisplay = document.getElementById('eachPays');

tipCalcBtn.addEventListener('click', function() {

    let bill = parseFloat(billInput.value);
    let tipPercent = parseFloat(tipInput.value);
    let people = parseInt(peopleInput.value);

    if (isNaN(bill) || bill <= 0) {
        alert('Please enter a valid bill amount');
        return;
    }
    if (isNaN(tipPercent) || tipPercent < 0) {
        alert('Please enter a valid tip percentage');
        return;
    }
    if (isNaN(people) || people < 1) {
        alert('Number of people must be at least 1');
        return;
    }

    let tipAmount = bill * (tipPercent / 100);
    let total = bill + tipAmount;
    let each = total / people;

    tipDisplay.textContent = '₹' + tipAmount.toFixed(2);
    totalDisplay.textContent = '₹' + total.toFixed(2);
    eachDisplay.textContent = '₹' + each.toFixed(2);

    tipResultsDiv.classList.remove('hidden');

});

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const bmiCalcBtn = document.getElementById("bmiCalcBtn");
const bmiResultDiv = document.getElementById("bmiResult");
const bmiValueEl = document.getElementById("bmiValue");
const bmiCategoryEl = document.getElementById("bmiCategory");

bmiCalcBtn.addEventListener("click", function() {
    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    const roundedBMI = bmi.toFixed(1);

    let category = "";
    let color = "";

    if (bmi < 18.5) {
        category = "Underweight";
        color = "#f39c12";
    } else if (bmi < 25) {
        category = "Normal";
        color = "#27ae60";
    } else if (bmi < 30) {
        category = "Overweight";
        color = "#e67e22";
    } else {
        category = "Obese";
        color = "#e74c3c";
    }

    bmiValueEl.textContent = "BMI: " + roundedBMI;
    bmiCategoryEl.textContent = "Category: " + category;
    bmiResultDiv.style.backgroundColor = color + "20";
    bmiResultDiv.style.color = color;
    bmiResultDiv.classList.remove("hidden");
});
