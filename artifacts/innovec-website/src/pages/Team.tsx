import React from "react";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Naqi Iqbal",
    role: "CEO & COO",
    image: "/images/team-1.png",
    bio: "MSc. Civil Engineer and water infrastructure specialist with 16+ years of experience leading major projects including the $550 million World Bank-funded Punjab Rural Sustainable Water Supply & Sanitation Project, Misali Gaon flagship project, Chilas City Sewerage Scheme, and fisheries infrastructure projects. Also worked on NEOM Trojena Village Project in Saudi Arabia."
  },
  {
    name: "Ms. Sharmeen Naqi",
    role: "Director & General Manager, HR & Administration",
    image: "/images/team-2.png",
    bio: "M.Phil. in Educational Leadership and Management. Over a decade of experience in education, team leadership, quality management, and organizational development."
  },
  {
    name: "Muhammad Iqbal Bhatti",
    role: "Head of Fisheries Department",
    image: "/images/team-3.png",
    bio: "Distinguished fisheries scientist with over three decades of service to the Government of Punjab. M.Sc. Zoology and Certificate in Aquaculture from University of Stirling, Scotland. Retired Director of Fisheries in 2005."
  },
  {
    name: "Engr. Sajjad Ahmad",
    role: "Senior Civil Engineer",
    image: "/images/team-4.png",
    bio: "B.Sc. Civil Engineer, M.Sc. Structure, 16 Years Experience in complex civil infrastructure and structural design projects."
  },
  {
    name: "Engr. Obaid Ur Rehman",
    role: "Civil Engineer",
    image: "/images/team-5.png",
    bio: "B.Sc. Civil Engineer, 14 Years Experience in water supply systems, pipeline network design, and urban infrastructure."
  },
  {
    name: "Engr. Hamza Saeed",
    role: "Civil Engineer",
    image: "/images/team-1.png", // Reusing an image as placeholder
    bio: "B.Sc. Civil Engineer, M.Sc. Construction Management, 9 Years Experience managing large scale civil engineering execution."
  }
];

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroSection title="Our Leadership Team" imagePath="/images/hero-home.png" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-montserrat">Meet the Experts</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Our team consists of distinguished engineers, scientists, and management professionals dedicated to delivering excellence in every infrastructure project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-square bg-gray-200 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale-[20%] group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                    <a href="#" className="bg-white/20 hover:bg-primary p-2 rounded-full text-white backdrop-blur-sm transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-primary p-2 rounded-full text-white backdrop-blur-sm transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-8 border-t-4 border-t-transparent group-hover:border-t-primary transition-all">
                  <h3 className="text-2xl font-bold text-secondary mb-1 font-montserrat">{member.name}</h3>
                  <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
