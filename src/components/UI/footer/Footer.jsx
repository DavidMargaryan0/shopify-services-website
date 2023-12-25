import React from 'react';
import classes from "./Footer.module.scss";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footer_inner}>
                    <div className={classes.footer_logo}>
                        <Link to={'/'}>Logo</Link>
                    </div>

                    <div className={classes.footer_middle}>
                        <div className={classes.footer_middle_col}>
                            <Link to={'/services'} className={classes.footer_link}>Services</Link>
                            <Link to={'/platforms/shopify'} className={classes.footer_link}>Platforms</Link>
                            <Link to={'/industries'} className={classes.footer_link}>Industries</Link>
                        </div>
                        <div className={classes.footer_middle_col}>
                            <Link to={'/our-work'} className={classes.footer_link}>Our Work</Link>
                            <Link to={'/process'} className={classes.footer_link}>Process</Link>
                            <Link to={'/contact-us'} className={classes.footer_link}>Contact</Link>
                        </div>
                    </div>

                    <div className={classes.footer_right}>
                        <a href="tel:+310698160362" className={classes.footer_link}>+31 06-98160362</a>

                        <address className="font-500">Papenstraat 155, Bemmel, Gelderland</address>

                        <a href="mailto:company@website.com" className={classes.footer_link}>company@website.com</a>

                        <ul className={classes.footer_social}>
                            <li className={classes.footer_social_item}>
                                <a href="/" aria-label="linkedin" title="Linkedin" target="_blank">
                                    <img src="../shopify-services-website/images/linkeding.svg" width={20} height={20} alt=""/>
                                </a>
                            </li>
                            <li className={classes.footer_social_item}>
                                <a href="/" aria-label="instagram" title="Instagram" target="_blank">
                                    <img src="../shopify-services-website/images/instagram.svg" width={20} height={20} alt=""/>
                                </a>
                            </li>
                            <li className={classes.footer_social_item}>
                                <a href="/" aria-label="facebook" title="Facebook" target="_blank">
                                    <img src="../shopify-services-website/images/facebook.svg" width={20} height={20} alt=""/>
                                </a>
                            </li>
                            <li className={classes.footer_social_item}>
                                <a href="/" aria-label="twitter" title="Twitter" target="_blank">
                                    <img src="../shopify-services-website/images/twitter.svg" width={20} height={20} alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={classes.footer_copyright}>
                <div className="container">
                    <div className={classes.footer_copyright_inner}>
                        <p>&copy; 2023 Báchoo</p>

                        <a href="/" target="_blank">Privacy Policy</a>
                        <a href="/" target="_blank">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
