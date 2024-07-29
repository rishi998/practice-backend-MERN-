import React from "react";
import { Link } from "react-router-dom";
import Signupas from "./signupas";
function Login() {
  return (
    <>
      <div className="rounded">
        <dialog id="loginmodal" className="modal">
          <div className="modal-box">
            <form
              method="dialog"
              className="w-full rounded-lg p-5 border bg-slate-900"
            >
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:font-extrabold bg-white p-2 shadow border-full border rounded-full font-bold"
                onClick={() => document.getElementById("loginmodal").close()}
              >
                ✕
              </Link>
              <div className="mb-4">
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
                  Login
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="block text-white text-lg font-semibold mb-2">
                  Already registered?
                </p>
                <button
                  type="button"
                  className="ml-1 text-blue-500 hover:text-blue-800"
                  onClick={() =>
                    document.getElementById("signupasmodal").showModal()
                  }
                  // onClick={() => document.getElementById("loginmodal").close()}
                >
                  Signup
                </button>
                <Signupas />
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
