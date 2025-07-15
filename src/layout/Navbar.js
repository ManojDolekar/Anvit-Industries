import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../common/assets/logo.jpeg';
import { scrollToSection } from './scrollUtils';

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollNav = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
    
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 200);
        } else {
            scrollToSection(sectionId);
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-light z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto p-5 flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                    <img src={Logo} alt="logo" className='h-12' />
                </div>

                <ul className="hidden md:flex gap-6 font-josefin text-xl">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/vision">Vision</Link></li>
                    <li><button onClick={() => handleScrollNav("about")}>About</button></li>
                    <li><button onClick={() => handleScrollNav("contact")}>Contact</button></li>
                </ul>

                <div className="md:hidden flex gap-2 items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <ul className="absolute bg-light top-full left-0 w-full z-20 md:hidden flex flex-col gap-4 px-6 py-6 font-josefin text-xl shadow-lg transition-all duration-300">
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li><Link to="/vision" onClick={() => setIsOpen(false)}>Vision</Link></li>
                    <li><button onClick={() => handleScrollNav("about")}>About</button></li>
                    <li><button onClick={() => handleScrollNav("contact")}>Contact</button></li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
