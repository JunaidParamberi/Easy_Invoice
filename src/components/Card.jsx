import React from 'react'

function Card({data}) {
  return (
    <div 
    className={`w-[24%] bg-[#ffffff] flex flex-col rounded-lg p-[20px] border-[#17694F] border-[0.5px] 
    bg-opacity-80  `}
    
    >
      <h1 
      className=' flex justify-between text-[14px]'>
        {data.name}</h1>
        <h2 className=' font-[700] text-[24px]'> 
        <span  className=' text-[18px] font-[500]'>AED </span> 
        {data.price.toFixed(2)}</h2>
        <p className=' text-[12px] font-[200]'>+{data.growth} from last month
</p>
    </div>
  )
}

export default Card
