import React from 'react';
import classes from './Collapse.module.scss';

const Collapse = (props) => {
    const {children, question, selected, onClick, id} = props;
    const collapseBodyClasses = [classes.collapse_body];

    if (selected === id) {
        collapseBodyClasses.push(classes.collapse_show);
    }

    return (
        <div className={classes.collapse_item}>
            <button
                type="button"
                onClick={onClick}
                aria-expanded={selected === id}
                className={classes.collapse_btn}
            >
                {question}

                <img src="../shopify-services-website/images/collapse-arrow.svg" alt="" width={32} height={32}/>
            </button>
            <div className={collapseBodyClasses.join(' ')}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;
