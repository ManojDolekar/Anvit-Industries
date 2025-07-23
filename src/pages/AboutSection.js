import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, Sparkles } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-40"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 360],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full" />
          ) : i % 3 === 1 ? (
            <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rotate-45" />
          ) : (
            <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-sm rotate-12" />
          )}
        </motion.div>
      ))}

      {/* Floating Icon */}
      <motion.div 
        className="absolute top-20 right-20 z-20"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-2xl flex items-center justify-center shadow-2xl shadow-indigo-200">
          <Lightbulb className="text-white w-8 h-8" />
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-200/50 mb-6 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-orange-700 text-sm font-medium">About Our Company</span>
            </motion.div>

            <motion.h2
              className="text-5xl capitalize md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-700 bg-clip-text text-transparent mb-6"
              variants={scaleIn}
            >
              About us  
            </motion.h2>

            <motion.p
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Building smart industrial solutions with precision, passion, and purpose.
            </motion.p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <motion.div 
              className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-12 shadow-2xl shadow-indigo-100/50"
              whileHover={{ 
                y: -8,
                boxShadow: "0 32px 64px -12px rgba(99, 102, 241, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-12">
                {/* Who We Are */}
                <motion.div variants={fadeInUp}>
                  <motion.div
                    className="flex items-center mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3"></div>
                    <h3 className="text-2xl font-bold text-slate-800">Who We Are</h3>
                  </motion.div>
                  <motion.p
                    className="text-slate-600 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    We are a passionate team of engineers, innovators, and problem-solvers
                    who specialize in industrial automation, control panels, and power management.
                    With over a decade of experience, we craft scalable, intelligent, and reliable
                    systems that keep businesses moving forward.
                  </motion.p>
                </motion.div>

                {/* Our Mission */}
                <motion.div variants={fadeInUp}>
                  <motion.div
                    className="flex items-center mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3"></div>
                    <h3 className="text-2xl font-bold text-slate-800">Our Mission</h3>
                  </motion.div>
                  <motion.p
                    className="text-slate-600 leading-relaxed text-justify"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Our mission is to revolutionize the way industries interact with technology.
                    We deliver custom electrical solutions designed to boost efficiency,
                    reduce energy consumption, and simplify complex operations across diverse sectors.
                  </motion.p>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div 
                className="text-center mt-12"
                variants={fadeInUp}
              >
                <motion.button
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 rounded-full text-white font-semibold text-lg shadow-xl shadow-indigo-200/50 overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10">Explore Our Services</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatDelay: 2 
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;