import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-home.png')" }}
        >
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight font-montserrat">
              INNOVEC <span className="font-light">(Private) Limited</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
              Engineering Sustainable Infrastructure Since 2020
            </p>
            <div className="flex items-center justify-center gap-3 text-lg text-accent font-medium mb-10">
              <span>Water</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>Wastewater</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>Fisheries & Aquaculture</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link 
                href="/projects" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-montserrat">Building the Future</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              INNOVEC is a premium Pakistani engineering consultancy delivering infrastructure solutions at a national and international scale. From World Bank-funded rural water projects to megaprojects in Saudi Arabia, we provide authoritative, technically rigorous, and forward-thinking engineering services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F5F7FA] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">What We Deliver</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary font-montserrat mb-4">Our Core Services</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-0.5 w-10 bg-primary/30 rounded-full" />
              <div className="h-1 w-6 bg-primary rounded-full" />
              <div className="h-0.5 w-10 bg-primary/30 rounded-full" />
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {[
              {
                num: "01",
                title: "Water Supply System",
                desc: "Designing water distribution networks, transmission mains and reservoirs for urban and rural communities.",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                    <defs><linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#00BFFF"/><stop offset="100%" stopColor="#003087"/></linearGradient></defs>
                    <path d="M32 6C32 6 14 24 14 38a18 18 0 0 0 36 0C50 24 32 6 32 6z" fill="url(#hg1)" opacity="0.15"/>
                    <path d="M32 10C32 10 17 26.5 17 38a15 15 0 0 0 30 0C47 26.5 32 10 32 10z" stroke="url(#hg1)" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
                    <path d="M24 42c0-4.4 4-10 8-14 4 4 8 9.6 8 14" stroke="#00A651" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <circle cx="32" cy="44" r="3" fill="#00A651"/>
                  </svg>
                ),
              },
              {
                num: "02",
                title: "Sewerage & Drainage",
                desc: "Planning comprehensive sewage networks and storm water drainage systems to manage urban runoff.",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                    <defs><linearGradient id="hg2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#00A651"/><stop offset="100%" stopColor="#003087"/></linearGradient></defs>
                    <rect x="10" y="28" width="44" height="8" rx="4" fill="url(#hg2)" opacity="0.15"/>
                    <rect x="10" y="28" width="44" height="8" rx="4" stroke="url(#hg2)" strokeWidth="2"/>
                    <line x1="20" y1="36" x2="20" y2="52" stroke="#00A651" strokeWidth="2.5" strokeLinecap="round"/>
                    <line x1="32" y1="36" x2="32" y2="52" stroke="#00A651" strokeWidth="2.5" strokeLinecap="round"/>
                    <line x1="44" y1="36" x2="44" y2="52" stroke="#00A651" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M14 28V20a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v8" stroke="#003087" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M26 16V10M38 16V10" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="26" cy="9" r="2" fill="#00BFFF"/><circle cx="38" cy="9" r="2" fill="#00BFFF"/>
                  </svg>
                ),
              },
              {
                num: "03",
                title: "Fisheries & Aquaculture",
                desc: "Full-spectrum aquaculture infrastructure — hatcheries, fish farms, RAS, aquaponics, in partnership with AkuaMaks.",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                    <defs><linearGradient id="hg3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#00BFFF"/><stop offset="100%" stopColor="#00A651"/></linearGradient></defs>
                    <path d="M8 32c6-10 14-16 24-16s18 6 24 16c-6 10-14 16-24 16S14 42 8 32z" fill="url(#hg3)" opacity="0.12" stroke="url(#hg3)" strokeWidth="2"/>
                    <path d="M22 32c0-5 3.6-9 8-9s8 4 8 9-3.6 9-8 9-8-4-8-9z" stroke="#003087" strokeWidth="2" fill="none"/>
                    <circle cx="35" cy="29" r="2" fill="#003087"/>
                    <path d="M50 28l6-4-2 8 2 8-6-4" fill="#00A651" opacity="0.7"/>
                    <path d="M14 28 8 24l2 8-2 8 6-4" fill="#00A651" opacity="0.7"/>
                  </svg>
                ),
              },
              {
                num: "04",
                title: "Wastewater Treatment",
                desc: "Engineering safe drinking water treatment facilities and advanced wastewater treatment plants.",
                icon: (
                  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                    <defs><linearGradient id="hg4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#00BFFF"/><stop offset="100%" stopColor="#00A651"/></linearGradient></defs>
                    <rect x="8" y="36" width="48" height="16" rx="3" fill="url(#hg4)" opacity="0.12" stroke="url(#hg4)" strokeWidth="2"/>
                    <path d="M16 36V26a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v10" stroke="#003087" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="24" cy="36" r="5" stroke="#00A651" strokeWidth="2" fill="none"/>
                    <circle cx="40" cy="36" r="5" stroke="#00A651" strokeWidth="2" fill="none"/>
                    <path d="M29 36h6" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M32 10v10M28 14l4-4 4 4" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-7 flex flex-col gap-4 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/8 to-transparent rounded-bl-full pointer-events-none" />
                <span className="absolute top-5 right-6 text-4xl font-black text-gray-100 select-none leading-none font-montserrat group-hover:text-primary/10 transition-colors">
                  {service.num}
                </span>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F0F7FF] to-[#E6F9F0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-secondary font-montserrat mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
                <Link href="/services" className="text-primary font-semibold flex items-center gap-1.5 text-sm mt-auto hover:gap-3 transition-all">
                  Learn more <ArrowRight size={14} />
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-[#00BFFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-md font-semibold transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-montserrat">Featured Projects</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <Link href="/projects" className="hidden md:flex text-primary font-medium items-center gap-2 hover:gap-3 transition-all">
              See all projects <ArrowRight size={16} />
            </Link>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="group cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <div className="h-64 bg-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/hero-projects.png" alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 z-20 bg-accent text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Ongoing</span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Presidency of State Security, KSA</h3>
                <p className="text-gray-600">Design of Water Supply, Sewerage, Drainage, Irrigation and Fire Fighting System in Riyadh.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="group cursor-pointer rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all">
              <div className="h-64 bg-gray-200 overflow-hidden relative">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src="/images/hero-services.png" alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 right-4 z-20 bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Completed</span>
              </div>
              <div className="p-6 bg-white border-t-4 border-t-transparent group-hover:border-t-primary transition-all">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Punjab Rural Sustainable Water Supply</h3>
                <p className="text-gray-600">Design of water supply schemes for South Punjab Districts (PWP-III Programme).</p>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="mt-8 md:hidden text-center">
            <Link href="/projects" className="inline-flex text-primary font-medium items-center gap-2">
              See all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Partner with a world-class engineering consultancy for your next infrastructure project.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
