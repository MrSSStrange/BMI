const form = document.getElementById("bmiForm");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultBlock = document.getElementById("result");

function getBMI(weight, heightCm) {
  return weight / ((heightCm / 100) ** 2);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return {
      text: "Недостаточная масса тела",
      className: "alert-warning"
    };
  }

  if (bmi < 25) {
    return {
      text: "Норма",
      className: "alert-success"
    };
  }

  if (bmi < 30) {
    return {
      text: "Избыточная масса тела",
      className: "alert-warning"
    };
  }

  return {
    text: "Ожирение",
    className: "alert-danger"
  };
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    resultBlock.className = "mt-4 alert alert-danger";
    resultBlock.innerHTML = "Введи корректные значения веса и роста.";
    return;
  }

  const bmi = getBMI(weight, height);
  const category = getBMICategory(bmi);

  resultBlock.className = `mt-4 alert ${category.className}`;
  resultBlock.innerHTML = `
    <div class="result-label mb-2">Твой BMI</div>
    <div class="result-number mb-2">${bmi.toFixed(2)}</div>
    <div><strong>${category.text}</strong></div>
  `;
});