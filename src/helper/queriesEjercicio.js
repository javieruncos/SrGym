const urlEjercicio = process.env.REACT_APP_API_EJERCICIO;


export const listaEjercicio = async()=>{
   try {
    const respuesta = await fetch(urlEjercicio)
    const ejercicio = await respuesta.json()
     console.log(ejercicio)
    return ejercicio
   } catch (error) {
    console.log(error)
   }
}