let qsCat = location.search;
let qsObj = new URLSearchParams(qsCat);
let id = qsObj.get("id");
let urlProductosCategory =`https://fakestoreapi.com/products/category/${id}`;
console.log ("qs: ",qsCat);
console.log("qsObj: ", qsObj);
console.log("id: ",id);


// Obtener los productos de la categoría de la API
fetch(urlProductosCategory)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
    console.log(data); 
    let divProdCat = document.querySelector (".category-products");
    let elemProdCat = [];

    for(let i=0; i<data.length; i++){
        elemProdCat += `<article>
                            <a href="href="producto.html?id=${data[i].id}"><img src=${data[i].image} alt="${data[i].id}"></a>
                            <p>Nombre: ${data[i].title}</p>
                            <p >Descripcion: ${data[i].description}</p>
                            <p>Precio: $ ${data[i].price}</p>
                            <a href="producto.html?id=${data[i].id}">Ver más</a>
                        </article>`
    }
        divProdCat.innerHTML = elemProdCat;

    })
    
    .catch(function(error) {
        console.error('Error al obtener los productos:', error);
    });    
