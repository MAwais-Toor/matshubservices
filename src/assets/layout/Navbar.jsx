// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Package, Rocket, Building2, Crown, LayoutGrid } from "lucide-react"
import { NavLink } from "react-router";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Monitor,
  Phone,
  BookOpen,
  HandCoins,
  Mail,
  Globe,
  ShoppingCart,
  Megaphone,
  Palette,


} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



const PRODUCT_ITEMS = [
  {
    title: "E-commerce",
    subtitle: "Setup and manage your online store",
    to: "/product/components",
    Icon: ShoppingCart
  },
  {
    title: "Facebook Page Creation",
    subtitle: "Design and optimize your business page",
    to: "/product/wireframes",
    Icon: Monitor
  },
  {
    title: "Facebook Ads & Marketing",
    subtitle: "Run targeted ad campaigns effectively",
    to: "/product/ui-elements",
    Icon: Megaphone
  },
  {
    title: "Digital Marketing",
    subtitle: "Grow your brand with online strategies",
    to: "/product/freebies",
    Icon: Globe
  },
  {
    title: "Posters & Logo Design",
    subtitle: "Create impactful graphics & branding",
    to: "/product/boosters",
    Icon: Palette
  },
  {
    title: "Google Ads",
    subtitle: "Reach more customers with Google campaigns",
    to: "/product/templates",
    Icon: Search
  },
];

const APPS = [
  {
    name: "MATsEdu",
    meta: "750+ Students",
    tagBg: "bg-indigo-100"
  },
  { name: "MATsEarn", meta: "Join our program and earn rewards", tagBg: "bg-sky-100" },
  { name: "MATsAffiliate", meta: "Promote our services and earn commissions", tagBg: "bg-violet-100" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const megaRef = useRef(null);
  const hoverTimer = useRef(null);

  // Close mega when clicked outside or ESC
  useEffect(() => {
    function handleClick(e) {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    }
    function handleKey(e) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const openMegaWithDelay = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setMegaOpen(true), 70);
  };
  const closeMegaWithDelay = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <header className="relative bg-white">
      {/* optional soft background shape (like your screenshot) */}
      <div className="absolute inset-x-0 -top-16 h-36 pointer-events-none bg-gradient-to-b from-violet-50 to-transparent" />

      <div className="sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Left Section */}
            <div className="flex items-center gap-2">
              {/* Mobile Sidebar Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setLeftSidebarOpen(true)}
                  className="p-2 rounded-md hover:bg-slate-100 transition"
                >
                  <LayoutGrid className="w-6 h-6 text-slate-700" />
                </button>
              </div>

              {/* Logo */}
              <NavLink to="/" className="flex items-center gap-3">
                <div className="w-40 flex items-center justify-center">
                  <img className="max-w-full h-auto" src="/logo.png" alt="Logo" />
                </div>
              </NavLink>

            </div>

            {/* Center Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink
                to="/"
                className="text-slate-700 hover:text-slate-900 font-medium transition"
              >
                Home
              </NavLink>

              {/* Product Mega Menu */}
              <div
                className="relative"
                onMouseEnter={openMegaWithDelay}
                onMouseLeave={closeMegaWithDelay}
              >
                <button
                  onClick={() => setMegaOpen((s) => !s)}
                  aria-expanded={megaOpen}
                  className="flex items-center gap-1 text-slate-700 hover:text-slate-900 transition font-medium"
                >
                  Features
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>

                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      ref={megaRef}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full mt-4 -translate-x-1/2 w-[900px] max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 z-40"
                      role="menu"
                    >
                      {/* Top Badge */}
                      <div className="flex items-center justify-center -mt-8 mb-3">
                        <div className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-700 shadow-sm">
                          MATsHub Services
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Product list (Left → 2/3) */}
                        <div className="col-span-2">
                          <div className="text-sm font-semibold text-slate-900 mb-3">
                            Features
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {PRODUCT_ITEMS.map((p) => (
                              <NavLink
                                key={p.title}
                                to={p.to}
                                className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition"
                                role="menuitem"
                              >
                                <div className="w-9 h-9 rounded-md bg-slate-50 flex items-center justify-center shadow-sm">
                                  <p.Icon className="w-5 h-5 text-sky-500" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-slate-800">
                                    {p.title}
                                  </div>
                                  <div className="text-xs text-slate-500">
                                    {p.subtitle}
                                  </div>
                                </div>
                              </NavLink>
                            ))}
                          </div>
                        </div>

                        {/* Apps + CTA (Right → 1/3) */}
                        <div className="col-span-1">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-semibold text-slate-900">
                              Other Programs
                            </div>
                            <NavLink
                              to="/apps"
                              className="text-xs text-sky-600 hover:underline"
                            >
                              View all
                            </NavLink>
                          </div>

                          <div className="mt-3 space-y-3">
                            {APPS.map((a) => (
                              <div
                                key={a.name}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition"
                              >
                                <div
                                  className={`w-10 h-10 rounded-md flex items-center justify-center ${a.tagBg}`}
                                >
                                  <div className="w-6 h-6 rounded-full bg-white/70" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-slate-800">
                                    {a.name}
                                  </div>
                                  <div className="text-xs text-slate-500">
                                    {a.meta}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col items-center gap-3">
                            <div className="text-sm text-slate-600">
                              Explore tailored solutions
                            </div>
                            <div className="flex gap-2">
                              <NavLink
                                to="/pricing"
                                className="text-sm px-3 py-2 rounded-md bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100"
                              >
                                Pricing
                              </NavLink>
                              <NavLink
                                to="/contact"
                                className="text-sm px-3 py-2 rounded-md bg-sky-600 text-white shadow hover:bg-sky-700"
                              >
                                Get a Quote
                              </NavLink>
                            </div>
                          </div>

                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <NavLink
                to="/courses"
                className="text-slate-700 hover:text-slate-900 font-medium transition"
              >
                Courses
              </NavLink>
              <NavLink
                to="/resources"
                className="text-slate-700 hover:text-slate-900 font-medium transition"
              >
                Resources
              </NavLink>
              <NavLink
                to="/pricing"
                className="text-slate-700 hover:text-slate-900 font-medium transition"
              >
                Pricing
              </NavLink>

            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Get Started Button */}
              <NavLink
                to="/getstarted"
                className="hidden md:inline-block text-sm px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-md hover:shadow-lg hover:scale-[0.98] transition"
              >
                Get Started
              </NavLink>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileOpen(true)}
                  className="p-2 rounded-md hover:bg-slate-100 transition"
                >
                  <Menu className="w-6 h-6 text-slate-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
            <motion.button
              aria-label="close"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
            />
            <motion.aside
              initial={{ x: "100%", opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: "100%", opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute right-0 top-0 bottom-0 w-full sm:w-4/5 bg-white shadow-xl flex flex-col"
            >

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">


                <div className="flex items-center">
                  <div className="w-35 flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2">
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>

              {/* Nav Links (scrollable area) */}
              <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-3">
                <NavLink
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-slate-700"
                >
                  Home
                </NavLink>

                {/* Product dropdown */}
                <div>
                  <button
                    onClick={() => setServicesOpenMobile((s) => !s)}
                    className="w-full text-left flex items-center justify-between py-2 font-medium"
                  >
                    Features
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${servicesOpenMobile ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpenMobile && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 space-y-2">
                          {PRODUCT_ITEMS.map((p) => (
                            <NavLink
                              key={p.title}
                              to={p.to}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-start gap-3 p-2 rounded hover:bg-slate-50"
                            >
                              <div className="w-8 h-8 rounded-md bg-slate-50 flex items-center justify-center">
                                <p.Icon className="w-4 h-4 text-sky-500" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-slate-800">
                                  {p.title}
                                </div>
                                <div className="text-xs text-slate-500">{p.subtitle}</div>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <NavLink
                to="/courses"
                  className="py-2 text-slate-700"
                >
                  Courses
                </NavLink>
                <NavLink
                  to="/resources"
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-slate-700"
                >
                  Resources
                </NavLink>
                <NavLink
                  to="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-slate-700"
                >
                  Pricing
                </NavLink>
                {/* grids */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-start">
                    <div className="w-10 h-10 rounded-md bg-sky-100 flex items-center justify-center mb-2">
                      <Package className="w-5 h-5 text-sky-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800">Basic Service</h3>
                    <p className="text-xs text-slate-600 mt-1">Starter tools and features.</p>
                  </div>

                  <div className="p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-start">
                    <div className="w-10 h-10 rounded-md bg-purple-100 flex items-center justify-center mb-2">
                      <Rocket className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800">Pro Service</h3>
                    <p className="text-xs text-slate-600 mt-1">Advanced features for teams.</p>
                  </div>

                  <div className="p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-start">
                    <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center mb-2">
                      <Building2 className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800">Business Service</h3>
                    <p className="text-xs text-slate-600 mt-1">For growing businesses.</p>
                  </div>

                  <div className="p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-start">
                    <div className="w-10 h-10 rounded-md bg-yellow-100 flex items-center justify-center mb-2">
                      <Crown className="w-5 h-5 text-yellow-600" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-800">Enterprise</h3>
                    <p className="text-xs text-slate-600 mt-1">Custom solutions & support.</p>
                  </div>
                </div>


                {/* Social Icons Section */}
                <div className="mt-8 border-t border-slate-200 pt-4 flex justify-center gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-sky-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-slate-600" viewBox="0 0 24 24">
                      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1 .9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
                    </svg>
                  </a>

                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-sky-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-slate-600" viewBox="0 0 24 24">
                      <path d="M19.6 7.2c.8-.5 1.4-1.2 1.7-2-.8.5-1.6.8-2.5 1a4.2 4.2 0 0 0-7.2 3.8c-3.5-.2-6.7-1.9-8.8-4.6a4.1 4.1 0 0 0-.6 2.2 4.2 4.2 0 0 0 1.9 3.5c-.7 0-1.4-.2-2-.5v.1a4.3 4.3 0 0 0 3.4 4.2c-.6.2-1.3.2-2 .1a4.3 4.3 0 0 0 4 3A8.5 8.5 0 0 1 3 18.6 12 12 0 0 0 9.3 20c7.5 0 11.7-6.2 11.7-11.6v-.5c.8-.5 1.4-1.2 1.9-1.9-.7.3-1.5.6-2.3.7z" />
                    </svg>
                  </a>

                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-sky-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-slate-600" viewBox="0 0 24 24">
                      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 5 3.5zm.02 4.75h-.02c0-.02 0-.02 0 0zm0 0H2V21h3V8.25zM9 8.25h-3V21h3v-6.25c0-1.73.5-3 2.25-3 1.7 0 2.25 1.27 2.25 3V21h3v-7.25c0-3.4-1.8-5-4.25-5-2 0-2.9 1-3.25 1.7h-.05V8.25z" />
                    </svg>
                  </a>
                </div>

              </nav>


              {/* Sticky Bottom CTA */}
              <div className="p-6 border-t border-slate-200">
                <NavLink
                  to="/getstarted"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-800 transition-colors"
                >
                  Get Started
                </NavLink>
              </div>
            </motion.aside>

          </motion.div>
        )}
      </AnimatePresence>
      {/* Left Sidebar (Mobile Only) */}
      <AnimatePresence>
        {leftSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            {/* Overlay */}
            <motion.button
              aria-label="close"
              onClick={() => setLeftSidebarOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "-100%", opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: "-100%", opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-full w-full sm:w-[380px] bg-white shadow-2xl flex flex-col z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div className="flex items-center">
                  <div className="w-35 flex items-center justify-center">
                    <img
                      src="/logo.png"
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setLeftSidebarOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>

              {/* Main Content */}
              <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-10">
                {/* Projects Section */}
                <section>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase mb-4 tracking-wide">
                    Our Projects
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {/* MATsEdu */}
                    <NavLink
                      to="/matsedu"
                      onClick={() => setLeftSidebarOpen(false)}
                      className="group flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:shadow-lg transition bg-white"
                    >
                      <div className="w-11 h-11 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <span className="mt-2 text-sm font-medium text-slate-700 group-hover:text-indigo-600">
                        MATsEdu
                      </span>
                    </NavLink>

                    {/* MATsBrand */}
                    <NavLink
                      to="/matsbrand"
                      onClick={() => setLeftSidebarOpen(false)}
                      className="group flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 hover:border-purple-500 hover:shadow-lg transition bg-white"
                    >
                      <div className="w-11 h-11 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition">
                        <LayoutGrid className="w-5 h-5" />
                      </div>
                      <span className="mt-2 text-sm font-medium text-slate-700 group-hover:text-purple-600">
                        MATsBrand
                      </span>
                    </NavLink>
                  </div>
                </section>

                {/* Earn With Us */}
                <section>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase mb-4 tracking-wide flex items-center gap-2">
                    <HandCoins className="w-4 h-4 text-green-600" />
                    Earn With Us
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Array(6)
                      .fill(null)
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition bg-white"
                        >
                          <img
                            src="https://raw.githubusercontent.com/Abdurrahman-Subh/mdx-blog/main/images/logo-fiverr.png"
                            alt="Fiverr"
                            className="w-full h-20 object-contain bg-gray-50 hover:scale-105 transition-transform"
                          />
                        </div>
                      ))}
                  </div>
                </section>

                {/* Become a Partner */}
                <section className="p-5 rounded-xl border border-dashed border-sky-400 bg-sky-50 text-center shadow-sm">
                  <h3 className="text-base font-semibold text-slate-800">
                    Become a Partner
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Join our partner program and grow with us.
                  </p>
                  <NavLink
                    to="/partner"
                    onClick={() => setLeftSidebarOpen(false)}
                    className="mt-3 inline-block px-4 py-2 rounded-full bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition"
                  >
                    Get Started
                  </NavLink>
                </section>

                {/* Contact Section */}
                <section className="p-5 rounded-xl border border-slate-200 bg-gray-50 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-800 mb-3">
                    Contact Us
                  </h3>
                  <div className="flex flex-col gap-3 text-sm text-slate-700">
                    {/* Phone */}
                    <a
                      href="tel:03492006206"
                      className="flex items-center gap-3 hover:text-indigo-600 transition"
                    >
                      <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span>0349 2006206</span>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:matshub.info@gmail.com"
                      className="flex items-center gap-3 hover:text-indigo-600 transition"
                    >
                      <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-sm">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span>matshub.info@gmail.com</span>
                    </a>
                  </div>
                </section>
              </nav>


            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>



    </header>
  );
}