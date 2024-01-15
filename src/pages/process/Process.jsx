import React from 'react';
import {processSteps} from '../../data';
import '../../assets/css/process.scss';

const Process = () => {
    const handleClick = (id) => {
        const el = document.getElementById(`step_${id}`);

        el.scrollIntoView({behavior: 'smooth', block: 'end'});
    };

    const handleTrackStickyElement = () => {
        for (let index = 1; index < 8; index++) {
            const element = document.getElementById(`step_${index}`);
            const circle = element.querySelector('.process-section-dot') ? element.querySelector('.process-section-dot') : element.querySelector('.process-specializing-item-dot');
            const transparentContent = element.querySelector('.process-specializing-item') ? element.querySelector('.process-specializing-item') : null;

            if (circle) {
                let parentRect = element.getBoundingClientRect();
                let stickyRect = circle.getBoundingClientRect();
                if (stickyRect.top  <= parentRect.top + 41) {
                    circle.style.border = '2px solid #E4E4E4';
                    if (transparentContent) {
                        transparentContent.style.opacity = 0.5;
                    }
                } else {
                    circle.style.border = '2px solid #39D048';
                    if (transparentContent) {
                        transparentContent.style.opacity = 1;
                    }
                }
            }
        }
    }

    document.addEventListener('scroll', function() {
        handleTrackStickyElement();
    })

    return (
        <>
            <section className="process-head">
                <div className="container">
                    <div className="process-head-content">
                        <h1 className="title">
                            Specializing in creating dynamic and captivating websites, we provide end-to-end solutions
                            tailored to your unique brand.
                        </h1>
                        <p className="text-secondary mb-0">
                            With a focus on medium to large businesses, we combine our expertise in design, development,
                            and e-commerce integration to craft visually stunning websites that drive results.
                        </p>
                    </div>

                    <ul className="process-head-steps">
                        {processSteps.map(step =>
                            <li
                                key={step.id}
                                onClick={() => handleClick(step.id)}
                            >
                                {step.text}
                            </li>
                        )}
                    </ul>
                </div>
            </section>
            <div className="process-section-main">
                <section className="process-section">

                    <div className="process-timeline-bg"/>
                    <div className="process-timeline-fade"/>
                    <div className="process-timeline-line"/>

                    <div className="container">
                        <div className="process-item" id="step_1">

                            <div className="process-item-content">
                                <strong>Consultation</strong>
                                <p className="text-secondary">
                                    We begin by thoroughly understanding your business needs, goals, and brand identity
                                    to
                                    provide tailored solutions for your Shopify website.
                                </p>
                                <button type="button" className="btn btn-primary">
                                    <img src="/images/arrow-right-white.svg" width={24} height={24} alt=""/>
                                    More About Consultation
                                </button>
                            </div>

                            <div className="process-section-center">
                                <div className="process-section-dot"/>
                            </div>

                            <div className="process-item-img">
                                <img src="/images/process-item-1.png" width={454} height={437} alt=""/>
                            </div>
                        </div>
                        <div className="process-item" id="step_2">
                            <div className="process-item-img">
                                <img src="/images/process-item-2.png" width={454} height={437} alt=""/>
                            </div>
                            <div className="process-section-center">
                                <div className="process-section-dot"/>
                            </div>
                            <div className="process-item-content">
                                <strong>Planning & Strategy</strong>
                                <p className="text-secondary">
                                    Our team of experts strategizes the website's architecture, user experience, and
                                    design
                                    elements, ensuring seamless navigation and optimal functionality for your medium to
                                    large business.
                                </p>
                                <button type="button" className="btn btn-primary">
                                    <img src="/images/arrow-right-white.svg" width={24} height={24} alt=""/>
                                    More About Consultation
                                </button>
                            </div>
                        </div>
                        <div className="process-item" id="step_3">
                            <div className="process-item-content">
                                <strong>Content Creation</strong>
                                <p className="text-secondary">
                                    Our experienced content creators craft compelling and SEO-friendly content that
                                    resonates with your target audience, effectively communicating your brand message
                                    and
                                    values.
                                </p>
                            </div>
                            <div className="process-section-center">
                                <div className="process-section-dot"/>
                            </div>
                            <div className="process-item-img">
                                <img src="/images/process-item-3.png" width={454} height={437} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="process-specializing">

                <div className="container">
                    <div className="process-specializing-head">
                        <div className="process-specializing-fade"/>
                        <h2 className="title">
                            Specializing in creating dynamic and captivating websites, we provide end-to-end solutions
                            tailored to your unique brand.
                        </h2>
                    </div>

                    <div className="process-specializing-wrapper">
                        <div className="process-specializing-line"/>

                        <div className="process-specializing-item-wrapper left" id="step_4">
                            <div className="process-specializing-item">
                                <img src="/images/specializing-icon-1.svg" width={32} height={32} alt=""/>
                                <strong>Custom Design & Development</strong>
                                <p>
                                    We create a visually stunning and responsive website, incorporating your brand
                                    elements, while utilizing Shopify's robust features and integrations to enhance the
                                    user experience and maximize conversions.
                                </p>
                                <a href="/" className="arrow-link">
                                    <img src="/images/arrow-right-green.svg" width={24} height={24} alt=""/>
                                    Get in touch
                                </a>

                                <div className="process-specializing-left-img">
                                    <img src="/images/process-specializing-img.png" width={580} height={384} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="process-specializing-item-wrapper" id="step_5">
                            <div className="process-specializing-item-center">
                                <div className="process-specializing-item-dot"/>
                            </div>
                            <div className="process-specializing-item">
                                <img src="/images/specializing-icon-2.svg" width={32} height={32} alt=""/>
                                <strong>E-commerce Functionality</strong>
                                <span>Every 2 weeks</span>
                                <p>
                                    We implement robust e-commerce functionalities, including inventory management,
                                    payment gateways, shipping options, and order processing, to streamline your
                                    online
                                    sales and improve customer satisfaction
                                </p>
                            </div>
                        </div>

                        <div className="process-specializing-item-wrapper" id="step_6">
                            <div className="process-specializing-item-center">
                                <div className="process-specializing-item-dot"/>
                            </div>
                            <div className="process-specializing-item">
                                <img src="/images/specializing-icon-3.svg" width={32} height={32} alt=""/>
                                <strong>Launch and Optimization</strong>
                                <span>Every quarter</span>
                                <p>
                                    Once the website is ready, we launch it with meticulous attention to detail, and
                                    our team continuously monitors and optimizes its performance, making data-driven
                                    adjustments to maximize conversions and improve user engagement.
                                </p>
                            </div>
                        </div>

                        <div className="process-specializing-item-wrapper" id="step_7">
                            <div className="process-specializing-item-center">
                                <div className="process-specializing-item-dot"/>
                            </div>
                            <div className="process-specializing-item">
                                <img src="/images/specializing-icon-4.svg" width={32} height={32} alt=""/>
                                <strong>Ongoing Support and Maintenance</strong>
                                <span>Continuously</span>
                                <p>
                                    We provide dedicated support and maintenance services, ensuring your website
                                    remains up-to-date, secure, and optimized, allowing you to focus on growing your
                                    medium to large business while we take care of your Shopify website.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="process-celebrating">
                <div className="container">
                    <div className="process-celebrating-wrapper">
                        <div className="process-celebrating-left">
                            <h2 className="title">
                                Celebrating Success. It’s release time!
                            </h2>
                            <p className="text-secondary mb-0">
                                The long-awaited moment has arrived! The app or website is now live and operational. We
                                are
                                dedicated to ensuring a smooth and worry-free experience for our users, providing
                                comprehensive operation and support services. It's time to pop open the champagne and
                                celebrate this milestone achievement!
                            </p>
                        </div>
                        <div className="process-celebrating-right">
                            <img src="/images/process-celebrating-img.png" width={410} height={446} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="process-evolving">
                <div className="container">
                    <div className="process-evolving-head">
                        <h2 className="title">
                            Evolving Excellence: Sustaining and Promoting our App in the Digital Landscape
                        </h2>
                        <p className="text-secondary mb-0">
                            Indeed, an app is never truly finished. Once it's launched and starts receiving positive
                            reviews, it's crucial to shift focus to two key areas: maintenance and marketing.
                        </p>
                    </div>

                    <div className="process-evolving-wrapper">
                        <div className="process-evolving-item">
                            <span>Extra Service</span>
                            <strong>Maintenance</strong>
                            <p>
                                Ensuring that the app continues to work smoothly is essential. This involves monitoring
                                its performance, addressing any bugs or issues that arise, and releasing regular updates
                                to enhance user experience and add new features.
                            </p>

                            <a href="/" className="arrow-link">
                                More Information
                                <img src="/images/arrow-right-green.svg" width={24} height={24} alt=""/>
                            </a>
                        </div>
                        <div className="process-evolving-item">
                            <span>Extra Service</span>
                            <strong>Maintenance</strong>
                            <p>
                                Ensuring that the app continues to work smoothly is essential. This involves monitoring
                                its performance, addressing any bugs or issues that arise, and releasing regular updates
                                to enhance user experience and add new features.
                            </p>

                            <a href="/" className="arrow-link">
                                More Information
                                <img src="/images/arrow-right-green.svg" width={24} height={24} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="process-consultation-wrapper">
                <section className="container">
                    <div className="process-consultation">
                        <div className="process-consultation-left">
                            <h2 className="title">
                                Get in touch with our experts
                            </h2>
                            <p>
                                Whether you're interested in developing a custom app or seeking more information, don't
                                hesitate to reach out to us. Contact us without any obligations, and Fabian will be
                                delighted to assist you with your inquiries.
                            </p>
                            <a href="tel:+00000000000">+ 000 0000 0000</a>
                            <a href="mailto:Expert@gmail.com">Expert@gmail.com</a>

                            <button type="button" className="btn btn-primary-outline">
                                <img src="/images/arrow-right-white.svg" width={24} height={24} alt=""/>
                                Free consultation
                            </button>
                        </div>
                        <div className="process-consultation-right">
                            <img src="/images/process-consultation-img.png" width={364} height={432} alt=""/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Process;
