
class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

//arreglo que va a contener los productos creados
  const productos = [];

  //agregamos los productos creados por la clase Producto al arreglo
productos.push(new Producto(1, "bateria", 330.000));
productos.push(new Producto(1, "guitarra", 330.000));
productos.push(new Producto(1, "violin", 330.000));
productos.push(new Producto(1, "bajo", 330.000));

let nombre = prompt("Ingrese el nombre del producto a  consultar.Para salir escriba ESC .");

while (nombre != "ESC") {
  //declaramos la variable que contendrá el producto en caso de encontrarlo
  let producto;

  //recorremos el arreglo verificando si alguno de los productos cumple con el nombre
  for (const item of productos) {
    if (item.nombre === nombre) {
      producto = item;
    }
  }

  if (producto) {
    let mensaje = `
          Nombre: ${producto.nombre}
          Precio: $${producto.precio}
        `;

    alert(mensaje);
  } else {
    alert("El producto no se encuentra disponible");
  }

  nombre = prompt("Ingrese el nombre del producto a  consultar");
}