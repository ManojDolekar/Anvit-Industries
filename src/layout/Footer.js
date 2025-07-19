import React, { useEffect, useState } from 'react';
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaInstagram,
} from 'react-icons/fa';

function Footer() {
    const [activeSection, setActiveSection] = useState('home');

    const handleLinkClick = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const activeClass = 'text-commonColor font-semibold';
    const normalClass = 'hover:text-commonColor';

    return (
        <footer className="bg-[#e8f0f4] text-[#161b22] py-12 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-10">

                {/* Branding */}
                <div>
                    <h3 className="text-2xl font-josefin font-bold text-commonColor mb-3">
                        Anvit Industries
                    </h3>
                    <p className="text-sm font-raleway text-justify">
                        Trusted experts in Electrical Power Management & Industrial Automation. Delivering reliable and efficient solutions to businesses.
                    </p>
                </div>

                {/* Navigation */}
                <div className='flex flex-col items-center '>
                    <h4 className="font-semibold font-josefin mb-3">Quick Links</h4>
                    <ul className="flex flex-col items-center gap-2 text-sm font-raleway ">
                        <li>
                            <button onClick={() => handleLinkClick('home')} className={activeSection === 'home' ? activeClass : normalClass}>
                                Home
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleLinkClick('services')} className={activeSection === 'services' ? activeClass : normalClass}>
                                Services
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleLinkClick('vision')} className={activeSection === 'vision' ? activeClass : normalClass}>
                                Vision
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleLinkClick('about')} className={activeSection === 'about' ? activeClass : normalClass}>
                                About
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleLinkClick('contact')} className={activeSection === 'contact' ? activeClass : normalClass}>
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Note */}
            <div className="mt-10 text-center text-xs border-t font-raleway pt-6 border-darkAccent/10 dark:border-lightAccent/10">
                &copy; 2025   Anvit Industries. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;

