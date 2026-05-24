import React from "react";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const team = [
  {
    name: "Naqi Iqbal",
    role: "CEO & COO",
    image: "/naqi.png",
    bio: "MSc. Civil Engineer and water infrastructure specialist with 16+ years of experience leading major projects including the $550 million World Bank-funded Punjab Rural Sustainable Water Supply & Sanitation Project, Misali Gaon flagship project, Chilas City Sewerage Scheme, and fisheries infrastructure projects. Also worked on NEOM Trojena Village Project in Saudi Arabia.",
  },
  {
    name: "Ms. Sharmeen Naqi",
    role: "Director & General Manager, HR & Administration",
    image: "/sharmeen.png",
    bio: "M.Phil. in Educational Leadership and Management. Over a decade of experience in education, team leadership, quality management, and organizational development.",
  },
  {
    name: "Muhammad Iqbal Bhatti",
    role: "Head of Fisheries Department",
    image: "/iqbal.png",
    bio: "Distinguished fisheries scientist with over three decades of service to the Government of Punjab. M.Sc. Zoology and Certificate in Aquaculture from University of Stirling, Scotland. Retired Director of Fisheries in 2005.",
  },
  {
    name: "Dr. Razi Iqbal",
    role: "Senior IT Consultant",
    image: "/razi-iqbal.png",
    bio: "Ph.D. in Computer Science, Senior Member of IEEE, and accomplished researcher in AI Efficiency and TinyAI. Certified NVIDIA Instructor and Azure Data Scientist with extensive experience in Deep Learning, Neural Network Compression, and AI implementation. Brings strong academic and practical expertise in modern technology solutions.",
  },
  {
    name: "Ali Iqbal",
    role: "Senior IT Consultant",
    image: "/ali-iqbal.png",
    bio: "Seasoned Project Management and IT Consultant with over 10 years of international experience. Holds PMP®, CSM®, CSPO®, MBA, and MSPM certifications. Expertise includes Agile project delivery, stakeholder management, team productivity enhancement, and emerging technologies including Blockchain.",
  },
  {
    name: "Engr. Sajjad Ahmad",
    role: "Senior Civil Engineer",
    image: null,
    bio: "B.Sc. Civil Engineer, M.Sc. Structure, 16 Years Experience in complex civil infrastructure and structural design projects.",
  },
  {
    name: "Engr. Obaid Ur Rehman",
    role: "Civil Engineer",
    image: null,
    bio: "B.Sc. Civil Engineer, 14 Years Experience in water supply systems, pipeline network design, and urban infrastructure.",
  },
  {
    name: "Engr. Hamza Saeed",
    role: "Civil Engineer",
    image: null,
    bio: "B.Sc. Civil Engineer, M.Sc. Construction Management, 9 Years Experience managing large scale civil engineering execution.",
  },
];

function getInitials(name: string) {
  return name
    .replace(/^(Engr\.|Ms\.|Mr\.)\s*/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroSection title="Our Leadership Team" imagePath="/images/hero-home.png" />

      {/* Team Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-montserrat">
              Meet the Experts
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Our team consists of distinguished engineers, scientists, and management professionals dedicated to delivering excellence in every infrastructure project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                data-testid={`card-team-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="aspect-square overflow-hidden relative">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#003087] to-[#004db3]">
                      <span className="text-6xl font-bold text-white font-montserrat tracking-wider select-none">
                        {getInitials(member.name)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <a
                      href="mailto:ceo.innovec@gmail.com"
                      className="bg-white/20 hover:bg-primary p-2 rounded-full text-white backdrop-blur-sm transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-8 border-t-4 border-t-transparent group-hover:border-t-primary transition-all">
                  <h3 className="text-xl font-bold text-secondary mb-1 font-montserrat">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-montserrat">
              Organizational Chart
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              A structured organization built for technical excellence, professional management, and project delivery at every level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <img
              src="/organogram.png"
              alt="INNOVEC Organizational Chart"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
