/*variaveis
exemplo
- var: nao usada mais 
- const: nao muda
- let: variavel que pode mudar
*/

const abacate = "Oi, eu sou um abacate"
const pera = "Oi, eu sou uma pera" 

const numero1 = 100 
const numero2 = 200 
 // exemplo de função
 // só acontece quando chamada  

function soma (){
    const somatoria = numero1 + numero2
    console.log(somatoria)
}

const form =  document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector (".mascara-formulario")

function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function cliqueiNaMascara(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

