import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Ongoing" | "Completed" | "Fisheries";

const projects = [
  // ONGOING
  {
    title: "Presidency of State Security, Kingdom of Saudi Arabia",
    category: "Ongoing",
    type: "Water & Utilities",
    location: "Riyadh, KSA",
    desc: "Design of Water Supply, Sewerage, Drainage, Irrigation and Fire Fighting System."
  },
  {
    title: "Chillas City Sewerage System",
    category: "Ongoing",
    type: "Sewerage",
    location: "Chillas City",
    desc: "Comprehensive design of urban sewerage network."
  },
  {
    title: "Multan Division, Misal Gaon Project",
    category: "Ongoing",
    type: "Infrastructure",
    location: "Multan Division",
    desc: "Design of Water Supply, Sewerage, Drainage and Roads for PRMSC."
  },
  {
    title: "Fort Munro Water Supply",
    category: "Ongoing",
    type: "Water Supply",
    location: "DG Khan",
    desc: "Design of Water Supply System for the hill station."
  },
  
  // COMPLETED - WATER SUPPLY
  {
    title: "Flood Affected Areas Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Dera Ghazi Khan",
    desc: "Design of Community Water Supply Schemes for Flood Affected Areas."
  },
  {
    title: "PWP-III South Punjab Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Bahawalpur, Bahawalnagar, Rahim Yar Khan",
    desc: "Design of water supply schemes for South Punjab Districts."
  },
  {
    title: "PWP-III Rawalpindi District Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Rawalpindi District",
    desc: "Design of Community Water Supply Schemes in Tehsil Kahuta, Murree, Gujar Khan, Kotli Sattian."
  },
  
  // COMPLETED - WASTEWATER
  {
    title: "Khanewal District WWTPs",
    category: "Completed",
    type: "Wastewater",
    location: "Khanewal District",
    desc: "Design of Waste Water Treatment Plants (12 nos.)."
  },
  {
    title: "Muzaffargarh District WWTPs",
    category: "Completed",
    type: "Wastewater",
    location: "Muzaffargarh District",
    desc: "Design of Waste Water Treatment Plants (9 nos.)."
  },
  
  // COMPLETED - OTHER
  {
    title: "Nishat Chunian Limited",
    category: "Completed",
    type: "Plumbing",
    location: "Kasur",
    desc: "Internal Plumbing design for industrial facility."
  },
  {
    title: "PRMSC Residential Houses",
    category: "Completed",
    type: "Structural",
    location: "Various",
    desc: "Structural Design of 600 Residential Houses."
  },
  {
    title: "LESCO Revenue Offices",
    category: "Completed",
    type: "Architectural",
    location: "Lahore",
    desc: "Architectural Design of Revenue Offices of Lahore Electric Supply Company."
  },

  // FISHERIES
  {
    title: "Fish Seed Production Centre, DG Khan",
    category: "Fisheries",
    type: "Aquaculture",
    location: "Dera Ghazi Khan",
    desc: "Design of advanced Fish Seed Production Centre."
  },
  {
    title: "Fish Seed Production Centre, Mailsi",
    category: "Fisheries",
    type: "Aquaculture",
    location: "Vehari",
    desc: "Infrastructure design for fisheries center."
  },
  {
    title: "Fish Seed Production Centre, Manga",
    category: "Fisheries",
    type: "Aquaculture",
    location: "Raiwind, Lahore",
    desc: "Design of Fish Seed Production Centre."
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");

  const filteredProjects = projects.filter(p => {
    if (filter === "All") return true;
    if (filter === "Fisheries") return p.category === "Fisheries" || p.type === "Aquaculture";
    return p.category === filter;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroSection title="Our Projects" imagePath="/images/hero-projects.png" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(["All", "Ongoing", "Completed", "Fisheries"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  filter === cat 
                    ? "bg-secondary text-white shadow-md" 
                    : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat === "Fisheries" ? "Fisheries & Aquaculture" : cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={
                        project.type.includes("Water") ? "/images/hero-home.png" :
                        project.category === "Fisheries" ? "/images/hero-projects.png" :
                        "/images/hero-services.png"
                      } 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                        project.category === "Ongoing" ? "bg-accent text-secondary" :
                        project.category === "Completed" ? "bg-white text-gray-700" :
                        "bg-primary text-white"
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 border-l-4 border-l-transparent group-hover:border-l-primary transition-all">
                    <p className="text-xs text-primary font-bold tracking-widest uppercase mb-2">{project.type}</p>
                    <h3 className="text-xl font-bold text-secondary mb-3 leading-tight">{project.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{project.desc}</p>
                    <p className="text-xs text-gray-500 font-medium bg-gray-50 inline-block px-3 py-1 rounded-md">
                      📍 {project.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
