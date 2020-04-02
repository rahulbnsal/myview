var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
var slideInd = 0;
showSlide();

function showSlide() {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideInd++;
  if (slideInd > slides.length) {slideInd = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideInd-1].style.display = "block";  
  dots[slideInd-1].className += " active";
  setTimeout(showSlide, 4000); // Change image every 2 seconds
}
var slide = 0;
showslide();

function showslide() {
  var i;
  var slides = document.getElementsByClassName("mySlid");
  var dots = document.getElementsByClassName("dotss");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slide++;
  if (slide > slides.length) {slide = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide-1].style.display = "block";  
  dots[slide-1].className += " active";
  setTimeout(showslide, 4000); // Change image every 2 seconds
}