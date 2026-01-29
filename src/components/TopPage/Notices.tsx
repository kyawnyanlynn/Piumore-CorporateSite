import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Client from "../../client";
const Notice = () => {
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    Client.fetch(
      `*[_type == "notice"] | order(Date desc)[0...3]{
        Title,
        Date,
        slug
      }`,
    )
      .then(setNotices)
      .catch(console.error);
  }, []);

  return (
    <section className="bg-white py-10 mt-10">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="text-center text-[36px] md:text-5xl font-semibold tracking-[0.08em] text-[#B42423]">
          お知らせ
        </h3>

        <ul className="mt-20 space-y-4">
          {notices.map((notice) => (
            <li key={notice.slug.current}>
              <Link
                to={`/notices/${notice.slug.current}`}
                className="block text-center text-[#B42423] text-base md:text-lg hover:opacity-80 transition font-medium"
              >
                {notice.Title}
              </Link>

              <div className="mt-4 h-px w-full bg-black/70" />
            </li>
          ))}
        </ul>
        <div className="mt-5 text-center">
          <Link
            to="/notices"
            className="text-black hover:text-[#B42423] text-base hover:underline font-semibold"
            onClick={() => {
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }}
          >
            お知らせ一覧
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Notice;
