const container = document.querySelector(".container");
const btninfo = document.getElementById("btn-info");
const btnsignup = document.getElementById("btn-sign-up");

btninfo.addEventListener("click",()=>{
    container.classList.remove("toggle");
});
btnsignup.addEventListener("click",()=>{
    container.classList.add("toggle");
});
document.getElementById("miboton").addEventListener("click", function() {
    window.location.href = "tarea2.html";
});


function irpagina(){
    window.location.href="proyec.html";
}
function mostrarPag(id) {
    document.querySelectorAll('.pagina').forEach(p => p.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
}