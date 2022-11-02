let searchInp = document.getElementById("input-search");
let searchDiv = document.getElementById("search-div");
let submSearch = document.getElementById("subSearch")
// code for translate input search
searchInp.onfocus = function() {
    searchDiv.style.borderColor = "red"
    searchDiv.style.borderRight = "1px solid red"
    submSearch.style.transform = "translateX(65%)"
    submSearch.style.backgroundColor = "red"
    submSearch.style.letterSpacing = "3px"
    searchInp.style.width = "100%"
}
searchInp.onblur = function() {
    searchDiv.style.borderColor = "#1e88e5"
    searchDiv.style.borderRight = "none"
    submSearch.style.transform = "translateX(0)"
    submSearch.style.backgroundColor = "#1e88e5"
    submSearch.style.letterSpacing = "1px"
    searchInp.style.width = "70%"
}




let linksIcon = document.getElementById("links-icon");
let links  = document.getElementById("links");
let secondSpan = document.querySelectorAll("#links-icon span")[1];



click = 1

function check() {
    if(click === 1) {
        linksIcon.onclick = function(){
            links.style.opacity = 1;
            links.style.display = "block"
            secondSpan.style.width = "100%"
            click = 2
            console.log(click)
            links.onmouseleave = function() {
                links.style.opacity = 0;
                links.style.display = "none"
                secondSpan.style.width = "60%"
            }
        }
    }
}check()
let upButton = document.getElementById("to-up");

let about = document.getElementById("about");
let aboutBoxes = document.querySelectorAll(".container .about-box");

let product = document.getElementById("product");
let productContainer = document.getElementById("product-container");

let testmonialse = document.getElementById("testmonialse");
let testContainer = document.getElementById("test-container");

let allNews = document.getElementById("latest-news");
let newBox = document.querySelectorAll(".container .box-new");


window.onscroll = function() {
    // code to translate button 
    if(window.scrollY >= 400) {
        upButton.style.transform = "translateX(0)"
    }else {
        upButton.style.transform = "translateX(100px)"
    }

    // code for transform all about boxes
    if(window.scrollY >= about.offsetTop) {
        aboutBoxes.forEach((b)=>{
            b.style.transform = "translate(0)";
            b.style.opacity = 1;
        })
    }else {
        aboutBoxes[0].style.transform = "translateY(-400px)";
        aboutBoxes[1].style.transform = "translateY(400px)";
        aboutBoxes.forEach((b)=>{
            b.style.opacity = 0;
        })
    }

    // code for transform all product boxes
    if(window.scrollY >= product.offsetTop - 200) {
        productContainer.style.transform = "translateX(0%)";
    }else {
        productContainer.style.transform = "translateX(-115%)";
    };

    // code for transelate to up  
    if(window.scrollY >= testmonialse.offsetTop - 400) {
        testContainer.style.transform = "translateY(0)";
    }else {
        testContainer.style.transform = "translateY(200%)";
    };

    // code for transform all news boxes
    if(window.scrollY >= allNews.offsetTop - 200) {
        newBox.forEach((e)=>{
            e.style.transform = "translate(0)";
            e.style.opacity = 1;
        });
    }else {
        newBox[0].style.transform = "translateX(-400px)";
        newBox[1].style.transform = "translateY(500px)";
        newBox[2].style.transform = "translateX(400px)";
        newBox.forEach((e)=>{
            e.style.opacity = 0;
        });
    };
};
// event on button to scroll to over my website
upButton.addEventListener("click",()=>{
    window.scroll (
        {
            top:0
        }
    )
})

// code for changing images of features

let myImg = document.getElementById("imgChange");

let contImages = [
    "store-images/pexels-photo-95.jpeg",
    "store-images/pexels-photo-6238229.webp",
    "store-images/back.jpeg",
    "store-images/pexels-photo-5622871.webp",
    "store-images/pexels-photo-871495.webp",
    "store-images/pexels-photo-1462637.webp"
]
let myInterval = setInterval(()=> {

    imgrandomNum = Math.floor(Math.random() * contImages.length);

    myImg.setAttribute("src" , contImages[imgrandomNum])
    
},2000) 
