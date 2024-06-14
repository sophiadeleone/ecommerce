let recstorage_saludo = localStorage.getItem(mail)

if (recstorage_saludo !== null){
    console.log("hay mail guardado")

}else{
    console.log("no hay mail")
}