const packs = [{pack: 1, precio: 230}, {pack: 2, precio: 330}, {pack: 3, precio: 540}, {pack: 4, precio: 720}];
const sumarEnvio = packs.map(precio => precio.precio += 250);

let pedido = parseInt(prompt("Ingrese que pack quiere comprar!: "));
switch(pedido){
    case 1:
        alert("Elegiste el pack x 4 hamburguesas($230)!");
        alert("El total de tu pedido (con envío) es de $" + sumarEnvio[0]);
        break;

    case 2: 
        alert("Elegiste el pack x 6 hamburguesas ($330)!");
        alert("El total de tu pedido (con envío) es de $" + sumarEnvio[1]);
        break;
    case 3: 
        alert("Elegiste el pack x 10 hamburguesas ($540)!");
        alert("El total de tu pedido (con envío) es de $" + sumarEnvio[2]);
        break;
    case 4: 
        alert("Elegiste el pack x 15 hamburguesas ($720)!");
        alert("El total de tu pedido (con envío) es de $" + sumarEnvio[3]);
        break;    
    default: 
        alert("Ingrese un numero de pack válido.");   
}






