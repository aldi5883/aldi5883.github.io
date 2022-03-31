

function windowLoaded() {
  console.log('loaded ok!');
  document.getElementsById('button-1').classList.toggle('was-clicked');
}

window.onload = windowLoaded;
