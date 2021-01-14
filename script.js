var i = 0;
var txt ="I'm a current student at UCSB pursuring a degree in Computer Science, interested in Web-design, Algorithms, and occasially, competitive programming. Feel free to contact me if you have questions about my resume.";
var slideIndex = 1;
var speed = 30; /* The speed/duration of the effect in milliseconds */

showDivs(slideIndex);


function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }


function typeWriter() {
  if (i <txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
  }
}