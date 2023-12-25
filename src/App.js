import React, {useState} from 'react';
import AppRouter from './components/AppRouter';
import Header from './components/UI/header/Header';
import Footer from './components/UI/footer/Footer';
import {PageContext} from './context/page-context';

const App = () => {
    const [headerClass, setHeaderClass] = useState(true);

    return (
        <PageContext.Provider value={{
            headerClass,
            setHeaderClass
        }}>
            <main className="page-wrapper">
                <Header/>
                <AppRouter/>
                <Footer/>
            </main>
        </PageContext.Provider>
    );
};

export default App;