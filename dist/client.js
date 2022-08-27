const countdown = document.querySelector('.submitiontime')

const month = "Aug"
const dateof = "25"
const yearof = '2022'
const hourof = "0"
const minuteof = "37"
const secondof = "25"
// Set the date we're counting down to
var countDownDate = new Date(`${month} ${dateof}, ${yearof} ${hourof}:${hourof}:${secondof}`).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    countdown.innerHTML = "EXPIRED";
  }
}, 1000);


const message = document.querySelector('.message')

setInterval(()=>{
  message.style.display = "none"
}, 8000)

const matriculation = document.querySelector('.matriculation')

setInterval(()=>{
  matriculation.style.display = "none"
}, 2000)
const allfield = document.querySelector('.allfield')

setInterval(()=>{
  allfield.style.display = "none"
}, 2000)


console.log(document.querySelector('.datavalue').value)