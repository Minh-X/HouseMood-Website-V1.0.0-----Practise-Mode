const touchToOpen = document.querySelector(".hidden__navigation--open")
const touchToClose = document.querySelector(".hidden__navigation--close")
const hiddenNavigation = document.querySelector(".hidden__nagativation--bar")
touchToOpen.addEventListener("click",function(){
    hiddenNavigation.style.display = "block";
})
touchToClose.addEventListener("click",function(){
    hiddenNavigation.style.display = "none"
})