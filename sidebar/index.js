const closeSidebar = document.querySelector(".close-sidebar");
const toggleSidebar = document.querySelector(".toggle-sidebar");
const contenido = document.querySelector(".content");

toggleSidebar.addEventListener("click", function(){
    contenido.classList.toggle("mostrar");
});

closeSidebar.addEventListener("click", function() {
    contenido.classList.remove("mostrar");
});