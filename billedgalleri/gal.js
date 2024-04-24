const imgView = document.querySelector("#modal-img")
const overlay = document.querySelector(".modal-outer")
const btn = document.querySelector("#close")

btn.onclick = function(){
    overlay.classList.add("hidden")
}


function imgClick(element){
    console.log(element.href)
    //imgView.src = element.href
    imgView.setAttribute("src", element.href)
    overlay.classList.remove("hidden")
}