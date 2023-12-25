import Home from '../pages/home/Home';
import Services from '../pages/services/Services';
import Process from '../pages/process/Process';
import ContactUs from '../pages/contact-us/ContactUs';
import Industries from '../pages/industries/Industries';
import Shopify from '../pages/platforms/Shopify';
import OurWork from '../pages/our-work/OurWork';
import OurWorkIndividual from "../pages/our-work/OurWorkIndividual";

export const routes = [
    {
        path: '/',
        exact: true,
        headerClass: true,
        component: <Home/>
    },
    {
        path: '/services',
        exact: false,
        component: <Services/>
    },
    {
        path: '/process',
        exact: false,
        component: <Process/>
    },
    {
        path: '/contact-us',
        exact: false,
        headerClass: true,
        component: <ContactUs/>
    },
    {
        path: '/industries',
        exact: false,
        headerClass: true,
        component: <Industries/>
    },
    {
        path: '/platforms/shopify',
        exact: true,
        headerClass: true,
        component: <Shopify/>
    },
    {
        path: '/our-work',
        exact: false,
        component: <OurWork/>
    },
    {
        path: '/our-work/individual',
        exact: false,
        headerClass: true,
        component: <OurWorkIndividual/>
    },
]