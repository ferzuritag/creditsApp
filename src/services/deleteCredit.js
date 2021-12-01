import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'

export const deleteCredit = async (id) => {
  try {
    await deleteDoc(doc(db, "credits", id));
    return `Credito borrado ${id}`;
  } catch (e) {
    return `Error al crear el credito ${e}`;
  }
}