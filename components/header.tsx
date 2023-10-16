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
        <form onSubmit={testApp}>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-3xl  p-4  border-solid border-2   "
            placeholder="Enter Post Title"
          />
          <button>✓</button>
        </form>
        <h1> </h1>
      </div>
    </div>
  );
}

export default Header;
