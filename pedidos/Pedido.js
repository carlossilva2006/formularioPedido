'use strict'

let jsonPedi = []

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
    hora,
    _id,
    id,
    fecha,
    fechaFiltro

solicitante = d.getElementById("Solicitante")
fono        = d.getElementById("Telefono")
tipo        = d.getElementById("TipoMasa")
sabor       = d.getElementById("SaborMasa")
cobertura   = d.getElementById("Cobertura")
tamaño      = d.getElementById("Tamaño")
caract      = d.getElementById("Caracteristicas")
mensaje     = d.getElementById("Mensaje")
abono       = d.getElementById("Abono")
precio      = d.getElementById("Precio")
tabla       = d.getElementById("tabPedido").tBodies[0]
bNuevo      = d.getElementById("btnNuevo")
bAnular     = d.getElementById("btnAnular")
bRegistrar  = d.getElementById("btnRegistrar")
hora        = d.getElementById("Hora")
fecha       = d.getElementById("Dia")
fechaFiltro = d.getElementById("fechaFiltro")

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

fechaFiltro.addEventListener("change", (e) => {
console.log(e.target.value);
cargarXfecha(e.target.value);
})

function cargarXfecha(fechaFiltro){
    limpiarTabla();
    for(let i = 0; i < jsonPedi.length; i++){

        if(jsonPedi[i].fecha == fechaFiltro) {
            // console.log(jsonPedi[i].fe);
            pedidoFecha(i);
        }
    }
}
function limpiarTabla(){
tabla.innerHTML = "";
}
let estadoNuevo = true;
const Registrar = () => {
    if(solicitante.value !=="" && fono.value !=="" && caract.value !=="" && 
    mensaje.value !=="" && abono.value !=="" && precio.value !=="" && 
    tipo.value !=="" && sabor.value !== "" && cobertura.value !=="" && tamaño.value !==""){
        if(estadoNuevo){
           console.log(jsonPedi.length);
          _id = jsonPedi.length + 1;
        
             const jsonPedido = {
               id          : _id,
               solicitante : solicitante.value, 
               fono        : fono.value, 
               tipo        : tipo.value, 
               sabor       : sabor.value, 
               cobertura   : cobertura.value, 
               tamaño      : tamaño.value, 
               caract      : caract.value, 
               mensaje     : mensaje.value, 
               abono       : abono.value, 
               precio      : precio.value, 
               hora        : hora.value, 
               fecha       : fecha.value
            }
            jsonPedi.push(jsonPedido)
            agregarPedido(_id)
            // console.log();
            // llenarTabla();
    }else{
            // filaSelec.cells[0].innerHTML = jsonPedi.length;
            filaSelec.cells[1].innerHTML = hora.value;
            filaSelec.cells[2].innerHTML = `${tipo.value}<br> 
                                            ${sabor.value} <br> 
                                            ${cobertura.value} <br> 
                                            ${tamaño.value} <br> `;
            filaSelec.cells[3].innerHTML = abono.value;
            filaSelec.cells[4].innerHTML = precio.value;        
        }
    }else{
        alert("debe llenar todos los campos por favor");
    }
    Nuevo();
}

// const llenarTabla = () => {
//     for (let i = 0; i < jsonPedi.length; i++ ){
       
//         agregarPedido(jsonPedi[i])
//     }
// }

function pedidoFecha (i) {

    let fila     = tabla.insertRow(0),  
        Ccampos  = fila.insertCell(0),
        Chora    = fila.insertCell(1),
        CPedido  = fila.insertCell(2),
        Cabon    = fila.insertCell(3),
        Cpre     = fila.insertCell(4);

    Ccampos.innerHTML = jsonPedi[i].id;
    Chora.innerHTML   = jsonPedi[i].hora,
    CPedido.innerHTML = `${jsonPedi[i].tipo} <br>
                        ${jsonPedi[i].sabor} <br>
                        ${jsonPedi[i].cobertura} <br>
                        ${jsonPedi[i].tamaño}`,
    Cabon.innerHTML   = jsonPedi[i].abono,
    Cpre.innerHTML    = jsonPedi[i].precio
  
    Nuevo();
    fila.addEventListener("click",() =>{
        tomarFila(fila)
        estadoNuevo = false;
    })
}

function agregarPedido (_id) {
  
    let fila     = tabla.insertRow(0),
        Ccampos  = fila.insertCell(0),
        Chora    = fila.insertCell(1),
        CPedido  = fila.insertCell(2),
        Cabon    = fila.insertCell(3),
        Cpre     = fila.insertCell(4);

    Ccampos.innerHTML =  jsonPedi.length;
    Chora.innerHTML   =  hora.value,
    CPedido.innerHTML = `${tipo.value} <br> 
                         ${sabor.value} <br> 
                         ${cobertura.value}<br> 
                         ${tamaño.value} <br> `,
    Cabon.innerHTML   = abono.value,
    Cpre.innerHTML    = precio.value
    
    Nuevo();
    fila.addEventListener("click",() =>{
        tomarFila(fila)
        estadoNuevo = false;
    })
}

const tomarFila = (fila) => {
    
    id                = fila.cells[0].innerHTML;
    hora.value        = jsonPedi[id - 1].hora;
    tipo.value        = jsonPedi[id -1].tipo;
    solicitante.value = jsonPedi[id -1].solicitante;
    fono.value        = jsonPedi[id -1].fono;
    caract.value      = jsonPedi[id -1].caract;
    mensaje.value     = jsonPedi[id -1].mensaje;
    sabor.value       = jsonPedi[id -1].sabor;
    cobertura.value   = jsonPedi[id -1].cobertura;
    tamaño.value      = jsonPedi[id -1].tamaño;
    abono.value       = fila.cells[3].innerHTML;
    precio.value      = fila.cells[4].innerHTML;
   
    filaSelec = fila;

}

const Anular = () => {
    if(filaSelec == null){
        alert("debe seleccionar elementos de la fila a eliminar");
    }else{
        tabla.deleteRow(estadoNuevo.rowIndex - 1)
        Nuevo()
    }
}

function Nuevo () {
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
    estadoNuevo       = true;
    solicitante.focus()
}

