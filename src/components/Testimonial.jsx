"use client"
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import css from "../CSS/HomePage/Testimonial.module.css"
import Image from 'next/image';

const Testimonial = () => {

    const reviewsData = [
        {
            name: "Kinsey Crim",
            designation: "Events and Marketing Manager at HSWERX",
            review:
                "Working with Motion Wizz was AMAZING. They took the time to understand exactly what I wanted the video to look like and were incredibly patient with all my revisions. Not only did their professionalism and visual appeal EXCEED my expectations, but their quick responsiveness and high level of cooperation made the entire process smooth and enjoyable. This was a GREAT experience",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117559/kinsey-crim_1_jfogje.webp",
        },
        {
            name: "Noah Tanghe",
            designation: "Student International Management at Hogeschool Gent",
            review:
                "Working with Motion Wizz team was a very smooth experience. One of their greatest strengths is their flexibility and responsiveness. Whenever they were asked to step in, they did so perfectly and usually delivered excellent results. They bring their own experience and perspective to the table, which truly elevates the final result. Overall, I’m very satisfied with both the collaboration and the outcome.",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117558/Noah-Tanghe_1_qhrcwo.webp",
        },
        {
            name: "Ike Levick",
            designation: "Founder at Curio Communications",
            review:
                "This was my first time working with the team at Motion Wizz and they walked me through the process and explained how it all worked. They were patient with our feedback, polite and determined to deliver a great animation. I would recommend working with them very much!",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117558/person1_1_j47o88.webp",
        },
        {
            name: "James Pearson",
            designation: "Senior Manager at JGP Consultancy",
            review:
                "They have been exceptional and we will certainly work together in future. We’re delighted with the final video and it does exactly what we asked. We worked with Motion Wizz Team throughout and their communication was excellent. We would thoroughly recommend them and their services.",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117558/james-pearson_1_hrjaiy.webp",
        },
        {
            name: "Ines Durruti",
            designation: "Global Head of Product Design at Mapal Group",
            review:
                "Working with Motion Wizz Team has been an excellent experience. They were super quick to respond and deliver the animated videos, always maintaining very good quality and attention to detail. They were also extremely flexible with revisions and patient throughout the whole process, which made the collaboration smooth and professional. Highly recommended!",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117559/ines-durruti_1_r737ve.webp",
        },
        {
            name: "Devam Sukhija",
            designation: "Managing Director at We Buy Life Policy",
            review:
                "Really great communication and super quick with some updates that were required to our animations that had previously been done. Couldn’t recommend more, thank you for all your hard work and help!",
            pic: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771117558/Devam-Sukhija_1_miza5i.webp",
        },
    ];


    return (
        <section className={css.testimonialSec}>
            <div className="container">
                <div className={css.header}>
                    <h3 className='highlight'>Testimonials</h3>
                    <h2>Discover What Other Brands Are Saying About us</h2>
                </div>

                <Swiper
                    className="reviews_card_wrapper"
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={3}
                    modules={[Pagination, Navigation, Autoplay]}
                    navigation={{
                        prevEl: `.${css.prev_btn}`,
                        nextEl: `.${css.next_btn}`,
                    }}
                    pagination={{
                        clickable: true,
                        el: `.${css.custom_pagination}`
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        300: { slidesPerView: 1 },
                        767: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 }
                    }}
                >

                    {reviewsData?.map(({ name, designation, review, pic }) => (
                        <SwiperSlide
                            style={{ paddingTop: "30px" }}
                            className={css.testimonial_slide}
                            key={name}
                        >
                            <div className={css.reviews_card}>
                                <div className={css.quote_icon}>“</div>
                                <div className={css.stars}>★★★★★</div>
                                <p className={css.review}>{review}</p>

                                <div className={css.person_info}>
                                    <div className={css.person_image}>
                                        {/* <img loading='lazy' src={pic} alt="" width={52} height={52} /> */}
                                        <Image sizes='(max-width:768px) 20vw, 33vw' loading='lazy' src={pic} alt={`Logo `} width={52} height={52} />
                                    </div>
                                    <div className={css.info}>
                                        <div className={css.name}>{name}</div>
                                        <div className={css.designation}>{designation}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

                <div className={css.swiper_controls}>
                    <div className={`${css.navigation} ${css.prev_btn}`}>
                        <FaLongArrowAltLeft />
                    </div>

                    <div className={css.custom_pagination}></div>

                    <div className={`${css.navigation} ${css.next_btn}`}>
                        <FaLongArrowAltRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial