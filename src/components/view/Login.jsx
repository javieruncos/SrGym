import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/Formulario.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <div>
        <h1 className="text-center text-light fw-bold display-5">LOGIN</h1>
      </div>
      <div className="formulario mx-auto"></div>
      <div className="formulario2 mx-auto">
        <form className="px-2 py-3" onSubmit={handleSubmit(submit)}>
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
                className='form-control'
                {...register("password",{
                    required:true,
                    maxLength:{
                        value:16,
                        message:"el numero maximo de caracteres es de 100"
                    },
                    minLength:{
                        value:8,
                        message:"el numero minimo de caracteres es de 2"
                    }
                 })}
                />
                <p className='text-danger mt-1'>{errors.apellido?.message}</p>
          <div className="mt-3">
            <button className="btn btn-warning ">crear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
