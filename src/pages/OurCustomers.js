import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Star, Award, Users, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.6,
            ease: [0.25, 0.25, 0, 1],
        },
    }),
};

const expandVariants = {
    hidden: { 
        opacity: 0, 
        height: 0,
        scale: 0.8,
        y: -20
    },
    visible: (i) => ({
        opacity: 1,
        height: 'auto',
        scale: 1,
        y: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.5,
            ease: [0.25, 0.25, 0, 1],
        },
    }),
    exit: {
        opacity: 0,
        height: 0,
        scale: 0.8,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const customers = [
    {
        name: 'BELMARK INDUSTRIES',
        industry: 'Manufacturing',
        logo: '🏭',
        color: 'from-emerald-500 to-teal-600'
    },
    {
        name: 'PLANET HYDRAULICS',
        industry: 'Hydraulic Systems',
        logo: '🌍',
        color: 'from-blue-500 to-cyan-600'
    },
    {
        name: 'VOLTON ENGINEERS',
        industry: 'Engineering',
        logo: '⚡',
        color: 'from-yellow-500 to-orange-600'
    },
    {
        name: 'WATER CREATIONS',
        industry: 'Water Management',
        logo: '💧',
        color: 'from-cyan-500 to-blue-600'
    },
    {
        name: 'PEZ INDIA PVT LTD',
        industry: 'Manufacturing',
        logo: '🏢',
        color: 'from-purple-500 to-indigo-600'
    },
    {
        name: 'CHIMAHO HYDRAULICS',
        industry: 'Hydraulic Systems',
        logo: '🔧',
        color: 'from-red-500 to-pink-600'
    },
    {
        name: 'NP HYDRAULICS',
        industry: 'Hydraulic Solutions',
        logo: '🛠️',
        color: 'from-green-500 to-emerald-600'
    },
    {
        name: 'RELIANCE HYDRAULICS',
        industry: 'Industrial Equipment',
        logo: '⚙️',
        color: 'from-slate-500 to-gray-600'
    },
    {
        name: 'SHUBH ENGINEER & TRADERS',
        industry: 'Engineering & Trading',
        logo: '🎯',
        color: 'from-rose-500 to-red-600'
    },
    {
        name: 'OMNEITY GROUP',
        industry: 'Technology Solutions',
        logo: '🚀',
        color: 'from-violet-500 to-purple-600'
    },
    {
        name: 'BELGAUM HYDRO POWER',
        industry: 'Power Generation',
        logo: '⚡',
        color: 'from-amber-500 to-yellow-600'
    },
    {
        name: 'SNEHAL TRADING CORPORATION',
        industry: 'Trading & Commerce',
        logo: '📊',
        color: 'from-teal-500 to-cyan-600'
    },
    {
        name: 'KUSHVA POOLS',
        industry: 'Pool Solutions',
        logo: '🏊',
        color: 'from-sky-500 to-blue-600'
    },
    {
        name: 'HYDRO SQUARE',
        industry: 'Hydraulic Equipment',
        logo: '🔷',
        color: 'from-indigo-500 to-blue-600'
    },
    {
        name: 'BHAVIKA HYDRAULICS',
        industry: 'Hydraulic Systems',
        logo: '🏗️',
        color: 'from-orange-500 to-red-600'
    },
    {
        name: 'AUDUMBER ENG. WORKS & CRANE SERVICE',
        industry: 'Engineering & Crane Services',
        logo: '🏗️',
        color: 'from-lime-500 to-green-600'
    },
    {
        name: 'PRECISION ENGINEERS',
        industry: 'Precision Engineering',
        logo: '🎯',
        color: 'from-pink-500 to-rose-600'
    },
    {
        name: 'HINDUSTAN ENGINEERS',
        industry: 'Engineering Solutions',
        logo: '🔨',
        color: 'from-emerald-500 to-green-600'
    },
    {
        name: 'JAL VALVE',
        industry: 'Valve Manufacturing',
        logo: '🔄',
        color: 'from-cyan-500 to-teal-600'
    },
];

const OurCustomers = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleCustomers = showAll ? customers : customers.slice(0, 5);
    const hiddenCustomers = customers.slice(5);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <section id="customers" className="relative min-h-screen bg-gradient-to-br from-purple-50 via-red-50 to-pink-50 py-20 font-poppins overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div 
                    className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-3xl"
                    animate={{
                        y: [-15, 15, -15],
                        x: [-10, 10, -10],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-rose-200/20 rounded-full blur-3xl"
                    animate={{
                        y: [20, -20, 20],
                        x: [15, -15, 15],
                        scale: [1.1, 0.9, 1.1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-200/15 to-amber-200/15 rounded-full blur-3xl"
                    animate={{
                        rotate: [0, 360],
                        scale: [0.8, 1.3, 0.8],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                        }}
                        animate={{
                            y: [-25, 25, -25],
                            rotate: [0, 360],
                            opacity: [0.1, 0.4, 0.1],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 6,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }}
                    >
                        {i % 4 === 0 ? <Building2 className="w-6 h-6 text-orange-400/60" /> :
                         i % 4 === 1 ? <Star className="w-5 h-5 text-red-400/60" /> :
                         i % 4 === 2 ? <Award className="w-5 h-5 text-pink-400/60" /> :
                         <Users className="w-6 h-6 text-rose-400/60" />}
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={scaleIn}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border-2 border-orange-200/50 mb-6 shadow-xl"
                        whileHover={{ scale: 1.05, y: -3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Sparkles className="w-5 h-5 text-orange-600" />
                        <span className="text-orange-700 font-semibold">Trusted Partnerships</span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 bg-clip-text text-transparent mb-4"
                        variants={fadeInUp}
                    >
                        Our Valued Customers
                    </motion.h2>
                    
                    <motion.p
                        className="text-xl text-slate-700 max-w-3xl mx-auto font-medium"
                        variants={fadeInUp}
                    >
                        Building lasting relationships with industry leaders who trust our expertise
                    </motion.p>
                </motion.div>

                {/* Initially Visible Customers */}
                <motion.div 
                    className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {visibleCustomers.slice(0, 5).map((customer, index) => (
                        <motion.div
                            key={customer.name}
                            className="group relative bg-white/80 backdrop-blur-sm cursor-pointer rounded-3xl p-6 shadow-xl border-2 border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-400"
                            variants={fadeInUp}
                            custom={index * 0.1}
                            whileHover={{ 
                                y: -12,
                                boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25)"
                            }}
                        >
                            {/* Logo Area */}
                            <div className="flex justify-center mb-4">
                                <motion.div 
                                    className={`w-18 h-18 bg-gradient-to-br ${customer.color} rounded-3xl flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 transition-transform`}
                                    whileHover={{ rotate: 15, scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                >
                                    {customer.logo}
                                </motion.div>
                            </div>

                            {/* Company Name */}
                            <h3 className="text-sm font-bold text-slate-800 text-center mb-3 leading-tight min-h-[3rem] flex items-center justify-center">
                                {customer.name}
                            </h3>

                            {/* Industry Tag */}
                            <div className="text-center">
                                <span className="inline-block px-3 py-2 text-xs font-semibold bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full border-2 border-orange-200/50">
                                    {customer.industry}
                                </span>
                            </div>

                            {/* Hover Glow Effect */}
                            <motion.div
                                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${customer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-400`}
                                initial={false}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Expandable Additional Customers */}
                <AnimatePresence>
                    {showAll && (
                        <motion.div 
                            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8 overflow-hidden"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            {hiddenCustomers.map((customer, index) => (
                                <motion.div
                                    key={customer.name}
                                    className="group relative bg-white/80 backdrop-blur-sm cursor-pointer rounded-3xl p-6 shadow-xl border-2 border-white/60 hover:shadow-2xl hover:scale-105 transition-all duration-400"
                                    variants={expandVariants}
                                    custom={index * 0.05}
                                    whileHover={{ 
                                        y: -12,
                                        boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25)"
                                    }}
                                >
                                    {/* Logo Area */}
                                    <div className="flex justify-center mb-4">
                                        <motion.div 
                                            className={`w-18 h-18 bg-gradient-to-br ${customer.color} rounded-3xl flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 transition-transform`}
                                            whileHover={{ rotate: 15, scale: 1.2 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                                        >
                                            {customer.logo}
                                        </motion.div>
                                    </div>

                                    {/* Company Name */}
                                    <h3 className="text-sm font-bold text-slate-800 text-center mb-3 leading-tight min-h-[3rem] flex items-center justify-center">
                                        {customer.name}
                                    </h3>

                                    {/* Industry Tag */}
                                    <div className="text-center">
                                        <span className="inline-block px-3 py-2 text-xs font-semibold bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full border-2 border-orange-200/50">
                                            {customer.industry}
                                        </span>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${customer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-400`}
                                        initial={false}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Toggle Button */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <motion.button
                        onClick={toggleShowAll}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-full text-white font-bold text-lg shadow-2xl shadow-orange-200/50 overflow-hidden"
                        whileHover={{ 
                            scale: 1.05,
                            y: -3,
                            boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Animated background */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 opacity-0 group-hover:opacity-100"
                            initial={false}
                            transition={{ duration: 0.3 }}
                        />
                        
                        <span className="relative z-10">
                            {showAll ? 'Show Less' : `Show All ${customers.length} Customers`}
                        </span>
                        <motion.div
                            className="relative z-10"
                            animate={{ rotate: showAll ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </motion.div>
                        
                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity, 
                                repeatDelay: 3 
                            }}
                        />
                    </motion.button>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <motion.div 
                        className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/50 shadow-xl text-center"
                        whileHover={{ scale: 1.05, y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">19+</div>
                        <div className="text-slate-700 font-semibold">Trusted Partners</div>
                    </motion.div>
                    
                    <motion.div 
                        className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/50 shadow-xl text-center"
                        whileHover={{ scale: 1.05, y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2">10+</div>
                        <div className="text-slate-700 font-semibold">Years Experience</div>
                    </motion.div>
                    
                    <motion.div 
                        className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/50 shadow-xl text-center"
                        whileHover={{ scale: 1.05, y: -8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">100%</div>
                        <div className="text-slate-700 font-semibold">Client Satisfaction</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurCustomers;