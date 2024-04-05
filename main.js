// ------------Dropdown---------------//
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })

//---------------Navbar-------------------/
const mainMenu = document.querySelector(".nav-list");
const open = document.querySelector(".menu-outline");
const close = document.querySelector(".close-outline");

open.addEventListener("click",show);
close.addEventListener("click",hide);

function show() {
  mainMenu.style.top = "0";
  mainMenu.style.transition = "0.9s ease-out";
  open.style.display = "none";
  close.style.display = "block";
}

function hide() {
  mainMenu.style.top = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}




let icons = document.querySelector(".onoffswitch-label");

icons.addEventListener("click",dark);

function dark() {
  document.body.classList.toggle("dark-theme")
}