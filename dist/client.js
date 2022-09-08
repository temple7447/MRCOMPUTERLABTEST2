const { appDistributionOrigin } = require("firebase-tools/lib/api")

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









document.querySelector('.entertainment').addEventListener("click",(e)=>{
  const category = "science"
  const url =`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=4391f42befbb4afab31db42c05367f1d`;
  
  fetch(url)
  .then(res=> res.json() )
  .then((data)=>{
      const {articles} = data
      articles.forEach((article) => {
          console.log(article)
          let {urlToImage,title,source,description,url,publishedAt} = article
          document.querySelector('.output').innerHTML +=`<div class="card" style="width: 18rem">
          <img src="${urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h5 class="card-title text-muted">${publishedAt}</h5>
            <p class="card-text">${description}</p>
            <a href="${url}" class="btn btn-primary">Read more</a>
          </div>
        </div>`
      });
  })
  
})




document.querySelector('.technology').addEventListener("click",(e)=>{

  const category = "science"
  const url =`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=4391f42befbb4afab31db42c05367f1d`;
  
      fetch(url)
      .then(res=> res.json() )
      .then((data)=>{
          const {articles} = data
          articles.forEach((article) => {
              console.log(article)
              let {urlToImage,title,source,description,url,publishedAt} = article
              document.querySelector('.output').innerHTML +=`<div style:"padding-top:20px;"><img style="float:left;width:150px;" src="${urlToImage}"><h1>${title}</h1>${source.name}</br>
          ${description} <a href="${url}" target="_blank">${url}</a> </br>${publishedAt}</div>`
          });
      })
})

