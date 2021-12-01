import { getAuth, signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import { types } from "../types/types";
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123));
    }, 2000);
  };
};
export const startGoogleLogin = () => {
    return (dispatch) => {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then(({ user }) => {
        dispatch(login(user.uid));
      }).catch((error)=>{
        alert("ha ocurrido un error");
      });
    };
};
export const login = (uid) => {
  return {
    type: types.login,
    payload: {
      uid,
    },
  };
};
export const startLogout= ()=>{
  return async(dispatch)=>{
    const auth = getAuth();
    await signOut(auth);
    dispatch(logout());
  }
}

export const logout =()=>({
    type:types.logout
});
