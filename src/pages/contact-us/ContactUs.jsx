import React from 'react';
import '../../assets/css/contact-us.scss';
import SectionBackground from "../../components/UI/section/SectionBackground";

const ContactUs = () => {
    return (
        <>
            <section className="contact-head">
                <div className="container">
                    <h1 className="title">Get in Touch: Contact Us for Exceptional Support and Inquiries</h1>
                    <img src="../shopify-services-website/images/contact-head-img.png" width={1440} height={484} alt=""/>
                </div>
            </section>

            <div className="contact-info">
                <div className="container">
                    <div className="contact-info-wrapper">
                        <div className="contact-info-item">
                            <img src="../shopify-services-website/images/location.svg" width={40} height={40} alt=""/>
                            <h3>Spain</h3>
                            <address>
                                <span>Address:</span>
                                C/ Correos 6, 46002 Valencia, Spain
                            </address>
                            <div>
                                <span>Phone:</span>
                                <a href="tel:+37412345678">
                                    +34-12345678
                                </a>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <img src="../shopify-services-website/images/location.svg" width={40} height={40} alt=""/>
                            <h3>Netherlands</h3>
                            <address>
                                <span>Address:</span>
                                Leidsevaartweg 1, 2106NA Heemstede, The Netherlands
                            </address>
                            <div>
                                <span>Phone:</span>
                                <a href="tel:+31643157037">
                                    +316-43157037
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionBackground
                contentClassName={'contact-team-inner'}
            >
                <h2 className="title">Reach Out to Our Team</h2>
                <div className="contact-team-contacts">
                    <a href="mailto:info@domainname.com">info@domainname.com</a>
                    <a href="mailto:support@domainname.com">support@domainname.com</a>
                </div>
                <p>
                    Stay connected with us on social media where we consistently share inspiring stories, and
                    exciting glimpses into our latest projects.
                </p>

                <div className="contact-team-social">
                    <a href="/" target="_blank" aria-label="linkedin">
                        <img src="../shopify-services-website/images/linkedin-green.svg" width={32} height={32} alt=""/>
                    </a>
                    <a href="/" target="_blank" aria-label="instagram">
                        <img src="../shopify-services-website/images/instagram-green.svg" width={32} height={32} alt=""/>
                    </a>
                    <a href="/" target="_blank" aria-label="facebook">
                        <img src="../shopify-services-website/images/facebook-green.svg" width={32} height={32} alt=""/>
                    </a>
                    <a href="/" target="_blank" aria-label="twitter">
                        <img src="../shopify-services-website/images/twitter-green.svg" width={32} height={32} alt=""/>
                    </a>
                </div>
            </SectionBackground>
        </>
    );
};

export default ContactUs;
