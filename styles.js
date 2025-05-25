// O código abaixo controla a exibição do menu lateral e o comportamento de rolagem da página 
const btnMenu = document.getElementById("menu-clickable");
const btnCloseMenu = document.getElementById("exit-menu");
const menuContent = document.getElementById("menu-collapse");
const containerScroll = document.getElementById("body");
const shadowMenu = document.getElementById("shadow-menu");

btnMenu.addEventListener("click", () => {
    menuContent.classList.add("menu-ativo");
    shadowMenu.classList.add("menu-ativo");
    containerScroll.classList.add("no-scroll");
});

btnCloseMenu.addEventListener("click", () => {
    menuContent.classList.remove("menu-ativo");
    shadowMenu.classList.remove("menu-ativo");
    containerScroll.classList.remove("no-scroll");
});

shadowMenu.addEventListener("click", () => {
    menuContent.classList.remove("menu-ativo");
    shadowMenu.classList.remove("menu-ativo");
    containerScroll.classList.remove("no-scroll");
});

// O código abaixo controla a exibição do dropdown "jóias" do menu lateral
const btnDropdownMenu = document.getElementById("joias-dropdown");
const dropdownContent = document.getElementById("joias-dropdown-content");

btnDropdownMenu.addEventListener("click", () => {
    dropdownContent.classList.toggle("active");
    btnDropdownMenu.classList.toggle("active-sign");
});