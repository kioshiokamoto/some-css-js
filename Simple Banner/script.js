const banner = document.querySelector(".banner__close");

banner.addEventListener("click", function(){
    this.closest(".banner").style.display = "none";
})

