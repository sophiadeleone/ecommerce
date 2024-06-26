//console.log("index.js");

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
        let elementosJew = '';

        //Paso 2 bsucar los datos y actualizar el paso1
        for(let i=0; i<info.length; i++){
            elementosJew += `<article class="div-hom-elemento-accesorios">
                                <img class="imghom" src=${info[i].image} alt="${info[i].id}">
                                <p class="p_home" >Nombre: ${info[i].title}</p>
                                <p class="p_home" >Descripcion: ${info[i].description}</p>
                                <p>Precio: $ ${info[i].price}</p>
                                <a class="bot-hom-ver" href="producto.html?id=${info[i].id}">Ver mas</a>
                            </article>`
        }
        console.log(elementosJew);

        //Paso 3: reinviar datos actualizados al DOM
        accesorios.innerHTML = elementosJew;

    })
    .catch(function(error){
        console.log(error);
    })



//women s clothing 

let urlWom= "https://fakestoreapi.com/products/category/women's%20clothing"
//El espacio en Js se reemplaza por %20

    fetch(urlWom) //Url de la API en categoria women's clothing
    .then(function(response){ //recibe info obtenida por fetch
        return response.json(); //decodifica la info y lo convierte en objeto literal
    })
    .then(function(data){ //recibio mi info decodificada
        console.log(data); //Muestro por consola.
        let infow = data; //Array de datos que vinieron de la API
        
        //Paso1: capturar elemento del DOM
        let women = document.querySelector('.women');
        let elementosWom = '' //variable vacia para almacenar informacion del for

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
        //console.log(elementosWom);

        //Paso 3: reinviar datos actualizados al DOM
        women.innerHTML = elementosWom;

    })
    .catch(function(error){
        console.log(error);
    });

/// MEN S CLOTHING

let urlMen= "https://fakestoreapi.com/products/category/men's%20clothing"
//El espacio en Js se reemplaza por %20

    fetch(urlMen) //Url de la API en categoria men's clothing
    .then(function(response){ //recibe info obtenida por fetch
        return response.json(); //decodifica la info y lo convierte en objeto literal
    })
    .then(function(data){ //recibio mi info decodificada
        console.log(data); //Muestro por consola.
        let infomen = data; //Array de datos que vinieron de la API
        
        //Paso1: capturar elemento del DOM
        let men = document.querySelector('.men');
        let elementosMen = '' //variable vacia para almacenar informacion del for

        //Paso 2 bsucar los datos y actualizar el paso1
        for(let i=0; i<infomen.length; i++){
            elementosMen += `<article class="div-hom-elemento-accesorios">
                                <img class="imghom" src=${infomen[i].image} alt="${infomen[i].id}">
                                <p class="p_home" >Nombre: ${infomen[i].title}</p>
                                <p class="p_home" >Descripcion: ${infomen[i].description}</p>
                                <p>Precio: $ ${infomen[i].price}</p>
                                <a class="bot-hom-ver" href="producto.html?id=${infomen[i].id}">Ver más</a>
                            </article>`
        }
        //console.log(elementosMen);

        //Paso 3: reinviar datos actualizados al DOM
        men.innerHTML = elementosMen;

    })
    .catch(function(error){
        console.log(error);
    })


/// ELECTRONICS

let urlelec= "https://fakestoreapi.com/products/category/electronics"
//El espacio en Js se reemplaza por %20

    fetch(urlelec) //Url de la API en categoria men's clothing
    .then(function(response){ //recibe info obtenida por fetch
        return response.json(); //decodifica la info y lo convierte en objeto literal
    })
    .then(function(data){ //recibio mi info decodificada
        console.log(data); //Muestro por consola.
        let infoElec = data; //Array de datos que vinieron de la API
        
        //Paso1: capturar elemento del DOM
        let electro = document.querySelector('.electro');
        let elementosElec = '' //variable vacia para almacenar informacion del for

        //Paso 2 bsucar los datos y actualizar el paso1
        for(let i=0; i<infoElec.length; i++){
            elementosElec += `<article class="div-hom-elemento-accesorios">
                                <img class="imghom" src=${infoElec[i].image} alt="${infoElec[i].id}">
                                <p class="p_home" >Nombre: ${infoElec[i].title}</p>
                                <p class="p_home" >Descripcion: ${infoElec[i].description}</p>
                                <p>Precio: $ ${infoElec[i].price}</p>
                                <a class="bot-hom-ver" href="producto.html?id=${infoElec[i].id}">Ver más</a>
                            </article>`
        }
        //console.log(elementosElec);

        //Paso 3: reinviar datos actualizados al DOM
        electro.innerHTML = elementosElec;

    })
    .catch(function(error){
        console.log(error);
    })



//INDEX DELFINA GERARDI (CODGIGO COMO COMENTARIO)

//products.forEach(function(product) {
    // Iterar sobre cada producto y crear elementos en el DOM

        // Crear un elemento de producto en el DOM
        //let productElement = document.createElement('div');
        //productElement.innerHTML = `
            //<h3>${product.title}</h3>
            //<p>${product.description}</p>
            //<p>Precio: $${product.price}</p>
            //<button class="ver-mas" data-product-id="${product.id}">Ver más</button>
        //`;
        
     //}

        // Agregar el elemento de producto al DOM
 //       document.body.appendChild(productElement);
   //  });