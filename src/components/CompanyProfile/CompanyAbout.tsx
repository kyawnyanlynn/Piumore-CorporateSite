

const CompanyAbout = () => {
  return (
    <div className="px-[5%] sm:px-[10%] py-10 ">
      {/* タイトル */}
      <h2 className="text-3xl sm:text-4xl font-bold text-[#B42423] mb-10">
        会社概要
      </h2>

      <div className="divide-y divide-gray-300 border-b border-gray-300 ">
        
        <div className="py-4 flex flex-col sm:flex-row">
          <span className="w-full sm:w-1/4 font-semibold">会社名</span>
          <span className="w-full sm:w-3/4">【株式会社PIUMORE】</span>
        </div>

        <div className="py-4 flex flex-col sm:flex-row">
          <span className="w-full sm:w-1/4 font-semibold">設立</span>
          <span className="w-full sm:w-3/4">【2016年4月】</span>
        </div>

        <div className="py-4 flex flex-col sm:flex-row">
          <span className="w-full sm:w-1/4 font-semibold">代表者</span>
          <span className="w-full sm:w-3/4">
            【代表取締役　小森（大滝）桂介　フリガナ／コモリ ケイスケ】
          </span>
        </div>

        <div className="py-4 flex flex-col sm:flex-row">
          <span className="w-full sm:w-1/4 font-semibold">従業員数</span>
          <span className="w-full sm:w-3/4">
            【35名】（2025年10月時点）
          </span>
        </div>

        <div className="py-4 flex flex-col sm:flex-row">
          <span className="w-full sm:w-1/4 font-semibold">所在地</span>
          <span className="w-full sm:w-3/4">
            【本社：東京都千代田区神田神保町1-35-16 O&Oビル１F】
          </span>
        </div>

        <div className="py-4 flex flex-col sm:flex-row">
          <span className="w-full sm:w-1/4 font-semibold">事業内容</span>
          <span className="w-full sm:w-3/4">
            【飲食店の経営（イタリアン、和食、FC事業）】
          </span>
        </div>

        <div className="py-4 flex flex-col sm:flex-row">
          <span className="w-full sm:w-1/4 font-semibold">留学生採用</span>
          <span className="w-full sm:w-3/4">
            【採用実績あり／留学生採用予定あり】
          </span>
        </div>

        <div className="py-4 flex flex-col sm:flex-row">
          <span className="w-full sm:w-1/4 font-semibold">資本金</span>
          <span className="w-full sm:w-3/4">【6,000,000円】</span>
        </div>

        <div className="py-4 flex flex-col sm:flex-row">
          <span className="w-full sm:w-1/4 font-semibold">TEL</span>
          <span className="w-full sm:w-3/4">【033-294-1233】</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
