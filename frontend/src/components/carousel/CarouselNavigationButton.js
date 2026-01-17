import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

export default function CarouselNavigationButton({ pref, nref }){
    return (
    <>
      <button disabled={false} ref={pref} className="group cursor-pointer text-white">
        <CircleArrowLeft className="text-dyellow group-hover:fill-dyellow group-hover:text-black" size={28}/>
      </button>
      <button disabled={false} ref={nref} className="group cursor-pointer text-white">
        <CircleArrowRight className="text-dyellow group-hover:fill-dyellow group-hover:text-black" size={28}/>
      </button>
    </>
  );
}