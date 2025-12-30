
const steps = [
  { number: "1", title: "エントリー", desc: "説明会に参加していただきます" },
  { number: "2", title: "書類選考", desc: "1週間程度で結果をご連絡します" },
  { number: "3", title: "一次面接", desc: "店舗マネージャーとの面接です" },
  { number: "4", title: "二次面接", desc: "代表との最終面接です" },
  { number: "5", title: "内定", desc: "選考開始から約2〜3週間を想定しています" },
];

const Recruitfow = () => {
    return (
        <div className="w-full  flex flex-col items-center">
            <h2 className="text-2xl sm:text-4xl mb-10">選考フロー</h2>
            <div className="relative w-full max-w-xl">

                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black transform -translate-x-1/2" />
                <div className="flex flex-col gap-10 mx-4 ">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="
                            relative bg-[#B42423] text-white rounded-xl py-6 px-8 w-full"
                            >
                            <p className="text-2xl sm:text-3xl font-bold absolute left-6 top-1/2 -translate-y-1/2">{step.number}  </p>
                            <div className="flex flex-col  items-center text-center">
                                <div className="text-center">
                                    <p className="text-xl sm:text-2xl">{step.title}</p>
                                    <p className="text-lg ">{step.desc}</p>
                                </div>
                            </div>

                        </div>
                    )) }
                </div>
            </div>
            <button className="mt-16 bg-[#B42423] text-white rounded-full px-20 py-4">
                エントリーする
            </button>
        </div>

    );
}

export default Recruitfow


