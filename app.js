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


// Buenas Kevin! Cómo estás?

// Genial que tengas una mentora por ahi :D jaja

// El onclick funciona en mobile igual, lo que es considerado mala práctica, es usarlo en el html como tenes en tus button. Lo ideal es sumarle los eventos en js, con addEventListener, o .onclick ..

// Para no repetir mucho el selector lo que podes hacer es, aprovechando que ya tenes tus cafes en objetos, generar los botones a partir de eso (comentando los que tenes en el html) 

// Basicamente como hiciste con el resúmen de la compra al final:

// // guardo los objetos en un array
// const cafes = [cafe1, cafe2, cafe3, cafe4];

// const botonSi = document.querySelector("#btnSi");
// botonSi.onclick = () => generarDOM()

// function generarDOM() {
//     document.querySelector("#selectorCafe").style.opacity = 1;
//     for (let cafe of cafes) {
// //por cada café creo un elemento nuevo <article>
//         const cafeDOM = document.createElement('article')
// //muestro su nombre y le sume el precio
//         cafeDOM.innerHTML = `<h4>${cafe.nombre}</h4>
//         <span>${cafe.precio}</span>`
// //creo el botón
//         const cafeButton = document.createElement("button")
//         cafeButton.innerText = 'agregar'
// //llama a la función pasandole el cafe correspondiente
//         cafeButton.onclick = () => agregar(cafe)
// //finalmente agrego todo al dom
//         document.querySelector("#selectorCafe").append(cafeDOM, cafeButton)
//     }
// }
// Así evitas las malas prácticas, además de reducir el código. Cualquier duda, consultame! 

// Aprobadas las 2 entregas, ya que cumplen ambos requisitos, 

// Abrazo!

