import React from "react";
import { motion } from "framer-motion";
import about from '../common/assets/aboutImg.avif'

const fadeIn = (direction = "up", delay = 0) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : 0,
            x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                delay,
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };
};

const AboutSection = () => {
    return (
        <section className="bg-light py-20 font-poppins text-black">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-lg lg:text-3xl  font-bold text-center text-commonColor mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn("up", 0.2)}
                >
                    About Us
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Image Section */}
                    <motion.div
                        className="w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn("left", 0.3)}
                    >
                        <img
                            src={about}
                            alt="About Image"
                            className=" w-full h-[400px] object-cover"
                        />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn("right", 0.3)}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-brandBlue">
                            Who We Are
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We are a passionate team of engineers, innovators, and problem-solvers dedicated to empowering industries through advanced automation and energy solutions. With over a decade of experience, we specialize in control panels, power management systems, and industrial automation.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to deliver reliable, scalable, and cost-effective electrical solutions that drive performance and efficiency. We work closely with clients across multiple sectors to tailor our services to their exact needs.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
