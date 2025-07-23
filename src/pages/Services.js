

import React from "react";
import { motion } from "framer-motion";
import Automation from "../common/assets/automation.jpg";
import Power from "../common/assets/power.jpg";
import Farmax from "../common/assets/farmax.jpg";
import Spare from "../common/assets/spare.jpg";
import Amc from "../common/assets/amc.jpg";
import ControlPanel from "./ControlPanel";
import ElectricalPower from "./ElectricalPower";
import { ArrowRight, Zap, Settings, Shield, Wrench } from "lucide-react";
import OurService from "./OurService";


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
    description: "We provide PLC, SCADA & HMI solutions integrated with SPM, Press, and Manual-to-Automatic Machines using Siemens, Mitsubishi, Allen Bradley, Delta, etc.",
    image:Automation ,
    icon: Settings,
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    bgGradient: "from-cyan-50 via-blue-50 to-purple-50",
    glowColor: "cyan-400",
    shadowColor: "shadow-cyan-500/25"
  },
  {
    title: "Electrical Power Management",
    description: "Specialized in Power Conditioning Equipment: APFC Panels, Harmonic Filter Panels, Servo Stabilizers, Isolation Transformers, Online UPS Systems & K-rated Transformers.",
    image: Power,
    icon: Zap,
    gradient: "from-amber-400 via-orange-500 to-red-500",
    bgGradient: "from-amber-50 via-orange-50 to-red-50",
    glowColor: "orange-400",
    shadowColor: "shadow-orange-500/25"
  },
  {
    title: "Channel Partner - FARMAX",
    description: "We are the official channel partner for Servo Voltage Stabilizers, Isolation Transformers, and Online UPS in Karnataka under the brand name 'FARMAX'.",
    image: Farmax,
    icon: Shield,
    gradient: "from-emerald-400 via-teal-500 to-blue-600",
    bgGradient: "from-emerald-50 via-teal-50 to-blue-50",
    glowColor: "emerald-400",
    shadowColor: "shadow-emerald-500/25"
  },
  {
    title: "Spare Electrical Components",
    description: "We provide and integrate switchgear from Siemens, L&T, Schneider, and BCH with our automation solutions.",
    image: Spare,
    icon: Wrench,
    gradient: "from-violet-400 via-purple-500 to-indigo-600",
    bgGradient: "from-violet-50 via-purple-50 to-indigo-50",
    glowColor: "violet-400",
    shadowColor: "shadow-violet-500/25"
  },
];

const Services = () => {
  return (
    <section
  id="services"
  className="relative  font-poppins text-black overflow-hidden "
>
  

  {/* Bottom Content */}
  <div className="relative z-10">
    <OurService/>
    <ControlPanel />
    <ElectricalPower />
  </div>

</section>
  );
};

export default Services;
