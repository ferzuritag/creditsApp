import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const editCredit = async (data) => {
  try {
    const creditRef = doc(db, "credits", data.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(creditRef, data);
    return `Credito borrado ${data.id}`;
  } catch (e) {
    return `Error al borrar el credito ${e}`;
  }
};
