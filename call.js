let now = new Date();
let time = String(now.getHours()) + ":" + String(now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes());
let count = 0;

document.getElementById("time").innerText = time; // 시간
document.getElementById("options").style.display = "none";
document.getElementById("calling").style.display = "none";

document.addEventListener("click", (event) => {
  // 버튼 이벤트
  const target = event.target;
  const btnValue = target.value;
  console.log(event);
  console.log(target);
  if (btnValue == "call") {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("options").style.display = "grid";
    document.getElementById("calling").style.display = "block";
    timeoutId = setInterval(() => {
      let dot = ".";
      if (count > 2) {
        count = 0;
        document.getElementById("dot").innerText = "";
      }
      else {
        document.getElementById("dot").innerText += dot;
        count++;
      }
    }, 500);
  }
  if(btnValue >= 0 && btnValue <= 9) {
    document.querySelector("input").value += btnValue;
  }
  if (btnValue == "endCall") {
    document.getElementById("options").style.display = "none";
    document.getElementById("buttons").style.display = "grid";
    document.getElementById("calling").style.display = "none";
    document.querySelector("input").value = "";
    clearInterval(timeoutId);
    count = 0;
  }
});
