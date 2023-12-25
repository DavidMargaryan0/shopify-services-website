import React, {useContext, useEffect, useState} from 'react';
import {PageContext} from '../../../context/page-context';
import {Link} from 'react-router-dom';
import {navLinks} from './nav-links';
import classes from './Header.module.scss';

const Header = () => {
    const [offset, setOffset] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropDown] = useState(false);
    const headerClasses = [classes.header];
    const burgerClasses = [classes.burger];
    const navbarClasses = [classes.header_nav];
    const {headerClass} = useContext(PageContext);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleDropdown = (e) => {
        e.stopPropagation();

        setShowDropDown(show => !show);
    }

    window.addEventListener('click', function () {
        setShowDropDown(false);
    }, {passive: true});

    if (headerClass) headerClasses.push(classes.header_white);

    if (offset > 10) headerClasses.push(classes.header_scrolled);

    if (showMenu) {
        headerClasses.push(classes.header_show)
        navbarClasses.push(classes.header_nav_show);
        burgerClasses.push(classes.burger_active);
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }

    return (
        <header className={headerClasses.join(' ')}>
            <div className="container">
                <div className={classes.header_inner}>
                    <Link
                        to={'/'}
                        className={classes.header_logo}
                    >
                        Logo
                    </Link>

                    <nav className={navbarClasses.join(' ')}>
                        {navLinks.map(link =>
                            <Link
                                to={link.path}
                                key={link.path}
                                className={classes.header_nav_link}
                                onClick={() => setShowMenu(false)}
                            >
                                {link.text}
                            </Link>
                        )}
                        <div className={classes.header_dropdown}>
                            <button
                                type="button"
                                className={classes.header_dropdown_button}
                                onClick={e => toggleDropdown(e)}
                            >
                                EN
                            </button>
                            {showDropdown && (
                                <div className={classes.header_dropdown_menu}>
                                    <div className={classes.header_dropdown_menu_item}>RU</div>
                                    <div className={classes.header_dropdown_menu_item}>HY</div>
                                </div>
                            )}
                        </div>
                    </nav>

                    <button
                        type="button"
                        className={burgerClasses.join(' ')}
                        onClick={() => setShowMenu(show => !show)}
                    >
                        <span className={`${classes.burger_line} ${classes.burger_line_1}`}/>
                        <span className={`${classes.burger_line} ${classes.burger_line_2}`}/>
                        <span className={`${classes.burger_line} ${classes.burger_line_3}`}/>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;