import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Client from "../../../client";
import { urlFor } from "../../../lib/sanityImage";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
type Brand = {
  _id: string;
  title: string;
  slug: { current: string };
  logo: any;
  description: any[];
};

const BrandsCollection = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    Client.fetch(
      `*[_type == "brand"] | order(_createdAt asc){
        _id,
        title,
        slug,
        logo,
        description
      }`
    )
      .then(setBrands)
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative w-full py-16 md:py-24">
          <div className="mx-auto w-[92%] max-w-6xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-widest">
                BRANDS
              </h2>
              <p className="mt-2 text-[#B42423] font-medium">ブランド紹介</p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {brands.map((b) => (
                <article
                  key={b._id}
                  className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full"
                >
                  {/* logo */}
                  <div className="flex items-center justify-center px-10 pt-10">
                    {b.logo ? (
                      <img
                        src={urlFor(b.logo).width(520).quality(90).url()}
                        alt={b.title}
                        className="h-24 w-auto object-contain"
                      />
                    ) : (
                      <div className="h-24 w-full rounded bg-gray-100" />
                    )}
                  </div>

                  {/* content */}
                  <div className="px-6 pt-8 pb-7 flex flex-col flex-1">
                    <h3 className="text-center text-[#B42423] font-semibold text-lg">
                      {b.title}
                    </h3>

                    {/* description */}
                    <div className="mt-6 text-sm leading-7 text-gray-800 space-y-3">
                      {b.description
                        ?.filter((blk: any) => blk._type === "block")
                        .map((blk: any) => (
                          <p key={blk._key}>
                            {(blk.children ?? [])
                              .map((c: any) => c.text)
                              .join("")}
                          </p>
                        ))}
                    </div>

                    {/* button pinned to bottom */}
                    <div className="mt-auto pt-10 flex justify-center">
                      <Link
                        to={`/${b.slug.current}`}
                        className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#B42423] px-6 py-4 text-white font-medium"
                      >
                        詳しくみる
                        <span className="transition-transform group-hover:translate-x-1">
                          ›
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BrandsCollection;
