//class Producto {
//  constructor(id, nombre, precio) {
//    this.id = id;
//    this.nombre = nombre;
//    this.precio = precio;
//  }
//}

//let contenedor = document.getElementById("contenedor");
//contenedor.className = "rojo";
//arreglo que va a contener los productos creados
//const productos = [];

//agregamos los productos creados por la clase Producto al arreglo
//productos.push(new Producto(1, "guitarra", 180000));
//productos.push(new Producto(2, "violin", 50000));
//productos.push(new Producto(3, "piano", 1111111));
//productos.push(new Producto(4, "saxofon", 1013526));
//productos.push(new Producto(5, "trompeta", 160000));
//productos.push(new Producto(6, "teclado", 60000));

//const guardarStorage = (clave, valor) => {
//localStorage.setItem(clave, valor);
//};

//productos.forEach((item) => {
//guardarStorage(item.id, JSON.stringify(item));
//});

//localStorage.setItem("carrito", JSON.stringify(productos));

//boton para eliminar el carrito
let eliminar = document.getElementById("eliminar");
let carrito = [];

//me traigo el carrito del storage
let carritoStorage = localStorage.getItem("carrito");

//si hay carrito lo cargo si no coloco en el dom que no hay productos
if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>No hay productos en el carrito</h2>
  `;

  document.body.append(div);
}



//recorro el carrito y muestro en el dom los productos carrito
carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//elimino el storage, muestro el alert y recargo la pagina
eliminar.addEventListener("click", () => {

  Swal.fire({
    title: "Está seguro de eliminar el carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      //codigo a ejecutar
      Swal.fire({
        title: "Borrado!",
        icon: "success",
        text: "El carrito ha sido borrado",
      });
    }
  });
});

//localStorage.clear();
//location.reload();
//alert("Carrito eliminado");
