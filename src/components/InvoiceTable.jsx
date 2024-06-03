import React, {useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DateRangeInput from './DateRangePicker';



export  function CustomIcons() {
    return (
      <Stack spacing={2}>
        <Pagination
        size='small'
        shape='rounded'
          count={5}
          renderItem={(item) => (
            <PaginationItem
            sx={{color : "#17694F"}}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    );
  }



export function TableHead(){

    const headTxt = [
        {field : "Invoice#", width : 10},
        {field : "Date", width : 15},
        {field : "Client", width : 30},
        {field : "Status", width : 15},
        {field : "Due Date", width : 15},
        {field : "Total", width : 15},
        {field : "Amount Due", width : 20},
        
    ]

    

    return(
        <div className=' flex border-b-[1px] border-b-[#17694F] p-[15px] '>
            {headTxt.map((txt, index) => (
                <h1 
                className={`font-[500] text-[15px]
                ${txt.field ===  "Total"  &&  "text-right text-[red] pr-[5px]" } 
                ${txt.field ===  "Amount Due"  &&  "text-right  mr-[40px] " }
                `}
                style={{width : `${txt.width}%`}} key={index}>{txt.field}</h1>
            ))}
        </div>
    )
}


const TableBody = () => {
    const bodyTxt = [
      { field: { text: "00015", type: "Invoice#" }, width: 10 },
      { field: { text: "10 Oct 2024", type: "Date#" }, width: 15 },
      { field: { text: "Sabah Al Madina ", type: "Client" }, width: 30 },
      { field: { text: "Paid", type: "Status" }, width: 15 },
      { field: { text: "21 Oct 2023", type: "Due Date" }, width: 15 },
      { field: { text: 2400, type: "Total" }, width: 15 },
      { field: { text: 1000, type: "Amount Due" }, width: 20 },
    ];
  
    return (
      <div className={`flex border-b-[0.5px] border-b-[#17694F] p-[15px] hover:bg-[#17694f12] opacity-85 gap-2
      `}>
        {bodyTxt.map((txt, index) => (
          <div
            className={`font-[400] text-[13.5px]
            ${(txt.field.type === "Amount Due") ? "" : "border-r-[0.5px] border-r-[#17694F]"}
            ${txt.field.type === "Total" && "text-right text-[red] font-[500] pr-[5px] "}
            ${txt.field.type === "Amount Due" && "text-right mr-[40px]"}`}
            style={{ width: `${txt.width}%`, textOverflow : "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}
            key={index}
          >
            {txt.field.type === "Total" || txt.field.type === "Amount Due"
              ? "AED " + txt.field.text.toFixed(2) // Fixed to two decimal places
              : txt.field.text}
          </div>
        ))}
       
      </div>
    );
  };


export function Filters(){
    return (
        <div className=' flex items-center justify-between my-[10px]'>
            <div className=' flex items-center'>

          
            <DateRangeInput/> 

            <div className=' flex items-center gap-3'>
                <h1 className=' opacity-50 cursor-pointer gap-1 flex items-center font-[400] text-[13px] bg-[#CEF8E0] text-[#007A4D] px-[10px] rounded-2xl'>
                    <div className=' rounded-full bg-[#007A4D] h-[7px] w-[7px]'></div>
                    Paid
                </h1>
                <h1 className=' cursor-pointer gap-1 flex items-center font-[400] text-[13px] bg-[#EDEEFF] text-[#5258E4] px-[10px] rounded-2xl'>
                    <div className=' rounded-full bg-[#5258E4] h-[7px] w-[7px]'></div>
                    Awaiting Payment
                </h1>

                <h1 className=' opacity-50 cursor-pointer gap-1 flex items-center font-[400] text-[13px] bg-[#FFEBE7] text-[#D31510] px-[10px] rounded-2xl'>
                    <div className=' rounded-full bg-[#D31510] h-[7px] w-[7px]'></div>
                    Overdue
                </h1>
            </div>
            </div>
            <button
            className=' text-[13px] border-[#17694F] border-[1px] px-[10px] py-[5px] rounded-lg active:bg-[#17694F] active:text-[white]'
            >Clear All</button>
        </div>
    )
}
  


function InvoiceTable() {


        const [isMounted, setIsMounted] = useState(false)
    
    
        useEffect(() => {
      
          setIsMounted(true);
      
      
          return () => {
              setIsMounted(false);
          };
      }, []);
    
    
    
  return (
    <div className={`flex flex-col rounded-lg min-h-[48vh] justify-between
    transition-all duration-300 ease-in-out ${isMounted ? " mt-[0px]  opacity-100" : "opacity-0 mt-[-20px]"}
    `}>
        <Filters/>
      <div className=''>
      <TableHead/>

      <TableBody/>
      <TableBody/>
      <TableBody/>
      <TableBody/>
      <TableBody/>
      <TableBody/>
      <TableBody/>

      </div>
      <div className=' w-full flex justify-end mt-[10px] '>
      <CustomIcons/>

      </div>
    </div>
  )
}

export default InvoiceTable
