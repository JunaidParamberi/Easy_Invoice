import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import TickPlacementBars from '../components/Chart';
import ClientCard from '../components/ClientCard';

function Dashboard() {
  const [isMounted, setIsMounted] = useState(false)


  useEffect(() => {

    setIsMounted(true);


    return () => {
        setIsMounted(false);
    };
}, []);

const cardData = [
  {
    name : "Overdue",
    price : 45231.89,
    growth : "20.1%"
  },
  {
    name : "Total outstanding",
    price : 45231.89,
    growth : "19%"
  },
  {
    name : "Get paid",
    price : 15231.99,
    growth : "10%"
  },
  {
    name : "Uncollectible",
    price : 5000,
    growth : "5%"
  },
]


  return (
    <div className={`flex flex-col w-full justify-center p-[30px] transition-all duration-300 ease-in-out gap-3
    ${isMounted ? " mt-[0px]  opacity-100" : "opacity-0 mt-[-20px]"}`}>
      <div className=' flex justify-between'>
        {
          cardData.map((data, index) => (
            <Card key={index} data = {data}/>
            
          ))
        }
      

      </div>
      <div className=' flex gap-3'>

      <TickPlacementBars/>
      <ClientCard/>
      </div>
    </div>
  )
}

export default Dashboard
