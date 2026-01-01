import { Recruit_boss } from "../../images";

const Recriutboss = () => {
  return (
    <div className="px-[5%] sm:px-[10%] mx-auto my-30">
      <div>
        <h2 className="text-center text-2xl sm:text-4xl my-30">
          私たちは、社員一人ひとりが最大限の能力を
          <br />
          発揮できる環境づくりを大切にしています。
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <img
            src={Recruit_boss}
            alt="代表取締役　小森 桂介"
            className="w-full"
          />
          <div className="flex flex-col justify-between">
            <p className=" leading-relaxed tracking-wide">
              私自身、18歳で家を出て、料理人としての道を歩み始めました。
              <br />
              現場で鍋を振る日々、企業でフードビジネスを学んだ経験、そして組織の中で感じた違和感。そのすべてが、今のPIUMOREをつくる土台になっています。
              <br />
              <br />
              昔ながらの「気合と根性」の飲食店や「組織的で機械的」な飲食業界ではなく、これからの時代にふさわしい「飲食Ver.3.0」を創りたい。
              それは、働く人が会社に使われるのではなく、夢や誇りを持って羽ばたける業界です。
              <br />
              <br />
              安全で安心な職場、健全な労働時間、正当な評価や待遇など、当たり前のことを当たり前に整える。
              <br />
              その上で、料理の楽しさや人を喜ばせる喜びを、もっと自由に追求できる場をつくりたいと思っています。
              学生の皆さんには、まず「面白そう」と思ったことを、思った瞬間にやってみてほしい。
              <br />
              <br />
              アルバイトでもいい。PIUMOREにちょっと足を踏み入れてみるだけでもいい。学生のうちにしかできない経験をたくさんして、青春を全力で謳歌してほしい。そんな時間の先に、「この会社でなら、自分の人生も謳歌できそうだ」と感じてもらえたら嬉しいです。
              <br />
              <span className="py-3">
                あなたのその一歩を、心から待っています。
              </span>
            </p>
            <p>
              代表取締役　<span className="text-2xl">小森 桂介</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recriutboss;
