import React from 'react';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from 'react-router-dom';

function ClientCard() {

    const clientData = [
        {
            name: "Olivia Martin",
            email: "olivia.martin@email.com",
            amount: 1999.00
        },
        {
            name: "Jackson Lee",
            email: "jackson.lee@email.com",
            amount: 39.00
        },
        {
            name: "Isabella Nguyen",
            email: "isabella.nguyen@email.com",
            amount: 299.00
        },
        {
            name: "William Kim",
            email: "will@email.com",
            amount: 99.00
        },
        {
            name: "Sofia Davis",
            email: "sofia.davis@email.com",
            amount: 39.00
        },
       
       
    ];

    return (
        <div className=' client-chart w-[50%] max-h-[66vh] overflow-y-scroll bg-[#ffffff] flex flex-col rounded-lg p-[20px] border-[#17694F] border-[0.5px] gap-3 bg-opacity-80'>
            <div>
                <h1 className='flex justify-between text-[14px]'>Recent Sales</h1>
                <p className='text-[12px] font-[200]'>You made {clientData.length} sales this month.</p>
            </div>

            {clientData.map((data, index) => (
                <Link key={index + 1} className=' cursor-pointer '>
                    <div className='flex justify-between items-center transition-all duration-150 hover:bg-[#17694f1b] p-[10px] rounded-xl  '>
                        <div className='flex gap-3 items-center'>
                            <h1 
                            className='text-[15px] bg-[#17694F]
                             p-[3px] flex justify-center items-center rounded-full text-white w-[30px] h-[30px]'>
                                {index + 1}</h1>
                            <div>
                                <h2 className='text-[16px] font-[600] mb-[-3px]'>{data.name}</h2>
                                <h3 className='text-[12px] font-[200]'>{data.email}</h3>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-[20px] font-[700] amount-txt'>
                                <span className='text-[12px] font-[400] amount'>AED</span> {data.amount.toFixed(2)}
                            </h1>
                        </div>
                    </div>
   
                </Link>
            ))}
        </div>
    );
}

export default ClientCard;
