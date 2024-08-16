// Tienes un arreglo de objetos que representan tareas, cada una con un id, nombre, 
// y completada (un booleano). Escribe una función que tome el id de una tarea y marque 
// esa tarea como completada (es decir, completada debe ser true).


const tareas =[
    { 
        nombre: "matematicas", 
        id: 1, 
        completada: false
    },
    { 
        nombre: "fisica", 
        id: 2, 
        completada: false 
    },
    { 
        nombre: "literatura", 
        id: 3, 
        completada: false,
    },
    { 
        nombre: "historia", 
        id: 4, 
        completada: false 
    },
]


function estado(tareas) {
    let newArray = [];
  
    tareas.forEach((element) => {
        if ((element.id === 3 )) {
            element.completada = true
            newArray.push(element)
        }

       
    })
    return newArray;
  }

  estado(tareas)
  console.log(estado(tareas))
  
  
    


// Dado un arreglo de objetos que representan ciudades con su respectiva población, 
// escribe una función que encuentre y devuelva la ciudad con la mayor población.

const ciudades =[
    { 
        nombre: "cali", 
        poblacion: 220, 
    },
    { 
        nombre: "bogota", 
        poblacion : 554,
    },
    { 
        nombre: "medellin", 
        poblacion: 345,
    },
    { 
        nombre: "barranquilla", 
        poblacion: 125,
    },
]


function ciudadMasPoblada(ciudades) {
    return ciudades.reduce ((ciudadMayor, ciudadActual) => {
        if (ciudadActual.poblacion > ciudadMayor.poblacion) {
            return ciudadActual;
        }
        return ciudadMayor
    })
}


const ciudadGanadora = ciudadMasPoblada(ciudades)
console.log(ciudadGanadora)










