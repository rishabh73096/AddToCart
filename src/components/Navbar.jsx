import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu collapse
// const[searchValue,SetsearchValue] =useState("");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // const async SearchProduct(()=>{
  // const response = await fetch(`https://fakestoreapiserver.reactbd.com/products/search?=${searchValue}`)
  // })
  return (
    <div className="bg-blue-500 text-white p-2 flex justify-between items-center shadow-md">
      {/* Logo/Title */}
      <div>
        <h3 className="text-2xl font-bold">Project-1</h3>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Search Bar and Links */}
      <div className="hidden md:flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search........."
          //onChange={(e)=> SetsearchValue(e.target.value)}
          className="p-2 w-[30vw] rounded-md border border-gray-300 text-black-700 focus:outline-none focus:ring-2 text-black focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 active:border-blue-600"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md text-[18px] font-bold"
       //  onClick={SearchProduct}
         >
          Search
        </button>
        <div className="flex space-x-8">
          <h3 className="cursor-pointer hover:text-gray-300 text-[18px] font-bold">
            Home
          </h3>
          <h3 className="cursor-pointer hover:text-gray-300 text-[18px] font-bold">
            Cart
          </h3>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start mt-4 space-y-3">
          <input
            type="text"
            placeholder="Search........."
            className="p-2 w-[100%] rounded-md border border-gray-300 text-black-700 focus:outline-none focus:ring-2 text-black focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 active:border-blue-600"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md text-[18px] font-bold w-full">
            Search
          </button>
          <h3 className="cursor-pointer hover:text-gray-300 text-[18px] font-bold">
            Home
          </h3>
          <h3 className="cursor-pointer hover:text-gray-300 text-[18px] font-bold">
            Cart
          </h3>
        </div>
      )}
    </div>
  );
}

export default Navbar;
