import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">ページが見つかりません。</p>

      <Link
        to="/"
        className="text-[#B42423]"
        onClick={() => window.scrollTo(0, 0)}
      >
        ホームに戻る
      </Link>
    </div>
  );
}
