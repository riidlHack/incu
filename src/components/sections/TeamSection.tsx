import React from 'react';
import { Trophy, Award, Star, Target } from "lucide-react";

// Tech
import tech_image_1 from '../../image/Tech/31.png';
import tech_image_2 from '../../image/Tech/32.png';
import tech_image_3 from '../../image/Tech/33.png';
import tech_image_4 from '../../image/Tech/34.png';

// Leads
import leads_image_2 from '../../image/Leads/Lead_1.png';
import leads_image_1 from '../../image/Leads/Lead_2.png';

// PR
import pr_image_1 from '../../image/PR/8.png';
import pr_image_2 from '../../image/PR/9.png';
import pr_image_3 from '../../image/PR/10.png';
import pr_image_4 from '../../image/PR/11.png';
import pr_image_5 from '../../image/PR/12.png';
import pr_image_6 from '../../image/PR/Aryan_Kadam.png';
import pr_image_7 from '../../image/PR/14.png';
import pr_image_8 from '../../image/PR/Disha_Waghambare.png';
import pr_image_9 from '../../image/PR/Vedant_Alshi.png';
import pr_image_10 from '../../image/PR/Lavannya_Sutar.png';

// Media
import media_image_1 from '../../image/Media/16.png';
import media_image_2 from '../../image/Media/17.png';
import media_image_3 from '../../image/Media/18.png';
import media_image_4 from '../../image/Media/19.png';
import media_image_5 from '../../image/Media/20.png';
import media_image_6 from '../../image/Media/21.png';

// Logistics
import logistics_image_1 from '../../image/Logistics/23.png';
import logistics_image_2 from '../../image/Logistics/24.png';
import logistics_image_3 from '../../image/Logistics/25.png';
import logistics_image_4 from '../../image/Logistics/26.png';
import logistics_image_5 from '../../image/Logistics/27.png';
import logistics_image_6 from '../../image/Logistics/28.png';
import logistics_image_7 from '../../image/Logistics/29.png';

// Sponsors
import sponsors_image_1 from '../../image/Sponsors/2.png';
import sponsors_image_2 from '../../image/Sponsors/3.png';
import sponsors_image_3 from '../../image/Sponsors/4.png';
import sponsors_image_4 from '../../image/Sponsors/5.png';
import sponsors_image_5 from '../../image/Sponsors/6.png';


const allTeamMembers = [
    // Leads
    { name: 'Rida Nakhuda', position: 'Lead Coordinator', image: leads_image_1, linkedin: 'https://www.linkedin.com/in/rida-nakhuda-5b019728a/' },
    { name: 'Aayush Sadaye', position: 'Lead Coordinator', image: leads_image_2, linkedin: 'https://www.linkedin.com/in/aayush-innovatesss/' },
    //Tech
    { name: 'Atharva Patankar', position: 'Tech Lead', image: tech_image_1, linkedin: 'https://www.linkedin.com/in/atharvapatankar?' },
    { name: 'Prem Gupta', position: 'Tech Core', image: tech_image_3, linkedin: 'https://www.linkedin.com/in/prem-gupta-616489335' },
    { name: 'Viraj Ravani', position: 'Tech Core', image: tech_image_2, linkedin: 'https://www.linkedin.com/in/virajravani'},
    { name: 'Yash Musterya', position: 'Tech Core', image: tech_image_4, linkedin: 'https://www.linkedin.com/in/yashmusterya/'},
    // PR
    { name: 'Safwaan Mahida', position: 'PR Lead', image: pr_image_1, linkedin: 'https://www.linkedin.com/in/safwaan-mahida-9647aa33a/' },
    { name: 'Atharva Sawant', position: 'PR Core', image: pr_image_2, linkedin: 'https://www.linkedin.com/in/atharva-sawant10/' },
    { name: 'Swanandi Jadhav', position: 'PR Core', image: pr_image_3, linkedin: 'https://www.linkedin.com/in/swanandi-jadhav-064525321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Diksha Khandge', position: 'PR Core', image: pr_image_4, linkedin: 'http://www.linkedin.com/in/diksha-khandge-b5150b332' },
    { name: 'Princy Karani', position: 'PR Core', image: pr_image_5, linkedin: 'https://www.linkedin.com/in/princy-karani-7a1621290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Aryan Kadam', position: 'PR Core', image: pr_image_6, linkedin: '' },
    { name: 'Mahek Agnihotri', position: 'PR Core', image: pr_image_7, linkedin: '' },
    { name: 'Disha Waghambare', position: 'PR Core', image: pr_image_8, linkedin: 'https://www.linkedin.com/in/disha-waghambare-a21479378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Vedant Alshi', position: 'PR Core', image: pr_image_9, linkedin: 'https://www.linkedin.com/in/vedant-alshi-71834a378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Lavannya Sutar', position: 'PR Core', image: pr_image_10, linkedin: '' },

    // Media
    { name: 'Siddhi Jain', position: 'Media Lead', image: media_image_1, linkedin: 'https://www.linkedin.com/in/siddhi-jain-957311241' },
    { name: 'Saloni Sawant', position: 'Media Core', image: media_image_2, linkedin: 'https://www.linkedin.com/in/saloni-sawant-78b513285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Preethan Mateti', position: 'Media Core', image: media_image_3, linkedin: 'http://www.linkedin.com/in/preethan-raj-mateti-329048287' },
    { name: 'Khushi Paandey', position: 'Media Core', image: media_image_4, linkedin: 'https://www.linkedin.com/in/khushi-p-a9119926a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Tanvi Misar', position: 'Media Core', image: media_image_5, linkedin: 'https://www.linkedin.com/in/tanvi-misar-33945a273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Manav Shirali', position: 'Media Core', image: media_image_6, linkedin: 'https://www.linkedin.com/in/manav-shirali-05b7882a4/' },
    // Logistics
    { name: 'Tejal Kinjawade', position: 'Logistics Lead', image: logistics_image_1, linkedin: 'https://www.linkedin.com/in/tejal-kinjawade-977792280' },
    { name: 'Gargee Yellurkar', position: 'Logistics Core', image: logistics_image_2, linkedin: '' },
    { name: 'Soham Narayankar', position: 'Logistics Core', image: logistics_image_3, linkedin: 'https://www.linkedin.com/in/soham-narayankar-064b3a289' },
    { name: 'Meet Nayak', position: 'Logistics Core', image: logistics_image_4, linkedin: 'https://www.linkedin.com/in/meetnayakjain1008?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Garv Gandhi', position: 'Logistics Core', image: logistics_image_5, linkedin: 'https://www.linkedin.com/in/garv-gandhi9305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Akash Giri', position: 'Logistics Core', image: logistics_image_6, linkedin: 'https://www.linkedin.com/in/akash-giri-684856309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'Kuwar', position: 'Logistics Core', image: logistics_image_7, linkedin: 'https://www.linkedin.com/in/kuwar12/' },
    // Sponsors
    { name: 'Suhana', position: 'Sponsorship Lead', image: sponsors_image_1, linkedin: 'https://www.linkedin.com/in/suhana2005suhana/' },
    { name: 'Ayushi Kabra', position: 'Sponsorship Core', image: sponsors_image_2, linkedin: 'https://www.linkedin.com/in/ayushi-kabra-144a80220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { name: 'Harsh Dubey', position: 'Sponsorship Core', image: sponsors_image_3, linkedin: 'https://www.linkedin.com/in/harsh-dubey-126a25263' },
    { name: 'Azlaan Khan', position: 'Sponsorship Core', image: sponsors_image_4, linkedin: 'http://www.linkedin.com/in/azlaan-khan-425133312' },
    { name: 'Sakina Passwala', position: 'Sponsorship Core', image: sponsors_image_5, linkedin: 'https://www.linkedin.com/in/sakina-passwala-79a739354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
];


// LinkedIn SVG Icon Component
const LinkedInIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10 text-white transition-transform duration-300 ease-in-out hover:scale-110"
    >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);


const TeamSection = () => {
    // A separate style block for the CSS that can't be done with Tailwind
    const scrollingAnimation = `
      .scrolling-track {
        display: flex;
        width: fit-content;
        animation: scroll 40s linear infinite;
      }
      .scrolling-wrapper:hover .scrolling-track {
        animation-play-state: paused;
      }
      .scrolling-wrapper {
        -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      }
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;

    return (
        <>
            <style>{scrollingAnimation}</style>
            <section className="py-16 font-sans">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="neon-text font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-12 text-center">
                         Team
                    </h2>

                    <div className="scrolling-wrapper overflow-hidden w-full relative">
                        <div className="scrolling-track">
                            {/* Render all members twice for a seamless loop */}
                            {[...allTeamMembers, ...allTeamMembers].map((member, index) => (
                                <div
                                    key={`${member.name}-${index}`}
                                    className="glass-panel p-4 hover-glow flex-shrink-0 w-48 mx-4 overflow-hidden text-center transition-all duration-300 ease-in-out hover:scale-105 group"
                                >
                                    <div className="relative w-full pb-[100%]">
                                        <img
                                            src={member.image}
                                            alt={member.name || 'Team Member'}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn Profile`}>
                                                    <LinkedInIcon />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="relative z-10 p-4">
                                        <h3 className="font-heading text-lg font-bold text-white m-0">{member.name || 'Name'}</h3>
                                        <p className="font-code text-sm text-neon-green">{member.position || 'Position'}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamSection;
