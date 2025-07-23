// import React from "react";
// import { motion } from "framer-motion";

// // Import all logos (ensure these match your actual file names in assets)
// import siemens from "../common/assets/partners/Siemens.png";
// import schneider from "../common/assets/partners/schneider.jpg";
// import abb from "../common/assets/partners/abb.jpg";
// import allenBradley from "../common/assets/partners/allen-bradley.png";
// import salzer from "../common/assets/partners/salzer.jpg";
// import sick from "../common/assets/partners/sick.jpg";
// import lnt from "../common/assets/partners/lnt.jpg";
// import pepperl from "../common/assets/partners/pepperl.jpg";
// import leuze from "../common/assets/partners/leuze.jpg";
// import rittal from "../common/assets/partners/rittal.jpg";
// import selec from "../common/assets/partners/selec.jpg";
// import lapp from "../common/assets/partners/lapp.png";
// import delta from "../common/assets/partners/delta.jpg";
// import connectwell from "../common/assets/partners/connectwell.jpg";
// import polycab from "../common/assets/partners/polycab.png";
// import autonics from "../common/assets/partners/autonics.jpg";
// import autocad from "../common/assets/partners/autocad.png";
// import controlwell from "../common/assets/partners/controlwell.jpg";
// import bch from "../common/assets/partners/bch.jpg";
// import phoenix from "../common/assets/partners/phoenix.png";
// import mitsubishi from "../common/assets/partners/mitsubishi.png";

// const logos = [
//   siemens, schneider, abb, allenBradley,
//   salzer, sick, lnt, pepperl,
//   leuze, rittal, selec, lapp,
//   delta, connectwell, polycab, autonics,
//   autocad, controlwell, bch, phoenix, mitsubishi
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay },
//   }),
// };

// const OurPartners = () => {
//   return (
//     <section id="partners" className="bg-light text-black py-16 font-poppins">
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.h2
//           className="text-2xl lg:text-3xl font-lora uppercase font-bold text-center text-commonColor mb-12"
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//         >
//           Our Partners
//         </motion.h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
//           {logos.map((logo, index) => (
//             <motion.div
//               key={index}
//               className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center w-full h-24"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeInUp}
//               custom={index * 0.1}
//             >
//               <img src={logo} alt={`partner-${index}`} className="max-h-16 object-contain" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurPartners;


import React from "react";

// Partner logos (ensure paths are correct)
import siemens from "../common/assets/partners/Siemens.png";
import schneider from "../common/assets/partners/schneider.jpg";
import abb from "../common/assets/partners/abb.jpg";
import allenBradley from "../common/assets/partners/allen-bradley.png";
import salzer from "../common/assets/partners/salzer.jpg";
import sick from "../common/assets/partners/sick.jpg";
import lnt from "../common/assets/partners/lnt.jpg";
import pepperl from "../common/assets/partners/pepperl.jpg";
import leuze from "../common/assets/partners/leuze.jpg";
import rittal from "../common/assets/partners/rittal.jpg";
import selec from "../common/assets/partners/selec.jpg";
import lapp from "../common/assets/partners/lapp.png";
import delta from "../common/assets/partners/delta.jpg";
import connectwell from "../common/assets/partners/connectwell.jpg";
import polycab from "../common/assets/partners/polycab.png";
import autonics from "../common/assets/partners/autonics.jpg";
import autocad from "../common/assets/partners/autocad.png";
import background from "../common/assets/partners/pattern6.png"
import controlwell from "../common/assets/partners/controlwell.jpg";
import bch from "../common/assets/partners/bch.jpg";
import phoenix from "../common/assets/partners/phoenix.png";
import mitsubishi from "../common/assets/partners/mitsubishi.png";

const logos = [
  siemens, schneider, abb, allenBradley,
  salzer, sick, lnt, pepperl,
  leuze, rittal, selec, lapp,
  delta, connectwell, polycab, autonics,
  autocad, controlwell, bch, phoenix, mitsubishi,
];

const OurPartners = () => {
  return (
      <section
  id="partners"
  className="w-full py-2 font-poppins text-black bg-gradient-to-t from-white via-[#86A8E7]/80 to-white"
  
>
      <div className="w-full pt-8 mx-auto px-2"
      style={{ backgroundImage: `url(${background})`,backgroundSize:'cover', backgroundPosition: 'center' }}>
        <h2 className="text-5xl  md:text-5xl font-bold text-center bg-gradient-to-r from-gray-500 via-white/80 to-gray-600 bg-clip-text text-transparent mt-14 my-4">
          Our Channel Partners
        </h2>
        <p className="text-xl text-slate-400 max-w-4xl mx-auto mb-24 leading-relaxed">
            Collaborating with industry leaders to deliver excellence and innovation in every project
          </p>

        <div className="relative overflow-hidden">
          <div className="flex gap-10 animate-marquee p-2 pt-10 pb-10 whitespace-nowrap ">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="min-w-[140px] h-[100px] bg-white rounded-xl shadow-[#606585] shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`partner-${idx}`}
                  className="max-h-16 object-contain px-3"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
