    const category = "science"
    const url =`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=4391f42befbb4afab31db42c05367f1d`;
    
        fetch(url)
        .then(res=> res.json() )
        .then((data)=>{
            const {articles} = data;
            console.log(data)
console.log(articles)
            
                // let invalidEntries = 0;
                // function filterByID(item) {
                // if (articles.urlToImage != null) {
                // return true;
                // }
                // invalidEntries++;
                // return false;
                // }

                // const arrByID = articles.filter(filterByID);
                //     console.log(arrByID)
                // arrByID.slice(0, 6).forEach((article) => {
                // console.log(article)
                // let {urlToImage,title,source,description,url,publishedAt} = article
                
                // console.log(urlToImage)
            //     document.querySelector('.output').innerHTML +=`<div style:"padding-top:20px;"><img style="float:left;width:300px;" src="${urlToImage}"><h1>${title}</h1>${source.name}</br>
            // ${description} <a href="${url}" target="_blank">${url}</a> </br>${publishedAt}</div>`
            // });
        })






        function myFunction() {
            var input, filter, ul, li, a, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            ul = document.getElementById("myUL");
            li = ul.getElementsByTagName("li");
            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName("a")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {  
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }




         
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
