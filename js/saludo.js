let recstorage_saludo = localStorage.getItem('mail')

if (recstorage_saludo !== null){
    console.log(recstorage_saludo)
    let headerMail = document.querySelector('.nav-hom');
    headerMail.innerHTML += `<li class="saludo"> Bienvenido: ${recstorage_saludo} </li>
                            <li> <a class="logout_nav" href="index.html">LOGOUT</a> </li>`

    let register = document.querySelector('.nav_reg');
    register.style.display = 'none';

    let login = document.querySelector('.nav_login');
    login.style.display = 'none';

}