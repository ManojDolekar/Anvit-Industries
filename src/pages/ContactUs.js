import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactUs() {
  const contactItems = [
    {
      icon: <Phone size={24} className="text-white" />,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
    },
    {
      icon: <Mail size={24} className="text-white" />,
      title: 'Email',
      value: 'contact@invintindustries.com',
      link: 'mailto:contact@invintindustries.com',
    },
    {
      icon: <MapPin size={24} className="text-white" />,
      title: 'Address',
      value: `Anvit Industries Pvt. Ltd.\n123 Industrial Estate,\nPune, Maharashtra – 411001`,
      link: null,
    },
  ];

  return (
    <div className="bg-light min-h-screen flex justify-center items-center  text-gray-900 py-20 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold uppercase font-loka mb-4 text-commonColor">
          Contact Us
        </h2>
        <p className="text-lg font-raleway text-gray-700 mb-16 max-w-2xl mx-auto">
          Have questions or need support? We’re here to assist you with everything related to our products and services.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 text-center transition hover:shadow-xl"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-commonColor to-blue-400">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold font-josefin mb-2 text-commonColor">{item.title}</h4>
              {item.link ? (
                <a
                  href={item.link}
                  className="block text-gray-700 hover:text-commonColor transition font-manrope whitespace-pre-line"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-700 font-manrope whitespace-pre-line">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
