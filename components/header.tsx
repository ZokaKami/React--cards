import React from "react";

function Header() {
  return (
    <div className="w-full">
      <div className=" container  mx-auto w-fit pt-4">
        <input
          className="rounded-3xl p-4   border-solid border-2   "
          placeholder="Enter Post Title"
        />
      </div>
    </div>
  );
}

export default Header;
