document.addEventListener("DOMContentLoaded", spinner());
function spinner(){
    setTimeout(function() {
        document.querySelector(".spinner").style.display = "none";
    },6000)
}
var btn =document.getElementById('btn');

btn.addEventListener('click',spinner);

window.addEventListener("scroll", function(){
    var nav = document.querySelector(".navbar");
nav.classList.toggle("sticky", window.scrollY > 15);
document.body.style.scrollBehavior="smooth";
});

