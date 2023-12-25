import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {ourServices, ourWorksItems, testimonials} from '../../data';
import OurWorksItem from '../../components/OurWorksItem';
import {Navigation} from 'swiper/modules';
import '../../assets/css/home.scss';
import SectionBackground from "../../components/UI/section/SectionBackground";

const Home = () => {
    return (
        <>
            <section className="home-head">
                <div className="container">
                    <div className="home-head-wrapper">
                        <div className="home-head-left">
                            <h1 className="title">Unlock Your Online Business Potential</h1>
                            <p>
                                We are Your premier destination for top-notch ecommerce website development on the
                                Shopify platform.
                            </p>

                            <div className="home-head-buttons">
                                <button type="button" className="btn btn-primary btn-large">
                                    Start a Project
                                </button>

                                <button type="button" className="btn text-green">
                                    <img src="../shopify-services-website/images/arrow-right-green.svg" width={24} height={24} alt=""/>
                                    Discover our Works
                                </button>
                            </div>
                        </div>
                        <div className="home-head-right">
                            <img src="../shopify-services-website/images/home-head-img.png" width={495} height={531} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="home-head-trusted">
                    <div className="container">
                        <p>Trusted by</p>

                        <div className="home-head-trusted-wrapper">
                            <div>
                                <img src="../shopify-services-website/images/logo-ipsum-1.svg" width={188} height={40} alt="Logo ipsum"/>
                            </div>
                            <div>
                                <img src="../shopify-services-website/images/logo-ipsum-2.svg" width={192} height={24} alt="Logo ipsum"/>
                            </div>
                            <div>
                                <img src="../shopify-services-website/images/logo-ipsum-3.svg" width={187} height={35} alt="Logo ipsum"/>
                            </div>
                            <div>
                                <img src="../shopify-services-website/images/logo-ipsum-4.svg" width={86} height={54} alt="Logo ipsum"/>
                            </div>
                            <div>
                                <img src="../shopify-services-website/images/logo-ipsum-5.svg" width={188} height={43} alt="Logo ipsum"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-latest-projects">
                <div className="container">
                    <h2>Latest Projects</h2>

                    <div className="home-latest-project-wrapper">
                        {ourWorksItems.slice(0, 3).map(ourWorkItem =>
                            <OurWorksItem
                                image={`../shopify-services-website/images/latest-project-${ourWorkItem.id}.png`}
                                className={'home-latest-projects-item'}
                                description={ourWorkItem.description}
                                title={ourWorkItem.title}
                                key={ourWorkItem.id}
                            />
                        )}
                    </div>

                    <div className="text-center">
                        <button type="button" className="btn btn-primary">
                            All Projects
                        </button>
                    </div>
                </div>
            </section>

            <section className="home-services">
                <div className="home-services-container">
                    <div className="home-services-wrapper">
                        <div className="home-services-left">
                            <h2 className="title">Our services</h2>
                            <p className="text-secondary mb-0">
                                Our team of designers and developers will create a unique and visually appealing theme
                                for your Shopify store, tailored to your brand identity and specifications.
                            </p>

                            <div className="home-services-buttons">
                                <div className="swiper-button-prev"/>
                                <div className="swiper-button-next"/>
                            </div>
                        </div>
                        <div className="home-services-slider">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={16}
                                slidesPerView={1.3}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 2.3,
                                        spaceBetween: 24,
                                    },
                                }}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                            >
                                {ourServices.map(ourServicesItem =>
                                    <SwiperSlide key={ourServicesItem.id}>
                                        <div className="home-services-item">
                                            <img
                                                src={`../shopify-services-website/images/services-icon-${ourServicesItem.id}.svg`}
                                                className="home-services-item-icon"
                                                alt={ourServicesItem.title}
                                                width={40}
                                                height={40}
                                            />
                                            <strong className="text-lg">{ourServicesItem.title}</strong>
                                            <p className="text-secondary mb-0">{ourServicesItem.homeText}</p>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-testimonials">
                <div className="container">
                    <h2>Testimonials</h2>

                    <div className="home-testimonials-wrapper">
                        {testimonials.map(testimonial =>
                            <div className="home-testimonials-item" key={testimonial.id}>
                                <img
                                    src="../shopify-services-website/images/testimonials.svg"
                                    alt={testimonial.author}
                                    width={32}
                                    height={20}
                                />
                                <p>{testimonial.message}</p>
                                <span>{testimonial.author}</span>
                            </div>
                        )}
                    </div>

                    <div className="home-testimonials-text">
                        <h3 className="title">
                            Through our vast experience, we've discovered that businesses of all kinds can greatly
                            benefit from digital enhancements.
                        </h3>

                        <div>
                            <p>
                                Whether it's sprucing up your website, streamlining internal operations, or refining a
                                digital product, we're here to help you every step of the way.
                            </p>
                            <p>
                                Whether it's sprucing up your website, streamlining internal operations, or refining a
                                digital product, we're here to help you every step of the way.
                            </p>
                        </div>
                    </div>

                    <div className="home-testimonials-footer">
                        <div className="home-testimonials-footer-item">
                            <strong>24+</strong>
                            <span>Projects done</span>
                        </div>
                        <div className="home-testimonials-footer-item">
                            <strong>16</strong>
                            <span>Some stats</span>
                        </div>
                        <div className="home-testimonials-footer-item">
                            <strong>2x</strong>
                            <span>Faster</span>
                        </div>
                        <div className="home-testimonials-footer-item">
                            <strong>117</strong>
                            <span>Clients</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-ecommerce">
                <div className="container">
                    <div className="home-ecommerce-wrapper">
                        <div className="home-ecommerce-left">
                            <h2 className="title">Unlocking Ecommerce Success: Our Journey and Expertise</h2>
                            <p className="text-secondary">
                                Whether you need inventory management systems, customer relationship management tools,
                                or multi-channel selling capabilities, we have the expertise to tailor your Shopify
                                store to your specific needs.
                            </p>
                            <button type="button" className="btn btn-primary-outline">
                                <img src="../shopify-services-website/images/arrow-right-black.svg" width={13} height={12} alt=""/>
                                About Us
                            </button>
                        </div>
                        <div className="home-ecommerce-img">
                            <img src="../shopify-services-website/images/home-ecommerce-img.png" width={570} height={400} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <SectionBackground
                contentClassName={'home-building-content'}
            >
                <h2 className="title">Start building today</h2>
                <p>
                    Join the millions of entrepreneurs who have already embraced Shopify as their trusted
                    e-commerce partner.
                </p>

                <button type="button" className="btn btn-primary btn-large">
                    Start a Project
                </button>
            </SectionBackground>
        </>
    );
};

export default Home;
