import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { listaUsuario } from "../../helper/Login";
import "../../styles/Formulario.css";

const Login = ({usuarioLogueado,setUsuarioLogueado}) => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    listaUsuario().then((respuesta)=>{
      const usuarioBuscado = respuesta.find((item) => item.email === data.email)
      if(usuarioBuscado.mail === data.mail && usuarioBuscado.password === data.password){
        console.log("el usuario si existe")
        localStorage.setItem("usuarioGym",JSON.stringify(usuarioBuscado))
        setUsuarioLogueado(usuarioBuscado)
        navigate("/")
      }else{
        console.log("el usuario no existe")
        Swal.fire("error","error intentalo mas tarde","error")
      }
    })
  };

  return (
    <div className="container mt-5 contenedorLogin">
      <div>
        <h1 className="text-center text-light fw-bold display-5">LOGIN</h1>
      </div>
      <div className="formulario mx-auto"></div>
      <div className="formulario2 mx-auto">
        <form className="px-2 py-3" onSubmit={handleSubmit(submit)}>         
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: "introduzca un email valido",
              },
            })}
          />
          <p className="text-danger mt-1">{errors.email?.message}</p>
          <label>contraseña</label>
          <input
            type="password"
            className="form-control"
            {...register("password", {
              required: true,
              maxLength: {
                value: 16,
                message: "el numero maximo de caracteres es de 100",
              },
              minLength: {
                value: 8,
                message: "el numero minimo de caracteres es de 2",
              },
            })}
          />
          <p className="text-danger mt-1">{errors.password?.message}</p>
          <div className="mt-3">
            <button className="btn btn-warning ">crear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
