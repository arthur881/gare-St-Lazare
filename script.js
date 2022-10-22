
const goTop = document.getElementById("goToTop");
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {

  if(prevScrollpos < 300){
    goTop.classList.remove('visible');
  }else {
    goTop.classList.add('visible');
  }

  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
goTop.addEventListener('click', function() {
  document.body.scrollTop = 0; //for safari
  document.documentElement.scrollTop = 0;
});