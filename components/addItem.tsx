import React, { useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./cards";

function addItem() {
  const [name, setName] = useState("");
  const [zone, setZone] = useState("");
  const [tags, setTags] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
    if (name === "" || zone === "" || tags === "") {
      return;
    }
    const testCollection = collection(db, "items");
    addDoc(testCollection, { name, zone, tags })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
    setName("");
    setZone("");
    setTags("");
    popup = false;
  }
  return (
    <div className="absolute  mx-auto left-0 right-0 top-[200px] p-4 w-[700px]">
      <div className=" m-auto w-full max-w-[550px] min-h-[430px] h-fill bg-blue-400 p-6 space-y-6 ">
        <form className="space-y-6" onSubmit={handleSumbit}>
          <input
            className="w-full p-2"
            type="text"
            name=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Name"
            minLength="4"
            maxlength="28"
          />
          <textarea
            className="p-4 w-full h-fill "
            placeholder="Write your thoughts here..."
            rows="4"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            minlength="8"
            maxlength="128"
          ></textarea>
          <input
            className="w-full p-2"
            type="text"
            name=""
            id=""
            placeholder="Tags"
            value={tags}
            minLength="4"
            maxlength="18"
            onChange={(e) => setTags(e.target.value)}
          />
          <button className="p-2 px-4 bg-purple-300">Add</button>
        </form>
      </div>
    </div>
  );
}

export default addItem;
