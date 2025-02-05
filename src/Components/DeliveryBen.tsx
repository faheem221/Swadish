

const DeliveryBen = () => {
  return (
    <div className="grid mt-5 overflow-hidden rounded-4xl bg-[#2757AB] px-5 relative py-6 grid-cols-[1.2fr_.8fr]">
      <img src={'Delivery.png'} className="absolute w-full h-full object-contain top-3 left-24 " />
      <div className="">
        <h3 className="text-xl text-slate-50 font-Cascadia">
          Delivery <span className="font-serif text-slate-300 font-light">Time:</span>
        </h3>
        <p className="font-light text-[.7rem] text-slate-100">
          We now deliver <span className="font-bold text-slate-50">lunch</span> between <span className="font-bold text-slate-50 underline decoration-red-500">12:30 PM to 1:30 PM</span> and <span className="text-slate-50 font-bold">Snacks</span> between{' '}
          <span className="font-bold text-slate-50 underline decoration-red-500">4:00 PM to 5:00 PM.</span>{" "}
        </p>
      </div>
      
    </div>
  );
};

export default DeliveryBen;
