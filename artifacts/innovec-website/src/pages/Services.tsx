import React from "react";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { 
  Droplets, 
  GlassWater, 
  Pipette, 
  Factory, 
  Fan, 
  CloudRain, 
  Wrench, 
  Trash2, 
  Fish, 
  Building2 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Water Supply Design",
      desc: "Designing efficient water distribution networks for urban and rural communities.",
      icon: <Droplets size={40} strokeWidth={1.5} />
    },
    {
      id: 2,
      title: "Treatment of Drinking Water",
      desc: "Engineering safe, reliable potable water treatment solutions.",
      icon: <GlassWater size={40} strokeWidth={1.5} />
    },
    {
      id: 3,
      title: "Sewerage System",
      desc: "Planning and designing comprehensive sewage collection networks.",
      icon: <Pipette size={40} strokeWidth={1.5} />
    },
    {
      id: 4,
      title: "Wastewater Treatment",
      desc: "Developing advanced wastewater treatment plants and processes.",
      icon: <Factory size={40} strokeWidth={1.5} />
    },
    {
      id: 5,
      title: "Disposal Stations / Pumping Stations",
      desc: "Designing lift stations and pumping infrastructure.",
      icon: <Fan size={40} strokeWidth={1.5} />
    },
    {
      id: 6,
      title: "Storm Water Drainage System",
      desc: "Engineering drainage systems to manage urban stormwater runoff.",
      icon: <CloudRain size={40} strokeWidth={1.5} />
    },
    {
      id: 7,
      title: "Internal & External Plumbing",
      desc: "Complete plumbing systems including fire suppression and fighting systems.",
      icon: <Wrench size={40} strokeWidth={1.5} />
    },
    {
      id: 8,
      title: "Solid Waste Management",
      desc: "Integrated waste management and sanitary landfill design.",
      icon: <Trash2 size={40} strokeWidth={1.5} />
    },
    {
      id: 9,
      title: "Fisheries & Aquaculture",
      desc: "Infrastructure design for fish farming and aquaculture facilities.",
      icon: <Fish size={40} strokeWidth={1.5} />
    },
    {
      id: 10,
      title: "Architectural, Structural & MEP Services",
      desc: "Comprehensive design across architecture, structure, and MEP disciplines.",
      icon: <Building2 size={40} strokeWidth={1.5} />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroSection title="Our Core Services" imagePath="/images/hero-services.png" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-primary mb-6 bg-primary/5 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 font-montserrat leading-tight h-14">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
