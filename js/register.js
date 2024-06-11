let formulario = document.querySelector("form"); //caputro formulario
let email=document.querySelector("#mail");
let contrasena = document.querySelector("#pass");
let contrasenaDos = document.querySelector("#passDos");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); //detnego comportamiento defaut de form q es enviarse
    
    let mail = email.value; //aka lo que el usurario completo en el campo de email
    let contra = contrasena.value;
    let contraDos = contrasenaDos.value;

    //no quiero que tenga mensajes en los divs de errores previos, asi que al principio te los borra
    document.querySelector(".emailEr").innerText = "";
    document.querySelector(".contrasenaEr").innerText = "";
    document.querySelector(".contrasenaDosEr").innerText = "";

    if (mail===""){
        document.querySelector(".emailEr").innerText = "Por favor complete el campo";
    }
    else if (contra === "") {
        document.querySelector(".contrasenaEr").innerText = "Por favor complete el campo";
    }
    else if (contra.length < 6) {
        document.querySelector(".contrasenaEr").innerText = "Debe ingresar al menos 6 caracteres" ;
    }
    else if (contra !== contraDos) {
        document.querySelector(".contrasenaDosEr").innerText = "Las contraseñas no coinciden" ;
    }
    else { 
        formulario.submit();// ya vi todas las condiciones anteriores y le avise si teneia errores, como no infringe ninguno de los errores, se envia el form
        window.location.href = "login.html"; //cn est redirige al usuario a la pag de login
    }
});

