import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";
import PlusButton from "./images/plusButton.png";
/* OUTDATED IGNORE CARDS.TSX FILE */
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

function Cards() {
  const [test, setTest] = useState([]);
  const [seen, setSeen] = useState(false);

  //run getTest on load
  useEffect(() => {
    getTest();
  }, []);

  useEffect(() => {
    console.log(test);
  }, [test]);

  //Pulling firestore data "card"- collection name,//
  function getTest() {
    const testCollection = collection(db, "items");
    getDocs(testCollection)
      .then((response) => {
        console.log(response.docs);
        const movs = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setTest(movs);
      })
      .catch((error) => console.log("hi"));
  }
  function deleteMovie(id) {
    const docRef = doc(db, "items", id);
    deleteDoc(docRef)
      .then(() => console.log("doc deleted"))
      .catch((error) => console.log("hi"));
  }
  return (
    <div className="grid sm:grid-cols-2 md:grid md:grid-cols-3 xl:grid-cols-5 px-6   gap-6 xl:gap-4  ">
     
      {/* Writing data  */}
      {test.map((movie) => (
        <div
          key={movie.id}
          className="relative  sm:max-w-[350px]    border-2 border-black border-solid min-h-[350px] rounded-xl p-4"
        >
          <button
            onClick={() => deleteMovie(movie.id)}
            className="absolute top-2 right-4"
          >
            X
          </button>
          {/* Item name */}
          <h1 className="text-[1.4em] text-center py-2"> {movie.data.name}</h1>
          <span className="text-[1em] break-words ">
            {/* Item description */}

            {movie.data.zone}
          </span>
          <p className="  "> {movie.data.tags}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
