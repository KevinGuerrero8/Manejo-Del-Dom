const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector ('#calculo1');
const input2 = document.querySelector ('#calculo2');
const btn = document.querySelector ('#btnCalcular');
const resultado = document.querySelector ('#result');


form.addEventListener('submit', sumaInputs);

function sumaInputs (){
    event.preventDefault();
    const suma =  parseInt(input1.value)  + parseInt(input2.value);
     resultado.innerText = "Resultado: " + suma;
}




// ----------------------------------------------------

// addEventListener para un boton
// btn.addEventListener('click', btnOnClick);

// function btnOnClick (){
//     const suma =  parseInt(input1.value)  + parseInt(input2.value);
//     resultado.innerText = "Resultado: " + suma;
// }

// ----------------------------------------------------

// atributo parseInt para covertir a numero un string
// function btnOnClick (){
//     console.log( parseInt(input1.value)  + parseInt(input2.value))
// }

// ----------------------------------------------------