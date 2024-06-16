let formulario = document.querySelector("form"); //caputro formulario
let emailRec = document.querySelector("#mailRe");
let checkRec = document.querySelector("#checkRec");
let todoOkInsturc= document.querySelector(".todoOkInsturc");
let linkLog= document.querySelector(".linkLog");



//no quiero que tenga mensajes en el div de errores previos, asi que al principio le digo que sea un str vacio
document.querySelector(".emailErRec").innerText = "";
document.querySelector(".checkErRec").innerText = "";
document.querySelector(".todoOkInsturc").innerText = "";
document.querySelector(".linkLog").innerHTML = ""; //PREGUNTAR lo dejo como str vacion?

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); //detnego comportamiento defaut de form 
    
    let mailRec = email.value; //aka lo que el usurario completo en el campo de email

    if (mailRec===""){
        document.querySelector(".emailErRec").innerText = "Por favor escriba su email.";
    }else if (!checkRec){ //aca estoy diciendo si el checkboox no esta marcsado (por que checkbox es dato booleando que da true si esta marrcado )
        document.querySelector(".checkErRec").innerText = "Por favor acepte el campo Quiero recuperar mi contraseña";
    }else {
        document.querySelector(".todoOkInsturc").innerText += "Recibirás un email con las instrucciones para recuperar tu contraseña";
        formulario.submit();
        document.querySelector(".linkLog").innerHTML += <a href="login.js" >Ir al login.</a>;
    }
});