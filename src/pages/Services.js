import React from "react";
import { motion } from "framer-motion";
import Automation from "../common/assets/automation.jpg";
import Power from "../common/assets/power.jpg";
import Farmax from "../common/assets/farmax.jpg";
import Spare from "../common/assets/spare.jpg";
import Amc from "../common/assets/amc.jpg";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
    }),
};

const serviceData = [
    {
        title: "Control Panel & Automation",
        description:
            "We provide PLC, SCADA & HMI solutions integrated with SPM, Press, and Manual-to-Automatic Machines using Siemens, Mitsubishi, Allen Bradley, Delta, etc.",
        image: Automation,
    },
    {
        title: "Electrical Power Management",
        description:
            "Specialized in Power Conditioning Equipment: APFC Panels, Harmonic Filter Panels, Servo Stabilizers, Isolation Transformers, Online UPS Systems & K-rated Transformers.",
        image: Power,
    },
    {
        title: "Channel Partner - FARMAX",
        description:
            "We are the official channel partner for Servo Voltage Stabilizers, Isolation Transformers, and Online UPS in Karnataka under the brand name 'FARMAX'.",
        image: Farmax,
    },
    {
        title: "Spare Electrical Components",
        description:
            "We provide and integrate switchgear from Siemens, L&T, Schneider, and BCH with our automation solutions.",
        image: Spare,
    },
    {
        title: "Annual Maintenance Contract (AMC)",
        description:
            "Comprehensive AMC for Servo Voltage Stabilizers and Online UPS of any make, ensuring consistent performance and minimal downtime.",
        image: Amc,
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-light text-black py-16 font-poppins">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-lg lg:text-3xl  font-bold text-center text-commonColor mb-12"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    Our Services
                </motion.h2>

                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {serviceData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            custom={index * 0.2}
                        >
                            {/* Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold  mb-2 group-hover:underline underline-offset-4 transition duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Hover Underline Strip */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-commonColor scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;
