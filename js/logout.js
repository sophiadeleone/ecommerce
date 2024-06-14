let botonCerrarSession = document.querySelector("#botoncerrarsesion")

botonCerrarSession.addEventListener("click", function(){
    localStorage.removeItem("mail"); 
    document.querySelector("#textologin").innerText="login "  
 // document.querySelector document.getElementById("algo").style.display = "none";
})
