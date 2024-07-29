import React from "react";
import { Link } from "react-router-dom";
import user_icon from "../assets/user_icon.png";
function Signupas() {
  return (
    <>
      <div className="rounded">
        <dialog id="signupasmodal" className="modal rounded-lg">
          <div className="modal-box">
            <div>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:font-extrabold bg-white p-2 shadow border-full border rounded-full font-bold"
                onClick={() => document.getElementById("signupasmodal").close()}
              >
                ✕
              </Link>
              <div className="w-80 h-100 bg-slate-400 text-white rounded-lg">
                <h2 className="p-2">Signup As</h2>
                <div className="flex flex-row space-x-12 m-2 p-5 pl-12 rounded-md">
                  <div>
                    <img src={user_icon} alt="" className="rounded-full" />
                  </div>
                  <div>
                    <img src={user_icon} alt="" className="rounded-full" />
                  </div>
                </div>
                <div className=" flex flex-row space-x-16 ml-20">
                  <Link
                    to="/usersignup"
                    onClick={() =>
                      document.getElementById("usersignupmodal").showModal()
                    }
                    className="text-slate-900 hover:bg-red-400 duration-500 bg-white rounded pt-1 pl-2 pr-2 mr-1 mb-5 font-bold"
                  >
                    User
                  </Link>
                  <Link
                    to="/adminsignup"
                    type="button"
                    onClick={() =>
                      document.getElementById("adminsignupmodal").showModal()
                    }
                    className="text-slate-900 hover:bg-red-400 duration-500 bg-white rounded p-2 font-bold mb-5"
                  >
                    Admin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Signupas;
