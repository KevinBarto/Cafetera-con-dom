const carrito = [];


// productos
class Productos {
    constructor(nombre, precio){
    this.nombre = nombre
    this.precio = precio
    }
}

let cafe1 = new Productos ("capuccino" , 300);
let cafe2 = new Productos ("mocca", 200);
let cafe3 = new Productos ("cafe con leche", 250);
let cafe4 = new Productos ("Negro", 100);



const botonSi = document.querySelector("#btnSi");
botonSi.onclick = function(){
    document.querySelector("#selectorCafe").style.opacity = 1;
}


// ESTO LO HICE YO SOLO

// const btnCapu = document.querySelector("#btnCapu");
// btnCapu.onclick = function(){
//     carrito.push(cafe1)
// }

// const btnMocca = document.querySelector("#btnMocca");
// btnMocca.onclick = function(){
//     carrito.push(cafe2)
// }

// const btnLeche = document.querySelector("#btnLeche");
// btnLeche.onclick = function(){
//     carrito.push(cafe3)
// }

// const btnNigga = document.querySelector("#btnNigga");
// btnNigga.onclick = function (){
//     carrito.push(cafe4)
// }

// ESTO ME AYUDO UNA AMIGA PROGRAMADORA , PERO SABIENDO QUE EL ONCLICK ES MALA PRACTICA PORQUE EN MOBIL ES ONTOUCH
function agregar(cafe) {
    console.log(cafe)
    carrito.push(cafe)
}



const finalizar = document.querySelector("#finalizar");
finalizar.onclick = function(){
        carrito.forEach((Productos)=>{
        let recibo =document.createElement("div");
        recibo.innerHTML=`
        <h4>Su cafe es</h4>
        ${Productos.nombre}
        <h4>Su precio es</h4>
        ${Productos.precio}
        `
    document.body.appendChild(recibo);
    
})
}


// const botonNo = document.querySelector("#btnNo");
// botonSi.onclick = function(){
//     let negativo =document.createElement("div")
//     negativo.innerHTML=`*ruido a mate*`
// }