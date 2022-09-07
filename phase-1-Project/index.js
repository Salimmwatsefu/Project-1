const baseUrl = "http://localhost:3000/values/1";;

const header = document.getElementById("header");
const interior = document.querySelector("img")
const box1 = document.querySelector("#box1 img");
const box2 = document.querySelector("#box2 img");
const box3 = document.querySelector("#box3 img");
const box4 = document.querySelector("#box4 img");
const box5 = document.querySelector("#box5 img");
const box6 = document.querySelector("#box6 img");
const home = document.getElementById("home");
const line1= document.querySelector(".home-text h1");
const line2 = document.querySelector(".home-text p");
const model1 = document.querySelector("#box1 h3");
const model2 = document.querySelector("#box2 h3");
const model3 = document.querySelector("#box3 h3");
const model4 = document.querySelector("#box4 h3");
const model5 = document.querySelector("#box5 h3");
const model6 = document.querySelector("#box6 h3");
const price1 = document.querySelector("#box1 span");
const price2 = document.querySelector("#box2 span");
const price3 = document.querySelector("#box3 span");
const price4 = document.querySelector("#box4 span");
const price5 = document.querySelector("#box5 span");
const price6 = document.querySelector("#box6 span");
const message = document.querySelector("#message textarea");
const bigHeading = document.querySelector(".heading span");
const interiorText = document.querySelector(".ibox h4");

document.addEventListener("DOMContentLoaded", () => {
});

//search-box
const search = document.querySelector(".search-box");
const search1 = document.querySelector(".search-box #search1");
function Search(item){
let collection = document.getElementsByClassName("cars");
for (i = 0; i < collection.length; i++){
    if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
        collection[i].style.display = "block";
        } else {
            collection[i].style.display = "none";
            }
}
}
document.querySelector("#search-icon").addEventListener("click", function(){
    search.classList.toggle("active");
})
//discover now button
const blueButton = document.querySelector(".home-text a");
blueButton.addEventListener("click", function(e){
    alert("SORRY, WE'RE TEMPORARILY DOWN FOR MAINTENANCE! PLEASE CHECK BACK SOON");
    e.preventDefault()
})
//purchase button
const purchaseButton = document.querySelectorAll(".box .btn");
console.log(purchaseButton)
function purchaseArea(e)
{
    alert("SORRY, WE'RE TEMPORARILY DOWN FOR MAINTENANCE! PLEASE CHECK BACK SOON")
    e.preventDefault();
};

for (i = 0; i < purchaseButton.length; i++) {
    purchaseButton[i].addEventListener("click", purchaseArea);
}

//home page
const page1 = document.getElementById("page1")
page1.addEventListener("click", () =>{
    home.style.background = "url(./photos/home1.jpg)";
    interior.src = "./photos/home.jpg";
    box1.src = "./photos/home2.jpg";
    box2.src = "./photos/blog5.jpg";
    box3.src = "./photos/blog4.jpg";
    box4.src = "./photos/blog3.jpg";
    box5.src = "./photos/blog2.jpg";
    box6.src = "./photos/blog1.jpg";
    line1.innerHTML = "WELCOME!";
    line2.innerHTML = "YOUR NEW" + "<br/>" + "<span>GERMAN</span> MACHINE" + "<br/>" + "MIGHT BE CLOSER THAN YOU THINK"
    interiorText.innerHTML = "Paid partnership with Volkswagen, Mercedes, Audi and BMW";
    bigHeading.innerHTML = "Read Our Blogs";
    model1.innerHTML = "How I got My First BMW";
    price1.innerHTML = "";
    model2.innerHTML = "Why Our Fabrics, Designed By Porsche";
    price2.innerHTML = "";
    model3.innerHTML = "Imports By Salim WORK CULTURE";
    price3.innerHTML = "";
    model4.innerHTML = "Career Opportunities @Imports By Salim";
    price4.innerHTML = "";
    model5.innerHTML = "Meet Our Team @ImportsBySalim";
    price5.innerHTML = "";
    model6.innerHTML = "Why The Switch To Electric Cars";
    price6.innerHTML = "";
})
//benz page...
const benz = document.getElementById("mercedes");
benz.addEventListener("click", () =>{
    home.style.background = "url(./photos/cClass.jpg)";
    interior.src = "./photos/C-Interior.jpg";

    box2.src = "./photos/merc2.jpg";
    box3.src = "./photos/merc3.jpeg";
    box4.src = "./photos/merc4.jpeg";
    box5.src = "./photos/merc5.jpeg";
    box6.src = "./photos/merc6.jpeg";
    line1.innerHTML ="THE C200";
    line2.innerHTML = "KNOWS HOME" + "<br/>" + "AND YOUR HABITS";
    interiorText.innerHTML = "BEAUTIFUL DESIGN, CUTTING EDGE TECHNOLOGY";
    bigHeading.innerHTML = "AVAILABLE CARS";
    //fetching data from db.json
    fetch("http://localhost:3000/values/1")
    .then(function(resp){
    return resp.json();
    })
    .then(function(data){
    model1.innerHTML = data.name;
    price1.innerHTML = data.price;
    box1.src = data.image;
    });

    //continuation without fetching data
    model2.innerHTML = "2015 G WAGON "
    price2.innerHTML = "KES 16,799,999";
    model3.innerHTML = "2015 C 200";
    price3.innerHTML = "KES 3,450,000";
    model4.innerHTML = " 2014 E 250";
    price4.innerHTML = "KES 4,599,999";
    model5.innerHTML = "2014 ML 350";
    price5.innerHTML = "KES 6,830,000";
    model6.innerHTML = "2015 GLE 350";
    price6.innerHTML = "KES 2,799,999";
    
})

//bmw-details
const bmw = document.getElementById("bmw");

bmw.addEventListener("click", () =>{
    home.style.background = "url(./photos/bmwhome.jpg)";
    interior.src = "./photos/binterior.jpg";

    //fetching BMW data drom db.json
    fetch("http://localhost:3000/values/2")
    .then(function(resp){
    return resp.json();
    })
    .then(function(data){
    model1.innerHTML = data.name;
    price1.innerHTML = data.price;
    box1.src = data.image;
    });

    box2.src = "./photos/bmw2.jpeg";
    box3.src = "./photos/bmw3.jpeg";
    box4.src = "./photos/bmw4.jpeg";
    box5.src = "./photos/bmw5.jpeg";
    box6.src = "./photos/bmw6.jpeg";
    line1.innerHTML = "THE X7";
    line2.innerHTML = "THE NEW BMW X7 M60i xDRIVE." +"<br/>" + "ALL ELECTRIC"
    interiorText.innerHTML = "THE PERFECT COCKPIT";
    bigHeading.innerHTML = "AVAILABLE CARS";
    model2.innerHTML = "2015 BMW 523i";
    price2.innerHTML = "KES 2,890,000";
    model3.innerHTML = "2015 BMW X3 XDrive";
    price3.innerHTML = "KES 3,250,000";
    model4.innerHTML = "2008 BMW X5";
    price4.innerHTML = "KES 1,999,999";
    model5.innerHTML = "2014 BMW M235i F22";
    price5.innerHTML = "KES 3,499,999";
    model6.innerHTML = "2012 BMW X3";
    price6.innerHTML = "KES 2,450,000";
})

//porsche-details
const porsche = document.getElementById("porsche");

porsche.addEventListener("click", () =>{
    home.style.background = "url(./photos/porsche2.webp)";
    interior.src = "./photos/pinterior.jpeg";

    //fetching audi data
    fetch("http://localhost:3000/values/3")
    .then(function(resp){
    return resp.json();
    })
    .then(function(data){
    model1.innerHTML = data.name;
    price1.innerHTML = data.price;
    box1.src = data.image;
    });

    box2.src = "./photos/p2.jpg";
    box3.src = "./photos/p3.jpg";
    box4.src = "./photos/p4.jpg";
    box5.src = "./photos/p5.jpg";
    box6.src = "./photos/p6.jpg";
    line1.innerHTML = "<span>THE CAYENNE</span>"
    line2.innerHTML = "Turbo GT";
    interiorText.innerHTML = "A full equiped interior";
    bigHeading.innerHTML = "AVAILABLE CARS";
    model2.innerHTML = "2018 PORSCHE CAYENNE";
    price2.innerHTML = "KES 8,999,999";
    model3.innerHTML = "2016 PORSCHE CAYENNE";
    price3.innerHTML = "6,650,000";
    model4.innerHTML = "2017 PORSCHE CAYENNE";
    price4.innerHTML = "KES 6,999,999";
    model5.innerHTML = "PORSCHE MACAN";
    price5.innerHTML = "KES 7,650,000";
    model6.innerHTML = "2018 PORSCHE 911 TURBO";
    price6.innerHTML = "11,500,000";


})

//audi-details
const audi = document.getElementById("audi");

audi.addEventListener("click", () =>{
    home.style.background = "url(./photos/RS5.jpg)";
    interior.src = "./photos/audiint.jpg";
    box1.src = "./photos/audi1.jpeg";
    box2.src = "./photos/audi2.jpeg";
    box3.src = "./photos/audi3.jpeg";
    box4.src = "./photos/audi4.jpeg";
    box5.src = "./photos/audi5.jpeg";
    box6.src = "./photos/audi6.jpeg";
    line1.innerHTML = "THE RS5"
    line2.innerHTML = "#IT'S ALL ABOUT POWER#"
    interiorText.innerHTML = "Standard quattro® sport rear differential offers precise handling when accelerating through a corner, actively distributing torque between rear axle wheels—where and when it’s needed most.";
    bigHeading.innerHTML = "AVAILABLE CARS";
    model1.innerHTML = "2014 AUDI Q5";
    price1.innerHTML = "KES 3,499,999";
    model2.innerHTML = "2015 AUDI SQ5";
    price2.innerHTML = "KES 5,399,999";
    model3.innerHTML = "2015 AUDI A5";
    price3.innerHTML = "KES 3,199,999";
    model4.innerHTML = "2014 AUDI A4 S-LINE";
    price4.innerHTML = "KES 2,650,000";
    model5.innerHTML = "2014 AUDI A6";
    price5.innerHTML = "2,699,999";
    model6.innerHTML = "2013 AUDI A4";
    price6.innerHTML = "2,150,000";
})

//vw-details
const vw = document.getElementById("vw");

vw.addEventListener("click", () =>{
    home.style.background = "url(./photos/vw6.jpg)";
    interior.src = "./photos/vwi.jpg";
    box1.src = "./photos/vw1.jpeg";
    box2.src = "./photos/vw2.jpeg";
    box3.src = "./photos/vw3.jpeg";
    box4.src = "./photos/vw4.jpeg";
    box5.src = "./photos/vw5.jpeg";
    box6.src = "./photos/vw7.jpeg";
    line1.innerHTML = "GOLF GTI";
    line2.innerHTML = "PRODUCING" + "<br/>" + "301 HP";
    interiorText.innerHTML = "HEATED SPORT SEATS AND BOSE' SOUND SYSTEM";
    bigHeading.innerHTML = "AVAILABLE CARS";
    model1.innerHTML = "2015 VW GOLF GTI";
    price1.innerHTML = "KES 2,500,000";
    model2.innerHTML = "2014 VW TOUAREG";
    price2.innerHTML = "KES 5,100,000";
    model3.innerHTML = "2015 VW GOLF TSI";
    price3.innerHTML = "KES 1,610,000";
    model4.innerHTML = "2014 VW GOLF TSI ";
    price4.innerHTML = "KES 1,500,000";
    model5.innerHTML = "2015 VW GOLF VARIANT";
    price5.innerHTML = "KES 1,750,000";
    model6.innerHTML = "2014 GOLF GTI";
    price6.innerHTML = "KES 2,399,999";
})