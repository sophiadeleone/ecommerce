//RECUPERO LOCAL STORAGE

let recupero_stCarrito = localStorage.getItem('numId')

//capturo DOM, lo usare mas tarde. 
let lista_dom = document.querySelector('.productos_carrito')

//creo variable 

let productos_carrito = ""

//Creo condicion

if (recupero_stCarrito !== null){
    
    carrito = [];
    let recuperar_strparse = JSON.parse(recupero_stCarrito)
    carrito = recuperar_strparse

    for (let i = 0 ; i < carrito.length; i++){
        const id = carrito[i]
        const url = `https://fakestoreapi.com/products/${id}`

        //armo fetch

        fetch(url)
        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log(data)
            productos_carrito += `<article>
                                    <img src=${data.image} alt="${data.id}">
                                    <p >Nombre: ${data.title}</p>
                                    <p>Descripcion: ${data.description}</p>
                                    <p>Precio: $ ${data.price}</p>
                                    <a href="producto.html?id=${data.id}">Ver más</a>
                                 </article>`
            
                                 lista_dom.innerHTML= productos_carrito

        })
        .catch(function(e){
            console.log(e)
        })

    }
    let finalizarCompra = document.querySelector(".boton_comprar")

    finalizarCompra.addEventListener("click", function(){
        localStorage.clear(); 
        alert("gracias por su compra");
        
    })

} else{
    let mensaje = "No tienes nada en el carrito."
    let mensaje_vacio = document.querySelector(".mensajeCart")
    mensaje_vacio.innerText = mensaje
    
}


