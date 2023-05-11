let stop = true;
let segundos;
let numero;
const audio = new Audio(
            "assets/sounds/time up.mp3"
          );
function iniciar(reloj) {
  document.getElementById(reloj).disabled = true;
  document.getElementById("init").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("reinit").disabled = false;
  segundos = setInterval(() => {
    switch (reloj) {
      case "countUp":
        document.getElementById(reloj).stepUp();
        break;

      case "timer":
        document.getElementById(reloj).stepDown();
        if (document.getElementById(reloj).value == "00:00:00.000") {
          
          audio.play();
          document.getElementById("init").hidden = true;
  document.getElementById("pause").hidden = true;
  document.getElementById("reinit").hidden = true;
  document.getElementById("title").textContent = "Tiempo!";
  document.getElementById("stop").hidden = false;

        }
        break;
      default:
        break;
    }
  }, 10);
  document.getElementById(reloj).isContentEditable = false;
}

function reiniciar(reloj) {
  clearInterval(segundos);
  document.getElementById(reloj).isContentEditable = true;
  document.getElementById(reloj).disabled = false;
  switch (reloj) {
    case "countUp":
      document.getElementById(reloj).value = "00:00:00.000";
      break;

    case "timer":
      document.getElementById(reloj).value = "00:01:00.000";
      break;
    default:
      break;
  }
  document.getElementById("init").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("reinit").disabled = true;
}
function pausar(reloj) {
  clearInterval(segundos);
  document.getElementById("init").disabled = false;
  document.getElementById("reinit").disabled = false;
  document.getElementById("pause").disabled = true;
}

function mute(reloj) {
   audio.pause();
reiniciar(reloj)
document.getElementById("title").textContent = "Temporizador";
document.getElementById("init").hidden = false;
  document.getElementById("pause").hidden = false;
  document.getElementById("reinit").hidden = false;
  document.getElementById("stop").hidden = true;
}
// }
