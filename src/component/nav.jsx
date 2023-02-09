 import React, { useState } from "react";
 import Button from "./Button";
 let navlinks = [
    {name:"HOME",link:"#"},
    {name:"SHOP",link:"#"},
    {name:"BLOG",link:"#"},
    {name:"ABOUT",link:"#"},
 ];
 const Nav = () => {

    let [open,setOpen] = useState(false)

    return(
        <div className=" shadow-lg bg-gray-100 py-3" >
        <div className="sm:flex   items-center  justify-between  md:px-4 px-2 ">
            <div className="font-bold text-2xl text-indigo-900 border-b-2 border-black sm:border-b-0 sm:text-3xl flex items-center cursor-pointer font-[Poppins] ">
                <span className="text-center text-3xl sm:text-4xl mr-1 pt-1">
                <ion-icon name="alarm-outline"></ion-icon>
                </span>
                Smart Clock
                <div className=" absolute right-5 top-6 sm:hidden transition-all duration-1000 ease-in" onClick={()=>setOpen(!open)} ><ion-icon name={open ? "close":"menu"}></ion-icon>
               </div>
            </div>
            <div className={`mt-2 sm:mt-0 flex flex-col sm:flex-row items-center sm:gap-5 font-serif transition-all duration-500 ease-in sm:static ${open ? "sm:flex opacity-100":"hidden sm:flex"} sm:opacity-100 opacity-0`}>
                <ul className="flex flex-col sm:flex-row items-center gap-5">
                    {navlinks.map((link)=>(
                        <li key={link.name} className="hover:text-red-500 duration-300 ">
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                </ul>
                <Button name="LOG IN" />
            </div>
        </div>
        </div>
    );
 }

 export default Nav