const urlUser = process.env.REACT_APP_API_USUARIO;
const urlLogin = process.env.REACT_APP_API_USUARIOLOGIN;


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
   const respuesta = await fetch(urlLogin,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify(usuario)
   });

    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      usuario: datos.usuario,
      token: datos.token,
      uid: datos.uid,
    }
    
  } catch (error) {
    console.log(error)
    return false
  }
}