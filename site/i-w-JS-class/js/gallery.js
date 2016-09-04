
var originalText = document.getElementById('image').innerHTML;


function upDate(previewPic) {

  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.backgroundImage = 'url("' + previewPic.src + '")';
}

function unDo() {
  
  document.getElementById('image').innerHTML = originalText;
  document.getElementById('image').style.backgroundImage = 'url("")';
}