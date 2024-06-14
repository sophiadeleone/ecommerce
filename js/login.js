let formulario = document.querySelector("form"); //capturo el formulario de la pag login.html
let email = document.querySelector("#mail"); 
let contrasena = document.querySelector("#pass");
formulario.addEventListener("submit", function(e) {
    e.preventDefault();  //aca detengo el comporamineto default del formulario q es enviarse

    let mail = email.value; //esto m da lo q el usuario puso en los imputs
    let contra = contrasena.value; //same q arriba

    if (mail===""){
        alert("Por favor complete el campo email");
    }
    else if (contra === "") {
        alert("Por favor complete el campo contraseña");
    }
    else if (contra.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
    }
    else {
        localStorage.setItem("mail", mail) ; //aca guardo el email dell usuario en el locastorage
        formulario.submit();// ya vi todas las condiciones anteriores y le avise si teneia errores. ahora en este if chequeo deneuvo si cumple todas las coniciones, si si,envio el forumlario. 
        window.location.href = "index.html"; //cn est redirige al usuario a la pag prinsipal q es index.html
    }

});
