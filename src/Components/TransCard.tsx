import React from "react";

const TransCard = () => {
  return (
    <div className="w-full grid grid-cols-1 place-items-center bg-pink-600 mt-4 relative h-40">
      <img
        src={"/media/premium card.png"}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="relative z-10">
        <Card />
      </div>
    </div>
  );
};
export default TransCard;

const Card = () => {
  return (
    <div className="w-[230px]  pt-5 isolate aspect-video rounded-xl backdrop-filter backdrop-blur-[5px] bg-white/40 ring-1 ring-black/5">
      <div className="grid grid-cols-2 gap-1 w-full px-4">
      <div className="leading-[.6]">
        <p className=" font-Cascadia text-slate-50 text-2xl font-[700]">Rasoi</p>
        <p className="text-slate-100 font-Roboto">
          premium 
        </p>
        <p className="text-slate-100 mt-2 font-Roboto">card</p>
      </div>

      <div className="flex justify-center items-center">
      <h2 className="text-3xl text-slate-50 font-Cascadia ">130/-</h2>
      </div>
      </div>
      <div className="w-full text-[.6rem] mt-3 text-slate-100 flex justify-between px-4 items-center">
        <p className="">Jack Robert</p>
        <p className="">Monthly Card</p>
      </div>
    </div>
  );
};
