import { FaToggleOff, FaToggleOn, FaSearch } from "react-icons/fa";
import { FaArrowRightFromBracket, FaRegUser, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../Asset/logo.webp'

export default function Navbar({ theme, toggleTheme }) {
   return (
      <nav className={`navbar ${theme === 'light' ? 'bg-zinc-200 text-zinc-900' : 'bg-zinc-900 text-zinc-200'} z-10 sticky top-0 text-white shadow-md shadow-yellow-200`}>
         <div className="container flex justify-between items-center mx-auto p-5 lg:p-3">
            {/* NAV TOGGLER */}
            <div className="nav-toggler block lg:hidden">
               <FaBars />
            </div>

            {/* NAV BRAND AND NAVIGATION */}
            <div className="nav-start flex items-center gap-7">
               <img src={logo} alt="Logo" width={150} />
               <div className={`nav-menu hidden ${theme === 'light' ? 'text-zinc-800' : 'text-zinc-300'} lg:flex items-center gap-5 border-s-2 border-yellow-300 pl-5`}>
                  <a className="hover:text-yellow-200" href="">Home</a>
                  <a className="hover:text-yellow-200" href="">Daftar Layanan</a>
                  <a className="hover:text-yellow-200" href="">Cek Transaksi</a>
               </div>
            </div>

            {/* NAV SEARCH AND NAV AUTH WITH THEME TOGGLER */}
            <div className="nav-end flex items-center gap-4">
               <NavSearch />
               {theme === 'light'
                  ?
                  <FaToggleOn className="hidden lg:block cursor-pointer text-2xl font-bold" onClick={toggleTheme} />
                  :
                  <FaToggleOff className="hidden lg:block cursor-pointer text-2xl font-bold" onClick={toggleTheme} />
               }
               <NavAuth />
            </div>
         </div>
      </nav>
   )
}

const NavSearch = () => {
   const [isShow, setIsShow] = useState(false)
   const toggleSearch = () => {
      setIsShow(!isShow)
   }

   return (
      <form className="search flex items-center gap-3" action="">
         <input
            className={`${isShow ? 'block' : 'hidden'} peer px-5 py-2 w-72 rounded-lg border-0 outline-none bg-gradient-to-r
             from-zinc-800 to-zinc-900 text-white placeholder:text-zinc-200 
               transition-transform duration-300 ease-in-out
              ${isShow ? 'transform translate-x-0 w-72 opacity-100' : 'transform translate-x-full w-0 opacity-0'}`}
            type="text"
            name="search"
            id="search"
            placeholder="Cari..."
         />
         <label
            className="cursor-pointer text-lg peer-focus:text-yellow-200 transition-colors duration-150 ease-in-out"
            htmlFor="search"
            onClick={toggleSearch}
         >
            <FaSearch />
         </label>
      </form>
   )
}

const NavAuth = () => {
   return (
      <div className="user hidden lg:flex items-center gap-2">
         <Link
            className="px-5 py-2 bg-primary text-black rounded-lg glass flex items-center gap-2 hover:bg-yellow-500 ease-in duration-150"
            href="/login">
            <FaArrowRightFromBracket />
            Masuk
         </Link>
         <Link
            className="px-5 py-2 bg-primary text-black rounded-lg glass flex items-center gap-2 hover:bg-yellow-500 ease-in duration-150"
            href="/signup">
            <FaRegUser />
            Daftar
         </Link>
      </div>
   )
}