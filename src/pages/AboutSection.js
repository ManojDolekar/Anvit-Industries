// import React from "react";
// import { motion } from "framer-motion";

// const fadeInStagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const AboutSection = () => {
//   return (
//     <section className="min-h-screen flex justify-center items-center bg-gradient-to-br from-white via-gray-100 to-gray-200 py-10 font-poppins text-black">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Heading */}
//         <motion.h2
//           className="text-3xl lg:text-4xl uppercase font-lora font-bold text-center text-commonColor mb-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeInUp}
//         >
//           About Us
//         </motion.h2>

//         {/* Animated Text Content */}
//         <motion.div
//           className="bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeInStagger}
//         >
//           <motion.h3
//             className="text-2xl font-semibold mb-6 text-gray-800"
//             variants={fadeInUp}
//           >
//             Who We Are
//           </motion.h3>

//           <motion.p
//             className="text-gray-700 leading-relaxed text-base mb-4 text-justify"
//             variants={fadeInUp}
//           >
//             We are a passionate team of engineers, innovators, and problem-solvers dedicated to empowering industries through advanced automation and energy solutions. With over a decade of experience, we specialize in control panels, power management systems, and industrial automation.
//           </motion.p>

//           <motion.p
//             className="text-gray-700 leading-relaxed text-base text-justify"
//             variants={fadeInUp}
//           >
//             Our mission is to deliver reliable, scalable, and cost-effective electrical solutions that drive performance and efficiency. We work closely with clients across multiple sectors to tailor our services to their exact needs.
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen py-20 px-6  flex items-center justify-center font-poppins">
      {/* Decorative floating icon */}
      <div className="absolute top-16 left-4 sm:top-16 sm:left-4 md:top-20 md:left-20 lg:top-36 lg:left-80 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl shadow-indigo-100 border border-indigo-200 animate-bounce z-10">
        <Lightbulb className="text-successgreen w-7 h-7" />
      </div>

      {/* Main Container */}
      <motion.div
        className="font-poppins max-w-5xl w-full bg-transparent backdrop-blur-lg border border-white/30 rounded-3xl hover:shadow-[0_20px_60px_-10px_rgba(203,213,225,0.15)] p-10 md:p-16 delay-100 duration-200 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold bg-gradient-to-tr from-acent to-successgreen bg-clip-text text-transparent text-center mb-6"
          variants={fadeIn}
        >
          ABOUT US
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-white/90 text-center mb-8 leading-relaxed"
          variants={fadeIn}
        >
          Building smart industrial solutions with precision, passion, and purpose.
        </motion.p>

        <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
          <motion.div variants={fadeIn}>
            <h3 className="text-[1.4em] text-xl font-semibold text-white mb-3">Who We Are</h3>
            <p className="text-white/80 text-justify leading-relaxed">
              We are a passionate team of engineers, innovators, and problem-solvers
              who specialize in industrial automation, control panels, and power management.
              With over a decade of experience, we craft scalable, intelligent, and reliable
              systems that keep businesses moving forward.
            </p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className=" text-[1.4em] font-semibold text-white mb-3">Our Mission</h3>
            <p className="text-white/80 text-justify leading-relaxed">
              Our mission is to revolutionize the way industries interact with technology.
              We deliver custom electrical solutions designed to boost efficiency,
              reduce energy consumption, and simplify complex operations across diverse sectors.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="text-center mt-10" variants={fadeIn}>
          <Link to='/services'>
          <div className="bg-gradient-to-tr from-acent to-successgreen bg-clip-border border-transparent border-2 rounded-full inline-block shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-1  hover:shadow-successgreen/20">
          <button className=" bg-secondarybg text-white px-6 py-3 rounded-full text-sm md:text-base ">
            Explore Our Services
          </button>
          </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
