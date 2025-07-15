import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, ShieldCheck } from "lucide-react";

// Simple fade-in animation
const fadeIn = (delay = 0) => ({
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

const VisionMission = () => {
  return (
    <section  className="min-h-screen bg-light flex justify-center items-center text-black py-24 font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-xl lg:text-3xl uppercase font-lora font-bold text-center text-commonColor my-3 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn(0.1)}
        >
          Our Vision, Mission  & Quality Policy
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side – Vision & Mission */}
          <div className="space-y-8">
            {/* Vision */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group hover:shadow-xl hover:scale-[1.02] transition duration-300"
              variants={fadeIn(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-8 h-8 text-commonColor" />
                <h3 className="text-xl font-semibold group-hover:underline underline-offset-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Redefining the Focus of Customers towards Power Quality & Make Process Automated.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group hover:shadow-xl hover:scale-[1.02] transition duration-300"
              variants={fadeIn(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-8 h-8 text-commonColor" />
                <h3 className="text-xl font-semibold group-hover:underline underline-offset-4">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our Mission is to deeply recognize the needs of our clients who are constantly searching for the Latest Technologies and new ways of thinking to make the best Project decisions.
              </p>
            </motion.div>
          </div>

          {/* Right Side – Quality Policy */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 group hover:shadow-xl hover:scale-[1.02] transition duration-300 flex flex-col justify-start h-full"
            variants={fadeIn(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-8 h-8 text-commonColor" />
              <h3 className="text-xl font-semibold group-hover:underline underline-offset-4">
                Quality Policy
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              We are dedicated to designing, manufacturing and marketing high quality Control Panels, Servo Stabilizers, Online UPS Systems and Isolation Transformers that serve our customers’ needs.
              <br />
              Our dedicated Quality Organization includes customer Quality Representatives in each business segment, who work closely with our customers to quickly resolve Quality-related issues by coordinating efforts and communicating with business segments, sales, and manufacturing teams.
              <br />
              Our commitment to customer satisfaction is communicated clearly and consistently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
