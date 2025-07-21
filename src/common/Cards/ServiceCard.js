// import React from 'react';
// import { motion } from 'framer-motion';

// function ServiceCard({ data }) {
//   const Icon = data.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       viewport={{ once: true }}
//       className="w-full max-w-[440px] group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 "
//     >
//       {/* Image */}
//       <div className="w-full h-56 overflow-hidden">
//         <img
//           src={data.image}
//           alt={data.title}
//           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//         />
//       </div>

//       {/* Content */}
//       <div className={`p-6 bg-gradient-to-br ${data.bgGradient}`}>
//         {/* Icon + Title */}
//         <div className="flex items-center gap-4 mb-4">
//           <div className={`p-3 rounded-xl bg-gradient-to-tr ${data.gradient} text-white shadow-md`}>
//             <Icon className="w-6 h-6" />
//           </div>
//           <h2 className="text-2xl font-semibold text-gray-800 ">
//             {data.title}
//           </h2>
//         </div>

//         {/* Description */}
//         <p className="text-gray-800  text-base leading-relaxed font-manrope">
//           {data.description}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// export default ServiceCard;

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowUpRight, Play, Pause } from 'lucide-react';

function ServiceCard({ data }) {
  const Icon = data.icon;
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  const cardRef = useRef(null);
  
  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]));
  
  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
    
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };
  
  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer select-none w-full max-w-[440px]"
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
              {/* Main Card Container */}
      <motion.div
        className="relative w-full h-96 overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Image Section */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-2/3 object-cover transition-transform duration-500"
            style={{
              transform: `scale(${isHovered ? 1.05 : 1})`,
            }}
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
        
        {/* Light Background Base */}
        <div className="absolute inset-0  rounded-2xl shadow-2xl border border-gray-200/50">
          {/* Animated Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              transform: `translateX(${cursorPosition.x * 0.1}px) translateY(${cursorPosition.y * 0.1}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          
          {/* Floating Orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
            animate={{ 
              x: isHovered ? [0, 20, 0] : 0,
              y: isHovered ? [0, -10, 0] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400/15 to-cyan-400/15 rounded-full blur-lg"
            animate={{ 
              x: isHovered ? [0, -15, 0] : 0,
              y: isHovered ? [0, 15, 0] : 0,
              scale: isHovered ? [1, 1.1, 1] : 1
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* Interactive Spotlight Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle 150px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(99,102,241,0.08), transparent)`,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ opacity: 0.3 }}
        />
        
        {/* Content Container */}
        <div className="relative h-full flex flex-col p-6 z-10">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-6">
            {/* Animated Icon */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl border border-indigo-200 flex items-center justify-center shadow-lg shadow-indigo-200/50">
                <Icon className="w-8 h-8 text-white" />
                
                {/* Icon Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-2xl blur-md"
                  animate={{ opacity: isHovered ? 0.8 : 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
            
            {/* Interactive Action Button */}
            <motion.button
              className="w-10 h-10 bg-gray-100/80 backdrop-blur-sm rounded-full border border-gray-300/50 flex items-center justify-center group/btn shadow-md hover:shadow-lg"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(99,102,241,0.1)",
                borderColor: "rgba(99,102,241,0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowUpRight className="w-5 h-5 text-gray-600 transition-all duration-300 group-hover/btn:text-indigo-600 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </motion.button>
          </div>
          
          {/* Title Section - Positioned in the content area */}
          <div className="mt-auto">
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-3 leading-tight"
              animate={{ 
                y: isHovered ? -2 : 0,
                color: isHovered ? "#4f46e5" : "#1f2937"
              }}
              transition={{ duration: 0.3 }}
            >
              {data.title}
            </motion.h3>
            
            {/* Description */}
            <motion.p 
              className="text-gray-600 text-sm leading-relaxed mb-4"
              animate={{ opacity: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {data.description}
            </motion.p>
            
            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              {/* Animated Progress Bar */}
              <div className="flex-1 mr-4">
                <motion.div 
                  className="h-1.5 bg-gray-200 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600"
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "70%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>
              </div>
              
              {/* Sparkle Effect */}
              <motion.div
                animate={{ 
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.2 : 1
                }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-5 h-5 text-amber-500" />
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Ripple Effect on Click */}
        {isPressed && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(99,102,241,0.3) 0%, transparent 50%)`,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
        
        {/* Border Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2"
          style={{
            borderColor: isHovered ? "rgba(99,102,241,0.3)" : "rgba(229,231,235,0.5)",
          }}
          animate={{ 
            opacity: isHovered ? 1 : 0.6,
            borderWidth: isHovered ? "2px" : "1px"
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Floating Particles */}
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-indigo-500 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${70 + (i % 2) * 10}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [-20, -40, -60],
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            ))}
          </>
        )}
      </motion.div>
      
      {/* Card Shadow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-2xl blur-xl -z-10"
        animate={{ 
          opacity: isHovered ? 0.8 : 0.3,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Example usage with mock data
function ServiceCardExample() {
  const mockData = {
    title: "AI-Powered Automation",
    description: "Advanced machine learning algorithms integrated with IoT sensors for predictive maintenance and real-time optimization of industrial processes.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <ServiceCard data={mockData} />
      </div>
    </div>
  );
}

export default ServiceCard;