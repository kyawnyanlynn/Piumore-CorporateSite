import { KV_Recruitment } from "../../images";

const RecruitVisual = () => {
  return (
    <div className="relative w-full py-20">
      <img
        src={KV_Recruitment}
        alt="Recruitment Visual"
        className="w-full object-cover opacity-0.9"
      />
      <p
        className="
                absolute 
                top-6/10 
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
