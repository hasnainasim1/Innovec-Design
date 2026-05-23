import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Ongoing" | "Completed" | "Fisheries";

const projects = [
  // FISHERIES FIRST
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
  },
  {
    title: "Fish Seed Production Centre, DG Khan",
    category: "Fisheries",
    type: "Aquaculture",
    location: "Dera Ghazi Khan",
    desc: "Design of advanced Fish Seed Production Centre for the Government of Punjab Fisheries Department.",
  },
  {
    title: "Fish Seed Production Centre, Mailsi",
    category: "Fisheries",
    type: "Aquaculture",
    location: "Vehari",
    desc: "Infrastructure design and engineering for fish seed production facility.",
  },
  {
    title: "Fish Seed Production Centre, Manga",
    category: "Fisheries",
    type: "Aquaculture",
    location: "Raiwind, Lahore",
    desc: "Design of Fish Seed Production Centre serving Lahore region.",
  },
  {
    title: "Fish Seed Production Centre, Renala Khurd",
    category: "Fisheries",
    type: "Aquaculture",
    location: "Okara",
    desc: "Design of fish seed production infrastructure for Punjab Fisheries Department.",
  },
  {
    title: "Fish Seed Production Centre, Pakpattan",
    category: "Fisheries",
    type: "Aquaculture",
    location: "Pakpattan",
    desc: "Design and engineering of fish seed production facility.",
  },
  {
    title: "Fish Seed Production Centre, Chiniot",
    category: "Fisheries",
    type: "Aquaculture",
    location: "Chiniot",
    desc: "Design of Fish Seed Production Centre, Chiniot.",
  },

  // ONGOING
  {
    title: "Presidency of State Security, Kingdom of Saudi Arabia",
    category: "Ongoing",
    type: "Water & Utilities",
    location: "Riyadh, KSA",
    desc: "Design of Water Supply, Sewerage, Drainage, Irrigation and Fire Fighting System.",
  },
  {
    title: "Chillas City Sewerage System",
    category: "Ongoing",
    type: "Sewerage",
    location: "Chillas City",
    desc: "Comprehensive design of urban sewerage network for Chillas City.",
  },
  {
    title: "Multan Division, Misal Gaon Project",
    category: "Ongoing",
    type: "Infrastructure",
    location: "Multan Division",
    desc: "Design of Water Supply, Sewerage, Drainage and Roads for PRMSC.",
  },
  {
    title: "Fort Munro Water Supply",
    category: "Ongoing",
    type: "Water Supply",
    location: "DG Khan",
    desc: "Design of Water Supply System for the Fort Munro hill station.",
  },

  // COMPLETED - WATER SUPPLY
  {
    title: "Flood Affected Areas Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Dera Ghazi Khan",
    desc: "Design of Community Water Supply Schemes for Flood Affected Areas of DG Khan Division.",
  },
  {
    title: "DG Khan & Muzaffargarh Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "DG Khan & Muzaffargarh",
    desc: "Design of water supply schemes for DG Khan and Muzaffargarh Districts.",
  },
  {
    title: "Pakpattan District Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Pakpattan",
    desc: "Design of water supply schemes for Pakpattan District.",
  },
  {
    title: "PWP-III Rawalpindi District Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Rawalpindi District",
    desc: "Design of Community Water Supply Schemes in Tehsil Kahuta, Murree, Gujar Khan, Kotli Sattian and Rawalpindi Sadar.",
  },
  {
    title: "PWP-III District Okara Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Okara",
    desc: "Design of water supply schemes for District Okara under PWP-III Programme.",
  },
  {
    title: "PWP-III Khanewal, Lodhran & Vehari Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Khanewal, Lodhran, Vehari",
    desc: "Community Water Supply Schemes for Districts Khanewal, Lodhran, and Vehari.",
  },
  {
    title: "PWP-III South Punjab Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Bahawalpur, Bahawalnagar, Rahim Yar Khan",
    desc: "Design of water supply schemes for South Punjab Districts under PWP-III Programme.",
  },
  {
    title: "PWP-III Jhelum District Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Jhelum",
    desc: "Community Water Supply Schemes for Tehsil Pind Dadan Khan and Khewra, District Jhelum.",
  },
  {
    title: "PWP-III District Attock Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Attock",
    desc: "Community Water Supply Schemes for 4 Tehsils of District Attock.",
  },
  {
    title: "PWP-III District Chakwal Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Chakwal",
    desc: "Community Water Supply Schemes for District Chakwal under PWP-III Programme.",
  },

  // COMPLETED - WASTEWATER
  {
    title: "Khanewal District WWTPs",
    category: "Completed",
    type: "Wastewater",
    location: "Khanewal District",
    desc: "Design of Waste Water Treatment Plants (12 nos.) for Khanewal District.",
  },
  {
    title: "DG Khan District WWTPs",
    category: "Completed",
    type: "Wastewater",
    location: "DG Khan",
    desc: "Design of Waste Water Treatment Plants (6 nos.) for DG Khan District.",
  },
  {
    title: "Muzaffargarh District WWTPs",
    category: "Completed",
    type: "Wastewater",
    location: "Muzaffargarh",
    desc: "Design of Waste Water Treatment Plants (9 nos.) for Muzaffargarh District.",
  },
  {
    title: "Pakpattan District WWTPs",
    category: "Completed",
    type: "Wastewater",
    location: "Pakpattan",
    desc: "Design of Waste Water Treatment Plants (6 nos.) for Pakpattan District.",
  },

  // COMPLETED - OTHER
  {
    title: "Nishat Chunian Limited",
    category: "Completed",
    type: "Plumbing",
    location: "Kasur",
    desc: "Internal Plumbing design for industrial facility at Chunian, Kasur.",
  },
  {
    title: "Abid Trading, DHA Lahore",
    category: "Completed",
    type: "Plumbing",
    location: "Lahore",
    desc: "Internal Plumbing of commercial premises in DHA, Lahore.",
  },
  {
    title: "Millat Track Housing Scheme",
    category: "Completed",
    type: "Plumbing",
    location: "Sheikhupura Road, Lahore",
    desc: "Internal plumbing of 150 residential units at Millat Track Housing Scheme.",
  },
  {
    title: "PRMSC Residential Houses",
    category: "Completed",
    type: "Structural",
    location: "Various",
    desc: "Structural Design of 600 Residential Houses for PRMSC.",
  },
  {
    title: "LESCO Revenue Offices",
    category: "Completed",
    type: "Architectural",
    location: "Lahore",
    desc: "Architectural Design of Revenue Offices of Lahore Electric Supply Company (LESCO).",
  },
];

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
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  data-testid={`card-project-${idx}`}
                  className={`bg-white rounded-lg overflow-hidden border shadow-sm hover:shadow-lg transition-all group flex flex-col ${
                    (project as any).featured
                      ? "border-primary/40 lg:col-span-1"
                      : "border-gray-200"
                  }`}
                >
                  {/* Image / coloured header */}
                  <div className="h-48 bg-gray-100 relative overflow-hidden shrink-0">
                    {(project as any).partnerLogo ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#003087] to-[#004db3] p-6">
                        <img
                          src={(project as any).partnerLogo}
                          alt="AkuaMaks"
                          className="max-h-32 max-w-full object-contain filter brightness-0 invert"
                        />
                      </div>
                    ) : (
                      <img
                        src={
                          project.type.includes("Water") || project.type === "Wastewater"
                            ? "/images/hero-home.png"
                            : project.category === "Fisheries"
                            ? "/images/hero-projects.png"
                            : "/images/hero-services.png"
                        }
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                          project.category === "Ongoing"
                            ? "bg-accent text-secondary"
                            : project.category === "Fisheries"
                            ? "bg-primary text-white"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        {project.category === "Fisheries" ? "Fisheries" : project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 border-l-4 border-l-transparent group-hover:border-l-primary transition-all flex flex-col flex-1">
                    <p className="text-xs text-primary font-bold tracking-widest uppercase mb-2">
                      {project.type}
                    </p>
                    <h3 className="text-lg font-bold text-secondary mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm flex-1">{project.desc}</p>

                    {(project as any).partnerUrl && (
                      <div className="mt-2 mb-3 flex items-center gap-2 text-xs text-secondary font-semibold bg-primary/5 px-3 py-2 rounded-md">
                        <span className="text-primary">Partner:</span>
                        <span>{(project as any).partner}</span>
                        <span className="text-gray-400 ml-auto">{(project as any).partnerUrl}</span>
                      </div>
                    )}

                    <p className="text-xs text-gray-500 font-medium bg-gray-50 inline-block px-3 py-1 rounded-md mt-auto">
                      {project.location}
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
