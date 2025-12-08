import { lauro_menu1 } from "../../images";

const LauroMenu = () => {
    return (
        <div className="w-full bg-[#9F3A2E] py-40 px-6">
            <h2 className="text-white text-3xl font-bold text-center mb-12">
                イチオシメニュー
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

                {/* カード1 */}
                <div>
                    <div className="w-[100%] h-[90%] mx-auto mb-4">
                        <img
                            src={lauro_menu1}
                            alt="AAAの写真"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">AAA</h3>
                    <p className="text-white text-sm leading-relaxed px-4">
                        テキストテキストテキストテキストテキストテキスト
                    </p>
                </div>

                {/* カード2 */}
                <div>
                    <div className="w-[100%] h-[90%] mx-auto mb-4">
                        <img
                           src={lauro_menu1}
                            alt="BBBの写真"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">BBB</h3>
                    <p className="text-white text-sm leading-relaxed px-4">
                        テキストテキストテキストテキストテキストテキスト
                    </p>
                </div>

                {/* カード3 */}
                <div>
                    <div className="w-[100%] h-[90%] mx-auto mb-4">
                        <img
                            src={lauro_menu1}
                            alt="CCCの写真"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">CCC</h3>
                    <p className="text-white text-sm leading-relaxed px-4">
                        テキストテキストテキストテキストテキストテキスト
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LauroMenu;
