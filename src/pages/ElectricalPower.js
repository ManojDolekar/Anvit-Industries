// import React from 'react';
// import { motion } from 'framer-motion';
// import { Zap } from 'lucide-react';
// import Farmax from '../common/assets/oil.jpeg';
// import Air from '../common/assets/Air.webp';
// import Transformer from '../common/assets/Transformar.png';

// // ✅ Simple fade-in (no x/y movement)
// const fadeIn = (delay = 0) => ({
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay,
//       duration: 0.7,
//       ease: 'easeOut',
//     },
//   },
// });

// const Card = ({ image, title, points, delay = 0.3 }) => (
//   <motion.div
//     className="bg-white/60 backdrop-blur-md p-6 rounded-2xl cursor-pointer shadow-lg border border-[#e0eaff] hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center gap-6"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={fadeIn(delay)}
//   >
//     <img src={image} alt={title} className="w-full md:w-1/2 h-48 object-contain rounded-xl" />
//     <div>
//       <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
//       <ul className="list-disc list-inside text-gray-700 space-y-2">
//         {points.map((point, index) => (
//           <li key={index}>{point}</li>
//         ))}
//       </ul>
//     </div>
//   </motion.div>
// );

// const ElectricalPower = () => {
//   return (
//     <section className="bg-light text-[#161b22] py-16 font-poppins">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           className="text-center mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn(0.1)}
//         >
//           <div className="flex justify-center mb-4">
//             <Zap className="text-commonColor w-8 h-8" />
//           </div>
//           <h2 className="text-xl lg:text-3xl font-lora font-bold text-commonColor">
//             Electrical Power Management
//           </h2>
//           <p className="text-gray-600 mt-2 text-sm">
//             Reliable power quality solutions for your automation needs
//           </p>
//         </motion.div>

//         {/* Oil Cooled SVS */}
//         <Card
//           image={Farmax}
//           title="Oil Cooled SVS"
//           points={[
//             '30 - 2500 KVA',
//             'Microprocessor Based Control',
//             'Total Protection & Control',
//           ]}
//           delay={0.2}
//         />

//         {/* Air Cooled & Transformer */}
//         <div className="grid md:grid-cols-2 gap-8 mt-12">
//           <Card
//             image={Air}
//             title="Air Cooled SVS"
//             points={[
//               '3 - 250 KVA',
//               'Microprocessor Based Control',
//               'Total Protection & Control',
//             ]}
//             delay={0.3}
//           />

//           <Card
//             image={Transformer}
//             title="Isolation Transformer"
//             points={[
//               '10 KVA - 2500 KVA',
//               'High Attenuation Level',
//               'Neutral Isolation',
//             ]}
//             delay={0.4}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ElectricalPower;


import React, { useState, useEffect } from 'react';
import { Zap, Bolt, Crown, Sparkles, Shield, Settings, Power } from 'lucide-react';

const ElectricalPower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const productData = [
    {
      id: 'oil-cooled',
      title: 'Oil Cooled SVS',
      subtitle: 'Premium Power Solution',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-purple-600 via-blue-600 to-indigo-700',
      bgGradient: 'from-purple-50 via-blue-50 to-indigo-50',
      iconColor: 'text-purple-600',
      features: [
        { icon: Power, text: '30 - 2500 KVA', highlight: 'High Capacity' },
        { icon: Settings, text: 'Microprocessor Based Control', highlight: 'Smart Control' },
        { icon: Shield, text: 'Total Protection & Control', highlight: 'Complete Safety' },
      ],
      delay: 0.2,
      isLarge: true
    },
    {
      id: 'air-cooled',
      title: 'Air Cooled SVS',
      subtitle: 'Efficient Cooling System',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-blue-600 via-cyan-600 to-teal-600',
      bgGradient: 'from-blue-50 via-cyan-50 to-teal-50',
      iconColor: 'text-blue-600',
      features: [
        { icon: Power, text: '3 - 250 KVA', highlight: 'Compact Range' },
        { icon: Settings, text: 'Microprocessor Based Control', highlight: 'Precision Control' },
        { icon: Shield, text: 'Total Protection & Control', highlight: 'Comprehensive Safety' },
      ],
      delay: 0.3
    },
    {
      id: 'transformer',
      title: 'Isolation Transformer',
      subtitle: 'Advanced Isolation Technology',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      bgGradient: 'from-indigo-50 via-purple-50 to-pink-50',
      iconColor: 'text-indigo-600',
      features: [
        { icon: Power, text: '10 KVA - 2500 KVA', highlight: 'Wide Range' },
        { icon: Settings, text: 'High Attenuation Level', highlight: 'Superior Quality' },
        { icon: Shield, text: 'Neutral Isolation', highlight: 'Enhanced Protection' },
      ],
      delay: 0.4
    }
  ];

  const Card = ({ product, isLarge = false }) => (
    <div
      className={`group relative transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${isLarge ? 'col-span-full' : ''}`}
      style={{ transitionDelay: `${product.delay * 1000}ms` }}
      onMouseEnter={() => setActiveCard(product.id)}
      onMouseLeave={() => setActiveCard(null)}
    >
      {/* Premium Card Container */}
      <div className={`relative bg-gradient-to-br ${product.bgGradient} rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${isLarge ? 'p-8' : 'p-6'} h-full`}>
        {/* Animated Border */}
        <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5`}>
          <div className={`w-full h-full bg-gradient-to-br ${product.bgGradient} rounded-3xl`}></div>
        </div>
        
        {/* Content */}
        <div className={`relative z-10 ${isLarge ? 'flex flex-col lg:flex-row gap-8 items-center' : 'flex flex-col'}`}>
          {/* Image Section */}
          <div className={`relative ${isLarge ? 'lg:w-1/2' : 'w-full'} mb-6 ${isLarge ? 'lg:mb-0' : ''}`}>
            <div className="relative overflow-hidden rounded-2xl group-hover:scale-105 transition-transform duration-500">
              <img 
                src={product.image} 
                alt={product.title}
                className={`w-full ${isLarge ? 'h-64' : 'h-48'} object-cover`}
              />
              {/* Image Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              {/* Floating Power Icon */}
              <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <Zap className={`w-5 h-5 ${product.iconColor} animate-pulse`} />
              </div>
            </div>
            
            
          </div>
          
          {/* Content Section */}
          <div className={`${isLarge ? 'lg:w-1/2' : 'w-full'} space-y-6`}>
            {/* Title Section */}
            <div className="space-y-2">
              <h3 className={`${isLarge ? 'text-3xl' : 'text-2xl'} font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                {product.title}
              </h3>
              <p className="text-slate-600 font-medium">{product.subtitle}</p>
            </div>
            
            {/* Features List */}
            <div className="space-y-4">
              {product.features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 group/feature"
                  >
                    <div className={`p-2 bg-gradient-to-r ${product.gradient} rounded-lg shadow-lg group-hover/feature:scale-110 transition-transform duration-300`}>
                      <FeatureIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800">{feature.text}</p>
                      <p className="text-sm text-slate-600">{feature.highlight}</p>
                    </div>
                    
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>

        {/* Floating Sparkles on Hover */}
        {activeCard === product.id && (
          <>
            <div className="absolute top-6 right-6 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-8 left-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-12 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
            {isLarge && (
              <>
                <div className="absolute bottom-12 right-16 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-300"></div>
                <div className="absolute top-16 left-16 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-500"></div>
              </>
            )}
          </>
        )}

        {/* Royal Corner Decorations */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-300/30 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-300/30 rounded-br-3xl"></div>
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Royal Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-100/10 to-blue-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Royal Elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Crown className="w-8 h-8 text-purple-400/60" />
      </div>
      <div className="absolute top-20 right-20 animate-pulse">
        <Bolt className="w-6 h-6 text-blue-400/60" />
      </div>
      <div className="absolute bottom-20 left-20 animate-spin" style={{animationDuration: '8s'}}>
        <Zap className="w-6 h-6 text-indigo-400/60" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Majestic Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative">
            <div className="absolute -top-6 -left-6">
              <Zap className="w-12 h-12 text-purple-500/30 animate-pulse" />
            </div>
            <div className="absolute -top-4 -right-4">
              <Crown className="w-8 h-8 text-blue-500/30 animate-pulse delay-500" />
            </div>
            
            <h2 className="text-4xl md:text-5xl p-2 font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 bg-clip-text text-transparent mb-4">
              Electrical Power Management
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mt-8 leading-relaxed font-medium">
            Reliable power quality solutions engineered for excellence and automation needs
          </p>
          
          {/* Stats Bar */}
          <div className={`flex justify-center mt-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex gap-8 bg-white/60 backdrop-blur-md px-8 py-4 rounded-2xl shadow-lg border border-white/50">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">2500</div>
                <div className="text-sm text-slate-600">Max KVA</div>
              </div>
              <div className="w-px bg-slate-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-slate-600">Protection</div>
              </div>
              <div className="w-px bg-slate-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="space-y-12">
          {/* Oil Cooled SVS - Large Card */}
          <Card product={productData[0]} isLarge={true} />
          
          {/* Air Cooled & Transformer - Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card product={productData[1]} />
            <Card product={productData[2]} />
          </div>
        </div>

        {/* Bottom Royal Decoration */}
        <div className={`flex justify-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse delay-200"></div>
            </div>
            <Zap className="w-8 h-8 text-red-500/60 animate-pulse" />
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse delay-400"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalPower;