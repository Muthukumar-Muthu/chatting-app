import {
  doc,
  collection,
  onSnapshot,
  getFirestore,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useListen({ path, state, type }) {
  const [data, setData] = useState({
    data: type === "collection" ? [] : {},
    error: null,
    loading: true,
  });

  useEffect(() => {
    let unsub = null;
    if (state) {
      unsub = listen({ path, type, setData });
    }
    return unsub;
  }, [state]);

  return data;
}

function listen({ path, setData, type }) {
  let q = null,
    unsub = null;
  try {
    if (type === "doc") {
      q = query(doc(getFirestore(), path));
      unsub = onSnapshot(
        q,
        (doc) => {
          const data = doc.data();

          setData((p) => ({
            ...p,
            data: { ...data, docId: doc.id },
          }));
        },
        (error) => {
          console.error(error);
          setData((p) => ({ ...p, error, loading: false }));
        }
      );
    } else if (type === "collection") {
      q = query(collection(getFirestore(), path));
      unsub = onSnapshot(
        q,
        (snapshot) => {
          const data = [];
          setData((p) => ({ ...p, loading: true }));
          snapshot.forEach((doc) => {
            data.push({ ...doc.data(), docId: doc.id });
          });
          setData((p) => ({
            ...p,
            data: data,
            loading: false,
          }));
        },
        (error) => {
          console.error(error);
          setData((p) => ({ ...p, error, loading: false }));
        }
      );
    } else {
      throw new Error({
        type: "type unknown",
        message: "Provide type of the obj you want to listen",
      });
    }

    return () => {
      unsub();
    };
  } catch (error) {
    console.error(error);
    setData((p) => ({ ...p, error: error }));
    return () => {};
  }
}
function getType(path) {
  const noOfTimes = [...path].reduce((p, c) => {
    if (c === "/") p++;
    else return p;
  }, 0);

  return noOfTimes / 2 === 0 ? "collection" : "doc";
}
