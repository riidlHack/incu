import React, { useState, useEffect } from 'react';
import domainAI from "../../image/domainAI.jpg";
import domainFintech from '../../image/domainFintech.png';

const HackathonDomains = () => {
    const [activePopup, setActivePopup] = useState(null);

    const domainsData = {
        'D2C': {
            title: 'D2C',
            backgroundImage: domainAI,
        },
        'B2B': {
            title: 'B2B',
            backgroundImage: domainFintech,
        },
        // Add more domains as needed
    };

    // const openPopup = (domain) => {
    //     setActivePopup(domain);
    //     document.body.style.overflow = 'hidden';
    // };

    // const closePopup = () => {
    //     setActivePopup(null);
    //     document.body.style.overflow = 'auto';
    // };

    // Effect for handling clicks outside popup and Escape key
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         // Check if activePopup exists and the click is outside the popup-content
    //         if (activePopup && !event.target.closest('.popup-content')) {
    //             closePopup();
    //         }
    //     };

    //     const handleKeyDown = (event) => {
    //         if (event.key === 'Escape' && activePopup) {
    //             closePopup();
    //         }
    //     };

    //     // Add event listeners only when a popup is active
    //     if (activePopup) {
    //         document.addEventListener('mousedown', handleClickOutside);
    //         document.addEventListener('keydown', handleKeyDown);
    //     }

    //     // Cleanup function for event listeners
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, [activePopup]); // Re-run effect if activePopup changes

    // Get the data for the currently active popup
    const currentPopupData = activePopup ? domainsData[activePopup] : null;

    return (
        <div className="container">
            <h1 className="neon-text font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-center">Domains</h1>
            <h2 className="section-heading">Choose Your Challenge</h2>
            <div className="flex justify-center mb-8">
                <div className="glass-panel inline-block p-4 hover-glow">
                    <p className="font-code text-sm md:text-base font-bold text-white">
                        Click on domain card to view problem statements
                    </p>
                </div>
            </div>

            <div className="cards-container">
                {Object.keys(domainsData).map((key) => (
                    <div
                        key={key}
                        className="card"
                        // onClick={() => openPopup(key)}
                    >
                        <div
                            className="card-front hover-glow hover-glow:hover"
                            style={{ backgroundImage: `url(${domainsData[key].backgroundImage})` }}
                        >
                            <h2>{domainsData[key].title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Conditionally render the popup overlay only if activePopup is not null */}
            {/* {activePopup && currentPopupData && (
                <div
                    className="popup-overlay active" // Always apply 'active' when rendered this way
                    id={`${activePopup}-popup`}
                >
                    <div className="popup-content">
                        <div className="popup-header">
                            <h3 className="popup-title">{currentPopupData.title} Problems</h3>
                            <button className="close-btn" onClick={closePopup}>&times;</button>
                        </div>
                        <ul className="problem-list">
                            {currentPopupData.problems.map((problem, index) => (
                                <li key={index}>
                                    <span className="problem-number">{index+1}.</span>
                                    {problem}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default HackathonDomains;
