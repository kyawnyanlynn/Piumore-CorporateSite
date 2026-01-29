import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect, useMemo, useState } from "react";
import "../../App.css";
import Client from "../../client";
import { Link } from "react-router-dom";

type Notice = {
  Title?: string;
  Date?: string;
  Content?: string;
  Author?: string;
  slug?: { current?: string };
};

const PAGE_SIZE = 10;

const Notices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(total / PAGE_SIZE));
  }, [total]);

  useEffect(() => {
    // 1) Get total count (for page numbers)
    Client.fetch(`count(*[_type == "notice"])`)
      .then((count) => setTotal(count))
      .catch(console.error);
  }, []);

  useEffect(() => {
    // 2) Fetch page slice
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    Client.fetch(
      `*[_type == "notice"] | order(Date desc) [${start}...${end}]{
        Title,
        Date,
        Content,
        Author,
        slug
      }`,
    )
      .then((data) => setNotices(data))
      .catch(console.error);
  }, [page]);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-20 mt-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-2xl bg-white px-3 py-3">
              <ul>
                {notices.map((notice, idx) => (
                  <li
                    key={`${notice.slug?.current ?? "no-slug"}-${idx}`}
                    className="py-2"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <span className="text-sm text-[#B42423] min-w-[90px] font-bold">
                        {notice.Date ?? ""}
                      </span>

                      <span className="inline-block whitespace-nowrap rounded-full md:bg-[#B42423] md:px-4 md:py-1 text-xs text-[#B42423] font-bold md:text-white">
                        お知らせ
                      </span>

                      <Link to={`/notices/${notice.slug?.current ?? ""}`}>
                        <p className="text-lg md:text-base font-bold leading-relaxed hover:underline">
                          {notice.Title ?? ""}
                        </p>
                      </Link>
                    </div>

                    {idx !== notices.length - 1 && (
                      <div className="mt-6 border-b border-dotted border-gray-300" />
                    )}
                  </li>
                ))}
              </ul>

              {/* Pagination */}
              <div className="mt-10 flex items-center justify-center gap-3">
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className="px-3 py-2 text-xl disabled:opacity-30 cursor-pointer"
                  aria-label="Previous page"
                >
                  ‹
                </button>

                {/* Pages  */}
                <div className="flex items-center gap-3">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <button
                        key={p}
                        onClick={() => goToPage(p)}
                        className={[
                          "h-11 w-11 rounded-full border border-[#a9a9a9] text-base font-semibold cursor-pointer",
                          p === page
                            ? "bg-[#a9a9a9] text-white border-[#696969]"
                            : "bg-white text-black",
                        ].join(" ")}
                        aria-current={p === page ? "page" : undefined}
                      >
                        {p}
                      </button>
                    ),
                  )}
                </div>
                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  className="px-3 py-2 text-xl disabled:opacity-30 cursor-pointer"
                  aria-label="Next page"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Notices;
