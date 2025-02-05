 

const Banner1 = () => {
  return (
    <div className='w-full mt-6 rounded-4xl py-7 bg-[#2757AB] text-slate-50 relative overflow-hidden '>
      <img src={'Office Dlight_Image_banner.png'} className="w-full scale-[1.1] h-full object-cover absolute top-0 left-0" />
       <div className="justify-center relative z-10 items-center flex flex-col">
       <h2 className='text-2xl font-Cascadia tracking-tighter font-[600]'>Office Delight Thali</h2>
        <p className=' text-[.7rem] tracking-tight'>Veg Sabji | Dal | Rice | 4 Roti | Fresh Salad</p>
        <button className='text-slate-50 text-[.7rem] font-Roboto px-3 py-1 mt-3 text-md bg-red-500 rounded-full'> 
            Subscription
        </button>
       </div>
    </div>
  )
}

export default Banner1