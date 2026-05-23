import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Building2, HardHat } from "lucide-react";

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
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-montserrat">Our Core Services</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              { icon: <Droplets size={32} />, title: "Water Supply Design", desc: "Designing efficient water distribution networks for urban and rural communities." },
              { icon: <Building2 size={32} />, title: "Wastewater Treatment", desc: "Developing advanced wastewater treatment plants and processes." },
              { icon: <HardHat size={32} />, title: "Structural & MEP", desc: "Comprehensive design across architecture, structure, and MEP disciplines." }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-l-4 hover:border-l-primary transition-all group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link href="/services" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 rounded-md font-medium transition-colors">
              View All 10 Services
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
