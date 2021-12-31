let now = new Date();
let time = String(now.getHours()) + ":" + String(now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes());
let count = 0;
let valueLangth = 0;
let arr = ["김변수", "이에러", "오자바", "방코딩", "치킨집♥"];
const callAudio = new Audio();
callAudio.src = "./calling.mp3";

document.getElementById("time").innerText = time;
document.getElementById("options").style.display = "none";
document.getElementById("calling").style.display = "none";

document.addEventListener("click", (event) => {
  const target = event.target;
  const btnValue = target.value;
  if (btnValue == "call") {
    setTimeout(() => {
      document.getElementById("buttons").style.display = "none";
      document.getElementById("options").style.display = "block";
      document.getElementById("calling").style.display = "block";
      document.getElementById("number").innerText = arr[Math.floor(Math.random() * 5)];
      callAudio.play();
      timeoutId = setInterval(() => {
        let dot = ".";
        if (count > 2) {
          count = 0;
          document.getElementById("dot").innerText = "";
        } else {
          document.getElementById("dot").innerText += dot;
          count++;
        }
      }, 500);
    }, 1000);
  }
  if ((btnValue >= 0 && btnValue <= 9) || btnValue == "*" || btnValue == "#") {
    if (valueLangth == 3 || valueLangth == 7) {
      document.querySelector("#number").innerText += "-";
    }
    document.querySelector("#number").innerText += btnValue;
    valueLangth++;
  }
  if (btnValue == "endCall") {
    setTimeout(() => {
      document.getElementById("options").style.display = "none";
      document.getElementById("buttons").style.display = "grid";
      document.getElementById("calling").style.display = "none";
      document.getElementById("number").innerText = "";
      clearInterval(timeoutId);
      callAudio.pause();
      count = 0;
    },1000);
  }
});
