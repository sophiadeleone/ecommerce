let qs = location.search;
let qsObj = new URLSearchParams(qs);
let id = qsObj.get("id");
let urlProductosCategory =`https://fakestoreapi.com/products/category/${id}`;
console.log ("qs: ",qs);
console.log("qsObj: ", qsObj);
console.log("id: ",id);


// Obtener los productos de la categoría de la API
fetch(urlProductosCategory)
   .then(function(res) {
       return res.json();
   })
   .then(function(products) {
    products.forEach(function(product) {
       // Iterar sobre cada producto y crear elementos en el DOM
       
           // Crear un elemento de producto en el DOM
           const productElement = document.createElement('div');
           productElement.innerHTML = `
               <h3>${product.title}</h3>
               <p>${product.description}</p>
               <p>Precio: $${product.price}</p>
               <button class="ver-mas" data-product-id="${product.id}">Ver más</button>
           `;
          

           // Agregar el elemento de producto al DOM
           document.body.appendChild(productElement);
        });
    })
    .catch(function(error) {
        console.error('Error al obtener los productos:', error);
    });    
