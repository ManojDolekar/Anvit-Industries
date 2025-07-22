import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

function ContactUs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const contactItems = [
    {
      icon: <Mail size={28} className="text-white" />,
      title: 'Email',
      subtitle: 'Get in touch with us',
      value: 'anvitindustries22@gmail.com',
      link: 'mailto:anvitindustries22@gmail.com',
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      hoverGradient: 'from-blue-600 via-blue-700 to-indigo-700',
      bgAccent: 'bg-blue-50',
      borderAccent: 'border-blue-200',
    },
    {
      icon: <MapPin size={28} className="text-white" />,
      title: 'Address',
      subtitle: 'Visit our office',
      value: `Anvit Industries Pvt. Ltd.\n123 Industrial Estate,\nPune, Maharashtra – 411001`,
      link: null,
      gradient: 'from-emerald-500 via-green-600 to-teal-600',
      hoverGradient: 'from-emerald-600 via-green-700 to-teal-700',
      bgAccent: 'bg-emerald-50',
      borderAccent: 'border-emerald-200',
    },
    // {
    //   icon: <Phone size={28} className="text-white" />,
    //   title: 'Phone',
    //   subtitle: 'Call us directly',
    //   value: '+91 98765 43210',
    //   link: 'tel:+919876543210',
    //   gradient: 'from-orange-500 via-red-500 to-pink-600',
    //   hoverGradient: 'from-orange-600 via-red-600 to-pink-700',
    //   bgAccent: 'bg-orange-50',
    //   borderAccent: 'border-orange-200',
    // },
    {
      icon: <Clock size={28} className="text-white" />,
      title: 'Business Hours',
      subtitle: 'We\'re available',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed',
      link: null,
      gradient: 'from-purple-500 via-violet-600 to-purple-700',
      hoverGradient: 'from-purple-600 via-violet-700 to-purple-800',
      bgAccent: 'bg-purple-50',
      borderAccent: 'border-purple-200',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen flex justify-center items-center py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6 relative">
              Contact Us
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Have questions or need support? We're here to assist you with everything related to our products and services.
          </p>
          <div className="flex justify-center">
            <div className="bg-white/70 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 shadow-lg">
              <p className="text-slate-700 font-medium flex items-center gap-2">
                <Send size={18} className="text-blue-600" />
                Ready to get started? Reach out to us!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:-translate-y-2 ${
                hoveredCard === index ? 'scale-105' : 'hover:scale-105'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background with animated gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Main card content */}
              <div className={`relative bg-white/90 h-[340px] backdrop-blur-sm border-2 ${item.borderAccent} rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:border-white/50`}>
                
                {/* Icon container with animated background */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${item.gradient} group-hover:${item.hoverGradient} flex items-center justify-center shadow-lg transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110`}>
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {item.icon}
                  </div>
                  {/* Floating accent circles */}
                  <div className={`absolute -top-1 -right-1 w-6 h-6 ${item.bgAccent} rounded-full opacity-60 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150`}></div>
                  <div className={`absolute -bottom-1 -left-1 w-4 h-4 ${item.bgAccent} rounded-full opacity-40 group-hover:opacity-80 transition-all duration-700 transform group-hover:scale-125`}></div>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h4 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                    {item.subtitle}
                  </p>
                  
                  {item.link ? (
                    <a
                      href={item.link}
                      className="block text-slate-700 group-hover:text-slate-800 transition-all duration-300 font-medium whitespace-pre-line leading-relaxed hover:underline decoration-2 underline-offset-4"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-700 group-hover:text-slate-800 transition-colors duration-300 font-medium whitespace-pre-line leading-relaxed">
                      {item.value}
                    </p>
                  )}
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-white/40 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-medium">We typically respond within 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;