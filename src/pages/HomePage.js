import React from "react";
import { motion } from "framer-motion";
import Hero from "../common/assets/Hero.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const HomePage = () => {
  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-light text-black pt-14 flex items-center justify-center font-poppins overflow-hidden">
      <div className="max-w-7xl px-6 py-12 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <motion.h3
            className="text-lg  mb-1"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
            Welcome to
          </motion.h3>

          <motion.h2
            className="text-2xl md:text-5xl font-bold font-lora text-commonColor"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span > Electrical Power</span> Management Experts
          </motion.h2>

          <motion.p
            className="mt-4 text-base md:text-lg max-w-md text-justify font-raleway mx-auto md:mx-0  text-gray-700"
            initial="hidden"
            animate="visible"
            custom={1.2}
            variants={textVariants}
          >
            We specialize in electrical power management, system integration, and industrial automation. Our expert team delivers innovative solutions for efficient energy use, reduced downtime, and reliable operations.
          </motion.p>

          <motion.div className="flex justify-center md:justify-start gap-4 mt-6 flex-wrap">
            <motion.button
              onClick={() => handleLinkClick("treatments")}
              className="bg-commonColor  text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={2.0}
              aria-label="Our Services"
            >
              Our Services
            </motion.button>

            <motion.button
              onClick={() => handleLinkClick("contact")}
              className="border border-commonColor text-commonColor px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={2.2}
              aria-label="Contact Us"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <img
            src={Hero}
            alt="Electrical Power Management and Automation"
            className="w-[500px] h-auto mx-auto"
            loading="eager"
            fetchpriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;
