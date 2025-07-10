import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

export function Projects() {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="h-48"
        loop={true}
        modules={[Autoplay, Pagination]}
        pagination={{
          enabled: true,
        }}
      >
        <SwiperSlide className="h-full w-full items-center rounded-2xl bg-gray-700 px-8 py-4">
          Project 1
        </SwiperSlide>
        <SwiperSlide className="h-full w-full items-center rounded-2xl bg-gray-700 px-8 py-4">
          Project 2
        </SwiperSlide>
        <SwiperSlide className="h-full w-full items-center rounded-2xl bg-gray-700 px-8 py-4">
          Project 3
        </SwiperSlide>
        <SwiperSlide className="h-full w-full items-center rounded-2xl bg-gray-700 px-8 py-4">
          Project 4
        </SwiperSlide>
        <SwiperSlide className="h-full w-full items-center rounded-2xl bg-gray-700 px-8 py-4">
          Project 5
        </SwiperSlide>
        <SwiperSlide className="h-full w-full items-center rounded-2xl bg-gray-700 px-8 py-4">
          Project 6
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
