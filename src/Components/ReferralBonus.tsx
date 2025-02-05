const ReferralBonus = () => {
  return (
    <div className="w-full overflow-hidden mt-5 rounded-4xl py-6 px-6 bg-[#2757AB] relative grid grid-cols-[0.8fr_1.2fr]">
      <div className="w-full  h-full"></div>
      <img src={'Referal.png'} className="absolute top-5 -left-4" />
      <div className=" w-full text-slate-50">
        <h3 className="font-Cascadia text-xl text-right">
          Referral <span className="font-serif">Bonus:</span>
        </h3>
        <p className="text-[.75rem] font-light mt-1 text-slate-300 text-right">
          Refer your office colleagues for a one-month subscription and enjoy a{" "}
          <span className="font-bold underline text-slate-50 decoration-red-400">₹100 OFF discount</span> on your own subscription plan.
        </p>
      </div>
    </div>
  );
};

export default ReferralBonus;
