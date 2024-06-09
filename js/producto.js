//Pasos para QS
let qs = location.search; //Obtener la qs de la url aka "?clave=valor" en formato de cadena de texto
let qsto = new URLSearchParams(qs); //Transformar la qs en un Objeto Literal
let id = qsto.get('id'); //Obtener el dato de id del objeto literal

//Armar un nuevo fetch
let url = `https://fakestoreapi.com/products/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);

        //Paso 1: capturar DOM.
        let nombre = document.querySelector('h2');
        let descripcion = document.querySelector('.descripcion_prod.descripcion');
        let precio = document.querySelector('.descripcion_prod.precio');
        let image = document.querySelector('.image');
        let categoria = document.querySelector('.descripcion_prod.categoria');

        //Paso 2 y 3: actualizar datos y actualizar DOM;
        nombre.innerText = data.title;
        descripcion.innerText += data.description;
        precio.innerText = data.price;
        image.src=data.image; //esta bien asi con .src o tiene que ser con .innerHTML?
        categoria.innerText += data.category;      

    })
    .catch(function(error){
        console.log(error);
    })
