import React from "react";
import { useState } from "react";

function Header() {
  const [filter, setFilter] = useState("");
  function testApp(e) {
    e.preventDefault();
  }

  return (
    <div className="w-full py-6">
      <div className=" container  mx-auto w-fit  ">
       
        <h1> </h1>
      </div>
    </div>
  );
}

export default Header;
