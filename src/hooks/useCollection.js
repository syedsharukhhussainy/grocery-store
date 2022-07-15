import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase.config";

export const useCollection = (collectionName) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(firestore, collectionName);

    getDocs(query(collectionRef, orderBy("id", "desc")))
      .then((snapshot) => {
        let documentsArray = [];
        snapshot.docs.forEach((doc) => {
          documentsArray.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(documentsArray);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }, [collectionName]);

  return { documents, error };
};
