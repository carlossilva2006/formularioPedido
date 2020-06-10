'use strict'

const d = document;

let solicitante,
    fono,
    caract,
    mensaje,
    abono,
    precio,
    tabla,
    bNuevo,
    bAnular,
    bRegistrar,
    filaSelec,
    tipo,
    sabor,
    cobertura,
    tamaño,
    hora
    
solicitante = d.getElementById("Solicitante")
fono        = d.getElementById("Telefono")
caract      = d.getElementById("Caracteristicas")
mensaje     = d.getElementById("Mensaje")
abono       = d.getElementById("Abono")
precio      = d.getElementById("Precio")
tabla       = d.getElementById("tabPedido").tBodies[0]
bNuevo      = d.getElementById("btnNuevo")
bAnular     = d.getElementById("btnAnular")
bRegistrar  = d.getElementById("btnRegistrar")
tipo        = d.getElementById("TipoMasa")
sabor       = d.getElementById("SaborMasa")
cobertura   = d.getElementById("Cobertura")
tamaño      = d.getElementById("Tamaño")
hora        = d.getElementById("Hora")


tipo.addEventListener("click", (e) => {
    for(let i = 0; i< tipo.lenght;i++){
        option.text = tipo[i].text;
    }
})

sabor.addEventListener("click", () => {
    for(let i = 0; i < sabor.lenght; i++){
        option.text = sabor[i].text;
    }
})

cobertura.addEventListener("click", () => {
    for(let i = 0; i < cobertura.lenght; i++)
    option.text = cobertura[i].text;
})

tamaño.addEventListener("click", () => {
    for(let i = 0; i < tamaño.lenght; i++)
    option.text = tamaño[i].value;
})

hora.addEventListener("click", () => {
    for(let i = 0; i < hora.lenght; i++)
    option.text = hora[i].text;
})

bNuevo.addEventListener("click",() => {
    Nuevo();
})

bAnular.addEventListener("click",() => {
    Anular();
})

bRegistrar.addEventListener("click", () => {
    Registrar();
})

const Registrar = () => {
    if(solicitante.value =="" && fono.value =="" && caract.value =="" && 
    mensaje.value =="" && abono.value =="" && precio.value =="" && 
    tipo.value =="" && sabor.value == "" && cobertura.value =="" && tamaño.value==""){
           alert("debe llenar todos los campos por favor");
       }else if(filaSelec == null){
        agregarPedido()
    }else{
            filaSelec.cells[0].innerHTML = solicitante.value;
            filaSelec.cells[1].innerHTML = hora.value;
            filaSelec.cells[2].innerHTML = caract.value;
            filaSelec.cells[3].innerHTML = abono;
            filaSelec.cells[4].innerHTML = precio;
       }
       Nuevo()
}

function agregarPedido () {
  
    let fila     = tabla.insertRow(0),
        Ccampos  = fila.insertCell(0),
        Chora    = fila.insertCell(1),
        Ccaract  = fila.insertCell(2),
        Cabon    = fila.insertCell(3),
        Cpre     = fila.insertCell(4);

    Ccampos.innerHTML = solicitante.value,
    Chora.innerHTML   = hora.value,
    Ccaract.innerHTML = `  ${tipo.value} <br>
                           ${sabor.value} <br>
                           ${cobertura.value} <br>
                           ${tamaño.value} <br>`, 
    Cabon.innerHTML   = abono.value,
    Cpre.innerHTML    = precio.value
    
    Nuevo();
    fila.addEventListener("click",() =>{
        tomarFila(fila)
    })
}

const tomarFila = (fila) => {
    
    solicitante.value = fila.cells[0].innerHTML;
    hora.value        = fila.cells[1].innerHTML;
    caract.value      = fila.cells[2].textContent;
    abono.value       = fila.cells[3].innerHTML;
    precio.value      = fila.cells[4].innerHTML;
   
    filaSelec = fila;
}

const Anular = () => {
    if(filaSelec == null){
        alert("debe seleccionar elementos de la fila a eliminar");
    }else{
        tabla.deleteRow(filaSelec.rowIndex - 1)
        Nuevo()
    }
}

const Nuevo = () => {
    solicitante.value = "";
    fono.value        = "";
    tipo.value        = "";
    sabor.value       = "";
    cobertura.value   = "";
    tamaño.value      = "";
    caract.value      = "";
    mensaje.value     = "";
    hora.value        = "";
    abono.value       = "";
    precio.value      = "";
    solicitante.focus()
}

