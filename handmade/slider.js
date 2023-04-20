//

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let x = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
	x[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}

//agrh

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function showSlides2(m) {
  let o;
  let y = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (m > y.length) {slideIndex2 = 1}    
  if (m < 1) {slideIndex2 = y.length}
  for (o = 0; o < y.length; o++) {
     y[o].style.display = "none";  
  }
  for (o = 0; o < dots2.length; o++) {
    dots2[o].className = dots2[o].className.replace(" active", "");
  }
	y[slideIndex2-1].style.display = "block";  
	dots2[slideIndex2-1].className += " active";
}


//