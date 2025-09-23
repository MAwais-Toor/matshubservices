// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Package, Rocket, Building2, Crown } from "lucide-react"
import { NavLink } from "react-router";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Code,
  Monitor,
  Briefcase,
  FileText,
  Users,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Flowbase-style Navbar + Mega Menu (JSX)
 *
 * Dependencies:
 * npm i react-router-dom framer-motion lucide-react
 *
 * Requires TailwindCSS configured in your project.
 */

const PRODUCT_ITEMS = [
  { title: "Components", subtitle: "UI building blocks", to: "/product/components", Icon: Code },
  { title: "Wireframes", subtitle: "Layouts & flows", to: "/product/wireframes", Icon: Monitor },
  { title: "UI Elements", subtitle: "Buttons, inputs, etc.", to: "/product/ui-elements", Icon: Briefcase },
  { title: "Freebies", subtitle: "Free templates & kits", to: "/product/freebies", Icon: FileText },
  { title: "Boosters", subtitle: "Productivity plugins", to: "/product/boosters", Icon: Users },
  { title: "Templates", subtitle: "Ready-to-use templates", to: "/product/templates", Icon: Phone },
];

const APPS = [
  {
    name: "Chrome Extension",
    meta: "Over 15,000+ Downloads",
    // In real project replace with small svg/img assets, here we just use a colored circle
    tagBg: "bg-amber-100",
  },
  { name: "Figma Plugin", meta: "Over 16,000+ Downloads", tagBg: "bg-sky-100" },
  { name: "Chalk UI", meta: "World's largest UI system", tagBg: "bg-violet-100" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* left: logo + Club Access */}
          <div className="flex items-center gap-4">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-semibold text-white bg-gradient-to-br from-purple-600 to-indigo-500 shadow-sm">
                FB
              </div>
              <div>
                <div className="text-slate-800 font-semibold">Flowbase</div>
              </div>
            </NavLink>

            <button
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600 text-white text-sm font-medium shadow-sm hover:scale-[0.995] transition"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M12 2v20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Club Access
            </button>
          </div>

          {/* center nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/explore" className="text-slate-700 hover:text-slate-900 transition">
              Explore
            </NavLink>

            {/* Product (mega) */}
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
                Product
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {/* Mega menu */}
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    ref={megaRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="fixed left-1/2 bottom-0 -translate-x-1/2 mb-6 w-[900px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-40"
                    role="menu"
                  >
                    {/* top controls: centered pill */}
                    <div className="flex items-center justify-center -mt-8 mb-3">
                      <div className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-sm text-slate-700 shadow-sm">
                        Browse 2,000+
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {/* Left column: Product list */}
                      <div>
                        <div className="text-sm font-medium text-slate-900 mb-3">Product</div>
                        <div className="grid grid-cols-2 gap-2">
                          {PRODUCT_ITEMS.map((p) => (
                            <NavLink
                              key={p.title}
                              to={p.to}
                              className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition"
                              role="menuitem"
                            >
                              <div className="w-9 h-9 rounded-md bg-slate-50 flex items-center justify-center">
                                <p.Icon className="w-5 h-5 text-sky-500" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-slate-800">{p.title}</div>
                                <div className="text-xs text-slate-500">{p.subtitle}</div>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>

                      {/* Right column: Apps & Tools + CTA */}
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium text-slate-900">Apps & Tools</div>
                          <NavLink
                            to="/apps"
                            className="text-xs text-sky-600 hover:underline"
                          >
                            View all
                          </NavLink>
                        </div>

                        <div className="mt-3 space-y-3">
                          {APPS.map((a) => (
                            <div key={a.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition">
                              {/* small rounded icon placeholder */}
                              <div className={`w-10 h-10 rounded-md flex items-center justify-center ${a.tagBg}`}>
                                <div className="w-6 h-6 rounded-full bg-white/70" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-slate-800">{a.name}</div>
                                <div className="text-xs text-slate-500">{a.meta}</div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <div className="text-sm text-slate-600">Explore tailored solutions</div>
                          <div className="flex gap-2">
                            <NavLink to="/pricing" className="text-sm px-3 py-2 rounded-md bg-slate-50 border border-slate-100 text-slate-700 hover:bg-slate-100">
                              Pricing
                            </NavLink>
                            <NavLink to="/contact" className="text-sm px-3 py-2 rounded-md bg-sky-600 text-white shadow-sm hover:bg-sky-700">
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

            <NavLink to="/resources" className="text-slate-700 hover:text-slate-900 transition">Resources</NavLink>
            <NavLink to="/pricing" className="text-slate-700 hover:text-slate-900 transition">Pricing</NavLink>
          </nav>

          {/* right: search + auth + mobile menu */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 border border-slate-100 rounded-full px-3 py-1">
              <Search className="w-4 h-4 text-slate-400" />
              <input className="w-44 text-sm placeholder:text-slate-400 outline-none" placeholder="Search components, tools..." />
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <NavLink to="/login" className="text-sm text-slate-700 hover:underline">Login</NavLink>
              <NavLink to="/signup" className="text-sm px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm hover:shadow-md">Sign up</NavLink>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileOpen(true)} className="p-2 rounded-md">
                <Menu className="w-6 h-6 text-slate-700" />
              </button>
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
              <div className="flex items-center justify-between p-6 ">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-500 text-white flex items-center justify-center font-semibold">
                    FB
                  </div>
                  <div className="font-semibold">Flowbase</div>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-2">
                  <X className="w-5 h-5 text-slate-700" />
                </button>
              </div>

              {/* Nav Links (scrollable area) */}
              <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-3">
                <NavLink
                  to="/explore"
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-slate-700"
                >
                  Explore
                </NavLink>

                {/* Product dropdown */}
                <div>
                  <button
                    onClick={() => setServicesOpenMobile((s) => !s)}
                    className="w-full text-left flex items-center justify-between py-2 font-medium"
                  >
                    Product
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

                {/* Become a Partner Section */}
                <div className="mt-6 p-4 rounded-xl border border-dashed border-sky-400 bg-sky-50 text-center">
                  <h3 className="text-base font-semibold text-slate-800">Become a Partner</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Join our partner program and grow with us.
                  </p>
                  <NavLink
                    to="/partner"
                    onClick={() => setMobileOpen(false)}
                    className="mt-3 inline-block px-4 py-2 rounded-full bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition"
                  >
                    Get Started
                  </NavLink>
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
              <div className="p-6 ">
                <NavLink
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-colors"
                >
                  Sign Up
                </NavLink>
              </div>
            </motion.aside>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}