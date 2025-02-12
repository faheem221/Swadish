import {
  LinkedinLogo,
  InstagramLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";
const Footer = () => {
  const social = [
    { icon: <LinkedinLogo weight="fill" />, href: "" },
    { icon: <InstagramLogo weight="fill" />, href: "" },
    { icon: <EnvelopeSimple weight="fill" />, href: "" },
  ];
  return (
    <div className="bg-[#2757AB] text-slate-50 p-5 rounded-t-3xl">
      <div className="grid grid-cols-[.8fr_1.2fr]">
        <div className="">
          <div className="w-[80px]">
            <img src={'/media/Logo-banner.png'} />
          </div>
          <button
            onClick={() =>
              (window.location.href = "https://wa.me/c/919220235826")
            }
            className="text-slate-50 mt-3 bg-pink-500 text-[.65rem] px-2 py-[.2rem] rounded-lg"
          >
            Order Now
          </button>
          <button onClick={()=>window.location.href='https://wa.me/message/DH3TXUZ42YZYC1'} className="text-slate-50 bg-pink-500 text-[.65rem] px-2 py-[.2rem] rounded-lg">
            Connect with Us
          </button>
        </div>

        <div className="mt-2">
          <p className="text-white text-right font-Cascadia text-[.75rem]">
            Customer Support:
          </p>
          <p className="text-[.65rem] text-right">
            79035 76883 <span>-</span> <span>99712771219</span>
          </p>
          <p className="text-[.65rem] text-right">78276 29003</p>
        </div>
      </div>
      <div className="flex justify-end items-center gap-1">
        {social.map((item, idx) => (
          <div className="" key={idx}>
            {item.icon}
          </div>
        ))}
      </div>

      <p className="text-[.5rem] mt-2">
        By continuing past this page, you agree to our Terms of Tenace, Cookie
        Policy, Privacy Policy and Content Policies. All traderterks are
        properties of their respective convers 2019-2025
      </p>
      <p className="text-[.68rem] mt-4">
        &#169; 2025 Rasoi Delight. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
