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
    image: "/akuamaks.png",
  },
  // ONGOING
  {
    title: "Presidency of State Security, Kingdom of Saudi Arabia",
    category: "Ongoing",
    type: "Water & Utilities",
    location: "Riyadh, KSA",
    desc: "Design of Water Supply, Sewerage, Drainage, Irrigation and Fire Fighting System.",
    image: "https://picsum.photos/seed/riyadh-ksa/600/400",
  },
  {
    title: "Chillas City Sewerage System",
    category: "Ongoing",
    type: "Sewerage",
    location: "Chillas City",
    desc: "Comprehensive design of urban sewerage network for Chillas City.",
    image: "https://picsum.photos/seed/chillas-sewerage/600/400",
  },
  {
    title: "Fort Munro Water Supply",
    category: "Ongoing",
    type: "Water Supply",
    location: "DG Khan",
    desc: "Design of Water Supply System for the Fort Munro hill station.",
    image: "https://picsum.photos/seed/fort-munro/600/400",
  },

  // COMPLETED PROJECTS
  {
    title: "Misali Gaon (Model Village) Project — Multan Division",
    category: "Completed",
    type: "Engineering Design & Supervision",
    location: "Multan Division",
    desc: "Engineering Design and Construction Supervision Services for the Misali Gaon (Model Village) Project. Client: TUMAS.",
    completedYear: "March 2026",
    image: "https://picsum.photos/seed/misali-gaon-multan/600/400",
  },
  {
    title: "Design & Drainage System for Safiya Homes Multan",
    category: "Completed",
    type: "Water Supply",
    location: "Multan",
    desc: "Design of Water Supply, OHT, Sewerage & Drainage Systems and Disposal Station. Client: Safiya Homes Private Limited.",
    completedYear: "2026",
    image: "https://picsum.photos/seed/safiya-homes-multan/600/400",
  },
  {
    title: "Design of Water Supply & Road Network for Safiya Homes Kasur",
    category: "Completed",
    type: "Infrastructure",
    location: "Kasur",
    desc: "Design of Water Supply, OHT, Road Network, Sewerage & Drainage Systems and Disposal Station. Client: Safiya Homes Private Limited.",
    completedYear: "2025",
    image: "https://picsum.photos/seed/safiya-homes-kasur/600/400",
  },
  {
    title: "PTV Headquarters — Repair & Renovation",
    category: "Completed",
    type: "Renovation",
    location: "Islamabad",
    desc: "Repair, Renovation and Upgradation Works at PTV Headquarters, Islamabad. Client: Pakistan Television Corporation.",
    completedYear: "February 2026",
    image: "https://picsum.photos/seed/ptv-headquarters-islamabad/600/400",
  },
  {
    title: "PTV Regional Office — Repair & Renovation",
    category: "Completed",
    type: "Renovation",
    location: "Quetta",
    desc: "Repair, Renovation and Upgradation Works at PTV Regional Office, Quetta. Client: Pakistan Television Corporation.",
    completedYear: "February 2026",
    image: "https://picsum.photos/seed/ptv-regional-quetta/600/400",
  },
  {
    title: "Medical Cannabis & Hemp Facilities — PSDP Project",
    category: "Completed",
    type: "Specialized Infrastructure",
    location: "Pakistan",
    desc: "Designing and Detailed Construction Supervision for establishment of Medical Cannabis Greenhouse, Biotechnology Derived Bio-Products, National Hemp and Cannabis Analytical Laboratory and National Hemp and Medicinal Cannabis Authority. Client: PCSIR.",
    completedYear: "January 2026",
    image: "https://picsum.photos/seed/pcsir-cannabis-greenhouse/600/400",
  },

  // COMPLETED — WATER SUPPLY & SEWERAGE SCHEMES
  {
    title: "Water Supply, Sewerage & Drainage — Neom Trojena Base Camp",
    category: "Completed",
    type: "Water Supply",
    location: "Saudi Arabia",
    desc: "Design of Water Supply, Sewerage and Drainage system for Neom Trojena Base Camp, Saudi Arabia.",
    image: "https://picsum.photos/seed/neom-trojena-saudi/600/400",
  },
  {
    title: "Water Supply, Sewerage & Drainage — Kingdom Valley, Chakri",
    category: "Completed",
    type: "Water Supply",
    location: "Chakri",
    desc: "Design of Water Supply, Sewerage, Drainage and Roads for Kingdom Valley, Chakri.",
    image: "https://picsum.photos/seed/kingdom-valley-chakri/600/400",
  },
  {
    title: "Water Supply & Sewerage — Safiya Homes, Lahore",
    category: "Completed",
    type: "Water Supply",
    location: "Lahore",
    desc: "Design of Water Supply and Sewerage system for Safiya Homes, Lahore.",
    image: "https://picsum.photos/seed/safiya-homes-lahore/600/400",
  },
  {
    title: "Water Supply, Sewerage & Roads — Imperial Residencia, Kasur",
    category: "Completed",
    type: "Water Supply",
    location: "Kasur",
    desc: "Design of Water Supply, Sewerage, Drainage and Roads for Imperial Residencia, Kasur.",
    image: "https://picsum.photos/seed/imperial-residencia-kasur/600/400",
  },
  {
    title: "Water Supply & Sewerage — Mansoora Homes, Lahore",
    category: "Completed",
    type: "Water Supply",
    location: "Lahore",
    desc: "Design of Water Supply and Sewerage system for Mansoora Homes, Lahore.",
    image: "https://picsum.photos/seed/mansoora-homes-lahore/600/400",
  },
  {
    title: "Water Supply & Sewerage — Housing Scheme, Rawalpindi",
    category: "Completed",
    type: "Water Supply",
    location: "Rawalpindi",
    desc: "Design of Water Supply and Sewerage system for Housing Scheme at Rawalpindi.",
    image: "https://picsum.photos/seed/housing-scheme-rawalpindi/600/400",
  },
  {
    title: "PWP-III District Okara Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Okara",
    desc: "Design of water supply schemes for District Okara under PWP-III Programme.",
    image: "https://picsum.photos/seed/pwp-okara-water/600/400",
  },
  {
    title: "PWP-III Khanewal, Lodhran & Vehari Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Khanewal, Lodhran, Vehari",
    desc: "Community Water Supply Schemes for Districts Khanewal, Lodhran, and Vehari.",
    image: "https://picsum.photos/seed/pwp-khanewal-lodhran/600/400",
  },
  {
    title: "PWP-III South Punjab Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Bahawalpur, Bahawalnagar, Rahim Yar Khan",
    desc: "Design of water supply schemes for South Punjab Districts under PWP-III Programme.",
    image: "https://picsum.photos/seed/pwp-south-punjab/600/400",
  },
  {
    title: "PWP-III Jhelum District Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Jhelum",
    desc: "Community Water Supply Schemes for Tehsil Pind Dadan Khan and Khewra, District Jhelum.",
    image: "https://picsum.photos/seed/pwp-jhelum-water/600/400",
  },
  {
    title: "PWP-III District Attock Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Attock",
    desc: "Community Water Supply Schemes for 4 Tehsils of District Attock.",
    image: "https://picsum.photos/seed/pwp-attock-water/600/400",
  },
  {
    title: "PWP-III District Chakwal Water Supply",
    category: "Completed",
    type: "Water Supply",
    location: "Chakwal",
    desc: "Community Water Supply Schemes for District Chakwal under PWP-III Programme.",
    image: "https://picsum.photos/seed/pwp-chakwal-water/600/400",
  },

  // COMPLETED — WASTEWATER
  {
    title: "Khanewal District WWTPs",
    category: "Completed",
    type: "Wastewater",
    location: "Khanewal District",
    desc: "Design of Waste Water Treatment Plants (12 nos.) for Khanewal District.",
    image: "https://picsum.photos/seed/wwtp-khanewal/600/400",
  },
  {
    title: "DG Khan District WWTPs",
    category: "Completed",
    type: "Wastewater",
    location: "DG Khan",
    desc: "Design of Waste Water Treatment Plants (6 nos.) for DG Khan District.",
    image: "https://picsum.photos/seed/wwtp-dgkhan/600/400",
  },
  {
    title: "Muzaffargarh District WWTPs",
    category: "Completed",
    type: "Wastewater",
    location: "Muzaffargarh",
    desc: "Design of Waste Water Treatment Plants (9 nos.) for Muzaffargarh District.",
    image: "https://picsum.photos/seed/wwtp-muzaffargarh/600/400",
  },
  {
    title: "Pakpattan District WWTPs",
    category: "Completed",
    type: "Wastewater",
    location: "Pakpattan",
    desc: "Design of Waste Water Treatment Plants (6 nos.) for Pakpattan District.",
    image: "https://picsum.photos/seed/wwtp-pakpattan/600/400",
  },

  // COMPLETED — OTHER
  {
    title: "Nishat Chunian Limited",
    category: "Completed",
    type: "Plumbing",
    location: "Kasur",
    desc: "Internal Plumbing design for industrial facility at Chunian, Kasur.",
    image: "https://picsum.photos/seed/nishat-chunian-industrial/600/400",
  },
  {
    title: "Abid Trading, DHA Lahore",
    category: "Completed",
    type: "Plumbing",
    location: "Lahore",
    desc: "Internal Plumbing of commercial premises in DHA, Lahore.",
    image: "https://picsum.photos/seed/abid-trading-dha/600/400",
  },
  {
    title: "Millat Track Housing Scheme",
    category: "Completed",
    type: "Plumbing",
    location: "Sheikhupura Road, Lahore",
    desc: "Internal plumbing of 150 residential units at Millat Track Housing Scheme.",
    image: "https://picsum.photos/seed/millat-track-housing/600/400",
  },
  {
    title: "PRMSC Residential Houses",
    category: "Completed",
    type: "Structural",
    location: "Various",
    desc: "Structural Design of 600 Residential Houses for PRMSC.",
    image: "https://picsum.photos/seed/prmsc-residential/600/400",
  },
  {
    title: "LESCO Revenue Offices",
    category: "Completed",
    type: "Architectural",
    location: "Lahore",
    desc: "Architectural Design of Revenue Offices of Lahore Electric Supply Company (LESCO).",
    image: "https://picsum.photos/seed/lesco-offices-lahore/600/400",
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
