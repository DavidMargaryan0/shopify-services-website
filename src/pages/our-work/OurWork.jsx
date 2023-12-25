import React, {useState} from 'react';
import {ourWorksFilters, ourWorksItems} from '../../data';
import OurWorksItem from '../../components/OurWorksItem';
import {Link, useNavigate} from 'react-router-dom';
import '../../assets/css/our-work.scss';

const OurWork = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const navigate = useNavigate();

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredCategory = selectedCategory === 'all'
        ? ourWorksItems
        : ourWorksItems.filter(item => item.category === selectedCategory);

    const getActiveFilter = (category) => {
        return selectedCategory === category ? 'our-works-filters-item active' : 'our-works-filters-item'
    }

    return (
        <>
            <section className="our-works-head">
                <div className="container">
                    <div className="our-works-head-wrapper">
                        <h1 className="title">Our Work</h1>
                        <p className="text-secondary mb-0">
                            Explore our portfolio of stunning Shopify websites, where we turn digital dreams into
                            thriving online realities. Each project is a testament to our commitment to innovation,
                            design excellence, and e-commerce success.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="our-works-filters">
                    {ourWorksFilters.map(filter =>
                        <button
                            onClick={() => handleCategoryChange(filter.category)}
                            className={getActiveFilter(filter.category)}
                            type="button"
                            key={filter.id}
                        >
                            {filter.text}
                        </button>
                    )}
                </div>

                <div className="our-works-wrapper">
                    {filteredCategory.map(ourWorkItem =>
                        <OurWorksItem
                            image={`../shopify-services-website/images/latest-project-${ourWorkItem.id}.png`}
                            description={ourWorkItem.description}
                            onClick={() => navigate('/our-work/individual')}
                            title={ourWorkItem.title}
                            key={ourWorkItem.id}
                        />
                    )}
                </div>

                <div className="our-works-wrapper-button">
                    <Link to={'/contact-us'} className="btn btn-primary">Contact us</Link>
                </div>
            </div>
        </>
    );
};

export default OurWork;
