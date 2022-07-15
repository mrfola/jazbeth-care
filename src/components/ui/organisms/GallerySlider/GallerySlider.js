import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import styles from './GallerySlider.module.sass';
import React, { useRef } from "react";
import { Navigation } from 'swiper';
import './swiperslider.sass';

import 'swiper/css';
import 'swiper/css/navigation';
import SingleSlide from '../../molecules/SingleSlide/SingleSlide';

const GallerySlider = () =>
{
    const image1 = 'https://res.cloudinary.com/dobmssrgt/image/upload/v1657901960/jazbeth/images/testimonials/image1_htpqgy.png';

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

return (
    <div className={styles.gallerySlider} id="gallerySlider">
        <div className={styles.swiperNavControls}>
            <div className={styles.swiperNavControl} ref={navigationPrevRef}>{"<"}</div>
            <div className={styles.swiperNavControl} ref={navigationNextRef}>{">"}</div>
        </div>
        <div className={styles.content}>
        <Swiper
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            loop= {true} 
            modules={[Navigation]} 
            className="mySwiper"
        >
        <SwiperSlide>
            <SingleSlide
                name="Mrs. Taiwo Adetola"
                title="Customer"
                img={image1}
                testimonial="My home was a mess before they arrived, I didn’t know where to start from. But the moment they did what they do, I could not believe it. Spotless!"
            />
        </SwiperSlide>
        <SwiperSlide>
            <SingleSlide
                name="Mrs. Taiwo Adetolaaaa"
                title="Customer"
                img={image1}
                testimonial="My home was a mess before they arrived, I didn’t know where to start from. But the moment they did what they do, I could not believe it. Spotless!"
            />
        </SwiperSlide>
        <SwiperSlide>
            <SingleSlide
                name="Mrs. Taiwo Adetolara"
                title="Customer"
                img={image1}
                testimonial="My home was a mess before they arrived, I didn’t know where to start from. But the moment they did what they do, I could not believe it. Spotless!"
            />
        </SwiperSlide>
        <SwiperSlide>
            <SingleSlide
                name="Mrs. Taiwo Adetola"
                title="Customer"
                img={image1}
                testimonial="My home was a mess before they arrived, I didn’t know where to start from. But the moment they did what they do, I could not believe it. Spotless!"
            />
        </SwiperSlide>
        <SwiperSlide>
            <SingleSlide
                name="Mrs. Taiwo Adetola"
                title="Customer"
                img={image1}
                testimonial="My home was a mess before they arrived, I didn’t know where to start from. But the moment they did what they do, I could not believe it. Spotless!"
            />
        </SwiperSlide>
        <SwiperSlide>
            <SingleSlide
                name="Mrs. Taiwo Adetola"
                title="Customer"
                img={image1}
                testimonial="My home was a mess before they arrived, I didn’t know where to start from. But the moment they did what they do, I could not believe it. Spotless!"
            />
        </SwiperSlide>
        <SwiperSlide>
            <SingleSlide
                name="Mrs. Taiwo Adetola"
                title="Customer"
                img={image1}
                testimonial="My home was a mess before they arrived, I didn’t know where to start from. But the moment they did what they do, I could not believe it. Spotless!"
            />
        </SwiperSlide>
        <SwiperSlide>
            <SingleSlide
                name="Mrs. Taiwo Adetola"
                title="Customer"
                img={image1}
                testimonial="My home was a mess before they arrived, I didn’t know where to start from. But the moment they did what they do, I could not believe it. Spotless!"
            />
        </SwiperSlide>
        <SwiperSlide>
            <SingleSlide
                name="Mrs. Taiwo Adetola"
                title="Customer"
                img={image1}
                testimonial="My home was a mess before they arrived, I didn’t know where to start from. But the moment they did what they do, I could not believe it. Spotless!"
            />
        </SwiperSlide>
      </Swiper>
        </div>
    
    </div>
  );
}

 
export default GallerySlider ;