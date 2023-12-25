import React from 'react';
import classes from './SectionBackground.module.scss';

const SectionBackground = (props) => {
    const {contentClassName, children} = props;
    const contentClass = [classes.section_content];

    if (contentClassName) contentClass.push(contentClassName);

    return (
        <section className="container">
            <div className={classes.section}>
                <div className={contentClass.join(' ')}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default SectionBackground;