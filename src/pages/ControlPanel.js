    import React from 'react';
    import { motion } from 'framer-motion';
    import { Zap } from 'lucide-react';

    const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.8, ease: 'easeOut' },
    },
    });

    const ControlPanel = () => {
    const images = [
    {
        src: 'https://images.unsplash.com/photo-1579719558505-ad4a5fee0847?q=80&w=1248&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Control Panel System',
    },
    {
        src: 'https://images.unsplash.com/photo-1560700105-7a3450fd2531?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Automation Panel',
    },
    {
        src: 'https://plus.unsplash.com/premium_photo-1664299357933-5bee42c8d728?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'PLC Control',
    },
    {
        src: 'https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Motor Control Panel',
    },
    {
        src: 'https://images.unsplash.com/photo-1570086625762-7c1396540ac5?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Distribution Panel',
    },
];

    const features = [
        { title: 'PLC & HMI Control Panel' },
        { title: 'Variable Frequency Drive Panel' },
        { title: 'Motor Control Panel' },
        { title: 'Auto Main Failure Panel' },
        { title: 'Power Distribution Panel' },
        { title: 'Air Circuit Breaker Panel' },
        { title: 'Customized Panel Solutions' },
        { title: 'Lighting Distribution Panel' },
        { title: 'Junction Box for General Purpose' },
    ];

    return (
        <section className="bg-gradient-to-br from-white via-slate-50 to-gray-100 min-h-screen py-20 font-poppins">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn(0.1)}
            >
            <div className="inline-block px-4 py-2 bg-orange-50 text-pink-600 text-sm font-medium rounded-full mb-4">
                Industrial Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
                Control Panel & <br />
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 text-transparent bg-clip-text">
                Automation Systems
                </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Precision-engineered control panels and automation solutions designed for industrial excellence and operational efficiency.
            </p>
            </motion.div>

            <div className="flex flex-col xl:flex-row gap-12 items-start">
            {/* Image Grid */}
            <motion.div
                className="flex-1 w-full grid grid-cols-3 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn(0.2)}
            >
                {/* First Row */}
                <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-2 group">
                <img
                    src={images[0].src}
                    alt={images[0].alt}
                    className="w-full h-72 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-2 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="col-span-1 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-2 group">
                <img
                    src={images[1].src}
                    alt={images[1].alt}
                    className="w-full h-72 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-2 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Bottom Images */}
                {images.slice(2).map((image, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-2 group"
                >
                    <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-2 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                ))}
            </motion.div>

            {/* Feature List */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn(0.6)}
                className="w-full xl:w-[450px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                    <Zap className="text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Solutions</h3>
                </div>
                <p className="text-gray-600">Comprehensive industrial control systems</p>
                </div>
                <div className="px-8 py-4 space-y-3">
                {features.map((feature, index) => (
                    <motion.div
                    key={index}
                    className="group flex items-center px-4 py-2 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-200"
                    variants={fadeIn(0.7 + index * 0.1)}
                    >
                    <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                        </h4>
                    </div>
                    </motion.div>
                ))}
                </div>
            </motion.div>
            </div>
        </div>
        </section>
    );
    };

    export default ControlPanel;
