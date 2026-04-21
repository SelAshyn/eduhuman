"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'; // Optional: Install lucide-react for icons

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setSubmitted(true);
  };

  return (
    <div className="m-10 min-h-screen">
      {/* Header Section */}
      <section className=" py-20 text-black text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: "Merriweather, sans-serif"}}>Contact Our Team</h1>
        <p className="text-black max-w-2xl mx-auto px-4" style={{fontFamily:"Ubuntu, sans-serif"}} >
          Have questions about our educational research, HR programs, or consultancy services?
          We are here to help your institution grow.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12" style={{fontFamily: "Ubuntu, sans-serif"}}>

        {/* Left Column: Contact Information */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Reach Us</h2>
            <div className="space-y-6">
              {/* Address - From MOA */}
              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg text-green-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Registered Office</h3>
                  <p className="text-slate-600">Budhanilkantha Municipality, Ward No. 11</p>
                  <p className="text-slate-600">Kathmandu District, Nepal</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg text-green-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone Number</h3>
                  <p className="text-slate-600">+977 [Your Number]</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className=" p-3 rounded-lg text-green-700">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email Address</h3>
                  <p className="text-slate-600">info@eduhuman.com.np</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg text-green-700">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Working Hours</h3>
                  <p className="text-slate-600">Sun - Fri: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 grayscale hover:grayscale-0 transition-all">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14122.257501309865!2d85.353365!3d27.7600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1914949514e9%3A0xc07a0c7042a991f8!2sBudhanilkantha%2011!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="bg-green-100 text-green-600 p-4 rounded-full">
                <Send size={48} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Message Sent!</h2>
              <p className="text-slate-600">Thank you for reaching out. Our team will contact you shortly.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-green-600 font-medium underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="text-lg font-semibold text-slate-700">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-4">
                <label className="text-lg font-semibold text-slate-700">Email Address</label>
                <input
                  required
                  type="email"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="text-lg font-semibold text-slate-700">Organization / Institution Name</label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="School or College Name"
                />
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="text-lg font-semibold text-slate-700">Inquiry Type</label>
                <select className="w-full mt-2 px-4 py-3 rounded-xl border-2 border-slate-200 bg-white text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:border-green-300 cursor-pointer appearance-none bg-no-repeat bg-right pr-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2316a34a' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center'}}>
                  <option value="" disabled>Select an option</option>
                  <option value="educational">Educational Human Resource Development</option>
                  <option value="collaboration">Institutional Collaboration</option>
                  <option value="research">Research & Surveys</option>
                  <option value="workshops">Workshops & Training</option>
                  <option value="consulting">Educational Consulting</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-4 md:col-span-2">
                <label className="text-lg font-semibold text-slate-700">Your Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Legal Footer Note */}
      <div className="text-center pb-12 text-slate-400 text-sm italic">
        Registered under the Companies Act, 2063.
        Eduhuman Resource Development and Research Center Pvt. Ltd.
      </div>
    </div>
  );
};

export default ContactPage;
