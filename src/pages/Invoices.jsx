import React, {useState, useEffect} from 'react'
import InvoiceTable from '../components/InvoiceTable'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DateRangePicker from '../components/DateRangePicker';



export const Filters = ()=> {
    return (
        <>
        <DateRangePicker/>
        </>
    )
}



function Invoices() {
    const [isMounted, setIsMounted] = useState(false)


    useEffect(() => {
  
      setIsMounted(true);
  
  
      return () => {
          setIsMounted(false);
      };
  }, []);




  return (
    <div className={`flex flex-col w-full justify-center p-[30px] transition-all duration-300 ease-in-out 
    ${isMounted ? " mt-[0px]  opacity-100" : "opacity-0 mt-[-20px]"}`}>
    <div className=' flex flex-col bg-[#ffffff] p-[20px] border-[#17694F] border-[0.5px] rounded-lg gap-3'>
        <div className=' flex justify-between items-center'>
            <div className=' flex gap-5 text-[17px] '>
            <NavLink 
            className={({ isActive }) =>
                `transition-all duration-300 ease-in-out font-[600] ${
                  isActive ? ' text-[#17694F] border-b-[2px] border-b-[#17694F]' 
                  : ' text-[#17694f94] border-b-[2px] border-b-[#17694f00]'
                }`
              }
            to="."
            relative='path'
            end
            >Invoices</NavLink>
            <NavLink 
              className={({ isActive }) =>
                `transition-all duration-300 ease-in-out font-[600] ${
                  isActive ? ' text-[#17694F] border-b-[2px] border-b-[#17694F]' 
                  : ' text-[#17694f94] border-b-[2px] border-b-[#17694f00]'
                }`
              }
            to="draft">Draft</NavLink>
            </div>

            <Link to="add">
   
            <Button
            sx={{
              boxShadow: "none",
              textTransform: "none",
              backgroundColor : "#17694F",
              borderRadius : "20px",
              
              '&:hover': {
                boxShadow: "none",
                backgroundColor : "#144737",
              },
              '& .MuiButton-label': {
                textTransform: "capitalize",
              },
            }}
            variant="contained"
            endIcon={<AddIcon />}
          >

            Add Invoice
          </Button>
          </Link>

        </div>
        {/* <div className=' font-[600] flex text-[15px] gap-4 text-[#17694f94] border-b-[0.5px] border-b-[#17694F] '>
            <NavLink 
              className={({ isActive }) =>
                ` border-b-[1px] border-b-[#17694F] transition-all duration-300 ease-in-out text-[#17694F] `}>
                All
            </NavLink>

            <NavLink 
              className={({ isActive }) =>
                `transition-all duration-300 ease-in-out `}>
                Outstanding
            </NavLink>

            <NavLink 
              className={({ isActive }) =>
                `transition-all duration-300 ease-in-out `}>
                Paid
            </NavLink>

            <NavLink 
              className={({ isActive }) =>
                `transition-all duration-300 ease-in-out `}>
                Uncollectible
            </NavLink>
            

        </div> */}
        <Outlet/>
    </div>
    </div>
  )
}

export default Invoices
