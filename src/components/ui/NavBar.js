import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";

export const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout= ()=>{
    dispatch(startLogout());
  }
  return (
    <div className="NavBar">
        
      <h1>CreditsApp</h1>
      <div className="navigation">
        <Link className="NavBar-item flex-center" to="/register">Registrar</Link>
        <Link className="NavBar-item flex-center" to="/credits">Creditos</Link>
      </div>

      <div  className="NavBar-item flex-center" onClick={handleLogout}>Cerrar Sesión</div>
    </div>
  );
};
