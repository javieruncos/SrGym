const urlEjercicio = process.env.REACT_APP_API_EJERCICIO;


export const listaEjercicio = async()=>{
   try {
    const respuesta = await fetch(urlEjercicio)
    const ejercicio = await respuesta.json()
    return ejercicio
   } catch (error) {
    console.log(error)
   }
}

export const obtenerCategoria = async(categoria)=>{
   try {
      const respuesta = await fetch(urlEjercicio+"/"+categoria);
      const categoriaEjercicio = {
         dato: await respuesta.json(),
         status: respuesta.status
      }
      return categoriaEjercicio
   } catch (error) {
      console.log(error)
      return false
   }
}