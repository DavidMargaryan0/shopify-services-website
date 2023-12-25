import React from 'react';
import {ourServicesEmpower, ourServices} from '../../data';
import '../../assets/css/services.scss';

const Services = () => {
    return (
        <>
            <section className="container">
                <div className="services-head">
                    <div className="services-head-content">
                        <h1 className="title">
                            Our Services: Crafting Web Solutions for Your Digital Success
                        </h1>

                        <div className="services-head-text">
                            <p>
                                Welcome to our Services page, where we bring your Shopify website vision to life!
                            </p>
                            <p>
                                With our expertise in Shopify development, design, optimization, maintenance, and
                                consulting, we offer a comprehensive range of services to empower your online
                                business.
                            </p>
                            <p>
                                From crafting stunning custom designs to ensuring seamless functionality and
                                providing ongoing support, we are committed to delivering exceptional solutions that
                                elevate your Shopify website and drive your e-commerce success.
                            </p>
                        </div>
                    </div>
                    <img src="/images/services-head-img.png" width={445} height={445} alt=""/>
                </div>
            </section>

            <section className="our-services">
                <div className="container">
                    <h2 className="title">Our Services</h2>

                    <div className="our-services-wrapper">
                        {ourServices.map(item =>
                            <div className="our-services-item" key={item.id}>
                                <img
                                    src={`/images/services-icon-${item.id}.svg`}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                />
                                <strong>{item.title}</strong>
                                <p>{item.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="services-empower">
                <div className="container">
                    <div className="services-empower-text">
                        <h2 className="title">
                            Discover the 4 Reasons Our Services Empower Your Online Success
                        </h2>
                        <p>
                            By partnering with us, you gain access to our specialized expertise, tailored solutions, and
                            a team dedicated to your success. Here are compelling reasons to choose our services.
                        </p>
                    </div>

                    <ul className="services-empower-wrapper">
                        {ourServicesEmpower.map(item =>
                            <li className="services-empower-item" key={item.id}>
                                <strong>{item.title}</strong>
                                <p className="text-secondary mb-0">{item.text}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Services;