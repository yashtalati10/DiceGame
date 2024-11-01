import React from 'react';
import './bootstrap.css';
import './style.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="container">
                <div className="row align-items-center">
                    {/* Image Column */}
                    <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                        <img src="/images/dice.png" alt="Dice Game" className="img-fluid" />
                    </div>
                    
                    {/* Text and Button Column */}
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <p className="title-text">DICE GAME</p>
                        <div className="text-md-end mt-3">
                            <Link to="/play">
                                <button className="btn blackButton px-5">
                                    Play Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
