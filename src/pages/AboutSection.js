import React from "react";
import { motion } from "framer-motion";
import about from '../common/assets/aboutImg.avif';

const fadeInSimple = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay,
            duration: 0.8,
            ease: "easeOut",
        },
    },
});

const AboutSection = () => {
    return (
        <section className="min-h-screen flex justify-center items-center bg-light py-3 font-poppins text-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.h2
                    className="text-2xl lg:text-3xl uppercase font-lora font-bold text-center text-commonColor py-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInSimple(0.2)}
                >
                    About Us
                </motion.h2>

                {/* Grid Section */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    
                    {/* Image */}
                    <motion.div
                        className="w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInSimple(0.3)}
                    >
                        <img
                            src={about}
                            alt="About Image"
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-xl"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInSimple(0.4)}
                    >
                        <h3 className="text-2xl font-semibold mb-4 font-poppins">
                            Who We Are
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base text-justify">
                            We are a passionate team of engineers, innovators, and problem-solvers dedicated to empowering industries through advanced automation and energy solutions. With over a decade of experience, we specialize in control panels, power management systems, and industrial automation.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                            Our mission is to deliver reliable, scalable, and cost-effective electrical solutions that drive performance and efficiency. We work closely with clients across multiple sectors to tailor our services to their exact needs.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
