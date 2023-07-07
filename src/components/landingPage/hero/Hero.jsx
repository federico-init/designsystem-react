// import React hooks
import { useRef } from "react";

// import style
import styles from "./Hero.module.scss";

// import assets
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./../../../scss/libraries/swiper.scss";
// import Swiper modules
import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  const prevRef = useRef();
  const nextRef = useRef();

  return <div className={styles.Hero}></div>;
};

export default Hero;
