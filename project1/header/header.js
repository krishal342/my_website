


const navBox = document.getElementById("nav-box");
function toggleMenu(){
    if(navBox.style.display === "none"){
        navBox.style.display = "flex";
    }
    else{
        navBox.style.display = "none";
    }
}

window.addEventListener("resize",()=>{
    if(window.innerWidth > 550){
        navBox.style.display = "flex";
    }
    else{
        navBox.style.display = "none";
    }
})

