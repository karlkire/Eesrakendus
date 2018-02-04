// Avalikud muutujad
let clockContainer // = null


window.onload = function () {
  init()
}
.flip-clock-wrapper ul {
  position: relative;
  float: left;
  margin: 5px;
  width: 20px;
  height: 30px;
  font-size: 27px;
  font-weight: bold;
  line-height: 29px;
  border-radius: 6px;
  background: #000;
  }

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()
}

function startClock () {
  window.setInterval(function () {
    const date = new Date()

    clockContainer.innerHTML = date
  }, 1000)

}
