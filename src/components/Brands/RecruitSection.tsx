import { recruitmentCircle } from "../../images";
export default function RecruitSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
        <div>
          <h2 className="text-4xl font-bold mb-8">採用情報</h2>

          <p className="text-lg leading-relaxed mb-8">
            私たちは、社員一人ひとりが最大限の能力を発揮できる環境づくりを大切にしています。
          </p>

          <button
            className="
              bg-[#B42423] text-white px-6 py-3 rounded-md 
              flex items-center gap-2 cursor-pointer
              hover:bg-[#9e1f1e] transition
          "
          >
            採用情報を見る
            <span className="text-xl">➜</span>
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={recruitmentCircle}
            alt="採用情報"
            className="w-80 h-80 rounded-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
