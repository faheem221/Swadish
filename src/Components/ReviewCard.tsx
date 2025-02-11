import { Star } from "@phosphor-icons/react";

interface ReviewItem {
  name: string;
  rating: number;
  desc: string;
}

const ReviewCard = ({ item }: { item: ReviewItem }) => {
  return (
    <div className="p-3 w-[260px] border rounded-2xl border-indigo-700 bg-indigo-300">
      <div className="flex justify-between items-center">
        <p className="text-indigo-700 text-lg">{item.name}</p>
        <div className="flex justify-center items-center gap-1">
          {Array.from({ length: 5 }, (_, idx) => (
            <Star
              key={idx}
              weight={idx < item.rating ? "fill" : "regular"} // Filled for rated stars
              className={idx < item.rating ? "text-yellow-500" : "text-gray-200"} // Color logic
              size={16}
            />
          ))}
        </div>
      </div>
      <p className="mt-1 text-[.7rem]">{item.desc}</p>
    </div>
  );
};

export default ReviewCard;
