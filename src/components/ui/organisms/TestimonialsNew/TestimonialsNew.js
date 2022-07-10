import image1 from './../../../../assets/images/testimonials/image1.png';
import styles from "./TestimonialsNew.module.sass";
import React, { useRef, useState } from "react";
import SingleSlide from '../../molecules/SingleSlide/SingleSlide';
import cornerImg from "./../../../../assets/images/testimonial-section-first-bg-image.png";
import innerImg from "./../../../../assets/images/testimonial-section-second-bg-image.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./sliderstyles.sass";

// import required modules
import { Navigation } from "swiper";

const TestimonialsNew = () => 
{
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return ( 
        <div className={styles.testimonialsNew}>
            <div className={styles.images}>
                <div className={styles.cornerImage}>
                    <img src={cornerImg} alt="" />
                </div>
                <div className={styles.innerImage}>
                    <div className={styles.firstTriangle}></div>
                    <img src={innerImg} alt="" />
                    {/* <div className={styles.secondTriangle}></div> */}
                </div>
            </div>
            <div className={styles.content}>
                <h3>Testimonial</h3>
                <h2>Our wonderful clients say...</h2>
                <div className={styles.swiperNavControls}>
                    <div className={styles.swiperNavControl} ref={navigationPrevRef}>{"<"}</div>
                    <div className={styles.swiperNavControl} ref={navigationNextRef}>{">"}</div>
                </div>
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
                            name="1.Mrs. Taiwo Adetola"
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
 
export default TestimonialsNew;