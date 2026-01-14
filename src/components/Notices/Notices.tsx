import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import "../../App.css";
import Client from "../../Client";
import { Link } from "react-router-dom";

const Notices = () => {
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    Client.fetch(
      `*[_type == "notice"] | order(date desc){
        header,
        date,
        content,
        author,
        slug
      }`
    )
      .then((data) => setNotices(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-20 mt-20">
            <div className="mx-auto max-w-5xl px-6">
              <div className="rounded-2xl bg-white px-3 py-3">
                <ul>
                  {notices.map((notice, idx) => (
                    <li key={idx} className="py-2">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        <span className="text-sm text-[#B42423] min-w-[90px font-bold">
                          {notice.date}
                        </span>

                        <span className="inline-block whitespace-nowrap rounded-full md:bg-[#B42423] md:px-4 md:py-1 text-xs text-[#B42423] font-bold md:text-white">
                          お知らせ
                        </span>
                        <Link to={`/notices/${notice.slug.current}`}>
                          <p className="text-lg md:text-base font-bold leading-relaxed hover:underline">
                            {notice.header}
                          </p>
                        </Link>
                      </div>

                      {idx !== notices.length - 1 && (
                        <div className="mt-6 border-b border-dotted border-gray-300" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Notices;
