import React, {useState} from 'react';
import {industriesAbout, industriesBenefits, industriesQuestions} from '../../data';
import SectionBackground from '../../components/UI/section/SectionBackground';
import Collapse from '../../components/UI/collapse/Collapse';
import '../../assets/css/industries.scss';

const Industries = () => {
    const [selected, setSelected] = useState(null);

    const toggleCollapse = (index) => {
        if (selected === index) {
            return setSelected(null);
        }

        setSelected(index);
    }

    return (
        <>
            <section className="industries-head">
                <div className="container">
                    <div className="industries-head-wrapper">
                        <div className="industries-head-left">
                            <strong>Industries</strong>
                            <h1 className="title">
                                Runway-Ready Shopify Solutions for the Fashion Industry.
                            </h1>
                            <p>
                                Whether you're a boutique brand or a global fashion icon, we have the expertise to
                                enhance your online presence. Expect seamless inventory management, stunning visuals,
                                and a shopping experience that keeps your customers coming back for more.
                            </p>
                            <a href={'/'} className="btn btn-primary btn-large">
                                Start a Project
                            </a>
                        </div>
                        <div className="industries-head-right">
                            <img src="/images/industries-head-img.svg" width={512} height={461} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="industries-wrapper">
                <div className="container">
                    <div className="industries-item">
                        <div className="industries-item-content">
                            <h2 className="title">Why choose us for the Fashion Industry.</h2>
                            <p className="text-secondary mb-0">
                                Our visually stunning designs, mobile optimization, and effective content strategies
                                ensure an exceptional user experience. Trust us to boost your fashion e-commerce
                                success, backed by a track record of client satisfaction and ongoing support.
                            </p>
                        </div>
                        <div className="industries-item-img">
                            <img src="/images/industries-item-1.png" width={540} height={380} alt=""/>
                        </div>
                    </div>
                    <div className="industries-item">
                        <div className="industries-item-img">
                            <img src="/images/industries-item-2.png" width={540} height={380} alt=""/>
                        </div>
                        <div className="industries-item-content">
                            <h2 className="title">Shopify Apps and Integrations</h2>
                            <p className="text-secondary mb-0">
                                Our visually stunning designs, mobile optimization, and effective content strategies
                                ensure an exceptional user experience. Trust us to boost your fashion e-commerce
                                success, backed by a track record of client satisfaction and ongoing support.
                            </p>
                        </div>
                    </div>
                    <div className="industries-item">
                        <div className="industries-item-content">
                            <h2 className="title">Better Integration</h2>
                            <p className="text-secondary mb-0">
                                Our visually stunning designs, mobile optimization, and effective content strategies
                                ensure an exceptional user experience. Trust us to boost your fashion e-commerce
                                success, backed by a track record of client satisfaction and ongoing support.
                            </p>
                        </div>
                        <div className="industries-item-img">
                            <img src="/images/industries-item-3.png" width={540} height={380} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="industries-benefits">
                    <div className="industries-benefits-head">
                        <h2 className="title">
                            Unlock the Power of Shopify for Your Fashion Brand with Our Exclusive Benefits
                        </h2>
                        <p className="text-secondary mb-0">
                            Elevate your fashion brand with our tailored Shopify solutions. From stunning visuals and
                            mobile optimization to fashion-focused SEO and secure payments, we provide the essential
                            benefits your fashion business needs.
                        </p>
                    </div>

                    <div className="industries-benefits-wrapper">
                        {industriesBenefits.map(industriesBenefitsItem =>
                            <div className="industries-benefits-item" key={industriesBenefitsItem.id}>
                                <img
                                    src={`/images/industries-benefits-icon-${industriesBenefitsItem.id}.svg`}
                                    alt={industriesBenefitsItem.title}
                                    height={40}
                                    width={40}
                                />
                                <strong>{industriesBenefitsItem.title}</strong>
                                <p className="text-secondary mb-0">{industriesBenefitsItem.text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="industries-about">
                <div className="container">
                    <div className="industries-about-wrapper">
                        <div className="industries-about-left">
                            <h2 className="title">Don’t stress about starting from scratch</h2>
                            <p>
                                Discover the ease and convenience of Shopify storefronts, where you can create your
                                dream online store without any hassle. With a user-friendly interface and a wide range
                                of customizable templates, you'll have everything you need to begin selling your
                                products in no time.
                            </p>
                        </div>
                        <div className="industries-about-right">
                            <ul className="ul-check">
                                {industriesAbout.map(industriesAboutItem =>
                                    <li key={industriesAboutItem.id}>
                                        {industriesAboutItem.text}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="industries-questions">
                <div className="container">
                    <div className="industries-questions-head">
                        <h2 className="title">Got Questions? We've Got Answers!</h2>
                        <p className="text-secondary mb-0">
                            We've compiled a list of commonly asked questions to make your experience smoother and more
                            enjoyable. Whether you're curious about our services, processes, or how we can assist you,
                            you'll find the information you need right here.
                        </p>
                    </div>

                    <div className="industries-questions-wrapper">
                        {industriesQuestions.map(item =>
                            <Collapse
                                id={item.id}
                                key={item.id}
                                selected={selected}
                                question={item.question}
                                onClick={() => toggleCollapse(item.id)}
                            >
                                {item.answer}
                            </Collapse>
                        )}
                    </div>
                </div>
            </section>

            <SectionBackground
                contentClassName={'industries-contact-wrapper'}
            >
                <h2 className="title">Ready to elevate your fashion brand's online presence?</h2>
                <p>Contact us today and let's get started on your fashion e-commerce journey!</p>
                <button className="btn btn-primary btn-large">Start a Project</button>
            </SectionBackground>
        </>
    );
};

export default Industries;