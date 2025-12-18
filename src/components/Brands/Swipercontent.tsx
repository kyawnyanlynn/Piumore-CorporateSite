
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import "./SwiperCss.css";




const Swipercontent = ({ images }: { images: string[] }) => {
  return (
    <section className="py-20 overflow-x-hidden">
      <h2 className="text-center text-3xl font-bold text-[#B42423] mb-10">
        日々の風景
      </h2>

      <div className="max-w-5xl mx-auto">
        <Swiper
          className="scale-swiper w-full overflow-hidden"
          modules={[Navigation, Pagination]}
          centeredSlides={false}  
          slidesPerView={1}
          spaceBetween={0}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { 
              slidesPerView: 2, 
              centeredSlides: true,
              spaceBetween: 30,
            },
            1024: { 
              slidesPerView: 3,
              centeredSlides: true,
              spaceBetween: 30,
            },
          }}
          
        >
          {images.map((img, index) => (
            <SwiperSlide 
              key={index}>
              <img
                src={img}
                alt={`scene-${index}`}
                className="rounded-lg w-full object-cover aspect-[3/4]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Swipercontent;
