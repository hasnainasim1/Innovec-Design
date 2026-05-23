import React from "react";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Water Supply System",
    desc: "Designing efficient water distribution networks, transmission mains, storage reservoirs, and community water supply schemes for urban and rural communities.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <defs>
          <linearGradient id="g1a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00BFFF" />
            <stop offset="100%" stopColor="#003087" />
          </linearGradient>
        </defs>
        <path d="M32 6C32 6 14 24 14 38a18 18 0 0 0 36 0C50 24 32 6 32 6z" fill="url(#g1a)" opacity="0.15" />
        <path d="M32 10C32 10 17 26.5 17 38a15 15 0 0 0 30 0C47 26.5 32 10 32 10z" stroke="url(#g1a)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M24 42c0-4.4 4-10 8-14 4 4 8 9.6 8 14" stroke="#00A651" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="32" cy="44" r="3" fill="#00A651" />
        <path d="M20 54h24" stroke="#003087" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Sewerage and Drainage System",
    desc: "Planning and designing comprehensive sewage collection networks and storm water drainage systems to manage urban runoff and wastewater conveyance.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <defs>
          <linearGradient id="g2a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00A651" />
            <stop offset="100%" stopColor="#003087" />
          </linearGradient>
        </defs>
        <rect x="10" y="28" width="44" height="8" rx="4" fill="url(#g2a)" opacity="0.15" />
        <rect x="10" y="28" width="44" height="8" rx="4" stroke="url(#g2a)" strokeWidth="2" />
        <line x1="20" y1="36" x2="20" y2="52" stroke="#00A651" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="36" x2="32" y2="52" stroke="#00A651" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="44" y1="36" x2="44" y2="52" stroke="#00A651" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 28V20a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v8" stroke="#003087" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 16V10M38 16V10" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="26" cy="9" r="2" fill="#00BFFF" />
        <circle cx="38" cy="9" r="2" fill="#00BFFF" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Fisheries & Aquaculture",
    desc: "Full-spectrum aquaculture infrastructure design and delivery — from hatcheries and fish farms to recirculating aquaculture systems and research facilities, in partnership with AkuaMaks.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <defs>
          <linearGradient id="g3a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00BFFF" />
            <stop offset="100%" stopColor="#00A651" />
          </linearGradient>
        </defs>
        <path d="M8 32c6-10 14-16 24-16s18 6 24 16c-6 10-14 16-24 16S14 42 8 32z" fill="url(#g3a)" opacity="0.12" stroke="url(#g3a)" strokeWidth="2" />
        <ellipse cx="30" cy="32" rx="9" ry="6" fill="#003087" opacity="0.15" />
        <path d="M22 32c0-5 3.6-9 8-9s8 4 8 9-3.6 9-8 9-8-4-8-9z" stroke="#003087" strokeWidth="2" fill="none" />
        <circle cx="35" cy="29" r="2" fill="#003087" />
        <path d="M50 28l6-4-2 8 2 8-6-4" fill="#00A651" opacity="0.7" />
        <path d="M14 28 8 24l2 8-2 8 6-4" fill="#00A651" opacity="0.7" />
        <path d="M20 44c2 4 6 8 12 8M44 44c-2 4-6 8-12 8" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Water and Wastewater Treatment",
    desc: "Engineering safe drinking water treatment facilities and advanced wastewater treatment plants with sustainable processes and modern technology.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <defs>
          <linearGradient id="g4a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00BFFF" />
            <stop offset="100%" stopColor="#00A651" />
          </linearGradient>
        </defs>
        <rect x="8" y="36" width="48" height="16" rx="3" fill="url(#g4a)" opacity="0.12" stroke="url(#g4a)" strokeWidth="2" />
        <path d="M16 36V26a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v10" stroke="#003087" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="36" r="5" stroke="#00A651" strokeWidth="2" fill="none" />
        <circle cx="40" cy="36" r="5" stroke="#00A651" strokeWidth="2" fill="none" />
        <path d="M29 36h6" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 10v10M28 14l4-4 4 4" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 48h6M26 48h6M38 48h6" stroke="#003087" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Solid Waste Management",
    desc: "Integrated solid waste management systems including collection, transfer, sanitary landfill design, and waste-to-resource engineering solutions.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <defs>
          <linearGradient id="g5a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00A651" />
            <stop offset="100%" stopColor="#003087" />
          </linearGradient>
        </defs>
        <path d="M20 20h24l-3 32H23L20 20z" fill="url(#g5a)" opacity="0.12" stroke="url(#g5a)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 20h36" stroke="#003087" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M26 14h12M28 14v-3h8v3" stroke="#003087" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 28v16M32 28v16M37 28v16" stroke="#00A651" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M44 36l8-6M44 44l8 4" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <circle cx="52" cy="30" r="4" stroke="#00BFFF" strokeWidth="1.5" fill="none" />
        <path d="M50 30c0-1.1.9-2 2-2" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Project Management Services",
    desc: "End-to-end project management covering feasibility, detailed design, procurement support, construction supervision, and commissioning for infrastructure projects.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <defs>
          <linearGradient id="g6a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#003087" />
            <stop offset="100%" stopColor="#00BFFF" />
          </linearGradient>
        </defs>
        <rect x="10" y="14" width="36" height="44" rx="4" fill="url(#g6a)" opacity="0.08" stroke="url(#g6a)" strokeWidth="2" />
        <path d="M24 14v-4h8v4" stroke="#003087" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 28h20M18 36h20M18 44h12" stroke="#003087" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="44" cy="46" r="10" fill="white" />
        <circle cx="44" cy="46" r="10" stroke="#00A651" strokeWidth="2" fill="none" />
        <path d="M40 46l3 3 5-6" stroke="#00A651" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Other Civil Engineering Services",
    desc: "Architectural, structural, MEP, internal and external plumbing, fire fighting systems, disposal and pumping stations, and residential and commercial design.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <defs>
          <linearGradient id="g7a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#003087" />
            <stop offset="100%" stopColor="#00A651" />
          </linearGradient>
        </defs>
        <path d="M32 8L10 26v30h44V26L32 8z" fill="url(#g7a)" opacity="0.1" />
        <path d="M10 26L32 8l22 18" stroke="url(#g7a)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="24" y="36" width="16" height="20" rx="2" stroke="#003087" strokeWidth="2" fill="white" />
        <rect x="14" y="30" width="12" height="12" rx="2" stroke="#00A651" strokeWidth="1.8" fill="none" />
        <rect x="38" y="30" width="12" height="12" rx="2" stroke="#00A651" strokeWidth="1.8" fill="none" />
        <line x1="32" y1="36" x2="32" y2="56" stroke="#00BFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7FA]">
      <HeroSection title="Our Core Services" imagePath="/images/hero-services.png" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">What We Deliver</p>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary font-montserrat mb-4">
              Engineering Solutions
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-0.5 w-12 bg-primary/30 rounded-full" />
              <div className="h-1 w-8 bg-primary rounded-full" />
              <div className="h-0.5 w-12 bg-primary/30 rounded-full" />
            </div>
            <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              From water supply to aquaculture, INNOVEC delivers technically robust, sustainable engineering solutions across the full infrastructure lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                data-testid={`card-service-${service.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col gap-5 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full pointer-events-none" />

                {/* Number */}
                <span className="absolute top-6 right-7 text-5xl font-black text-gray-100 select-none leading-none font-montserrat group-hover:text-primary/10 transition-colors">
                  {String(service.id).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F0F7FF] to-[#E6F9F0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-secondary font-montserrat leading-snug group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-[#00BFFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
