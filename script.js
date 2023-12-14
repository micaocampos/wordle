let palabra="APPLE"; //PALABRA FIJA PARA EMPEZAR
let intentos=6; //las vces que va poder intentar
const input = document.getElementById("guess-input");
const boton= document.getElementById("guess-button");
boton.addEventListener("click",()=>{//funcion anonnima
const intento=input.value.toUpperCase();
if (intentos==0){
    console.log("perdiste");
    return
}
for (const i in palabra){
    if(palabra[i]==intento[i]){
        console.log(intento[i], "verde");
    }else if(palabra.includes(intento[i])){
        console.log(intento[i],"amarillo");
    }
}
intentos--;
    console.log(intento);
});
//console.log("A", "verde");