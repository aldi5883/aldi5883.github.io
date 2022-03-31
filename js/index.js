

function windowLoaded() {
  console.log('loaded ok!');
  document.getElementById('button-1').classList.toggle('was-clicked');
}

window.onload = windowLoaded;
