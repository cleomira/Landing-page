const openIcon = document.getElementById("open")
const closeIcon = document.getElementById("close")
const navList = document.getElementById("navList")
openIcon.addEventListener("click", ()=>{
    navList.classList.add("show")
})
closeIcon.addEventListener("click", ()=>{
    navList.classList.remove("show")
})