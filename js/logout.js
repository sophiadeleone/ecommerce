
let linkLogout = document.querySelector(".logout_nav")

linkLogout.addEventListener("click", function(){
    localStorage.clear(); //Esto elimina los datos del usuario(mail de registro) y lo que el usuario agrego al carrito (Id, NumId)
    //por las condiciones que usamos cuando programamos el js de login, logout y saludo, cuando el local storage esta vacio, se oculta el enlace de logout y el bienvenido email y te muestra login y registro por lo que no es necesario hacerlo nuevamente

})















/** DELFI GERARDI
botonCerrarSession.addEventListener("click", function(){
    localStorage.removeItem("mail"); 
    document.querySelector("#textologin").innerText="login "  
    document.querySelector document.getElementById("algo").style.display = "none";
})*/
