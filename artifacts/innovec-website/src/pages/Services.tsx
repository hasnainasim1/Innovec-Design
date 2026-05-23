import React from "react";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import {
  Droplets,
  Fish,
  FlaskConical,
  Waves,
  Trash2,
  ClipboardList,
  HardHat,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Water Supply System",
    desc: "Designing efficient water distribution networks, transmission mains, storage reservoirs, and community water supply schemes for urban and rural communities.",
    icon: <Droplets size={40} strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: "Sewerage and Drainage System",
    desc: "Planning and designing comprehensive sewage collection networks and storm water drainage systems to manage urban runoff and wastewater conveyance.",
    icon: <Waves size={40} strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: "Fisheries & Aquaculture",
    desc: "Full-spectrum aquaculture infrastructure services including hatchery, land-based farming, cage farming, RAS, and aquaponics — in partnership with AkuaMaks.",
    icon: <Fish size={40} strokeWidth={1.5} />,
    subServices: [
      "Estimate and Engineering",
      "Pre-feasibility and Feasibility Services",
      "Turnkey Project Design and Installation",
      "Hatchery Project Design and Installation",
      "Land Base Farming Design and Installation",
      "Aquaponics Project Design and Installation",
      "Cage Farming Project Design and Installation",
      "RAS — Recirculating Aquaculture System",
      "Research Facility Projects",
      "Business Counselling",
      "Planning, Manufacturing & Installation",
      "Maintenance & Technical Support",
      "Import, Export & Marketing",
    ],
  },
  {
    id: 4,
    title: "Water and Wastewater Treatment",
    desc: "Engineering safe, reliable drinking water treatment facilities and advanced wastewater treatment plants with sustainable processes and modern technology.",
    icon: <FlaskConical size={40} strokeWidth={1.5} />,
  },
  {
    id: 5,
    title: "Solid Waste Management",
    desc: "Integrated solid waste management systems including collection, transfer, sanitary landfill design, and waste-to-resource engineering solutions.",
    icon: <Trash2 size={40} strokeWidth={1.5} />,
  },
  {
    id: 6,
    title: "Project Management Services",
    desc: "End-to-end project management covering feasibility, detailed design, procurement support, construction supervision, and commissioning for infrastructure projects.",
    icon: <ClipboardList size={40} strokeWidth={1.5} />,
  },
  {
    id: 7,
    title: "Other Civil Engineering Services",
    desc: "Architectural, structural, MEP, internal and external plumbing, fire fighting systems, disposal and pumping stations, and residential and commercial design.",
    icon: <HardHat size={40} strokeWidth={1.5} />,
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroSection title="Our Core Services" imagePath="/images/hero-services.png" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-montserrat">
              What We Deliver
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              From water supply to aquaculture, INNOVEC provides technically robust, sustainable engineering solutions across the full infrastructure lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                data-testid={`card-service-${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className={`bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col ${
                  service.subServices ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="text-primary mb-6 bg-primary/5 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 font-montserrat leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>

                {service.subServices && (
                  <ul className="mt-2 space-y-1.5 border-t border-gray-100 pt-4">
                    {service.subServices.map((sub) => (
                      <li key={sub} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
