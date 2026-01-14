import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Client from "../../client";

const Notice = () => {
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    Client.fetch(
      `*[_type == "notice"] | order(date desc)[0...3]{
        header,
        date,
        slug
      }`
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
                className="block text-center text-[#B42423] text-base md:text-lg hover:opacity-80 transition"
              >
                {notice.header}
              </Link>

              <div className="mt-4 h-px w-full bg-black/70" />
            </li>
          ))}
        </ul>

        {/* Bottom link */}
        <div className="mt-20 text-center">
          <Link
            to="/notices"
            className="text-[#B42423] text-sm underline underline-offset-4 hover:opacity-80"
          >
            お知らせ一覧
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Notice;
