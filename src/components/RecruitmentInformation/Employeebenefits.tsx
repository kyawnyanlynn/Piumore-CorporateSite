const Employeebenefits = () => {
  return (
    <div className="px-[5%] sm:px-[10%] my-14 sm:my-28">
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16">
        福利厚生と制度
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 border-y-1 border-black-5 px-[8%] gap-y-8 gap-x-6 p-10">
        <p className="text-2xl font-bold ">まかない・食事補助</p>
        <p className="text-base font-medium">
          各店舗の美味しいまかないが食べられます。新作メニ ューの試食会も！
        </p>

        <p className="text-2xl font-bold ">シフトの柔軟性</p>
        <p className="text-base font-medium">
          希望を考慮したシフト制。プライベートとの両立をサポートします。
        </p>

        <p className="text-2xl font-bold ">スキルアップ支援</p>
        <p className="text-base font-medium">
          調理研修、サービス講習、ソムリエ資格取得支援など 、成長を応援します。
        </p>

        <p className="text-2xl font-bold ">制服貸与</p>
        <p className="text-base font-medium">
          店舗のコンセプトに合わせた、スタイリッシュな制服を貸与します。
        </p>
      </div>
    </div>
  );
};

export default Employeebenefits;
