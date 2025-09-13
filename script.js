document.getElementById("submitBtn").addEventListener("click", function() {
  const minutes = document.getElementById("dailyMinutes").value;
  const feedback = document.getElementById("feedback");

  if(!minutes || minutes <= 0) {
    feedback.innerText = "Please enter a valid number!";
    feedback.style.color = "red";
    return;
  }

  const weeklyMinutes = minutes * 7;
  const waterLiters = (weeklyMinutes * 0.025).toFixed(2);
  const cups = Math.round(waterLiters / 0.25);

  feedback.innerHTML = `
    Daily usage: ${minutes} minutes<br>
    Weekly AI water consumption: <b>${waterLiters} liters</b> (~${cups} cups) 💧
  `;
  feedback.style.color = "lightgreen";
});
