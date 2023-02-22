const urlUser = process.env.REACT_APP_API_USUARIO

export const crearUser = async (usuario) => {
  try {
    const respuesta = await fetch(urlUser,{
      method: "POST",
      headers: { "Content-Type":"application/json"},
      body: JSON.stringify(usuario)
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};


export const listaUsuario = async()=>{
  try {
    const respuesta = await fetch(urlUser)
    const datos = await respuesta.json()
    console.log(datos)
    return datos.usuarios
  } catch (error) {
    console.log(error)
  }
}

export const login = async(usuario)=>{
  try {
   const respuesta = await fetch(urlUser);
   const listaUsuario = await respuesta.json()
   const usuarioBuscado = listaUsuario.usuarios.find((itemUsuario)=> itemUsuario.email === usuario.email)
   if(usuarioBuscado){
    console.log("el usuario si existe")
      if(usuarioBuscado.password === usuario.password){
        return usuarioBuscado
      }
   }else{
    console.log("el usuario no existe")
   }
    
  } catch (error) {
    console.log("error")
  }
}