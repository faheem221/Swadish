import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    { name: "Rohit", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 3 },
    { name: "Mohit", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 5 },
    { name: "Shashtri", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", rating: 2 },
  ];

  return (
    <div className="relative mt-4 overflow-hidden">
      <h2 className="capitalize text-indigo-500 text-center font-Cascadia text-xl">
        What our Customers Say
      </h2>

      {/* Fading Effect on Left & Right */}
     

      {/* Scrolling Reviews */}
      <div className="relative w-full mt-4 mb-6">
      <div className="absolute top-0 z-20 left-0 w-24 h-full bg-gradient-to-r from-purple-200 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-0 z-20 right-0 w-24 h-full bg-gradient-to-l from-purple-200 via-transparent to-transparent pointer-events-none"></div>
        <div className="flex gap-6 animate-scroll hover:paused">
          {[...reviews, ...reviews].map((item, idx) => (
            <ReviewCard key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default Reviews;
