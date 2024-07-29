import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
function Navbar() {
  return (
    <>
      <nav class="bg-slate-900 p-4 m-2 rounded ">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-white font-semibold text-2xl">Store</div>
          <div class="space-x-8 text-xl">
            <Link href="/" class="text-gray-300 hover:text-white">
              Home
            </Link>
            <a href="#" class="text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#" class="text-gray-300 hover:text-white">
              Contact
            </a>
            <button
              onClick={() => document.getElementById("loginmodal").showModal()}
              className="text-slate-900 hover:bg-red-400 duration-500 bg-white rounded p-2 font-bold"
            >
              Login
            </button>
            <Login />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
