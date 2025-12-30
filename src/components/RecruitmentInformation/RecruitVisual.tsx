import { KV_Recruitment } from "../../images";

const RecruitVisual = () => {
  return (
    <div className="relative w-full aspect-[16/9] bg-white">
      <img
        src={KV_Recruitment}
        alt="Recruitment Visual"
        className="w-full h-full sm:h-full  object-contain "
      />
      <p
        className="
                absolute 
                top-10/12 
                left-1/2 
                transform -translate-x-24/25 -translate-y-1/
                 text-white 
                 text-3xl sm:text-5xl 
                 font-bold"
      >
        「もっと」を叶える場所へ
      </p>
    </div>
  );
};

export default RecruitVisual;
