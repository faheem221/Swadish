const Subscription = () => {
  return (
    <div className="mt-7 relative grid grid-cols-[1.5fr_.5fr] overflow-hidden px-4 py-7 rounded-4xl bg-[#2757AB]">
      <img className="absolute w-full h-full top-10 left-8" src={'Benfits_Images.png'} />
      <div className="relative z-20">
        <p className="text-xl w-fit underline decoration-1 decoration-slate-300 underline-offset-[18px] font-Cascadia text-slate-50">
          Subscription{" "}
          <span className="font-sans text-slate-300">Benefits:</span>
        </p>

        <ul className="mt-8">
          <li>
            <p className=" text-slate-50 font-Cascadia leading-4">Flexible Choices-</p>
            <p className="text-slate-300 text-[.7rem]">
              Replace your regular thali with any item under $100 on Wednesday &
              Fridays.
            </p>
          </li>
          <li className="mt-4">
            <p className="text-slate-50 font-Cascadia leading-4">Maximum Savings-</p>
            <p className="text-slate-300 text-[.7rem]">Enjoy the best value on your order</p>
          </li>
          <li className="mt-4">
            <p className="text-slate-50 font-Cascadia leading-4">Priority Delivery-</p>
            <p className="text-slate-300 text-[.7rem]"> Get your meals delivered first.</p>
          </li>
        </ul>
        <button className="rounded-full mt-6 mb-3 text-[.6rem] px-6 py-2 text-slate-50 bg-red-500 ">
          Subscrive & Order Your Meal Today*
        </button>
      </div>
    </div>
  );
};

export default Subscription;
