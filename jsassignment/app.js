function toggle(){
    let image = document.getElementById("image");
    image.style.visibility = "hidden"
    
}

function toggleShow(){
    let image = document.getElementById("image");
    image.style.visibility = "visible";
}

function toggleHideShow(){
    let tglbtn = document.getElementById("tglbtn")
    let image2  = document.getElementById("image2")
    // tglbtn.innerText = "hide"
    // image2.style.visibility = "visible"
    d3.toggle("#image2")
}

// let d3=document.getElementById("d3")
// console.log(d3);
// d3.toggle("#image2")


