import React from "react";

const Error404 = () => {
  return (
    <div>
         <h1 className="text-center my-5 ColorYellow display-4">!Oops algo salio mal¡</h1>
      <div className=" d-flex justify-content-center">
        <div className="error">
        <img
          src="https://static.vecteezy.com/system/resources/previews/015/131/133/original/crossing-sign-error-404-png.png"
          alt="error404"
          className="w-100 " />
        </div>
      </div>
    </div>
  );
};

export default Error404;
