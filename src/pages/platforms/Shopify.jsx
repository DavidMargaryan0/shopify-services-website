import React from 'react';
import '../../assets/css/platforms.scss';
import {discoverBrands, strorefrontsList} from "../../data";
import SectionBackground from "../../components/UI/section/SectionBackground";
import {Link} from 'react-router-dom';

const Shopify = () => {
    return (
        <>
            <section className="platform-head">
                <div className="container">
                    <div className="platform-head-wrapper">
                        <div className="platform-head-left">
                            <img src="/images/platform-head-img.png" width={519} height={636} alt=""/>
                        </div>

                        <div className="platform-head-right">
                            <strong>Shopify</strong>
                            <h1 className="title">
                                Get your online business up and running effortlessly with Shopify storefronts.
                            </h1>
                            <p>
                                Deliver exceptional shopping experiences to your customers with lightning-fast
                                storefronts, powered by a performance-optimized framework and modern developer tools.
                                Plus, access dedicated technical support to ensure a smooth launch and continuous
                                optimization for your Shopify storefront.
                            </p>
                            <button type="button" className="btn btn-primary btn-large">Start a Project</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="platform-brands">
                    <div className="platform-brands-head">
                        <h2 className="title">Shopify Plus as a Top Choice for Today's Most Innovative Brands.</h2>
                        <p className="text-secondary mb-0">
                            Leading the Way in Headless Commerce: Discover how cutting-edge businesses leverage Shopify
                            Plus to power seamless, omnichannel shopping experiences.
                        </p>
                    </div>

                    <div className="platform-brands-wrapper">
                        <p>Trusted by</p>

                        {Array.from(Array(8).keys()).map((_, index) =>
                            <div className="platform-brands-item" key={index}>
                                <img src={`/images/logo-ipsum-black-${index + 1}.svg`} alt=""/>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="platform-discover">
                <div className="container">
                    <h2 className="title">Discover why brands choose shopify</h2>
                    <div className="platform-discover-wrapper">
                        {discoverBrands.map(discoverBrand =>
                            <div className="platform-discover-item" key={discoverBrand.id}>
                                <img
                                    src={`/images/discover-brands-${discoverBrand.id}.svg`}
                                    alt={discoverBrand.title}
                                    width={40}
                                    height={40}
                                />
                                <strong>{discoverBrand.title}</strong>
                                <p>{discoverBrand.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="platform-development">
                <div className="container">
                    <div className="platform-development-wrapper">
                        <div className="platform-development-left">
                            <strong>Development Stack</strong>
                            <h2 className="title">
                                Seamlessly Integrate with Your Preferred Tools
                            </h2>
                            <p className="text-secondary mb-0">
                                Centralize Your Commerce Primitives and Capabilities with Shopify's Intuitive Admin.
                                Seamlessly Integrate Your Essential Business Tools and Systems, such as ERP, PIM, CRM,
                                and CMS.
                            </p>
                        </div>
                        <div className="platform-development-right">
                            <img src="/images/platform-development-img.png" width={587} height={402} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="platform-strorefronts">
                    <div className="platform-strorefronts-left">
                        <strong>Shopify Strorefronts</strong>
                        <h2 className="title">
                            Don’t stress about starting from scratch
                        </h2>
                        <p className="text-secondary mb-0">
                            Discover the ease and convenience of Shopify storefronts, where you can create your dream
                            online store without any hassle. With a user-friendly interface and a wide range of
                            customizable templates, you'll have everything you need to begin selling your products in no
                            time.
                        </p>
                    </div>
                    <div className="platform-strorefronts-right text-secondary">
                        <ul className="ul-check ul-check--white">
                            {strorefrontsList.map(item =>
                                <li key={item.id}>{item.text}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </section>

            <SectionBackground
                contentClassName={'platform-business-content'}
            >
                <h2 className="title">
                    Ready to elevate your online business with
                    <span className="font-italic">&nbsp;Shopify Plus?</span>
                </h2>
                <p>
                    Discover the limitless possibilities of building custom storefronts that perfectly reflect your
                    brand's vision.
                </p>
                <Link className="btn btn-primary btn-large" to={'/contact-us'}>Contact Us</Link>
            </SectionBackground>
        </>
    );
};

export default Shopify;