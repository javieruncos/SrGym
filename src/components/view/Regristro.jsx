import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearUser } from "../../helper/Login";
import "../../styles/Registro.css"

const Regristro = ({setUsuarioLogueado}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const navigate = useNavigate()

  const submit =(data)=>{
     console.log(data)
     crearUser(data).then((usuario)=>{
        if(usuario.status === 201){
          Swal.fire("Usuario creado","el usuario se creo correctamente","success")
          localStorage.setItem("usuarioGym",JSON.stringify(data))
          setUsuarioLogueado(data)
          reset()
          navigate("/")

        }else{
          Swal.fire("Error","intente esto mas tarde","error")
        }
     })
     
  }
  
  return (
    <div className="container contenedorRegistro mt-5">
      <div>
        <h1 className="text-center text-light fw-bold display-5">REGISTRO</h1>
      </div>
      <div className="formularioRegistro mx-auto"></div>
      <div className="formularioRegistro2 mx-auto">
        <form className="px-2 py-4" onSubmit={handleSubmit(submit)}>
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            {...register("nombre", {
              required: true,
              maxLength: {
                value: 100,
                message: "el numero maximo de caracteres es de 100",
              },
              minLength: {
                value: 2,
                message: "el numero minimo de caracteres es de 2",
              },
            })}
          />
          <p className="text-danger mt-1">{errors.nombre?.message}</p>
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            {...register("apellido", {
              required: true,
              maxLength: {
                value: 100,
                message: "el numero maximo de caracteres es de 100",
              },
              minLength: {
                value: 2,
                message: "el numero minimo de caracteres es de 2",
              },
            })}
          />
          <p className="text-danger mt-1">{errors.apellido?.message}</p>
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
            <button type="submit" className="btn btn-warning ">crear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Regristro;
