console.log("index.js");

let urlJew= 'https://fakestoreapi.com/products/category/jewelery'

fetch(urlJew)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); //Mostrame por consola.
        let info = data; //Array de datos que vino de la API
        //Paso1: capturar elemento del DOM
        let accesorios = document.querySelector('.accesorios');
        let elementosJew = ''

        //Paso 2 bsucar los datos y actualizar el paso1
        for(let i=0; i<info.length; i++){
            elementosJew += `<article class="div-hom-elemento-accesorios">
                                <img class="imghom" src=${info[i].image} alt="${info[i].id}">
                                <p class="p_home" >Nombre: ${info[i].title}</p>
                                <p class="p_home" >Descripcion: ${info[i].description}</p>
                                <p>Precio: $ ${info[i].price}</p>
                                <a class="bot-hom-ver" href="producto.html?id=${info[i].id}">Ver más</a>
                            </article>`
        }
        console.log(elementosJew);

        //Paso 3: reinviar datos actualizados al DOM
        accesorios.innerHTML = elementosJew;

    })
    .catch(function(error){
        console.log(error);
    })

    console.log("index.js");

//women s clothing 

let urlWom= "https://fakestoreapi.com/products/category/women's%20clothing"

    fetch(urlWom)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data); //Mostrame por consola.
        let infow = data; //Array de datos que vino de la API
        //Paso1: capturar elemento del DOM
        let women = document.querySelector('.women');
        let elementosWom = ''

        //Paso 2 bsucar los datos y actualizar el paso1
        for(let i=0; i<infow.length; i++){
            elementosWom += `<article class="div-hom-elemento-accesorios">
                                <img class="imghom" src=${infow[i].image} alt="${infow[i].id}">
                                <p class="p_home" >Nombre: ${infow[i].title}</p>
                                <p class="p_home" >Descripcion: ${infow[i].description}</p>
                                <p>Precio: $ ${infow[i].price}</p>
                                <a class="bot-hom-ver" href="producto.html?id=${infow[i].id}">Ver más</a>
                            </article>`
        }
        console.log(elementosWom);

        //Paso 3: reinviar datos actualizados al DOM
        women.innerHTML = elementosWom;

    })
    .catch(function(error){
        console.log(error);
    })

    console.log("index.js");