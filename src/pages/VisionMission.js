import React, { useState, useEffect } from "react";
import { Eye, Target, ShieldCheck, Sparkles, Crown } from "lucide-react";

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const cardData = [
    {
      id: 'vision',
      icon: Eye,
      title: 'Our Vision',
      content: 'Redefining the Focus of Customers towards Power Quality & Make Process Automated.',
      gradient: 'from-purple-600 via-violet-600 to-blue-600',
      bgGradient: 'from-purple-50 via-violet-50 to-blue-50',
      iconColor: 'text-purple-600',
      delay: 0.2
    },
    {
      id: 'mission',
      icon: Target,
      title: 'Our Mission',
      content: 'Our Mission is to deeply recognize the needs of our clients who are constantly searching for the Latest Technologies and new ways of thinking to make the best Project decisions.',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      bgGradient: 'from-blue-50 via-indigo-50 to-purple-50',
      iconColor: 'text-blue-600',
      delay: 0.3
    },
    {
      id: 'quality',
      icon: ShieldCheck,
      title: 'Quality Policy',
      content: 'We are dedicated to designing, manufacturing and marketing high quality Control Panels, Servo Stabilizers, Online UPS Systems and Isolation Transformers that serve our customers\' needs. Our dedicated Quality Organization includes customer Quality Representatives in each business segment, who work closely with our customers to quickly resolve Quality-related issues by coordinating efforts and communicating with business segments, sales, and manufacturing teams. Our commitment to customer satisfaction is communicated clearly and consistently.',
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      bgGradient: 'from-indigo-50 via-purple-50 to-pink-50',
      iconColor: 'text-indigo-600',
      delay: 0.4,
      isLarge: true
    }
  ];

  return (
    <section className="relative min-h-screen pt-40 py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Royal Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-100/10 to-blue-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Royal Elements */}
      <div className="absolute top-10 left-10 animate-bounce">
        <Crown className="w-8 h-8 text-purple-400/60" />
      </div>
      <div className="absolute top-20 right-20 animate-pulse">
        <Sparkles className="w-6 h-6 text-blue-400/60" />
      </div>
      <div className="absolute bottom-20 left-20 animate-spin" style={{animationDuration: '8s'}}>
        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Majestic Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative">
            <div className="absolute -top-4 -left-4">
              <Crown className="w-8 h-8 text-purple-500/30 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4">
              Our Foundation
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full"></div>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mt-8 leading-relaxed font-medium">
            Vision, Mission & Quality Policy that drives our excellence
          </p>
        </div>

        {/* Cards Layout */}
        <div className="grid lg:grid-cols-2  gap-8">
          {/* Vision & Mission Column */}
          <div className=" space-y-8">
            {cardData.slice(0, 2).map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className={`group relative transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${card.delay * 1000}ms` }}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Card Background with Royal Design */}
                  <div className={`relative bg-gradient-to-br ${card.bgGradient} p-8 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                    {/* Animated Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5`}>
                      <div className={`w-full h-full bg-gradient-to-br ${card.bgGradient} rounded-3xl`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 bg-white/80 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <IconComponent className={`w-8 h-8 ${card.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <h3 className={`text-2xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                          {card.title}
                        </h3>
                      </div>
                      
                      {/* Content */}
                      <p className="text-slate-700 leading-relaxed text-lg font-medium">
                        {card.content}
                      </p>
                    </div>

                    {/* Floating Sparkles on Hover */}
                    {activeCard === card.id && (
                      <>
                        <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 right-8 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                      </>
                    )}

                    {/* Royal Corner Decorations */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-purple-300/30 rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-300/30 rounded-br-3xl"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quality Policy Column */}
          <div className="lg:row-span-2">
            {(() => {
              const card = cardData[2];
              const IconComponent = card.icon;
              return (
                <div
                  className={`group relative h-full transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${card.delay * 1000}ms` }}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Large Card with Premium Design */}
                  <div className={`relative bg-gradient-to-br ${card.bgGradient} p-8 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 h-full overflow-hidden`}>
                    {/* Animated Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5`}>
                      <div className={`w-full h-full bg-gradient-to-br ${card.bgGradient} rounded-3xl`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`p-4 bg-white/80 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                          <IconComponent className={`w-10 h-10 ${card.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                          {card.title}
                        </h3>
                      </div>
                      
                      {/* Content with better spacing */}
                      <div className="flex-1">
                        <p className="text-slate-700 leading-relaxed text-lg font-medium text-justify space-y-4">
                          {card.content.split('. ').map((sentence, index) => (
                            <span key={index} className="block mb-4">
                              {sentence}{sentence.endsWith('.') ? '' : '.'}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>


                    {/* Floating Sparkles on Hover */}
                    {activeCard === card.id && (
                      <>
                        <div className="absolute top-20 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-20 left-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 right-12 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="absolute bottom-32 right-20 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-300"></div>
                      </>
                    )}

                    {/* Royal Corner Decorations - Enhanced */}
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-purple-300/30 rounded-tl-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-indigo-300/30 rounded-br-3xl"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-300/30 rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-300/30 rounded-bl-3xl"></div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Bottom Royal Decoration */}
        <div className={`flex justify-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse delay-200"></div>
            </div>
            <Crown className="w-6 h-6 text-purple-500/60 animate-pulse" />
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse delay-400"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;