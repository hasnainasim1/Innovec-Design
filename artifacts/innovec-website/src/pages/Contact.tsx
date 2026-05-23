import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out to INNOVEC. We will get back to you shortly.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroSection title="Contact Us" imagePath="/images/hero-contact.png" />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10"
            >
              <h2 className="text-3xl font-bold text-secondary mb-2 font-montserrat">Get In Touch</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will respond within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-secondary">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-secondary">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-secondary">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+92 300 0000000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-secondary">Service Interested In</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="water-supply">Water Supply Design</option>
                      <option value="water-treatment">Treatment of Drinking Water</option>
                      <option value="sewerage">Sewerage System</option>
                      <option value="wastewater">Wastewater Treatment</option>
                      <option value="pumping">Disposal / Pumping Stations</option>
                      <option value="drainage">Storm Water Drainage</option>
                      <option value="plumbing">Internal & External Plumbing</option>
                      <option value="solid-waste">Solid Waste Management</option>
                      <option value="fisheries">Fisheries & Aquaculture</option>
                      <option value="mep">Architectural, Structural & MEP</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-secondary">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-md transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">Processing...</span>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Head Office</h3>
                    <p className="text-gray-600 text-sm">6/4D Model Town<br/>Lahore, Pakistan</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Call Us</h3>
                    <p className="text-gray-600 text-sm">0321-4175330</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Email Us</h3>
                    <a href="mailto:ceo.innovec@gmail.com" className="text-primary hover:underline text-sm break-all">
                      ceo.innovec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">Working Hours</h3>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9am to 6pm<br/>Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-inner h-[300px] md:h-full min-h-[300px] border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.55134706596!2d74.32115161514936!3d31.48152508138128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919043235b3e215%3A0xc6c35c6e88e2bb61!2sModel%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1655000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="INNOVEC Office Location"
                ></iframe>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
