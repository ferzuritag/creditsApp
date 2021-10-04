import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase'

export const getCredits = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "credits"));
    const docsArray = [];
    querySnapshot.forEach((doc) => {
      docsArray.push(doc.data());
    });
    console.log(docsArray);
    return docsArray;
  } catch (e) {
    return `Error al crear el credito ${e}`;
  }
}