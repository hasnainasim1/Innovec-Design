import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Ongoing" | "Completed" | "Fisheries";

const projects = [
  // FISHERIES FIRST
  {
    title: "Upgradation of Punjab Government Trout Hatchery — Masoot, Murree",
    category: "Fisheries",
    type: "Fisheries & Aquaculture",
    location: "Masoot, Murree",
    desc: "Upgradation and Transformation of Punjab Government Trout Hatchery, Masoot Murree. Client: Fisheries and Aquaculture Department. Consultant: DSV. Sub-Consultant: INNOVEC (Private) Limited.",
    image: "https://loremflickr.com/600/400/construction?lock=301",
  },
  {
    title: "Fisheries & Aquaculture Infrastructure — AkuaMaks Partnership",
    category: "Fisheries",
    type: "Aquaculture",
    location: "Pakistan & International",
    desc: "Full-spectrum aquaculture project delivery in partnership with AkuaMaks (Turkey). Services include hatchery design, land-based farming, cage farming, RAS, aquaponics, research facilities, and business counselling.",
    featured: true,
    partner: "AkuaMaks",
    partnerLogo: "/akuamaks.png",
    partnerUrl: "www.akuamaks.com",
    image: "/akuamaks.png",
  },
  // ONGOING
  {
    title: "Presidency of State Security, Kingdom of Saudi Arabia",
    category: "Ongoing",
    type: "Water & Utilities",
    location: "Riyadh, KSA",
    desc: "Design of Water Supply, Sewerage, Drainage, Irrigation and Fire Fighting System.",
    image: "https://loremflickr.com/600/400/construction?lock=302",
  },
  {
    title: "Chillas City Sewerage System",
    category: "Ongoing",
    type: "Sewerage",
    location: "Chillas City",
    desc: "Comprehensive design of urban sewerage network for Chillas City.",
    image: "https://loremflickr.com/600/400/construction?lock=303",
  },
  {
    title: "Fort Munro Water Supply",
    category: "Ongoing",
    type: "Water Supply",
    location: "DG Khan",
    desc: "Design of Water Supply System for the Fort Munro hill station.",
    image: "https://loremflickr.com/600/400/construction?lock=304",
  },

  // COMPLETED PROJECTS
  {
    title: "Misali Gaon (Model Village) Project — Multan Division",
    category: "Completed",
    type: "Engineering Design & Supervision",
    location: "Multan Division",
    desc: "Engineering Design and Construction Supervision Services for the Misali Gaon (Model Village) Project. Client: TUMAS.",
    completedYear: "March 2026",
    image: "https://loremflickr.com/600/400/construction?lock=305",
  },
  {
    title: "Design of Water Supply & Drainage System - Safiya Homes Multan",
    category: "Completed",
    type: "Water Supply",
    location: "Multan",
    desc: "Design of Water Supply, OHT, Sewerage & Drainage Systems and Disposal Station. Client: Safiya Homes Private Limited.",
    completedYear: "2026",
    image: "https://loremflickr.com/600/400/construction?lock=306",
  },
  {
    title: "Design of Water Supply & Drainage System - Safiya Homes Kasur",
    category: "Completed",
    type: "Infrastructure",
    location: "Kasur",
    desc: "Design of Water Supply, OHT, Road Network, Sewerage & Drainage Systems and Disposal Station. Client: Safiya Homes Private Limited.",
    completedYear: "2025",
    image: "https://loremflickr.com/600/400/construction?lock=307",
  },
  {
    title: "PTV Headquarters — Repair & Renovation",
    category: "Completed",
    type: "Renovation",
    location: "Islamabad",
    desc: "Repair, Renovation and Upgradation Works at PTV Headquarters, Islamabad. Client: Pakistan Television Corporation.",
    completedYear: "February 2026",
    image: "https://loremflickr.com/600/400/construction?lock=308",
  },
  {
    title: "PTV Regional Office — Repair & Renovation",
    category: "Completed",
    type: "Renovation",
    location: "Quetta",
    desc: "Repair, Renovation and Upgradation Works at PTV Regional Office, Quetta. Client: Pakistan Television Corporation.",
    completedYear: "February 2026",
    image: "https://loremflickr.com/600/400/construction?lock=309",
  },
  {
    title: "Medical Cannabis & Hemp Facilities — PSDP Project",
    category: "Completed",
    type: "Specialized Infrastructure",
    location: "Pakistan",
    desc: "Designing and Detailed Construction Supervision for establishment of Medical Cannabis Greenhouse, Biotechnology Derived Bio-Products, National Hemp and Cannabis Analytical Laboratory and National Hemp and Medicinal Cannabis Authority. Client: PCSIR.",
    completedYear: "January 2026",
    image: "https://loremflickr.com/600/400/construction?lock=310",
  },

  // COMPLETED — WATER SUPPLY & SEWERAGE SCHEMES
  {
    title: "Water Supply, Sewerage & Drainage — Neom Trojena Base Camp",
    category: "Completed",
    type: "Water Supply",
    location: "Saudi Arabia",
    desc: "Design of Water Supply, Sewerage and Drainage system for Neom Trojena Base Camp, Saudi Arabia.",
    image: "https://loremflickr.com/600/400/construction?lock=311",
  },
  {
    title: "Water Supply, Sewerage & Drainage — Kingdom Valley, Chakri",
    category: "Completed",
    type: "Water Supply",
    location: "Chakri",
    desc: "Design of Water Supply, Sewerage, Drainage and Roads for Kingdom Valley, Chakri.",
    image: "https://loremflickr.com/600/400/construction?lock=312",
  },
  {
    title: "Design of Water Supply & Drainage System - Safiya Homes Lahore",
    category: "Completed",
    type: "Water Supply",
    location: "Lahore",
    desc: "Design of Water Supply and Sewerage system for Safiya Homes, Lahore.",
    image: "https://loremflickr.com/600/400/construction?lock=313",
  },
  {
    title: "Water Supply, Sewerage & Roads — Imperial Residencia, Kasur",
    category: "Completed",
    type: "Water Supply",
    location: "Kasur",
    desc: "Design of Water Supply, Sewerage, Drainage and Roads for Imperial Residencia, Kasur.",
    image: "https://loremflickr.com/600/400/construction?lock=314",
  },
  {
    title: "Design of Water Supply & Drainage System - Mansoor Homes, Lahore",
    category: "Completed",
    type: "Water Supply",
    location: "Lahore",
    desc: "Design of Water Supply and Sewerage system for Mansoora Homes, Lahore.",
    image: "https://loremflickr.com/600/400/construction?lock=315",
  },
  {
    title: "Water Supply & Sewerage — Housing Scheme, Rawalpindi",
    category: "Completed",
    type: "Water Supply",
    location: "Rawalpindi",
    desc: "Design of Water Supply and Sewerage system for Housing Scheme at Rawalpindi.",
    image: "https://loremflickr.com/600/400/construction?lock=316",
  },
];

const categoryBg: Record<string, string> = {
  "Water Supply": "/images/hero-home.png",
  "Water & Utilities": "/images/hero-home.png",
  Wastewater: "/images/hero-home.png",
  Sewerage: "/images/hero-services.png",
  Infrastructure: "/images/hero-services.png",
  Plumbing: "/images/hero-services.png",
  Structural: "/images/hero-services.png",
  Architectural: "/images/hero-services.png",
  Renovation: "/images/hero-services.png",
  "Engineering Design & Supervision": "/images/hero-services.png",
  "Specialized Infrastructure": "/images/hero-services.png",
  Aquaculture: "/akuamaks.png",
};

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Fisheries") return p.category === "Fisheries";
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
                data-testid={`filter-${cat.toLowerCase()}`}
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
              {filteredProjects.map((project, idx) => {
                const imgSrc = (project as any).image || categoryBg[(project as any).type] || "/images/hero-services.png";
                const isAkuamaks = imgSrc === "/akuamaks.png";

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={project.title}
                    data-testid={`card-project-${idx}`}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all group flex flex-col"
                  >
                    {/* Image */}
                    <div className="h-44 relative overflow-hidden shrink-0">
                      {isAkuamaks ? (
                        <div className="w-full h-full flex items-center justify-center bg-white p-4">
                          <img
                            src="/akuamaks.png"
                            alt="AkuaMaks Aquaculture"
                            className="max-h-36 max-w-full object-contain"
                          />
                        </div>
                      ) : (
                        <img
                          src={imgSrc}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute top-3 right-3 z-20 flex gap-2">
                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                            project.category === "Ongoing"
                              ? "bg-[#00BFFF] text-secondary"
                              : project.category === "Fisheries"
                              ? "bg-primary text-white"
                              : "bg-white/90 text-gray-700"
                          }`}
                        >
                          {project.category === "Fisheries" ? "Fisheries" : project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 border-l-4 border-l-transparent group-hover:border-l-primary transition-all flex flex-col flex-1">
                      <p className="text-xs text-primary font-bold tracking-widest uppercase mb-2">
                        {(project as any).type}
                      </p>
                      <h3 className="text-base font-bold text-secondary mb-2 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm flex-1 leading-relaxed">
                        {project.desc}
                      </p>

                      <div className="flex items-center justify-between mt-auto gap-2 flex-wrap">
                        <span className="text-xs text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded-md">
                          {project.location}
                        </span>
                        {(project as any).completedYear && (
                          <span className="text-xs font-semibold text-primary bg-primary/8 px-3 py-1 rounded-md">
                            Completed {(project as any).completedYear}
                          </span>
                        )}
                        {(project as any).partnerUrl && (
                          <span className="text-xs font-semibold text-secondary bg-secondary/8 px-3 py-1 rounded-md">
                            {(project as any).partnerUrl}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
