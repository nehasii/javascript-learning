function toggle() {
  let image = document.getElementById("image");
  image.style.visibility = "hidden";
}

function toggleShow() {
  let image = document.getElementById("image");
  image.style.visibility = "visible";
}

let toggleState = false;

function toggleHideShow() {
  const tglbtn = document.getElementById("tglbtn");
  const image2 = document.getElementById("image2");
  if (toggleState === true) {
    tglbtn.innerText = "show";
    image2.style.visibility = "hidden";
    toggleState = false;
  } else {
    tglbtn.innerText = "hide";
    image2.style.visibility = "visible";
    toggleState = true;
  }
}

