// import React from "react";
// import { motion } from "framer-motion";
// import Automation from "../common/assets/automation.jpg";
// import Power from "../common/assets/power.jpg";
// import Farmax from "../common/assets/farmax.jpg";
// import Spare from "../common/assets/spare.jpg";
// import Amc from "../common/assets/amc.jpg";
// import ControlPanel from "./ControlPanel";
// import ElectricalPower from "./ElectricalPower";

// const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (delay = 0) => ({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6, delay },
//     }),
// };

// const serviceData = [
//     {
//         title: "Control Panel & Automation",
//         description:
//             "We provide PLC, SCADA & HMI solutions integrated with SPM, Press, and Manual-to-Automatic Machines using Siemens, Mitsubishi, Allen Bradley, Delta, etc.",
//         image: Automation,
//     },
//     {
//         title: "Electrical Power Management",
//         description:
//             "Specialized in Power Conditioning Equipment: APFC Panels, Harmonic Filter Panels, Servo Stabilizers, Isolation Transformers, Online UPS Systems & K-rated Transformers.",
//         image: Power,
//     },
//     {
//         title: "Channel Partner - FARMAX",
//         description:
//             "We are the official channel partner for Servo Voltage Stabilizers, Isolation Transformers, and Online UPS in Karnataka under the brand name 'FARMAX'.",
//         image: Farmax,
//     },
//     {
//         title: "Spare Electrical Components",
//         description:
//             "We provide and integrate switchgear from Siemens, L&T, Schneider, and BCH with our automation solutions.",
//         image: Spare,
//     },
// ];

// const Services = () => {
//     return (
//         <section id="services" className="bg-light text-black py-24 font-poppins">
//             <div className="max-w-7xl mx-auto px-6">
//                 <motion.h2
//                     className="text-2xl lg:text-3xl font-lora uppercase font-extrabold text-center text-commonColor mb-4 lg:mb-12"
//                     initial="hidden"
//                     animate="visible"
//                     variants={fadeInUp}
//                 >
//                     Our Services
//                 </motion.h2>

//                 <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//                     {serviceData.map((service, index) => (
//                         <motion.div
//                             key={index}
//                             className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             variants={fadeInUp}
//                             custom={index * 0.2}
//                         >
//                             {/* Image */}
//                             <img
//                                 src={service.image}
//                                 alt={service.title}
//                                 className="w-full h-48 object-cover border-b-2"
//                             />

//                             {/* Content */}
//                             <div className="p-6">
//                                 <h3 className="text-xl font-semibold  mb-2 group-hover:underline underline-offset-4 transition duration-300">
//                                     {service.title}
//                                 </h3>
//                                 <p className="text-gray-700 leading-relaxed">
//                                     {service.description}
//                                 </p>
//                             </div>

//                             {/* Hover Underline Strip */}
//                             <div className="absolute bottom-0 left-0 w-full h-1 bg-commonColor scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//                         </motion.div>
//                     ))}

//                 </div>
//             </div>

//             <ControlPanel />
//             <ElectricalPower />
//         </section>
//     );
// };

// export default Services;

import React from "react";
import { motion } from "framer-motion";
import Automation from "../common/assets/automation.jpg";
import Power from "../common/assets/power.jpg";
import Farmax from "../common/assets/farmax.jpg";
import Spare from "../common/assets/spare.jpg";
import Amc from "../common/assets/amc.jpg";
import ControlPanel from "./ControlPanel";
import ElectricalPower from "./ElectricalPower";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom },
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
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-gray-50 to-white pt-24 font-poppins text-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-center text-indigo-700 mb-14"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Our Services
        </motion.h2>

        {/* Grid Cards */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/60 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-xl overflow-hidden transition-transform hover:scale-[1.02]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={index * 0.2}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Underline Animation */}
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-20">
        <ControlPanel />
        <ElectricalPower />
      </div>
    </section>
  );
};

export default Services;
