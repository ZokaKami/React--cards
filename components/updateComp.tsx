import React, { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import PlusButton from "./images/plusButton.png";

const firebaseConfig = {
  apiKey: "AIzaSyA_ATSxcgk8M__Rypq8RjU92zT4IeSb2q4",

  authDomain: "cards-info-4fba4.firebaseapp.com",

  projectId: "cards-info-4fba4",

  storageBucket: "cards-info-4fba4.appspot.com",

  messagingSenderId: "319409774567",

  appId: "1:319409774567:web:643aacb3a7d7e7d17b2742",

  measurementId: "G-6G9PV73ZQ1",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const testCollection = collection(db, "items");

function updateComp() {
  // Pull data from firebase
  const [test, setTest] = useState([]);
  useEffect(() => {
    const updateList = onSnapshot(testCollection, (snapshot) => {
      setTest(snapshot.docs.map((doc) => ({ data: doc.data(), id: doc.id })));
    });

    return () => {
      updateList();
    };
  }, []);
  function deleteMovie(id) {
    const docRef = doc(db, "items", id);
    deleteDoc(docRef)
      .then(() => console.log("doc deleted"))
      .catch((error) => console.log("hi"));
  }
  return (
    <div className="grid sm:grid-cols-2 md:grid md:grid-cols-3 xl:grid-cols-5 px-6   gap-6 xl:gap-4  ">
      <div className="flex flex-col items-center justify-center  sm:max-w-[350px]    border-2 border-black border-solid min-h-[350px] rounded-xl p-4">
        <button className="bg-gray-200 p-8 rounded-full grid justify-center">
          <img src={PlusButton} alt="" />
        </button>
      </div>
      {/* Writing data  */}
      {test.map((movie) => (
        <div
          data-filter={movie.data.tags}
          key={movie.id}
          className="relative  sm:max-w-[350px]    border-2 border-black border-solid min-h-[350px] rounded-xl p-4"
        >
          <button
            onClick={() => deleteMovie(movie.id)}
            className="absolute top-2 right-4 p-2"
          >
            X
          </button>
          {/* Item name */}
          <h1 className="text-[1.4em] text-center py-2"> {movie.data.name}</h1>
          <p className="text-[1em] break-words h-[75%] ">
            {/* Item description */}
            {movie.data.zone}
          </p>
          <p className="  ">Tags: {movie.data.tags}</p>
        </div>
      ))}
    </div>
  );
}

export default updateComp;
