import { Star, StarHalf } from "lucide-react";


export default function FiveStars({rating}){
    return (
    <>
      {[2, 4, 6, 8, 10].map((rate) =>
        rating > rate ? (
          <Star key={rate} fill="#FEE505" stroke="#FEE505" />
        ) : rate - rating <= 1 ? (
          <StarHalf key={rate} fill="#FEE505" stroke="#FEE505" />
        ) : (
          <Star key={rate} stroke="#FEE505" />
        )
      )}
    </>
  );
}