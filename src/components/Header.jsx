import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { useLogout } from "../hooks/useLogout";
import Avatar from "../assets/Images/avatar.png";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const { logout } = useLogout();

  const handleLogout = () => {
    setOpenMenu(false);
    logout();
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full p-4 justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            className="w-8 object-cover"
            alt="logo"
          /> */}
          <p className="text-headingColor text-xl font-bold">LOGO.</p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-12 mr-2"
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer ">
              Service
            </li>
          </motion.ul>

          <motion.div whileTap={{ scale: 0.6 }}>
            <div className="relative flex items-center justify-center">
              <FaShoppingCart className="text-textColor text-2xl cursor-pointer" />
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-sm text-white font-semibold">2</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={
                auth.currentUser.photoURL === null
                  ? Avatar
                  : auth.currentUser.photoURL
              }
              //   src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              referrerPolicy="no-referrer"
              alt="avatar"
              className="w-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={() => setOpenMenu(!openMenu)}
            />

            {openMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="flex flex-col w-40 bg-slate-100 shadow-xl rounded-lg absolute  top-12 right-0"
              >
                <div
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer 
                justify-between hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={() => setOpenMenu(false)}
                >
                  <p>Profile</p>
                  <AiOutlineUser />
                </div>
                <div
                  onClick={handleLogout}
                  className="px-4 py-2 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  <p>Logout</p> <MdLogout />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full  p-4">
        <motion.div whileTap={{ scale: 0.6 }}>
          <div className="relative flex items-center justify-center">
            <FaShoppingCart className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">2</p>
            </div>
          </div>
        </motion.div>

        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            className="w-8 object-cover"
            alt="logo"
          />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={
              auth.currentUser.photoURL === null
                ? Avatar
                : auth.currentUser.photoURL
            }
            //   src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            referrerPolicy="no-referrer"
            alt="avatar"
            className="w-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            onClick={() => setOpenMenu(!openMenu)}
          />

          {openMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="flex flex-col w-40 bg-gray-100 shadow-xl rounded-lg absolute  top-12 right-0"
            >
              <ul className="flex flex-col">
                <li
                  className="px-5 py-3 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-gray-200 rounded-sm"
                  onClick={() => setOpenMenu(false)}
                >
                  Home
                </li>
                <li
                  className="px-5 py-3 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-gray-200"
                  onClick={() => setOpenMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="px-5 py-3 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-gray-200"
                  onClick={() => setOpenMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="px-5 py-3 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-gray-200"
                  onClick={() => setOpenMenu(false)}
                >
                  Service
                </li>
                <div className="border-b-2 border-gray-200"></div>
                <li
                  className="px-5 py-3 flex items-center justify-between text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-gray-200"
                  onClick={() => setOpenMenu(false)}
                >
                  <p>Profile</p>
                  <AiOutlineUser />
                </li>
                <li
                  onClick={handleLogout}
                  className="px-5 py-3 flex items-center justify-between text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-gray-200"
                >
                  <p>Logout</p>
                  <MdLogout />
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
