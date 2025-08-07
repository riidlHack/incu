import React, { useState, useEffect } from 'react';
import domainAI from "../../image/domainAI.jpg";
import domainFintech from '../../image/domainFintech.png';

const HackathonDomains = () => {
    const [activePopup, setActivePopup] = useState(null);

    const domainsData = {
        'ai-ml': {
            title: 'AI & Automation',
            backgroundImage: domainAI,
            problems: [
                'PSA01 [GenAI for Document Validation]: Automate the Know Your Customer (KYC) process by using Generative AI to instantly validate the customer-submitted documents.',
                'PSA02 [Colleague Assistant Co-Pilot]: Develop an AI-Copilot to guide employees through the complex cutomer onboarding workflow, reducing errors and training time.',
                'PSA03 [Code Build Process Analysis]: Proactively prevent build failures by using an AI agent to analyze historical data and identify patterns.',
                'PSA04 [AI for Requirement Gathering]: Automate the initial, time-consuming phase of business analysis by generating project artifacts like user stories and process flows.',
                'PSA05 [Code Quality Analysis]: Move beyond detection to auto-correction, using AI to fix code smells and bugs identified by tools like SonarQube.',
                'PSA06 [Voice Agents for ASHA Workers]: Create an empathetic, vernacular voice assistant for ASHA workers to simplify patient data entry, schedule follow-ups, and access health scheme information.',
                'PSA07 [Open Innovation]: Have an out-of-box idea in AI that is not listed here? This is your chance to define your own problem and build a unique solution!'
            ],
        },
        'fintech': {
            title: 'Fintech',
            backgroundImage: domainFintech,
            problems: [
                'PSF01 [Trading Address Verification]: Strengthen compliance by automating the verification of trading addresses against multiple external data sources to produce a confidence score.',
                'PSF02 [AI Deal Checker]: AI that automatically reads financial agreements to find any mistakes. This saves a lot of time and helps prevents expensive errors. Mitigate the risks and reduce manual effort in post-trade operations by using AI to validate high volumes of financial term sheets.', 
                'PSF03 [Next-Gen Authentication & Fraud Detection]: Develop an AI-driven system to detect and prevent fraudulent mobile banking registrations by analyzing user behavior, location, and device data to create a dynamic risk score for password-less authentication.',
                'PSF04 [PFM Tools for Low-Income Households]: Design a user-friendly Personal Finance Management (PFM) app for low-income Indians, focusing on easy expense tracking and clear debt visualization.',
                'PSF05 [Tailored Micro-Insurance Distribution Models]: Propose innovative fintech models for micro-insurance (embedded, parametric) that simplify purchase and claims for underserved rural and semi-urban areas.',
                'PSF06 [AI-Driven Personalized Retirement Planning]: Design an AI-driven platform that analyzes income, expenses, and goals to provide tailored retirement projections and strategies for the salaried middle class.',
                'PSF07 [Open Innovation]: Got a game-changing idea in fintech that could redefine the market? This is your space to innovate'
            ],
        },
        // Add more domains as needed
    };

    const openPopup = (domain) => {
        setActivePopup(domain);
        document.body.style.overflow = 'hidden';
    };

    const closePopup = () => {
        setActivePopup(null);
        document.body.style.overflow = 'auto';
    };

    // Effect for handling clicks outside popup and Escape key
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if activePopup exists and the click is outside the popup-content
            if (activePopup && !event.target.closest('.popup-content')) {
                closePopup();
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && activePopup) {
                closePopup();
            }
        };

        // Add event listeners only when a popup is active
        if (activePopup) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }

        // Cleanup function for event listeners
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [activePopup]); // Re-run effect if activePopup changes

    // Get the data for the currently active popup
    const currentPopupData = activePopup ? domainsData[activePopup] : null;

    return (
        <div className="container">
            <h1 className="neon-text font-heading text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-center">Domains</h1>
            <h2 className="section-heading">Choose Your Challenge</h2>

            <div className="cards-container">
                {Object.keys(domainsData).map((key) => (
                    <div
                        className="card"
                        onClick={() => openPopup(key)}
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
            {activePopup && currentPopupData && (
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
            )}

            <div className="flex justify-center mt-10 mb-10">
                <a href="./Incuverse_PPT_Format.pptx" download>
                  <button className="glass-panel hover-glow font-heading px-8 py-4 bg-neon-green/20 border border-neon-green/30 text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300 text-sm uppercase tracking-wide">
                    Download PPT Format
                  </button>
                </a>
            </div>
            
        </div>
    );
};

export default HackathonDomains;