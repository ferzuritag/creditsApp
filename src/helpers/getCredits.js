import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase'

export const getCredits = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "credits"));
    const docsArray = [];
    querySnapshot.forEach((doc) => {
      const data= doc.data();
      docsArray.push({
        id:doc.id,name:data.name,type:data.type,description:data.description
      });
    });
    
    console.log(docsArray)
    return docsArray;
  } catch (e) {
    return `Error al obtener creditos: ${e}`;
  }
}