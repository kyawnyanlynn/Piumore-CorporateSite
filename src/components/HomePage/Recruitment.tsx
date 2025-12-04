const Recruitment = () => {
  return (
    <>
      <div className="bg-amber-500 flex justify-center mt-20">
        <div className="flex flex-col">
          <h2 className="text-4xl pb-8">採用情報</h2>
          <p className="text-[20px] pb-8">
            私たちは、社員一人ひとりが最大限の能力を
            発揮できる環境づくりを大切にしています。
          </p>
          <button className="bg-red-600 w-[150px] h-10 rounded-[10px]">
            <a className="text-white" href="">
              採用情報を見る
            </a>
          </button>
        </div>
        <div className="bg-amber-800 h-[400px] w-[400px] rounded-full">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};
export default Recruitment;
