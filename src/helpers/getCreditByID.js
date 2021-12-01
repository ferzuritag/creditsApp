import { collection, getDoc,doc } from "firebase/firestore";
import { db } from '../firebase/firebase'

export const getCreditByID = async (id) => {
const creditsRef = collection(db, "credits");
  try {
    const querySnapshot = await getDoc(doc(creditsRef, id));
    const credit= querySnapshot._document.data.value.mapValue.fields;
    return credit;
  } catch (e) {
    return `Error al obtener creditos: ${e}`;
  }
}