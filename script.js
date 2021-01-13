var i = 0;
var txt ="I'm a current student at UCSB pursuring a degree in Computer Science, interested in Web-design, Algorithms, and occasially, competitive programming. Feel free to contact me if you have questions about my resume.";


var speed = 30; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}