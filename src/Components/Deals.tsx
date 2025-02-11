const Deals = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-[.9fr_1.1fr] gap-3">
        <div className="px-3 border border-[#BCCCE2] py-5 bg-[#ADC6EF] rounded-4xl">
          <div className="border-b border-slate-400 py-[.15rem] flex items-center gap-2 tracking-tight">
            <p className="text-lg font-Cascadia font-[800]">Regular</p>
            <p className="text-[.6rem] text-slate-600 mt-1 !font-Roboto">
              Single Order
            </p>
          </div>
          <p className="text-3xl mt-1 font-bold">₹ 100/-</p>
          <p className="text-[.55rem]">+20 (Delivery Charges)</p>
        </div>

        <div className="px-3 border border-[#BCCCE2] py-5 bg-[#ADC6EF] rounded-4xl">
          <div className="border-b border-slate-400 py-[.15rem] flex items-center gap-1 tracking-tighter">
            <p className="text-lg font-Cascadia font-[800]">Tasty trio</p>
            <p className="text-[.6rem] mt-1 !font-Roboto text-slate-600">
              3 Days Working
            </p>
          </div>
          <p className="text-3xl mt-1 font-bold">₹ 300/-</p>
          <p className="text-[.55rem]">Free delivery</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 mt-3">
        <div className="px-3 border border-[#BCCCE2] py-5 bg-[#ADC6EF] rounded-4xl">
          <p className="text-red-500 text-sm text-right">Subscription</p>
          <div className="flex justify-between items-center border-b border-slate-400 py-1">
            <p className="text-lg font-Cascadia font-[800]">Tasty Week</p>
            <p className="text-[.6rem] text-slate-600 mt-1 !font-Roboto">
              5 Day/ 6 Day Working
            </p>
          </div>
          <p className="text-3xl mt-1 font-bold">₹ 475 / 570/-</p>
          <div className="flex mt-1 justify-between items-center text-[.7rem]">
            <p>Free delivery</p>
            <p>₹95 Per Day</p>
          </div>
        </div>
        <div className="px-3 border border-[#BCCCE2] py-5 bg-[#ADC6EF] rounded-4xl">
          <p className="text-red-500 text-sm text-right">Subscription</p>
          <div className="flex justify-between items-center border-b border-slate-400 py-1">
            <p className="text-lg font-Cascadia font-[800]">Month of Bites</p>
            <p className="text-[.6rem] text-slate-600 mt-1 !font-Roboto">
              5 Day/ 6 Day Working
            </p>
          </div>
          <p className="text-3xl mt-1 font-bold">₹ 1890 / 2250/-</p>
          <div className="flex mt-1 justify-between items-center text-[.7rem]">
            <p>Free delivery</p>
            <p>₹90 Per Day</p>
          </div>
        </div>
      </div>
      <p className="text-[.75rem] mt-6">
        With every subscription, you get{" "}
        <span className="font-bold">2 free thalis</span>. If you take up to{' '}
        <span className="font-bold">2 days off in a month,</span> your free thalis will be adjusted accordingly. If
        you take more than 2 days off, we will <span className="font-bold">reimburse the amount</span> for the
        extra leave days.
      </p>
    </div>
  );
};

export default Deals;
