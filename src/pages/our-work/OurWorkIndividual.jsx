import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import OurWorksItem from '../../components/OurWorksItem';
import {individualConditions, ourWorksItems} from '../../data';
import SectionBackground from '../../components/UI/section/SectionBackground';
import '../../assets/css/our-work.scss';

const OurWorkIndividual = () => {
    return (
        <>
            <section className="individual-head">
                <img
                    src="../shopify-services-website/images/our-works-individual-img.png"
                    className="individual-head-img"
                    alt="individual-head-img"
                    width={1920}
                    height={900}
                />
                <div className="container">
                    <div className="individual-head-content">
                        <strong>Organic and Health Food Store</strong>
                        <h1 className="title">Where nutrition meets nature for a healthier you.</h1>
                        <p>
                            A Shopify website for the Organic and Health Food Store that successfully positioned the
                            client
                            as a trusted source for organic and health-conscious products. It addressed their goals,
                            overcame market challenges, and provided a platform for growth in the competitive world of
                            e-commerce.
                        </p>
                        <a href="/" className="btn btn-primary btn-large">Visit Website</a>
                    </div>
                </div>
            </section>

            <section className="individual-conditions">
                <div className="container">
                    <div className="individual-conditions-wrapper">
                        <div className="individual-conditions-left">
                            <strong>Organic and Health Food Store</strong>
                            <h2 className="title">A Brief Overview</h2>
                            <p className="text-secondary mb-0">
                                An organic food store on Shopify is an online marketplace that specializes in offering a
                                wide range of organic and natural products. Customers can browse through a curated
                                selection of organic groceries, fresh produce, and eco-friendly products, all
                                conveniently accessible through the Shopify platform. These stores often prioritize
                                sustainable practices and offer a seamless shopping experience for health-conscious
                                consumers seeking high-quality, ethically sourced goods.
                            </p>
                        </div>
                        <div className="individual-conditions-right">
                            <h3 className="title">Our Contribution</h3>

                            <ul className="ul-check ul-check--white">
                                {individualConditions.map(item =>
                                    <li key={item.id}>{item.text}</li>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="individual-conditions-info">
                        <div className="individual-conditions-info-item">
                            <strong>6</strong>
                            <p>Weeks delivering a fully functional Shopify website.</p>
                        </div>
                        <div className="individual-conditions-info-item">
                            <strong>1000+</strong>
                            <p>Product listings to enhance the user experience and increase sales.</p>
                        </div>
                        <div className="individual-conditions-info-item">
                            <strong>40%</strong>
                            <p>Increase in organic search traffic within the first 3 months.</p>
                        </div>
                        <div className="individual-conditions-info-item">
                            <strong>25%</strong>
                            <p>Increase in mobile sales.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="individual-image">
                <img src="../shopify-services-website/images/our-works-individual-img-2.png" width={1920} height={640} alt=""/>
            </div>

            <section className="individual-challenge">
                <div className="container">
                    <div className="individual-challenge-wrapper">
                        <div className="individual-challenge-left">
                            <img src="../shopify-services-website/images/our-works-individual-challenge-img.png" width={410} height={446} alt=""/>
                        </div>
                        <div className="individual-challenge-right">
                            <h2 className="title">The Challenge</h2>
                            <p className="text-secondary font-500 mb-0">
                                Creating a Shopify website for our client presented a unique set of challenges.
                                Additionally, integrating complex e-commerce functionalities while maintaining a
                                user-friendly interface demanded intricate development and customization. Our team's
                                expertise and dedication allowed us to overcome these hurdles, delivering a website that
                                met our client's vision and exceeded their expectations.
                            </p>
                            <h3 className="title">Solutions</h3>
                            <p>
                                In response to the challenges we implemented innovative solutions. We employed custom
                                coding and integrations to seamlessly incorporate advanced e-commerce features,
                                ultimately delivering a website that not only met but exceeded our client's
                                expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="individual-testimonials">
                <div className="container">
                    <h2 className="title">Testimonials</h2>

                    <div className="individual-testimonials-item">
                        <img src="../shopify-services-website/images/testimonials.svg" width={32} height={27} alt=""/>
                        <strong className="text-secondary font-700">
                            As the project manager overseeing the development of the Healthy Food Shopify Store, I'm
                            proud to say that our team has created a seamless and visually appealing online shopping
                            experience. Our store offers a wide range of top-quality organic and health-conscious
                            products, and I've witnessed firsthand the dedication that went into making this store a
                            reality. It's a true testament to our commitment to excellence in Shopify development
                            services.
                        </strong>
                        <span>Steve, PM of Organic and health food store</span>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="individual-grid">
                    <div className="individual-grid-row">
                        <div className="individual-grid-col">
                            <div className="individual-grid-item">
                                <img src="../shopify-services-website/images/our-works-individual-grid-1.png" width={590} height={760} alt=""/>
                            </div>
                            <div className="individual-grid-item">
                                <img src="../shopify-services-website/images/our-works-individual-grid-3.png" width={590} height={760} alt=""/>
                            </div>
                        </div>

                        <div className="individual-grid-col">
                            <div className="individual-grid-item">
                                <img src="../shopify-services-website/images/our-works-individual-grid-2.png" width={590} height={390} alt=""/>
                            </div>

                            <div className="individual-grid-item">
                                <img src="../shopify-services-website/images/our-works-individual-grid-4.png" width={590} height={390} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="individual-grid-item">
                        <img src="../shopify-services-website/images/our-works-individual-grid-5.png" width={590} height={760} alt=""/>
                    </div>

                    <div className="individual-grid-row">
                        <div className="individual-grid-col">
                            <div className="individual-grid-item">
                                <img src="../shopify-services-website/images/our-works-individual-grid-6.png" width={590} height={760} alt=""/>
                            </div>
                        </div>
                        <div className="individual-grid-col">
                            <div className="individual-grid-item">
                                <img src="../shopify-services-website/images/our-works-individual-grid-7.png" width={590} height={760} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <SectionBackground
                contentClassName={'individual-store-content'}
            >
                <h2 className="title">Ready to Launch Your Shopify Store?</h2>
                <p>Contact us today and let's get started on your fashion e-commerce journey!</p>
                <a href="/" className="btn btn-primary btn-large">Start a Project</a>
            </SectionBackground>

            <section className="individual-latest-project">
                <h2 className="title">Latest Projects</h2>

                <Swiper
                    spaceBetween={16}
                    slidesPerView={1.1}
                    breakpoints={{
                        991: {
                            slidesPerView: 3.3,
                            spaceBetween: 24,
                        },
                        576: {
                            slidesPerView: 2.1,
                        },
                    }}
                >
                    {ourWorksItems.map(item =>
                        <SwiperSlide key={item.id}>
                            <OurWorksItem
                                image={`../shopify-services-website/images/latest-project-${item.id}.png`}
                                className={'individual-latest-project-item'}
                                description={item.description}
                                title={item.title}
                                key={item.id}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </section>
        </>
    );
};

export default OurWorkIndividual;
