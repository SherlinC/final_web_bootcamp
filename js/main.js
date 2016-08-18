
function changeImg(obj){
   document.body.style.backgroundImage= "url(images/wave1.gif)";
}

var slideIndex = 1;
showSlide(slideIndex);

function switchSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slidesArray = document.getElementsByClassName("slides");
    var dotsArray = document.getElementsByClassName("myDot");

    if (n > slidesArray.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slidesArray.length
    } ;

    for (i = 0; i < slidesArray.length; i++) {
       slidesArray[i].className = slidesArray[i].className.replace(" fadeImage", "");
    }

    for (i = 0; i < dotsArray.length; i++) {
       dotsArray[i].className = dotsArray[i].className.replace(" dot-filled", "");
    }
    slidesArray[slideIndex-1].className += " fadeImage";
    dotsArray[slideIndex-1].className += " dot-filled";
}

window.setInterval(function(){
    switchSlide(1);
}, 5000);

function play1(){
       var audio = document.getElementById("audio");
       audio.play();
                 }


function play2(){
       var audio = document.getElementById("audio_1");
       audio.play();
                 }
function play3(){
       var audio = document.getElementById("audio_2");
       audio.play();
                 }    
function play4(){
       var audio = document.getElementById("audio_3");
       audio.play();
                 }                              

function play5(){
       var audio = document.getElementById("audio_4");
       audio.play();
                 }  
function play6(){
       var audio = document.getElementById("audio_5");
       audio.play();
                 }   
function play7(){
       var audio = document.getElementById("audio_6");
       audio.play();
                 }                              

function play8(){
       var audio = document.getElementById("audio_7");
       audio.play();
                 }  
function play9(){
       var audio = document.getElementById("audio_8");
       audio.play();
                 }                     
function play10(){
       var audio = document.getElementById("audio_9");
       audio.play();
                 }  
function play11(){
       var audio = document.getElementById("audio_10");
       audio.play();
                 }
function play12(){
       var audio = document.getElementById("audio_11");
       audio.play();
                 }  
function play13(){
       var audio = document.getElementById("audio_12");
       audio.play();
                 }                     
function play14(){
       var audio = document.getElementById("audio_13");
       audio.play();
                 }  
function play15(){
       var audio = document.getElementById("audio_14");
       audio.play();
                 }                          




