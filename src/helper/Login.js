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
