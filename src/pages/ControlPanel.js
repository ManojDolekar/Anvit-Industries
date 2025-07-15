import React from 'react';
import { motion } from 'framer-motion';
import Image1 from '../common/assets/Images/Image1.jpg';
import Image2 from '../common/assets/Images/Image2.jpg';
import Image3 from '../common/assets/Images/Image3.jpg';
import Image4 from '../common/assets/Images/Image4.jpg';
import Image5 from '../common/assets/Images/Image5.jpg';

// Animation Variants
const imageVariants = (direction) => ({
    hidden: {
        opacity: 0,
        x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
        y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
});

const listVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
            delay: 0.4,
        },
    },
};

const ControlPanel = () => {
    return (
        <section className="bg-light text-black py-16 font-poppins">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-lg lg:text-3xl  font-bold text-commonColor text-center mb-12">
                    CONTROL PANEL & AUTOMATION PANEL
                </h2>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Image Grid */}
                    <div className="flex-1 w-full grid grid-cols-3 gap-2">
                        {/* Row 1 */}
                        <motion.div
                            className="col-span-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants('left')}
                        >
                            <img src={Image1} alt="Image1" className="w-full h-60 object-cover" />
                        </motion.div>

                        <motion.div
                            className="col-span-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants('right')}
                        >
                            <img src={Image2} alt="Image2" className="w-full h-60 object-cover" />
                        </motion.div>

                        {/* Row 2 */}
                        <motion.img
                            src={Image3}
                            alt="Image3"
                            className="w-full h-48 object-cover"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants('up')}
                        />
                        <motion.img
                            src={Image4}
                            alt="Image4"
                            className="w-full h-48 object-cover"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants('down')}
                        />
                        <motion.img
                            src={Image5}
                            alt="Image5"
                            className="w-full h-48 object-cover"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={imageVariants('up')}
                        />
                    </div>

                 
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[400px] bg-gradient-to-br from-[#d6f2ff] to-[#f0f9ff] border border-blue-200 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
                    >
                        <h3 className="text-xl font-semibold text-commonColor mb-4 underline underline-offset-4">
                            We Offer:
                        </h3>
                        <ul className="list-disc list-inside text-base text-gray-800 space-y-3 font-medium leading-relaxed">
                            <li>PLC & HMI Control panel</li>
                            <li>Variable frequency drive panel</li>
                            <li>Motor control panel</li>
                            <li>Auto main failure panel</li>
                            <li>Power distribution panel</li>
                            <li>Air circuit breaker panel</li>
                            <li>Customized panel</li>
                            <li>Lighting distribution panel</li>
                            <li>Junction box for general purpose</li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ControlPanel;
