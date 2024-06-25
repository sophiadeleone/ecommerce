//ACA EMPIEZA PRODUCTO. SOPHIA DE LEONE

//Pasos para QS
let qs = location.search; //Obtener la qs de la url aka "?clave=valor" en formato de cadena de texto
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let numId = qsto.get('id'); //Obtener el dato de id del objeto literal

//Armar un nuevo fetch
let url = `https://fakestoreapi.com/products/${numId}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        //Paso 1: capturar DOM.
        let nombre = document.querySelector('h2');
        let descripcion = document.querySelector('.descripcion_prod.descripcion');
        let precio = document.querySelector('.descripcion_prod.precio');
        let image = document.querySelector('.image');
        let categoriaProd = document.querySelector('.descripcion_prod.categoria');

        //Paso 2 y 3: actualizar datos y actualizar DOM;
        nombre.innerText += data.title;
        descripcion.innerText += data.description;
        precio.innerText += data.price;
        image.src=data.image; 
        categoriaProd.innerText += data.category; 
        categoriaProd.href = `category.html?id=${data.category}`;
        console.log(data.category);
        localStorage.setItem("id", numId) //solo estoy almacenando el numero, no un objeto, entonces no necesito hacer lo de json.stringify()verdad???
        //numId tiene el mismo valor que  data.id
        //console.log(numId)
    })
    .catch(function(error){
        console.log(error);
    })


    
// ACA EMPIEZA CARRITO. ARTUSI VICTORIA

// 1 ) Array vacio 
let carrito = [];

// recupero storage con propiedad getItem
let recuperar_storage = localStorage.getItem('numId')


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

    //Convertir carrito a JSON antes de guardarloo en el local storage
    let carritoJSON = JSON.stringify(carrito) //mi array con los ID seleccionados
    localStorage.setItem('numId' , carritoJSON)

    console.log('carrito', carrito)
    console.log('localStorage', localStorage)
})