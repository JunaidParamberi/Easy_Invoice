import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import logo from "../assets/Logo.svg"
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';

function Navbar() {

  const [isDark, setIsDark] = useState(false)
  const location = useLocation()
  const [headString, setHeadString] = useState("")

 

  const handleMode = ()=> {
    setIsDark(prevState => !prevState)
  }

  useEffect(() => {
    const headers = {
        '/': 'Overview',
        '/invoices': 'Invoices',
        '/quotations': 'Quotations',
        '/settings': 'Settings',
        '/clients': 'Clients',
        '/invoices/draft' : "Invoices / Drafts",
        '/invoices/add' : "Invoices / New Invoice"
        
    };

    setHeadString(headers[location.pathname] || ''); 
}, [location]);

console.log(location)
  return (
    <div className=' w-full'>
    <div className=' flex items-center w-full justify-center p-[10px] bg-white h-[9vh]'>
      <div className=' flex justify-between w-[95%]'>
      <div className=' flex items-center gap-12 '>
    
      <h1 className=' text-[18px] transition-all duration-200 ease-in-out font-[500]'>{headString}</h1>
        
      </div>  

      <div className=' flex gap-10 items-center'>

      <div className='  px-[20px] justify-center search-box flex p-[10px] rounded-3xl items-center h-[40px]'>
      <SearchIcon sx={{width : "20px", height : "20px"}}/>
  
      <input 
      type="search"
      name="" 
      id=""
      placeholder='Search for something'
      className=' outline-none text-[14px] font-[400] w-[150px] ease-out-in duration-300 focus:w-[300px]'
      />
      </div>


      <div className=' flex gap-3'>
      <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          onClick={handleMode}
          >


        {!isDark ?
          <DarkModeIcon sx={{width : "30px", height : "30px", cursor : "pointer"}}/>
          :
          <LightModeIcon sx={{width : "30px", height : "30px", cursor : "pointer"}}/>
          

        }
        </IconButton> 
     
    
      <IconButton

            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              <Badge badgeContent={3} color="error">
        <MailIcon 
        sx={{width : "27px", height : "27px", cursor : "pointer"}}
        />
      </Badge>
      </IconButton> 
      </div>
      <Avatar
      />
      </div>
      </div>
    </div>
    <Outlet/>
    </div>
  )
}

export default Navbar
