/******************************* Start JS Navbar Menu  **************************************/
const body = document.querySelector("body"),
nav = document.querySelector("nav"),
sidebarOpen = document.querySelector(".bxMenu"),
siderbarClose = document.querySelector("siderbarClose");

sidebarOpen.addEventListener("click" , () => {
  nav.classList.add("active")
});
body.addEventListener("click", e => {
  let clickedElm = e.target;

  if(!clickedElm.classList.contains("bxMenu") && !clickedElm.classList.contains("menu")){
    nav.classList.remove("active")
  }
})
/******************************* Start JS Navbar Menu  **************************************/



