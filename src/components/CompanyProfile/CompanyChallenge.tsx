import { Challenge_1, Challenge_2 } from "../../images";

const CompanyChallenge = () => {
    return (
        <>
            <div className="px-[5%] sm:px-[10%] my-10 read-relaxed ">
                <h3 className="text-[#B42423] text-2xl sm:text-3xl font-bold mb-10">飲食業界が抱える課題に、正面から挑む。</h3>
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="lg:w-1/2">
                        <ul className="list-disc list-inside space-y-8 my-6 text-2xl">
                            <li>接客が形骸化していないか？</li>
                            <li>味づくりが「作業」になっていないか？</li>
                            <li>スタッフが笑顔で働けているか？</li>
                            <li>努力が正当に評価されているか？</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 flex flex-col  sm:flex-row  items-center justify-center gap-5">
                        <img 
                            src={Challenge_1} 
                            alt="" 
                            className="w-full max-w-[320px] sm:w-[260px] h-[260x] sm:h-[260px] object-cover rounded-lg"
                            />
                        <img 
                            src={Challenge_2} 
                            className="w-full max-w-[320px] sm:w-[260px] h-[260px] object-cover rounded-lg"
                            alt="" />
                    </div>
                </div>

                <p className="mt-10 text-2xl">私たちは、それぞれに「もっとできる」と信じています。
                    <br />
                    その小さな「もっと」を積み重ねることで、PIUMOREの店は日々進化しています。</p>
            </div>
        </>
    );
}
export default CompanyChallenge;