import React, { useState } from 'react';
import { Link} from 'react-router-dom';


import { BsArrowLeftShort } from 'react-icons/bs';
import { FaHospitalUser } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { TbLogout } from 'react-icons/tb';
import { GiMedicines } from 'react-icons/gi';
import { FaFileMedical } from 'react-icons/fa';
import { FaBookMedical } from 'react-icons/fa';

import Logo from '../../assets/logo.png';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: 'Home', path: '/', icon: <AiFillHome /> },
    { title: 'Doctors', path: '/doctors', icon: <FaHospitalUser /> },
    { title: 'Medications', path: '/medications', icon: <GiMedicines /> },
    { title: 'Medical History', path: '/medicalhistory', icon: <FaBookMedical /> },
    { title: 'Reports', path: '/reports', icon: <FaFileMedical /> },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-gray-200 h-screen pt-6 font-sans
         ${open ? 'w-72' : 'w-20'} duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-eswasthya-blue text-white text-3xl 
          rounded-full absolute -right-3 top-9 border
           border-eswasthya-blue cursor-pointer ring-2 ring-white
            ${ !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className={`h-auto pl-2.5 ${open ? 'w-72' : 'w-20'} duration-300`}>
        <img src={Logo}  alt=''/>
        </div>
        <div
          className={`flex items-center rounded-md bg-light-blue mt-6 ${
            !open ? 'px-2.5' : 'px-4'
          } py-2`}
        >
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <Link to={menu.path} key={index}>
                <li
                  className={`text-black text-sm flex items-center 
                  gap-x-4 cursor-pointer p-[1rem] pt-5 hover:bg-eswasthya-blue hover:text-white 
                  rounded-md `}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon}
                  </span>
                  <span
                    className={`text-base font-medium flex  pl-2 duration-200 
                    ${
                      !open && 'hidden'
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </Link>
            ))}

            <li className="flex items-center gap-x-6 p-[1rem] pt-5 text-base
             font-medium rounded-lg cursor-pointer text-black hover:bg-eswasthya-blue hover:text-white ">
              <span className="text-2xl">
                <TbLogout />
              </span>
              <span
                className={`${!open && 'hidden'} origin-left duration-300  hover:block ml-[1px]`}
              >
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
