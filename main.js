const productos = [
      { id: 1, nombre: "bateria", precio: 330.000 },
      { id: 2, nombre: "guitarra", precio: 120.000 },
       { id: 3, nombre: "violín", precio: 110.000},
      { id: 4, nombre: "bajo", precio: 170.000 },
     ];
    
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