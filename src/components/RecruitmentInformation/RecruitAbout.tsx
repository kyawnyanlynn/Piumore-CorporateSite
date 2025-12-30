import { Recruit_lauro, Recruit_hinoya, Recruit_katsura } from "../../images";

const RecruitAbout = () => {
    return (
        <div className="px-[5%] sm:px-[10%] mx-auto">
            <h2 className="text-center text-2xl sm:text-4xl font-bold my-16">私たちはコンセプトの<br />異なる3つの店舗を運営しています。</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                <div>
                    <img 
                        src={Recruit_lauro} 
                        alt="オステリアラウロ" 
                        className="w-full h-48 object-cover rounded-lg"
                        />
                    <p className="text-center font-semibold mb-5 ">神保町　オステリアラウロ（イタリア料理）</p>
                    <p>
                        この街・神保町は、書店や古書街、知の集まる場所として知られています。そんな知的な雰囲気と日常の喧騒の隙間に、オステリアラウロは“肩の力を少し抜いて楽しめる本格イタリアン”を提供します。
                        料理・ワイン・時間の流れすべてが「普段」だけど「少し特別」。
                        来店された方に「今日この店に来てよかった」と思ってもらえるような空間と一皿を意識しています。
                    </p>
                </div>
                <div>
                    <img 
                        src={Recruit_katsura} 
                        alt="かつら" 
                        className="w-full h-48 object-cover rounded-lg"
                        />
                    <p className="text-center font-semibold  mb-5">神保町　かつら（和食・すき焼き）</p>
                    <p>歌舞伎の演目にも登場する伝統味噌を使い江戸時代のレシピを再現した江戸前すき焼きが名物のお店。
                        接待や会合、宴会など様々なシーンでご利用頂いているお店です。
                    </p>
                </div>
                <div>
                    <img 
                        src={Recruit_hinoya} 
                        alt="日乃屋カレー" 
                        className="w-full h-48 object-cover rounded-lg"
                        />
                    <p className="text-center font-semibold mb-5">大手町　日乃屋カレー（FC事業）</p>
                    <p>【時代を超えて受け継がれてきた日乃屋のカレー。
                        日乃屋は一貫して日本のカレー、昔からある皆が食べ慣れた、あの懐かしくも深みのあるカレーを日々追求しております。】
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecruitAbout;
