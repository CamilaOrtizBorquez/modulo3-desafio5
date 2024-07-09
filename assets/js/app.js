const total = document.querySelector("#total"); // conteo total
const realizadas = document.querySelector("#realizadas"); // conteo de tareas realizadas.
const tareaInput = document.querySelector("#TareaInput"); //input
const btnAgregar = document.querySelector("#agregarTarea"); //Boton
const list = document.querySelector("#tableBottomVacio");  //tabla inferior vacia.

let nuevaTarea = [];

btnAgregar.addEventListener("click", () => {
    tareaNueva()
});

const tareaNueva = () =>{
    let id = 1; 
    const [tarea] = nuevaTarea.slice(-1);

    if(tarea){
        id=tarea.Id+1
    }

    nuevaTarea.push({
        Id: id,
        Tarea: tareaInput.value,
        Checklist: false
    });

    tareaInput.value = " ";

    mostrarTareas()
}

const sumarTarea = (id) =>{
    const indice = nuevaTarea.findIndex((index) => index.Id == id)
    nuevaTarea[indice].Checklist =! nuevaTarea[indice].Checklist;
    mostrarTotal();
}

const borrarTarea = (id) =>{
    nuevaTarea = nuevaTarea.filter((tarea)=>tarea.Id !=id)
    mostrarTareas()
}

const objeto = () =>{
    nuevaTarea=[
        {Id : 1, Tarea: "Estudiar la clase del martes", Checklist: true},
        {Id : 2, Tarea: "Adelantar el desafio", Checklist: true},
        {Id : 3, Tarea: "Terminar de leer el libro pendiente", Checklist: false},
    ]
}

const mostrarTareas = () =>{

    let html="";

    for( const tarea of nuevaTarea ){
    
    html += `
                <div class="row">
                    <p class="id_primero">${tarea.Id}</p>
                    <p class="tarea_primero">${tarea.Tarea}</p>
                    <div class="acciones_primero">
                        <input class="form-check-input" type="checkbox" onclick="sumarTarea(${tarea.Id})" ${tarea.Checklist ? "checked" : ""}>
                        <button type="button" class="delete"onclick="borrarTarea(${tarea.Id})">X</button>
                    </div>
                </div>`
                
    }
    
    list.innerHTML = nuevaTarea.length > 0 ? html : 'No tiene tareas pendientes';

    mostrarTotal();
}

const mostrarTotal = () =>{
    total.textContent = nuevaTarea.length;
    realizadas.textContent = nuevaTarea.filter((tarea) => tarea.Checklist).length;
}

objeto();
mostrarTareas();

