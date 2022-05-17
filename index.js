const boton = document.getElementById("enviar");

const procesar = () => {
    var texto = document.getElementById("texto").value;
    console.log(texto.length);
    for(let i=0; i<texto.length; i++) {
        console.log(texto.charAt(i))
    }
}

boton.addEventListener("click", procesar)