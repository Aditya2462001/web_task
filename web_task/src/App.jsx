import React from 'react';
import './app.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import SecondContainer from './components/SecondContainer';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <div className="background__div"></div>
            <div className="first__page">
                <Navbar/>
                <MainPage />
            </div>
                <div className="info__block">
                    <h2> <i class="fas fa-check"></i><span>Free 14-Days Demo</span> </h2>
                    <h2> <i class="fas fa-check"></i><span>No Credit card Needed</span> </h2>
                    <h2> <i class="fas fa-check"></i><span>No Setup</span></h2>
                </div>
            <SecondContainer />

            <Footer />
        </div>
    )
}

export default App;
