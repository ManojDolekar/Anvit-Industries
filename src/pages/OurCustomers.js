import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.4,
            ease: 'easeOut',
        },
    }),
};

const customers = [
    'BELMARK INDUSTRIES',
    'PLANET HYDRAULICS',
    'VOLTON ENGINEERS',
    'WATER CREATIONS',
    'PEZ INDIA PVT LTD',
    'CHIMAHO HYDRAULICS',
    'NP HYDRAULICS',
    'RELIANCE HYDRAULICS',
    'SHUBH ENGINEER & TRADERS',
    'OMNEITY GROUP',
    'BELGAUM HYDRO POWER',
    'SNEHAL TRADING CORPORATION',
    'KUSHVA POOLS',
    'HYDRO SQUARE',
    'BHAVIKA HYDRAULICS',
    'AUDUMBER ENG. WORKS & CRANE SERVICE',
    'PRECISION ENGINEERS',
    'HINDUSTAN ENGINEERS',
    'JAL VALVE',
];

const OurCustomers = () => {
    return (
        <section id="customers" className="bg-light text-black py-16 font-poppins">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Heading */}
                <motion.h2
                    className="text-lg lg:text-3xl  font-bold text-commonColor mb-12"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    Our Valued Customers
                </motion.h2>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {customers.map((customer, index) => (
                        <motion.div
                            key={customer}
                            className="bg-white cursor-pointer rounded-xl p-4 shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index * 0.1}
                        >
                            <p className="text-sm font-medium text-gray-800 h-12 flex items-center justify-center text-center leading-tight">
                                {customer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurCustomers;
