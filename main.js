//conteo de 2 pedidos
for (let i = 0; i <= 2; i++) {
    
}

const numeroDeProducto = () => {
let producto = parseInt(prompt("Indique el numero de producto que desee.Para salir escriba ESC ."));
//Repetimos con While hasta que el usuario ingresa "ESC"
do
{
    alert("Su prdocuto es el n°: "+ producto);
   // Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
   producto = prompt("Indique el numero de producto que desee");
}
while(producto >0 && producto<=2)
}

numeroDeProducto ();