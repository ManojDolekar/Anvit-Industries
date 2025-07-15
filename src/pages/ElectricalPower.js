import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Farmax from '../common/assets/oil.jpeg';
import Air from '../common/assets/Air.webp';
import Transformer from '../common/assets/Transformar.png';

// ✅ Simple fade-in (no x/y movement)
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay,
      duration: 0.7,
      ease: 'easeOut',
    },
  },
});

const Card = ({ image, title, points, delay = 0.3 }) => (
  <motion.div
    className="bg-white/60 backdrop-blur-md p-6 rounded-2xl cursor-pointer shadow-lg border border-[#e0eaff] hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center gap-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn(delay)}
  >
    <img src={image} alt={title} className="w-full md:w-1/2 h-48 object-contain rounded-xl" />
    <div>
      <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ElectricalPower = () => {
  return (
    <section className="bg-light text-[#161b22] py-16 font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn(0.1)}
        >
          <div className="flex justify-center mb-4">
            <Zap className="text-commonColor w-8 h-8" />
          </div>
          <h2 className="text-xl lg:text-3xl font-lora font-bold text-commonColor">
            Electrical Power Management
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Reliable power quality solutions for your automation needs
          </p>
        </motion.div>

        {/* Oil Cooled SVS */}
        <Card
          image={Farmax}
          title="Oil Cooled SVS"
          points={[
            '30 - 2500 KVA',
            'Microprocessor Based Control',
            'Total Protection & Control',
          ]}
          delay={0.2}
        />

        {/* Air Cooled & Transformer */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card
            image={Air}
            title="Air Cooled SVS"
            points={[
              '3 - 250 KVA',
              'Microprocessor Based Control',
              'Total Protection & Control',
            ]}
            delay={0.3}
          />

          <Card
            image={Transformer}
            title="Isolation Transformer"
            points={[
              '10 KVA - 2500 KVA',
              'High Attenuation Level',
              'Neutral Isolation',
            ]}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default ElectricalPower;
