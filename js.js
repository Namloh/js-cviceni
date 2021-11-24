
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
    makeNavLinksSmooth( );
    spyScrolling( );
    
};

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

}


const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll('.nav-link');
  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash)
          .scrollIntoView({
            behavior: "smooth"
          });
      });
    }
  }
}

const spyScrolling = () => {
  const sections = document.querySelectorAll('.kus');

  window.onscroll = () => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos + 150) {
        const id = sections[s].id;
        document.querySelector('.active').classList.remove('active');
        document.querySelector("a[href*=" + "\'" + "#" + id + "\'" + "]").classList.add('active');
      }
  }
}

