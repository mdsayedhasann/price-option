import React, { useState } from "react";
import Link2 from "../Link2/Link2";
import { RiMenu2Fill } from "react-icons/Ri";
import { IoMdClose } from "react-icons/Io";

const Nav2 = () => {

  const [open, setOpen] = useState(false)
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/products", name: "Products", id: 5 },
  ];
  return (
    <div className="flex bg-orange-200">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {
            open === true ? <IoMdClose></IoMdClose> : <RiMenu2Fill></RiMenu2Fill>
        }
        
      </div>
      <ul className={`md:flex bg-orange-200 absolute left-14 md:static duration-1000 ${
          open ? 'top-10' : '-top-60'
      }`}>
        {routes.map((route) => (
          <Link2 key={route.id} route={route}></Link2>
        ))}
      </ul>
    </div>
  );
};

export default Nav2;
