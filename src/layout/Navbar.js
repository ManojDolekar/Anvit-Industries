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
        <nav className="fixed top-0 left-0 px-4 bg-gradient-to-tr from-graybg to-secondarybg mx-auto w-full  z-50 transition-all duration-300  ">
            <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                    {/* <img src={Logo} alt="logo" className='h-12' /> */}
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 14C35.97 14 38.94 14 42 14C42 23.57 42 33.14 42 43C39.03 43 36.06 43 33 43C33 33.43 33 23.86 33 14Z" fill="#FD0000"/>
                    <path d="M33 2C35.97 2 38.94 2 42 2C42 4.838 42 7.676 42 10.6C39.03 10.6 36.06 10.6 33 10.6C33 7.762 33 4.924 33 2Z" fill="#FD0000"/>
                    <path d="M18.7247 2C22.7755 2 26.8264 2 31 2C31 4.83005 31 7.66011 31 10.5759C28.1683 10.5953 28.1683 10.5953 25.2795 10.6151C25.0828 11.1966 24.8862 11.7781 24.6836 12.3773C24.4129 13.158 24.4129 13.158 24.3366 13.3775C24.1443 13.9306 23.9569 14.4853 23.7699 15.0401C23.5498 15.6928 23.3277 16.3448 23.1011 16.9953C22.8811 17.6275 22.6668 18.2615 22.453 18.8958C22.1928 19.6671 21.9286 20.437 21.6605 21.2057C21.608 21.3562 21.5566 21.507 21.5055 21.6581C24.6387 21.671 27.7719 21.6839 31 21.6972C31 24.8762 31 28.0552 31 31.3305C26.7918 31.3434 22.5836 31.3563 18.2479 31.3696C17.9333 32.3001 17.6187 33.2305 17.2945 34.1891C17.0015 35.0359 17.0015 35.0359 16.8734 35.4041C16.7097 35.8752 16.5503 36.3477 16.3908 36.8201C16.3758 36.8646 16.3608 36.909 16.3453 36.9547C16.2379 37.2729 16.1306 37.5911 16.0233 37.9093C15.6046 39.1511 15.1832 40.3918 14.7521 41.6294C14.5947 42.0817 14.4374 42.534 14.2753 43C10.2245 43 6.1736 43 2 43C2.13407 42.6035 2.13407 42.6035 2.21389 42.4081C2.23188 42.3639 2.24987 42.3197 2.26841 42.2742C2.28784 42.2268 2.30726 42.1794 2.32727 42.1305C2.3483 42.079 2.36933 42.0274 2.39034 41.9759C2.43535 41.8655 2.48043 41.7551 2.52556 41.6448C2.596 41.4725 2.66629 41.3002 2.73654 41.1279C2.87684 40.7839 3.01732 40.4399 3.15782 40.0959C3.22914 39.9213 3.30046 39.7466 3.37177 39.572C3.46095 39.3536 3.55014 39.1352 3.63933 38.9168C3.8398 38.4259 4.04024 37.935 4.24064 37.4441C4.26796 37.3772 4.29529 37.3102 4.32261 37.2433C4.36343 37.1433 4.40425 37.0433 4.44506 36.9433C4.92049 35.7787 5.39604 34.6142 5.87169 33.4496C6.28115 32.4471 6.69053 31.4446 7.09983 30.442C7.12019 30.3922 7.12019 30.3922 7.14097 30.3413C7.34741 29.8356 7.55384 29.3299 7.76027 28.8243C7.98042 28.285 8.20057 27.7457 8.42072 27.2065C8.4343 27.1732 8.44788 27.1399 8.46188 27.1057C8.88286 26.0745 9.30395 25.0433 9.72511 24.0122C10.1346 23.0097 10.544 22.0072 10.9533 21.0046C10.9668 20.9713 10.9804 20.938 10.9944 20.9037C11.1182 20.6005 11.242 20.2972 11.3659 19.9939C11.5578 19.5237 11.7498 19.0535 11.9417 18.5833C11.9553 18.5502 11.9688 18.5171 11.9827 18.483C12.0918 18.2157 12.201 17.9484 12.3101 17.6811C12.4056 17.4471 12.5011 17.2132 12.5966 16.9793C12.6101 16.9462 12.6236 16.9131 12.6375 16.879C12.8297 16.4084 13.0218 15.9379 13.2139 15.4673C13.7723 14.0994 14.3308 12.7315 14.8895 11.3637C15.2716 10.4282 15.6536 9.49275 16.0355 8.55724C16.1037 8.39023 16.1719 8.22322 16.2401 8.05621C16.5076 7.40092 16.7751 6.74562 17.0425 6.09028C17.1453 5.83848 17.248 5.58669 17.3508 5.3349C17.4202 5.16496 17.4895 4.99501 17.5589 4.82505C17.8327 4.15376 18.107 3.48261 18.3825 2.81199C18.4091 2.74725 18.4357 2.6825 18.4623 2.61776C18.4989 2.5286 18.5355 2.43947 18.5722 2.35034C18.5885 2.31053 18.5885 2.31053 18.6052 2.26993C18.6804 2.0873 18.6804 2.0873 18.7247 2Z" fill="#0000FD"/>
                    </svg>
                    <span className=' font-bold text-2xl bg-gradient-to-tr from-blue-600 via-white to-red-600 bg-clip-text text-transparent'>Anvit Industries </span> 
                </div>

                <ul className="hidden md:flex gap-6 font-josefin bg-gradient-to-tr from-acent to-successgreen bg-clip-text text-transparent text-xl">
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
