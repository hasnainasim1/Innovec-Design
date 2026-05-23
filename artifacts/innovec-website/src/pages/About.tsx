import React from "react";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { MapPin, Phone, Award, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection title="About INNOVEC" imagePath="/images/hero-about.png" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-montserrat">Engineering Excellence</h2>
              <div className="h-1 w-20 bg-primary rounded-full mb-8"></div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  INNOVEC (Private) Limited is a premium Pakistani engineering consultancy delivering infrastructure solutions at a national and international scale. Established in 2020, we have rapidly built a reputation for technical rigor and forward-thinking design.
                </p>
                <p>
                  We specialize in water infrastructure, wet utilities, and sustainable engineering. Our portfolio spans from World Bank-funded rural water projects improving the lives of thousands, to massive megaprojects in Saudi Arabia demanding the highest global standards of engineering precision.
                </p>
                <p>
                  Our brand is built on authority and solid, modern engineering practices. We are not just a regional firm; we are a world-class consultancy trusted by international clients with $500M+ projects.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Award size={32} />
                </div>
                <h3 className="font-bold text-secondary text-lg mb-2">PEC Registered</h3>
                <p className="text-gray-600">CONSULT/2700</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="font-bold text-secondary text-lg mb-2">Established</h3>
                <p className="text-gray-600">2020</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <MapPin size={32} />
                </div>
                <h3 className="font-bold text-secondary text-lg mb-2">Headquarters</h3>
                <p className="text-gray-600 text-sm">6/4D Model Town, Lahore</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Phone size={32} />
                </div>
                <h3 className="font-bold text-secondary text-lg mb-2">Contact</h3>
                <p className="text-gray-600 text-sm">0321-4175330<br/>ceo.innovec@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">Vision & Values</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Technical Excellence", desc: "We deliver precise, rigorous engineering solutions that meet the highest international standards without compromise." },
              { title: "Sustainability", desc: "Our infrastructure designs are forward-thinking, prioritizing long-term environmental viability and resource management." },
              { title: "Integrity", desc: "We operate with absolute transparency, earning the trust of global institutions and local communities alike." },
              { title: "Innovation", desc: "We continuously adopt modern engineering practices to solve complex challenges in water and infrastructure." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg font-montserrat flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #00A651, #00BFFF)" }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="h-px flex-1 bg-white/20 group-hover:bg-white/40 transition-colors"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 font-montserrat">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
