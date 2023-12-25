import React from 'react';

const OurWorksItem = (props) => {
    const {className, image, title, description} = props;

    return (
        <div className={className ? className : 'our-works-item'} {...props}>
            <div className="our-works-item-img">
                <img src={image} alt={title} width={628} height={520}/>
            </div>
            <div className="our-works-item-info">
                <strong>{title}</strong>
                <p className="text-secondary mb-0">{description}</p>
            </div>
        </div>
    );
};

export default OurWorksItem;