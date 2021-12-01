import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'

export const deleteCredit = async (id) => {
  try {
    const docRef = await deleteDoc(doc(db, "credits", id));
    return `Credito borrado ${id}`;
  } catch (e) {
    return `Error al borrar el credito ${e}`;
  }
}