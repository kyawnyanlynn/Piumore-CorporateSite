import { KV_Recruitment } from "../../images";

const RecruitVisual = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-white mt-[50px]">
      <img
        src={KV_Recruitment}
        alt="Recruitment Visual"
        className="w-full h-full sm:h-full  object-contain "
      />
      <p
        className="
                absolute 
                top-9/12
                sm:top-10/12 
                left-3/4
                sm:left-1/2 
                transform -translate-x-24/25 -translate-y-1/
                whitespace-nowrap
                 text-white 
                 text-xl sm:text-5xl 
                 font-bold"
      >
        「もっと」を叶える場所へ
      </p>
    </div>
  );
};

export default RecruitVisual;
