import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);


export async function retrieveData(collectionName: string) {
  const querySnapshot = await getDocs(collection(firestore, collectionName));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;

}