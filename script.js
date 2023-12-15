let dicccionario=[
    "APPLE",
    "HOUSE",
    "MOUSE",
    "YOUTH",
    "GRADE",
    "FIFTH"
];
let palabra=dicccionario[4];
//let palabra=getWord();
let intentos=6; 
const endpoint = "https://random-word-api.herokuapp.com/word?length=5";
fetch(endpoint).then((response)=>{
    response.json().then((data) =>{
        console.log(data[0]);
    });
});
function getWord(){
    let min=0;
    let max=0;
    let i=Math.floor(Math.random()*(max-min))+min;
    return diccionario[i];
}
const grid = document.getElementById("grid");

const boton= document.getElementById("guess-button");

boton.addEventListener("click",()=>{//funcion anonnima
const intento=leerIntento();
console.clear();

const row=document.createElement("div");
row.className="row";

for(const i in palabra){
    const span=document.createElement("span");
    span.className="letter";
    span.innerHTML=intento[i];
if(palabra[i]==intento[i]){
    span.style.backgroundColor="green";
   // row.appendChild(span)
    //console.log(span);
}else if(palabra.includes(intento[i])){
    span.style.backgroundColor="yellow";
    //row.appendChild(span)
   // console.log(span);
}else{
    span.style.backgroundColor="gray";
    //row.appendChild(span)
   // console.log(span);
}
row.appendChild(span);
}
grid.appendChild(row);
//console.log(row);
if (palabra=== intento){
    terminar("<h1>ganaste</h1>");
    return
}
intentos--;
if(!intentos){
    terminar("<h1>perdiste</h1>");
    return
}

});
function terminar(mensaje){
    const resultado=document.getElementById("guesses");
    resultado.innerHTML='<h1>${mensaje}</h1>';
    //const INPUT = document.getElementById("guess-input");
    resultado.disabled = true;
    boton.disabled = true;
    //let contenedor = document.getElementById('guesses');
   resultado.innerHTML = mensaje;
}
function leerIntento(){
    const input= document.getElementById("guess-input");
    return input.value.toUpperCase();
    //  let intento = document.getElementById("guess-input");
    //intento = intento.value;
    //intento = intento.toUpperCase(); 
    //return intento;
}






