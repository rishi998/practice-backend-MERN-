import React from "react";
import { Link } from "react-router-dom";

function Signupas() {
  return (
    <>
      <div className="rounded">
        <dialog id="signupasmodal" className="modal">
          <div className="modal-box">
            <form method="dialog" className="w-full rounded-lg p-5 border">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:font-extrabold bg-white p-2 shadow border-full border rounded-full font-bold"
                onClick={() => document.getElementById("signupasmodal").close()}
              >
                ✕
              </Link>
              <div className="mb-4">
                <h2>SignUp As</h2>
                <label
                  className="block text-white text-lg font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-white text-lg font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Signupas;
