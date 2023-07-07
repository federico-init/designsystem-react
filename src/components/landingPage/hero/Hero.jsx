// import React hooks
import { useRef } from "react";

// import style
import styles from "./Hero.module.scss";

// import assets
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./../../../scss/libraries/swiper.scss";
// import Swiper modules
import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <div className={styles.Hero}>
      <div className="container">
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          className={styles.swiper}
          navigation={{
            prevEl: prevRef.current ? prevRef?.current : undefined,
            nextEl: nextRef.current ? nextRef?.current : undefined,
          }}
        >
          {/* //   onBeforeInit={(swiper) => {
        //     swiper.params.navigation.prevEl = prevRef.current;
        //     swiper.params.navigation.nextEl = nextRef.current;
        //   }} */}
          <SwiperSlide>
            <div className={styles.imgContainer}>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgContainer}>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.imgContainer}>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </SwiperSlide>
          <div
            className={`${styles.navigation} ${styles.prevButton}`}
            ref={prevRef}
          >
            <FaAngleLeft />
          </div>
          <div
            className={`${styles.navigation} ${styles.nextButton}`}
            ref={nextRef}
          >
            <FaAngleRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
