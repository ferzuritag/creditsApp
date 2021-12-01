import React from "react";
import { useDispatch } from "react-redux";
import { startGoogleLogin } from "../actions/auth";
import { useForm } from "../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: "ferzuritag@hotmail.com",
    password: "123455",
  });
  const { email, password } = formValues;
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  };
  return (
    <div className="full-wrapper flex-center">
      <form className="login__card" >
        <div class="google-btn" onClick={handleLogin}>
          <div class="google-icon-wrapper">
            <img
              class="google-icon-svg"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt=""
              />
          </div>
          <p class="btn-text">
            <b>Iniciar Sesión con Google</b>
          </p>
        </div>
      </form>
    </div>
  );
};
