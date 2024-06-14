let recstorage_saludo = localStorage.getItem('mail')

if (recstorage_saludo !== null){
    console.log(recstorage_saludo)
    let headerMail = document.querySelector('.nav-hom');
    headerMail.innerHTML += `<li> Bienvenido: ${recstorage_saludo} </li>
                            <li> <a href="index.html">LOGOUT</a> </li>`

    let register = document.querySelector('.nav_reg');
    register.style.display = 'none';

    let login = document.querySelector('.nav_login');
    login.style.display = 'none';



//AGREGAR li

}else{
    console.log("no hay mail")
}