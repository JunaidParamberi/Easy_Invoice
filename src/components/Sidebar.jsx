import React, { useState } from 'react';
import logo from "../assets/Logo_wt.svg";
import { NavLink } from 'react-router-dom';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DescriptionIcon from '@mui/icons-material/Description';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSetActiveIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='flex flex-col items-start w-[17%]  bg-[#17694F] border-r-[1px] py-[20px] relative'>
      <img
        className='h-[40px] mb-9 px-[30px]'
        src={logo}
        alt="logo"
      />

      <div className='flex flex-col justify-between h-full w-[98%] relative'>
        <div className='flex flex-col items-start gap-3 w-full nav-container' style={{ '--active-index': activeIndex }}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={() => handleSetActiveIndex(0)}
          >
            <DashboardCustomizeIcon sx={{ width: "18px" }} />
            <h2 className='text-[15px] font-[500]'>Dashboard</h2>
          </NavLink>

          <NavLink
            to="invoices"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={() => handleSetActiveIndex(1)}
          >
            <ReceiptIcon sx={{ width: "18px" }} />
            <h2 className='text-[15px] font-[500]'>Invoices</h2>
          </NavLink>

          <NavLink
            to="quotations"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={() => handleSetActiveIndex(2)}
          >
            <DescriptionIcon sx={{ width: "18px" }} />
            <h2 className='text-[15px] font-[500]'>Quotations</h2>
          </NavLink>

          <NavLink
            to="clients"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={() => handleSetActiveIndex(3)}
          >
            <SwitchAccountIcon sx={{ width: "18px" }} />
            <h2 className='text-[15px] font-[500]'>Clients</h2>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={() => handleSetActiveIndex(4)}
          >
            <SettingsIcon sx={{ width: "18px" }} />
            <h2 className='text-[15px] font-[500]'>Settings</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
