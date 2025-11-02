  let userName = prompt("Введіть ваше ім'я:");
  document.querySelector("h2").textContent = `${userName} vs Комп’ютер`;

  let userScore = 0;
  let compScore = 0;

  document.getElementById("generate").addEventListener("click", () => {
    let userNum = Math.floor(Math.random() * 10) + 1;
    let compNum = Math.floor(Math.random() * 10) + 1;

    document.getElementById("userNum").textContent = userNum;
    document.getElementById("compNum").textContent = compNum;

    if (userNum > compNum) {
      userScore++;
      document.getElementById("result").textContent = `${userName} отримує бал!`;
    } else if (compNum > userNum) {
      compScore++;
      document.getElementById("result").textContent = "Комп’ютер отримує бал!";
    } else {
      document.getElementById("result").textContent = "Нічия!";
    }

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("compScore").textContent = compScore;

    if (userScore === 3) {
      alert(`${userName} переміг!`);
     location.reload();
    } else if (compScore === 3) {
      alert("Комп’ютер переміг!");
      location.reload();
    }
  });
