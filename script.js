showHide=document.getElementsByTagName('a');
showHide[0].addEventListener("click",showText);
showHide[1].addEventListener("click",hideText);
function showText() {
  document.getElementById('text').style.display="block";
}
function hideText() {
  document.getElementById('text').style.display="none";
}
