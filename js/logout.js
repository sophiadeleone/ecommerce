// RECUPERO STORAGE

let linkLogout = document.querySelector(".logout_nav")

linkLogout.addEventListener("click", function(){
    localStorage.clear(); //Esto elimina los datos del usuario(mail de registro) y lo que el usuario agrego al carrito (Id, NumId)

})















/** DELFINA GERARDI
botonCerrarSession.addEventListener("click", function(){
    localStorage.removeItem("mail"); 
    document.querySelector("#textologin").innerText="login "  
    document.querySelector document.getElementById("algo").style.display = "none";
})*/
