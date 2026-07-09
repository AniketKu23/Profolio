"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-brand-red">05.</span> Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          
          {/* Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-6"
          >
            <a href="mailto:kkaniket23@gmail.com" className="flex items-center gap-4 p-6 bg-card-bg border border-card-border rounded-2xl hover:border-brand-red group transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-brand-red transition-colors" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="text-white font-medium">kkaniket23@gmail.com</div>
              </div>
            </a>
            
            <a href="tel:+919458851975" className="flex items-center gap-4 p-6 bg-card-bg border border-card-border rounded-2xl hover:border-brand-red group transition-colors">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                <Phone className="w-5 h-5 text-gray-300 group-hover:text-brand-red transition-colors" />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Phone</div>
                <div className="text-white font-medium">+91 9458851975</div>
              </div>
            </a>
            
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/aniketku23" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-card-bg border border-card-border rounded-xl flex items-center justify-center hover:bg-brand-red/10 hover:border-brand-red hover:text-brand-red transition-all text-gray-400">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/aniketku23" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-card-bg border border-card-border rounded-xl flex items-center justify-center hover:bg-brand-red/10 hover:border-brand-red hover:text-brand-red transition-all text-gray-400">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-card-bg border border-card-border p-8 rounded-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-brand-red peer transition-colors"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-red"
                  >
                    Name
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-brand-red peer transition-colors"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-red"
                  >
                    Email
                  </label>
                </div>
              </div>
              
              <div className="relative group pt-4">
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-white/10 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-brand-red peer transition-colors resize-none"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:text-brand-red"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-brand-red text-white font-medium rounded-xl flex items-center justify-center gap-3 hover:bg-red-700 transition-colors disabled:opacity-70 group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
