const About = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-40">
        <h2 className="text-center text-4xl pb-8 pt-8">PIUMOREとは</h2>
        <div className="text-[18px] pb-7">
          <p className="text-center">
            「PIUMORE（ピュウモア）」は、イタリア語の“PIÙ＝もっと”と英語の“MORE＝もっと”を掛け合わせた言葉。
          </p>
          <p className="text-center">
            私たちは、“もっと美味しく”“もっと心地よく”“もっと働きやすく”を追求し続ける集団です。
          </p>
          <p className="text-center"> 飲食店の限界を決めるのは、私たち自身。</p>
          <p className="text-center">
            お客様にとっても、スタッフにとっても、「もっと」を叶える場所を目指しています。
          </p>
        </div>
        <a className="underline mb-20" href="">
          会社概要はこちら
        </a>
      </div>
    </>
  );
};
export default About;
