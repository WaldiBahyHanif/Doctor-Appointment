import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between py-4 mb-5 text-sm border-b border-b-gray-400">
      {/* Logo ApoticCare Baru */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="flex items-center justify-center text-xl font-bold text-white rounded-lg shadow-md w-9 h-9 bg-primary">
          A+
        </div>
        <span className="text-2xl font-bold tracking-tight text-gray-800">
          Apotic<span className="text-primary">Care</span>
        </span>
      </div>

      {/* Menu Navigasi Desktop */}
      <ul className="items-start hidden gap-5 font-medium md:flex">
        <NavLink to="/">
          {({ isActive }) => (
            <>
              <li className="py-1">HOME</li>
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${isActive ? "block" : "hidden"}`}
              />
            </>
          )}
        </NavLink>
        <NavLink to="/doctors">
          {({ isActive }) => (
            <>
              <li className="py-1">ALL DOCTORS</li>
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${isActive ? "block" : "hidden"}`}
              />
            </>
          )}
        </NavLink>
        <NavLink to="/about">
          {({ isActive }) => (
            <>
              <li className="py-1">ABOUT</li>
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${isActive ? "block" : "hidden"}`}
              />
            </>
          )}
        </NavLink>
        <NavLink to="/contact">
          {({ isActive }) => (
            <>
              <li className="py-1">CONTACT</li>
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${isActive ? "block" : "hidden"}`}
              />
            </>
          )}
        </NavLink>
      </ul>

      {/* Bagian Kanan: Profil/Tombol & Ikon Menu Mobile */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative flex items-center gap-2 cursor-pointer group">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-600 pt-14 group-hover:block">
              <div className="flex flex-col gap-4 p-4 rounded min-w-48 bg-stone-100">
                <p
                  onClick={() => navigate("my-profile")}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="cursor-pointer hover:text-black"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="cursor-pointer hover:text-black"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden px-8 py-3 font-light text-white rounded-full bg-primary md:block"
          >
            Create account
          </button>
        )}

        {/* Ikon Hamburger untuk Layar Mobile */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 cursor-pointer md:hidden"
          src={assets.menu_icon}
          alt=""
        />

        {/* Panel Menu Tirai Mobile */}
        <div
          className={`${showMenu ? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-300`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <div
              onClick={() => {
                navigate("/");
                setShowMenu(false);
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white rounded-lg bg-primary">
                A+
              </div>
              <span className="text-xl font-bold text-gray-800">
                Apotic<span className="text-primary">Care</span>
              </span>
            </div>
            <img
              className="cursor-pointer w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="inline-block px-4 py-2 rounded">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="inline-block px-4 py-2 rounded">ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="inline-block px-4 py-2 rounded">ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="inline-block px-4 py-2 rounded">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
