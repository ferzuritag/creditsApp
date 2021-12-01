import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/firebase'

export const publishCredit = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "credits"), data);
    return `Credito creado con exito, referencia: ${docRef.id}`;
  } catch (e) {
    return `Error al crear el credito ${e}`;
  }
}