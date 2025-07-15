import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../common/assets/logo.jpeg'
function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full bg-light z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto p-5  flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                    <div>
                        <img src={Logo} alt="logo" className='h-12' />
                    </div>

                </div>

                <ul className="hidden md:flex gap-6 font-josefin text-xl">
                    <li><Link>Home</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Vision</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>

                <div className="md:hidden flex gap-2 items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <ul className="absolute top-full left-0 w-full z-20 md:hidden flex flex-col gap-4 px-6 py-6 font-josefin text-xl shadow-lg transition-all duration-300">
                    <li><Link>Home</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Vision</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;