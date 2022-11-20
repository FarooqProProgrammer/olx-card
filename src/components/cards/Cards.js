import React from 'react'

export const Cards = ({price,title,image,featured,address}) => {
  return (
    <div className='w-[248px] h-[289px] border-2'>
      <div  className='w-[248px] h-[148.5px] relative border-2 '>
        <img className='w-full h-full ' src={image} />
       {featured && <button className='w-[100px] h-[30px] border-2  absolute top-[115px] rounded-sm -left-0 bg-[#ffce32]'>Featured</button>}
      </div>
      <div className='w-[248px] h-[137.75px] relative '>
        {featured &&  <div className=' absolute h-full w-0 border-2 border-[#ffce32]'></div>}
        <div className='w-full h-[80px] relative'>
          <p className='text-xl font-black absolute left-[5px]'>{title}</p>
          <i className="fa-solid fa-heart absolute left-[215px] font-black text-2xl"></i>
          <p className='absolute top-[35px] left-1 text-2xl font-black'>RS: {price}</p>
        </div>
        <div className='w-[248px] h-[53px]  flex justify-center items-center'>
          <p className='font-black'>{address}</p>
        </div>
      </div>
    </div>
  )
}
