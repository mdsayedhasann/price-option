/* eslint-disable react/jsx-key */
import { useState } from "react";
import Link from "../Link/Link";

import { HiMenuAlt2 } from 'react-icons/Hi';
import {RxCross2} from 'react-icons/Rx'


// eslint-disable-next-line no-unused-vars
const routes = [
  { path: "/", name: "Home", id: 1 },
  { path: "/about", name: "About", id: 2 },
  { path: "/services", name: "Services", id: 3 },
  { path: "/contact", name: "Contact", id: 4 },
  { path: "/products", name: "Products", id: 5 },
];

const NavBar = () => {
const [open, setOpen] = useState(false)
  return (
    <div className="">
        <div onClick={() => setOpen(!open)} className="md:hidden bg-yellow-100 px-5 py-2">
            {
                open === true ?  <RxCross2 className="bordered"></RxCross2>
                 : <HiMenuAlt2 className="text-xl"></HiMenuAlt2>
            }
            
        </div>
      <ul className={`md:flex duration-1000 ${open ? 'left-0' : '-left-96'} bg-yellow-100 px-5 py-2 ml-10 absolute md:static`}>
        {routes.map((route) => (
           <Link route={route}></Link>
        ))}
      </ul>
    </div>
  );
};

// NavBar.propTypes = {

// }

export default NavBar;
