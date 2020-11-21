// LEv2_2 Schreibe eine Funktion die einen Countdown zeigt. Die Zahl der Minuten gibst du in einem input Feld. Und es gibt eine Taste "start", "Pause" und "restart" 
// Nutze: setInterval(); clearInterval(); if; toString()

// let date = new Date().toTimeString()
// let minutes= date.getMinutes()
// console.log(minutes);

const time = document.getElementById('time')
const minutes = document.getElementById('minutes')

let myInterval;
let userMinutes;
let userSeconds
const startMinCountdown = () => {
    userMinutes = minutes.value
    userSeconds = userMinutes * 60
    console.log(userMinutes);
    myInterval = setInterval(() => {
        let interMin = Math.floor(userSeconds / 60)
        let interSec = userSeconds % 60
        --userSeconds
        console.log(interMin, ":", interSec);
        time.innerHTML = `${interMin < 10 ? "0" + interMin : interMin}:${interSec < 10 ? "0" + interSec : interSec}`
        if (userSeconds < 0) {
            clearInterval(myInterval)
        }
  }, 1000)
}

//otra opción:
// const startMinCountdown = () => {
//     userMinutes = minutes.value
//     userSeconds = 0
//     console.log(userMinutes);
//     myInterval = setInterval(() => {
//         if (userSeconds === 0) {
//             --userMinutes
//             userSeconds = 59
//         }
//         --userSeconds
//         time.innerHTML = `${userMinutes}:${userSeconds < 10 ? "0" + userSeconds : userSeconds}`
//         if (userMinutes === 0 && userSeconds === 0) {
//             clearInterval(myInterval)
//         }
//     }, 100)
// }

const pauseMinCountdown = () => {
  clearInterval(myInterval)
}
const restartMinCountdown = () => {
  myInterval = setInterval(() => {
      if (userSeconds === 0) {
          --userMinutes
          userSeconds = 59
      }
      --userSeconds
      time.innerHTML = `${userMinutes}:${userSeconds < 10 ? "0" + userSeconds : userSeconds}`
      if (userMinutes === 0 && userSeconds === 0) {
          clearInterval(myInterval)
      }
  }, 1000)
}
let as = 5






