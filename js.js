
function openImg(n){

    document.getElementById("2provaz").style.display = "none";
    document.getElementById("2skull").style.display = "none";
    document.getElementById("2feet").style.display = "none";
    document.getElementById("2hole").style.display = "none";
    document.getElementById("2gyard").style.display = "none";
    document.getElementById("2007").style.display = "none";

    document.getElementById(n).style.display = "block";
    document.getElementById('alert').style.display = "inline";
    document.getElementById(n).style.filter = "blur(8px)";

    document.getElementById('gallery').style.display = "none";

}

function closeImg(n){
    document.getElementById(n).style.display = "none";
    document.getElementById('alert').style.display = "none";
    document.getElementById('gallery').style.display = "grid";
}



var slideIndex = 1;
window.onload = function() {
    showSlides(slideIndex);
};

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  

  }

