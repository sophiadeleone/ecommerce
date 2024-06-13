// 1 ) Array vacio 
let carrito = [];

// recupero storage con propiedad getItem
let recuperar_storage = localStorage.getItem('items_cart')


//Creo condicion
if (recuperar_storage != null){

    //.parse por que los datos son string
    let recuperar_strparse = JSON.parse(recuperar_storage)
    carrito = recuperar_strparse
}


// 2 ) capturo el elemento que tiene el link para agregar al carrito
let cartboton = document.querySelector('.agrecarrito')

cartboton.addEventListener('click', function(e){ 

    e.preventDefault();

    //trabajo con cadenas de texto en formato json. Para eso aplico la propiedad .stringify
    carrito.push(numId)

    //Convertir carrito a JSON antes de guardarlo en el local storage
    let carritoJSON = JSON.stringify(carrito) //mi array con los ID seleccionados
    localStorage.setItem('items_cart' , carritoJSON)

    console.log('carrito', carrito)
    console.log('localStorage', localStorage)
})
