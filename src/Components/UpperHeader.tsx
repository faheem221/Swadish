import { useEffect, useState } from "react";

const UpperHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down -> Hide
        setIsVisible(false);
      } else {
        // Scrolling Up -> Show
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-screen top-0 left-0 z-[999] fixed py-1 flex justify-center bg-pink-600 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <img className="w-10" src={"/media/Logo-banner.png"} />
    </div>
  );
};

export default UpperHeader;
