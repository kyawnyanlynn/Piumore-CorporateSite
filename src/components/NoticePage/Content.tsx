import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Client from "../../client";

type NoticeDetail = {
  Title: string;
  Content: string;
  Date?: string;
  Author?: string;
};

const Content = () => {
  const { slug } = useParams();
  const [notice, setNotice] = useState<NoticeDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    Client.fetch(
      `*[_type == "notice" && slug.current == $slug][0]{
        Title,
        Content,
        Date,
        Author
      }`,
      { slug }
    )
      .then((data) => setNotice(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <section className="bg-white mt-20">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p>読み込み中</p>
        </div>
      </section>
    );
  }

  if (!notice) {
    return (
      <section className="bg-white mt-20">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="mb-8">This notice does not exist.</p>
          <Link className="underline" to="/notices">
            お知らせ一覧へ
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white mt-20">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-snug">
          {notice.Title}
        </h1>

        {/* Meta */}
        <div className="mt-10 flex items-center gap-12 text-sm text-gray-700 font-medium">
          {notice.Date && <span>{notice.Date}</span>}
          <span>お知らせ</span>
          {notice.Author && <span>{notice.Author}</span>}
        </div>

        {/* Divider */}
        <div className="mt-4 h-px w-full bg-gray-400/80" />

        {/* Body */}
        <div className="mt-14 mx-auto max-w-2xl text-base sm:text-base text-gray-800 leading-8 whitespace-pre-wrap">
          {notice.Content}
        </div>

        {/* Bottom link */}
        <div className="mt-20 text-center">
          <Link
            to="/notices"
            className="text-base font-semibold tracking-wide hover:opacity-70"
          >
            お知らせ一覧
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Content;
