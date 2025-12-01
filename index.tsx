import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Vite will bundle this CSS correctly
import { 
  Menu, X, ChevronRight, Phone, Mail, MapPin, 
  ArrowRight, CheckCircle, Download, Users, 
  HardHat, Truck, ShoppingCart, Leaf, Home, 
  Droplet, Briefcase, FileText, Shield, Globe, 
  Clock, Facebook, Linkedin, Twitter, MessageCircle,
  Award, TrendingUp, Building2, Zap, Star, Quote,
  Target, BarChart3, CheckCircle2, ArrowUpRight
} from 'lucide-react';

// --- Components ---

const Navigation = ({ activePage, setPage, isScrolled, mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
    { id: 'documents', label: 'Documents' },
    { id: 'safety', label: 'Safety' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setPage('home')}
        >
          <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
            {/* Logo with white background for visibility on dark backgrounds */}
            <div className="absolute inset-0 bg-white rounded-xl shadow-xl opacity-95 group-hover:opacity-100 transition-opacity border-2 border-white/50"></div>
            <img 
              src={`${import.meta.env.BASE_URL}logos/logo.png`}
              alt="DAITTOJEX Logo" 
              className="relative z-10 w-full h-full object-contain p-2 rounded-xl"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback logo */}
            <div className="absolute inset-0 bg-gold-500 rounded-xl flex items-center justify-center font-heading font-bold text-navy-900 text-xl shadow-lg logo-fallback hidden">
              D
            </div>
          </div>
          <div className="hidden md:block">
            <h1 className="text-white font-heading font-bold text-lg leading-tight tracking-wide group-hover:text-gold-500 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">DAITTOJEX</h1>
            <p className="text-gold-500 text-xs tracking-widest uppercase font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Contractors Co. Ltd</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-gold-500 relative py-2 ${activePage === link.id ? 'text-gold-500' : 'text-gray-300'}`}
            >
              {link.label}
              {activePage === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 shadow-glow"></span>
              )}
            </button>
          ))}
          <button 
            onClick={() => setPage('contact')}
            className="ml-4 bg-gold-500 text-navy-900 px-6 py-2 rounded font-bold hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Get Quote
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:text-gold-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-navy-900 border-t border-navy-800 shadow-2xl py-6 px-4 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setPage(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left text-lg font-medium py-3 px-4 rounded transition-colors ${activePage === link.id ? 'bg-navy-800 text-gold-500 border-l-4 border-gold-500' : 'text-gray-300 hover:bg-navy-800'}`}
            >
              {link.label}
            </button>
          ))}
          <button 
             onClick={() => {
              setPage('contact');
              setMobileMenuOpen(false);
            }}
            className="mt-4 w-full bg-gold-500 text-navy-900 py-3 rounded font-bold"
          >
            Request Quote
          </button>
        </div>
      )}
    </header>
  );
};

const Footer = ({ setPage }) => (
  <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-navy-800 relative overflow-hidden">
    {/* Background Decorations */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <div className="absolute inset-0 bg-white rounded-xl opacity-95 border-2 border-white/50"></div>
              <img 
                src={`${import.meta.env.BASE_URL}logos/logo.png`}
                alt="DAITTOJEX Logo" 
                className="relative z-10 w-full h-full object-contain p-2 rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.footer-logo-fallback') as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gold-500 rounded-xl flex items-center justify-center font-heading font-bold text-navy-900 text-xl footer-logo-fallback hidden">
                D
              </div>
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl">DAITTOJEX</h2>
              <p className="text-gold-500 text-xs tracking-widest">CONTRACTORS CO. LTD</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering excellence in construction, engineering, logistics, and supply across Zambia. Your success is our goal.
          </p>
          <div className="flex gap-4 pt-2">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gold-500 font-heading font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { label: 'About Company', id: 'about' },
              { label: 'Our Services', id: 'services' },
              { label: 'Projects', id: 'projects' },
              { label: 'Safety Policy', id: 'safety' },
              { label: 'Contact Us', id: 'contact' },
            ].map((link, i) => (
              <li key={i}>
                <button onClick={() => setPage(link.id)} className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 group">
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-gold-500 font-heading font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-gold-500 shrink-0 mt-1" size={18} />
              <span className="text-gray-400 text-sm">Plot 48, Head Office, Petauke, Eastern Province, Zambia</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-gold-500 shrink-0" size={18} />
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm hover:text-white transition-colors">+260 975 644 845</span>
                <span className="text-gray-400 text-sm hover:text-white transition-colors">+260 763 104 446</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-gold-500 shrink-0" size={18} />
              <span className="text-gray-400 text-sm">info@daittojex.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / Certs */}
        <div>
          <h3 className="text-gold-500 font-heading font-bold text-lg mb-6">Accreditation</h3>
          <p className="text-gray-400 text-xs mb-4">Proudly registered and compliant with:</p>
          <div className="flex flex-wrap gap-2">
            {['PACRA', 'NCC', 'ZRA', 'NAPSA', 'EIZ'].map((cert) => (
              <span key={cert} className="px-3 py-1 bg-navy-800 border border-navy-700 rounded text-xs text-gray-300 font-bold">
                {cert}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <h4 className="font-heading font-bold text-sm mb-3">Newsletter</h4>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-navy-800 text-white px-4 py-2 rounded-l w-full focus:outline-none focus:ring-1 focus:ring-gold-500 text-sm" />
              <button className="bg-gold-500 text-navy-900 px-4 py-2 rounded-r font-bold hover:bg-white transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Daittojex Contractors Co. Limited. All Rights Reserved.</p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <p>Designed for Excellence.</p>
          <a 
            href="https://byteandberry.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gold-500 transition-colors"
          >
            Made by Byte&Berry
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Sections ---

const HomePage = ({ setPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const sectors = [
    { id: 'construction', icon: HardHat, title: 'Construction', desc: 'Residential, commercial, industrial, and civil works.', color: 'from-blue-500 to-blue-700' },
    { id: 'civil-engineering', icon: Briefcase, title: 'Civil Engineering', desc: 'Roads, bridges, drainages, and earth works.', color: 'from-amber-500 to-amber-700' },
    { id: 'transport-logistics', icon: Truck, title: 'Transport', desc: 'Logistics, fleet management, and vehicle hire.', color: 'from-green-500 to-green-700' },
    { id: 'general-supply', icon: ShoppingCart, title: 'Supply', desc: 'Mining spares, hardware, office equipment, and PPE.', color: 'from-purple-500 to-purple-700' },
    { id: 'agriculture', icon: Leaf, title: 'Agriculture', desc: 'Crop production, livestock, and timber processing.', color: 'from-emerald-500 to-emerald-700' },
    { id: 'catering', icon: Droplet, title: 'Catering', desc: 'Corporate catering, beverages, and event management.', color: 'from-pink-500 to-pink-700' },
    { id: 'real-estate', icon: Home, title: 'Real Estate', desc: 'Property management, sales, and accommodation.', color: 'from-indigo-500 to-indigo-700' },
    { id: 'labour-hire', icon: Shield, title: 'Labour Hire', desc: 'Skilled and unskilled workforce solutions.', color: 'from-red-500 to-red-700' },
    { id: 'general-trading', icon: Globe, title: 'General Trading', desc: 'Import, export, and distribution services.', color: 'from-teal-500 to-teal-700' },
  ];

  const stats = [
    { value: '8+', label: 'Years Experience', icon: Clock, suffix: '' },
    { value: '50+', label: 'Projects Completed', icon: CheckCircle2, suffix: '' },
    { value: '4', label: 'Provinces Served', icon: MapPin, suffix: '' },
    { value: '100%', label: 'Compliance Rate', icon: Award, suffix: '' },
  ];

  const testimonials = [
    {
      name: 'Ministry of Infrastructure',
      role: 'Government Client',
      content: 'DAITTOJEX delivered exceptional quality on our road infrastructure project. Their attention to detail and commitment to safety is unmatched.',
      rating: 5
    },
    {
      name: 'Mining Corporation Ltd',
      role: 'Private Sector',
      content: 'Outstanding logistics and supply chain management. They consistently meet deadlines and exceed expectations.',
      rating: 5
    },
    {
      name: 'Development Agency',
      role: 'NGO Partner',
      content: 'Professional, reliable, and community-focused. DAITTOJEX understands the importance of sustainable development.',
      rating: 5
    }
  ];

  const certifications = [
    { name: 'PACRA', desc: 'Company Registration', icon: FileText },
    { name: 'NCC Grade 6', desc: 'Construction License', icon: Award },
    { name: 'ZRA', desc: 'Tax Compliance', icon: Shield },
    { name: 'NAPSA', desc: 'Social Security', icon: CheckCircle },
    { name: 'EIZ', desc: 'Engineering Institute', icon: Building2 },
  ];

  return (
    <div className="animate-fade-up">
      {/* Premium Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center bg-hero-pattern bg-cover bg-center bg-fixed overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/95 via-navy-900/85 to-navy-800/90"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10 grid-pattern"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-float delay-300"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-5xl">
            <div className="animate-fade-down delay-100">
              <span className="inline-flex items-center gap-2 py-2 px-4 border border-gold-500/50 rounded-full text-gold-500 text-xs font-bold tracking-widest uppercase mb-8 bg-navy-900/60 backdrop-blur-md glass-effect">
                <Award size={14} />
                REGISTERED: DG-379D2813DP-S18445
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-tight mb-8 animate-fade-up delay-200">
              Building The Future <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 animate-gradient-shift bg-[length:200%_auto]">
                With Excellence.
              </span>
            </h1>
            
            <p className="text-gray-200 text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed font-light animate-fade-up delay-300">
              We deliver <span className="text-gold-400 font-semibold">world-class solutions</span> in Construction, Civil Engineering, Logistics, and Supply Chain Management across Zambia. Your success is our commitment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-up delay-400">
              <button 
                onClick={() => setPage('services')} 
                className="group relative px-10 py-5 bg-gold-500 text-navy-900 font-bold rounded-lg hover:bg-white transition-all duration-300 shadow-xl hover:shadow-gold-lg transform hover:-translate-y-1 text-lg overflow-hidden btn-premium"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => setPage('contact')} 
                className="px-10 py-5 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy-900 transition-all duration-300 text-lg backdrop-blur-sm glass-effect"
              >
                Request a Quote
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap gap-6 items-center animate-fade-up delay-500">
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle size={18} className="text-gold-500" />
                <span className="text-sm">ISO Standards</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Shield size={18} className="text-gold-500" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award size={18} className="text-gold-500" />
                <span className="text-sm">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
          <div className="w-8 h-12 border-2 border-gold-500/50 rounded-full flex justify-center items-start pt-2 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-gold-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Premium Stats Bar */}
      <div ref={statsRef} className="bg-gradient-to-br from-navy-800 to-navy-900 border-b-4 border-gold-500/30 relative z-20 -mt-24 mx-4 md:mx-auto container rounded-2xl shadow-2xl p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-8 backdrop-blur-xl">
        {stats.map((stat, idx) => {
          const StatIcon = stat.icon;
          return (
            <div 
              key={idx} 
              className={`text-center border-r last:border-0 border-navy-700/50 transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center border-2 border-gold-500/30">
                  <StatIcon className="text-gold-500" size={28} />
                </div>
              </div>
              <div className="text-4xl md:text-6xl font-stats font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-3">
                {stat.value}
              </div>
              <div className="text-gray-300 text-xs md:text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Premium Intro / CEO Message Preview */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-tl-3xl z-0 opacity-20 blur-xl"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop" 
                  alt="Management" 
                  className="w-full object-cover h-[550px] transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-navy-900 to-navy-800 p-8 rounded-2xl shadow-2xl max-w-sm z-20 border-2 border-gold-500/30">
                <Quote className="text-gold-500 mb-4" size={32} />
                <p className="text-white font-heading italic text-xl mb-6 leading-relaxed">
                  "Your success is our goal. We treat every assignment as if it is the first."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center font-bold text-navy-900">
                    PM
                  </div>
                  <div>
                    <div className="text-gold-500 font-bold">Parker Moses Milanzi</div>
                    <div className="text-gray-400 text-sm uppercase">CEO & Chairman</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-gold-600 font-bold tracking-widest uppercase text-sm mb-4">
                <Target size={16} />
                About Daittojex
              </div>
              <h2 className="text-5xl font-heading font-bold text-navy-900 leading-tight">
                Innovative Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Modern Challenges</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Since 2015, <strong className="text-navy-900">DAITTOJEX CONTRACTORS CO. LIMITED</strong> has been a leader in Zambia's industrial landscape. We have transformed and challenged the usual way of doing things, emphasizing <strong className="text-gold-600">SHEQ (Safety, Health, Environment, and Quality)</strong> excellency.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are driven by dedication and a desire for growth, adding value through building relationships and innovation.
              </p>
              <ul className="space-y-4 my-8">
                {[
                  { text: '100% Zambian Owned', icon: Globe },
                  { text: 'Multi-Sector Capabilities', icon: Building2 },
                  { text: 'Safety-First Policy', icon: Shield },
                  { text: 'ISO Compliant Operations', icon: Award }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-navy-900 font-semibold text-lg group">
                    <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                      <item.icon className="text-gold-600 group-hover:text-white transition-colors" size={20} />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setPage('about')} 
                className="group inline-flex items-center gap-2 text-navy-900 font-bold text-lg border-b-2 border-gold-500 pb-2 hover:text-gold-600 transition-colors"
              >
                Read More About Us
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Showcase */}
      <section className="py-16 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-pattern"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">Accredited & Certified</h3>
            <p className="text-gray-300">Fully compliant with all regulatory requirements</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, idx) => {
              const CertIcon = cert.icon;
              return (
                <div 
                  key={idx} 
                  className="group bg-navy-800/50 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 text-center hover:bg-navy-800 hover:border-gold-500 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                    <CertIcon className="text-gold-500 group-hover:text-navy-900 transition-colors" size={32} />
                  </div>
                  <h4 className="text-gold-500 font-bold text-sm mb-1">{cert.name}</h4>
                  <p className="text-gray-400 text-xs">{cert.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 font-bold tracking-widest uppercase text-sm mb-4">
              <Star className="text-gold-500" size={16} />
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 text-lg">
              See what our clients say about working with DAITTOJEX
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold-500/30 group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <Quote className="text-gold-500/30 mb-4" size={40} />
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-bold text-navy-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 grid-pattern"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-gold-600 font-bold tracking-widest uppercase text-sm mb-4">
              <Zap size={16} />
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
              Multi-Sector <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Excellence</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Comprehensive contracting services tailored to industrial, commercial, and domestic needs across Zambia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-gold-500/50 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-navy-50 to-gray-100 flex items-center justify-center text-navy-900 group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-110">
                    <sector.icon size={32} />
                  </div>
                </div>
                
                <h3 className="relative z-10 text-2xl font-heading font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                  {sector.title}
                </h3>
                <p className="relative z-10 text-gray-600 mb-6 leading-relaxed">
                  {sector.desc}
                </p>
                <button 
                  onClick={() => setPage(`service-${sector.id}`)} 
                  className="relative z-10 text-gold-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  Learn More 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold-500/0 to-gold-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-gold-500 font-bold tracking-widest uppercase text-sm mb-6">
              <TrendingUp size={16} />
              Let's Build Together
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Project?</span>
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
              Whether it's construction, supply, or logistics, we have the expertise to deliver on time and within budget. Partner with Zambia's leading multi-sector contractor.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setPage('contact')} 
                className="group relative px-12 py-5 bg-gold-500 text-navy-900 font-bold rounded-xl text-lg hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-gold-lg transform hover:-translate-y-1 overflow-hidden btn-premium"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us Today
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => setPage('projects')} 
                className="px-12 py-5 border-2 border-gold-500 text-gold-500 font-bold rounded-xl text-lg hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 backdrop-blur-sm"
              >
                View Our Work
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2 text-white/80">
                <BarChart3 size={20} className="text-gold-500" />
                <span className="text-sm font-semibold">50+ Projects</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award size={20} className="text-gold-500" />
                <span className="text-sm font-semibold">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Shield size={20} className="text-gold-500" />
                <span className="text-sm font-semibold">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle size={20} className="text-gold-500" />
                <span className="text-sm font-semibold">100% Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-up">
      {/* Premium Hero Header */}
      <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-24 mb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-pattern"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-gold-500 font-bold tracking-widest uppercase text-sm mb-6">
            <Building2 size={16} />
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">DAITTOJEX</span>
          </h1>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
            Providing integrated management systems to meet and exceed client expectations since 2015. 
            Building excellence across Zambia's infrastructure landscape.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Premium Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border-l-8 border-gold-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                <Globe className="text-gold-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-3xl font-heading font-bold text-navy-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 italic text-xl leading-relaxed">
                "To be Africa's most preferred general contractor through delivering value to stakeholders on a sustainable basis."
              </p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-navy-900 to-navy-800 p-10 rounded-2xl shadow-xl border-l-8 border-gold-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors">
                <Target className="text-gold-400 group-hover:text-navy-900 transition-colors" size={32} />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-6">Our Mission</h3>
              <p className="text-gray-200 italic text-xl leading-relaxed">
                "We will sustain the absolute best quality service standards to our customers by treating every work assignment as if it is the first."
              </p>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
           <div className="md:w-1/2">
             <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470&auto=format&fit=crop" className="rounded shadow-2xl" alt="Construction site" />
           </div>
           <div className="md:w-1/2">
             <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">Our History & Growth</h2>
             <p className="text-gray-600 mb-6 leading-relaxed">
               DAITTOJEX CONTRACTORS CO. LIMITED is a Zambian private company limited by shares, owned by Parker M. Moses. Incorporated in 2015 and upgraded in 2017, the company has grown into a powerhouse with professional teams specialized in catering, construction, procurement, transport, and more.
             </p>
             <p className="text-gray-600 mb-6 leading-relaxed">
               Our operational bases span Petauke, Chadiza, Nyimba, and Kitwe districts. We believe in strong corporate social responsibility and economic empowerment of the immediate communities where we operate.
             </p>
           </div>
        </div>

        {/* Premium Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-gold-600 font-bold tracking-widest uppercase text-sm mb-4">
              <Award size={16} />
              What Drives Us
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Value', desc: 'Solution oriented, Adaptability, Innovation.', icon: Zap },
              { title: 'Flexibility', desc: 'Dialogue, Openness to change.', icon: Globe },
              { title: 'Credibility', desc: 'Responsibility, Reliability, Honesty.', icon: Shield },
              { title: 'Commitment', desc: 'Trustworthiness and customer focus.', icon: Target },
            ].map((val, i) => {
              const ValIcon = val.icon;
              return (
                <div 
                  key={i} 
                  className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl text-center hover:from-navy-900 hover:to-navy-800 hover:text-white transition-all duration-500 cursor-default border border-gray-200 hover:border-gold-500/50 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-navy-50 to-gray-100 text-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-lg group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                      <ValIcon size={32} />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-4">{val.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = ({ setPage = (page: string) => {} }: { setPage?: (page: string) => void }) => {
  const serviceList = [
    {
      id: 'construction',
      title: 'Construction Works',
      desc: 'Residential, commercial, and industrial buildings, bridges, drainages, dams, harbors, sewerage, and road maintenance.',
      features: ['Building & Housing', 'Structural Steel', 'Piping & Fabrication', 'Stone Pitching'],
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop',
      icon: HardHat,
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'civil-engineering',
      title: 'Civil Engineering',
      desc: 'Precast concrete works, foundation engineering, fencing, steel fixing, and water infrastructure.',
      features: ['Road Grading', 'Bituminous Surfacing', 'Paving', 'Drainage Structures'],
      img: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1374&auto=format&fit=crop',
      icon: Briefcase,
      color: 'from-amber-500 to-amber-700'
    },
    {
      id: 'transport-logistics',
      title: 'Transport & Logistics',
      desc: 'Logistics, passenger transport, warehousing, and distribution. We operate a fleet of trucks for cargo of any dimension.',
      features: ['Safe Handling', 'Modern Tracking', 'Shuttle Services', 'Heavy Duty Haulage'],
      img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop',
      icon: Truck,
      color: 'from-green-500 to-green-700'
    },
    {
      id: 'general-supply',
      title: 'General Supply',
      desc: 'Supply of electrical equipment, medical/hospital laboratory equipment, hardware, office equipment, and mining spares.',
      features: ['Medical Supplies', 'Protective Clothing (PPE)', 'Office Furniture', 'Motor Vehicle Spares'],
      img: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1374&auto=format&fit=crop',
      icon: ShoppingCart,
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      desc: 'Exploitation of vegetal and animal resources, growing crops, raising animals, and harvesting timber.',
      features: ['Crop Production', 'Livestock Breeding', 'Timber Processing', 'Food Products'],
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop',
      icon: Leaf,
      color: 'from-emerald-500 to-emerald-700'
    },
    {
      id: 'catering',
      title: 'Catering & Beverages',
      desc: 'High-quality catering solutions for corporate events, workshops, and meetings.',
      features: ['Fresh Meals', 'Dietary Accommodation', 'Hygiene Focused', 'Timely Delivery'],
      img: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop',
      icon: Droplet,
      color: 'from-pink-500 to-pink-700'
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      desc: 'Property management, sales, and accommodation services across Zambia.',
      features: ['Property Management', 'Sales & Leasing', 'Accommodation Services', 'Property Development'],
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
      icon: Home,
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      id: 'labour-hire',
      title: 'Labour Hire',
      desc: 'Skilled and unskilled workforce solutions for construction, mining, and industrial projects.',
      features: ['Skilled Workers', 'Unskilled Labor', 'Project Staffing', 'Temporary Workforce'],
      img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop',
      icon: Users,
      color: 'from-red-500 to-red-700'
    },
    {
      id: 'general-trading',
      title: 'General Trading',
      desc: 'Import, export, and distribution services for various commodities and products.',
      features: ['Import Services', 'Export Solutions', 'Distribution Network', 'Commodity Trading'],
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1469&auto=format&fit=crop',
      icon: Globe,
      color: 'from-teal-500 to-teal-700'
    }
  ];

  return (
    <div className="pt-24 pb-20 animate-fade-up">
      {/* Premium Services Header */}
      <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-24 mb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-pattern"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 text-gold-500 font-bold tracking-widest uppercase text-sm mb-6">
            <Briefcase size={16} />
            Our Services
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Expertise</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl leading-relaxed">
            Detailed overview of our multi-sector capabilities. From construction to logistics, we deliver excellence across all industries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceList.map((service, idx) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={idx}
                onClick={() => setPage(`service-${service.id}`)}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-gold-500/50 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <ServiceIcon size={40} />
                  </div>
                </div>
                
                <h3 className="relative z-10 text-2xl font-heading font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="relative z-10 flex items-center gap-2 text-gold-600 font-bold group-hover:gap-4 transition-all">
                  Learn More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-500/0 to-gold-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Service Detail Page Component
const ServiceDetailPage = ({ serviceId, setPage = (page: string) => {} }: { serviceId: string; setPage?: (page: string) => void }) => {
  const services = {
    'construction': {
      title: 'Construction Works',
      subtitle: 'Building Excellence Across Zambia',
      icon: HardHat,
      color: 'from-blue-500 to-blue-700',
      heroImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop',
      description: 'DAITTOJEX delivers world-class construction services across residential, commercial, and industrial sectors. With years of experience and a commitment to excellence, we transform visions into reality.',
      overview: 'Our construction division specializes in comprehensive building solutions, from initial design consultation to final project delivery. We handle projects of all scales with precision and professionalism.',
      services: [
        { title: 'Residential Construction', desc: 'Modern homes, apartments, and housing developments', icon: Home },
        { title: 'Commercial Buildings', desc: 'Office complexes, retail spaces, and business facilities', icon: Building2 },
        { title: 'Industrial Facilities', desc: 'Warehouses, factories, and manufacturing plants', icon: Briefcase },
        { title: 'Infrastructure Projects', desc: 'Bridges, dams, harbors, and public works', icon: Globe },
        { title: 'Renovation & Maintenance', desc: 'Building upgrades, repairs, and ongoing maintenance', icon: Shield },
        { title: 'Specialized Construction', desc: 'Stone pitching, structural steel, and custom fabrication', icon: Award }
      ],
      features: [
        'Expert project management and planning',
        'Quality materials and skilled workforce',
        'Timely project completion',
        'Safety-first approach on all sites',
        'Cost-effective solutions',
        'Post-construction support'
      ],
      stats: [
        { value: '30+', label: 'Projects Completed' },
        { value: '100%', label: 'Client Satisfaction' },
        { value: '8+', label: 'Years Experience' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    'civil-engineering': {
      title: 'Civil Engineering',
      subtitle: 'Infrastructure Excellence',
      icon: Briefcase,
      color: 'from-amber-500 to-amber-700',
      heroImg: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1374&auto=format&fit=crop',
      description: 'Our civil engineering expertise spans road construction, water infrastructure, and earthworks. We deliver durable, sustainable solutions that connect communities and drive economic growth.',
      overview: 'With advanced engineering capabilities and modern equipment, DAITTOJEX executes complex civil projects with precision. From road networks to water systems, we build infrastructure that lasts.',
      services: [
        { title: 'Road Construction', desc: 'Highways, urban roads, and rural access roads', icon: Truck },
        { title: 'Bituminous Surfacing', desc: 'Asphalt paving and road surfacing', icon: Award },
        { title: 'Drainage Systems', desc: 'Stormwater management and drainage infrastructure', icon: Droplet },
        { title: 'Earthworks', desc: 'Excavation, grading, and land preparation', icon: Globe },
        { title: 'Water Infrastructure', desc: 'Water supply systems and treatment facilities', icon: Shield },
        { title: 'Foundation Engineering', desc: 'Deep foundations and structural support', icon: Building2 }
      ],
      features: [
        'Advanced engineering techniques',
        'Modern construction equipment',
        'Environmental compliance',
        'Quality assurance programs',
        'Expert project management',
        'Long-term maintenance support'
      ],
      stats: [
        { value: '25+', label: 'Road Projects' },
        { value: '500+', label: 'KM Constructed' },
        { value: '100%', label: 'Quality Standard' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1374&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1584463635390-6c0b393cb146?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1476&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    'transport-logistics': {
      title: 'Transport & Logistics',
      subtitle: 'Moving Your Business Forward',
      icon: Truck,
      color: 'from-green-500 to-green-700',
      heroImg: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop',
      description: 'DAITTOJEX operates a modern fleet of vehicles for cargo transport, passenger services, and specialized logistics. We ensure safe, timely, and cost-effective transportation solutions.',
      overview: 'Our logistics division provides comprehensive transport services across Zambia. From heavy-duty haulage to passenger shuttles, we move goods and people efficiently and safely.',
      services: [
        { title: 'Heavy Duty Haulage', desc: 'Large cargo transport for mining and construction', icon: Truck },
        { title: 'Passenger Transport', desc: 'Shuttle services and passenger vehicles', icon: Users },
        { title: 'Warehousing', desc: 'Storage and distribution facilities', icon: Building2 },
        { title: 'Fleet Management', desc: 'Vehicle maintenance and management services', icon: Shield },
        { title: 'Logistics Planning', desc: 'Route optimization and supply chain management', icon: Globe },
        { title: 'Vehicle Hire', desc: 'Short and long-term vehicle rental', icon: Award }
      ],
      features: [
        'Modern, well-maintained fleet',
        'GPS tracking and monitoring',
        'Experienced drivers',
        '24/7 support services',
        'Insurance coverage',
        'Flexible scheduling'
      ],
      stats: [
        { value: '50+', label: 'Fleet Vehicles' },
        { value: '1000+', label: 'Trips Monthly' },
        { value: '99%', label: 'On-Time Delivery' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1586155638764-bf045442fcc5?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1528&auto=format&fit=crop'
      ]
    },
    'general-supply': {
      title: 'General Supply',
      subtitle: 'Your Trusted Supply Partner',
      icon: ShoppingCart,
      color: 'from-purple-500 to-purple-700',
      heroImg: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1374&auto=format&fit=crop',
      description: 'We supply a comprehensive range of equipment, materials, and products for mining, construction, medical, and industrial sectors. Quality products, competitive prices, reliable delivery.',
      overview: 'DAITTOJEX maintains strong supplier relationships to provide quality products across multiple sectors. From mining spares to medical equipment, we source and deliver what you need.',
      services: [
        { title: 'Mining Supplies', desc: 'Equipment, spares, and consumables for mining operations', icon: HardHat },
        { title: 'Medical Equipment', desc: 'Hospital and laboratory equipment and supplies', icon: Shield },
        { title: 'PPE & Safety Gear', desc: 'Protective clothing and safety equipment', icon: Award },
        { title: 'Office Equipment', desc: 'Furniture, technology, and office supplies', icon: Building2 },
        { title: 'Hardware & Tools', desc: 'Construction tools and hardware supplies', icon: Briefcase },
        { title: 'Vehicle Spares', desc: 'Motor vehicle parts and accessories', icon: Truck }
      ],
      features: [
        'Wide product range',
        'Quality assurance',
        'Competitive pricing',
        'Fast delivery',
        'Bulk order discounts',
        'After-sales support'
      ],
      stats: [
        { value: '500+', label: 'Product Lines' },
        { value: '100+', label: 'Suppliers' },
        { value: '24hr', label: 'Delivery Time' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1374&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518659681404-7935a840c83a?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    'agriculture': {
      title: 'Agriculture',
      subtitle: 'Cultivating Growth',
      icon: Leaf,
      color: 'from-emerald-500 to-emerald-700',
      heroImg: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop',
      description: 'Our agricultural division focuses on sustainable farming practices, crop production, livestock management, and timber processing. We contribute to food security and rural development.',
      overview: 'DAITTOJEX engages in diverse agricultural activities, from crop cultivation to livestock breeding. We combine traditional knowledge with modern techniques for optimal yields.',
      services: [
        { title: 'Crop Production', desc: 'Maize, soybeans, and other cash crops', icon: Leaf },
        { title: 'Livestock Breeding', desc: 'Cattle, goats, and poultry farming', icon: Users },
        { title: 'Timber Processing', desc: 'Sustainable forestry and wood processing', icon: Briefcase },
        { title: 'Food Products', desc: 'Processing and packaging of agricultural products', icon: Award },
        { title: 'Agricultural Consulting', desc: 'Expert advice on farming practices', icon: Globe },
        { title: 'Farm Equipment', desc: 'Supply of farming tools and machinery', icon: Truck }
      ],
      features: [
        'Sustainable practices',
        'Modern farming techniques',
        'Quality produce',
        'Market access support',
        'Training programs',
        'Community engagement'
      ],
      stats: [
        { value: '1000+', label: 'Hectares Farmed' },
        { value: '500+', label: 'Livestock Head' },
        { value: '50+', label: 'Farm Workers' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    'catering': {
      title: 'Catering & Beverages',
      subtitle: 'Excellence in Every Meal',
      icon: Droplet,
      color: 'from-pink-500 to-pink-700',
      heroImg: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop',
      description: 'We provide premium catering services for corporate events, workshops, conferences, and meetings. Fresh ingredients, professional service, and attention to detail in every meal.',
      overview: 'DAITTOJEX catering division delivers exceptional food and beverage services. From intimate meetings to large conferences, we ensure memorable dining experiences.',
      services: [
        { title: 'Corporate Catering', desc: 'Business meetings, workshops, and conferences', icon: Briefcase },
        { title: 'Event Catering', desc: 'Large events, celebrations, and gatherings', icon: Award },
        { title: 'Daily Meal Services', desc: 'Regular meal provision for offices and sites', icon: Clock },
        { title: 'Beverage Services', desc: 'Hot and cold beverages for events', icon: Droplet },
        { title: 'Dietary Accommodation', desc: 'Special dietary requirements and preferences', icon: Shield },
        { title: 'Mobile Catering', desc: 'On-site catering for remote locations', icon: Truck }
      ],
      features: [
        'Fresh, quality ingredients',
        'Hygienic preparation',
        'Professional staff',
        'Flexible menus',
        'Timely delivery',
        'Competitive pricing'
      ],
      stats: [
        { value: '200+', label: 'Events Catered' },
        { value: '5000+', label: 'Meals Served' },
        { value: '100%', label: 'Hygiene Rating' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1474&auto=format&fit=crop'
      ]
    },
    'real-estate': {
      title: 'Real Estate',
      subtitle: 'Your Property Partner',
      icon: Home,
      color: 'from-indigo-500 to-indigo-700',
      heroImg: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
      description: 'Comprehensive real estate services including property management, sales, leasing, and accommodation. We help you find, manage, and maximize your property investments.',
      overview: 'DAITTOJEX real estate division offers end-to-end property solutions. From residential to commercial properties, we provide professional services that add value.',
      services: [
        { title: 'Property Management', desc: 'Complete property administration and maintenance', icon: Building2 },
        { title: 'Sales & Leasing', desc: 'Property sales and rental services', icon: Award },
        { title: 'Accommodation Services', desc: 'Short and long-term accommodation solutions', icon: Home },
        { title: 'Property Development', desc: 'Development and construction of new properties', icon: Briefcase },
        { title: 'Property Valuation', desc: 'Professional property assessment services', icon: BarChart3 },
        { title: 'Consulting Services', desc: 'Real estate investment advice', icon: Globe }
      ],
      features: [
        'Professional management',
        'Market expertise',
        'Tenant screening',
        'Maintenance coordination',
        'Financial reporting',
        'Legal compliance'
      ],
      stats: [
        { value: '50+', label: 'Properties Managed' },
        { value: '200+', label: 'Units Available' },
        { value: '95%', label: 'Occupancy Rate' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    'labour-hire': {
      title: 'Labour Hire',
      subtitle: 'Skilled Workforce Solutions',
      icon: Users,
      color: 'from-red-500 to-red-700',
      heroImg: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop',
      description: 'We provide skilled and unskilled workforce solutions for construction, mining, and industrial projects. Qualified workers, proper documentation, and reliable service.',
      overview: 'DAITTOJEX labour hire division connects qualified workers with projects that need them. We handle recruitment, screening, and workforce management.',
      services: [
        { title: 'Skilled Workers', desc: 'Carpenters, electricians, plumbers, and tradespeople', icon: Award },
        { title: 'Unskilled Labor', desc: 'General workers and manual laborers', icon: Users },
        { title: 'Project Staffing', desc: 'Complete workforce for construction projects', icon: Briefcase },
        { title: 'Temporary Workforce', desc: 'Short-term staffing solutions', icon: Clock },
        { title: 'Supervisory Staff', desc: 'Site supervisors and project managers', icon: Shield },
        { title: 'Specialized Skills', desc: 'Heavy equipment operators and specialists', icon: HardHat }
      ],
      features: [
        'Qualified workers',
        'Background screening',
        'Proper documentation',
        'Safety training',
        'Flexible contracts',
        'Payroll management'
      ],
      stats: [
        { value: '200+', label: 'Workers Available' },
        { value: '50+', label: 'Active Projects' },
        { value: '100%', label: 'Compliance' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1476&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    'general-trading': {
      title: 'General Trading',
      subtitle: 'Global Trade Solutions',
      icon: Globe,
      color: 'from-teal-500 to-teal-700',
      heroImg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1469&auto=format&fit=crop',
      description: 'We facilitate import, export, and distribution of various commodities and products. Connecting Zambian businesses with global markets and vice versa.',
      overview: 'DAITTOJEX trading division handles international trade operations, customs clearance, and distribution networks. We make global trade accessible and efficient.',
      services: [
        { title: 'Import Services', desc: 'International procurement and import facilitation', icon: Globe },
        { title: 'Export Solutions', desc: 'Export of Zambian products to global markets', icon: ArrowUpRight },
        { title: 'Distribution Network', desc: 'Local and regional product distribution', icon: Truck },
        { title: 'Commodity Trading', desc: 'Agricultural and mineral commodity trading', icon: Award },
        { title: 'Customs Clearance', desc: 'Documentation and customs processing', icon: FileText },
        { title: 'Trade Consulting', desc: 'International trade advice and support', icon: Briefcase }
      ],
      features: [
        'Global network',
        'Customs expertise',
        'Documentation support',
        'Market intelligence',
        'Competitive rates',
        'Reliable partners'
      ],
      stats: [
        { value: '20+', label: 'Countries' },
        { value: '100+', label: 'Trade Partners' },
        { value: '24hr', label: 'Support' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1469&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1611&auto=format&fit=crop'
      ]
    }
  };

  const service = services[serviceId];
  if (!service) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-4xl font-heading font-bold text-navy-900 mb-4">Service Not Found</h1>
        <button onClick={() => setPage('services')} className="text-gold-600 hover:text-gold-700">
          Back to Services
        </button>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="pt-24 pb-20 animate-fade-up">
      {/* Premium Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.heroImg} alt={service.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30`}>
                <ServiceIcon className="text-white" size={32} />
              </div>
              <span className="text-white/90 font-bold tracking-widest uppercase text-sm">Our Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-3xl leading-relaxed">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-navy-900 mb-6">Service Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.stats.map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color} mb-4`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-navy-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg">Comprehensive solutions tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.services.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <ItemIcon size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-300 text-lg">What sets DAITTOJEX apart</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <CheckCircle className="text-gold-500 shrink-0 mt-1" size={24} />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-navy-900 mb-4">Project Gallery</h2>
            <p className="text-gray-600 text-lg">See our work in action</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.gallery.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <img src={img} alt={`${service.title} project ${idx + 1}`} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-navy-900 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your {service.title.toLowerCase()} needs and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setPage('contact')}
              className="px-10 py-5 bg-gold-500 text-navy-900 font-bold rounded-xl text-lg hover:bg-gold-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Request a Quote
            </button>
            <button 
              onClick={() => setPage('services')}
              className="px-10 py-5 border-2 border-navy-900 text-navy-900 font-bold rounded-xl text-lg hover:bg-navy-900 hover:text-white transition-all"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectsPage = ({ setPage = (page: string) => {} }: { setPage?: (page: string) => void }) => {
  const projects = [
    { 
      id: 'warehouse-construction',
      title: 'Warehouse Construction', 
      category: 'Construction', 
      img: 'https://images.unsplash.com/photo-1626262963622-c324901f463c?q=80&w=1470&auto=format&fit=crop',
      location: 'Kitwe, Zambia',
      year: '2023',
      description: 'Modern warehouse facility with advanced storage systems and logistics infrastructure.',
      details: 'A state-of-the-art warehouse facility spanning 5,000 square meters, featuring climate-controlled storage, automated inventory systems, and dedicated loading bays. The project included site preparation, foundation work, steel frame construction, roofing, and complete electrical and plumbing installations.',
      features: ['5,000 sqm facility', 'Climate-controlled storage', 'Automated systems', 'Loading bays'],
      gallery: [
        'https://images.unsplash.com/photo-1626262963622-c324901f463c?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    { 
      id: 'road-grading',
      title: 'Road Grading Project', 
      category: 'Civil Engineering', 
      img: 'https://images.unsplash.com/photo-1584463635390-6c0b393cb146?q=80&w=1470&auto=format&fit=crop',
      location: 'Eastern Province, Zambia',
      year: '2024',
      description: 'Comprehensive road grading and surfacing project connecting rural communities.',
      details: 'A major road infrastructure project covering 45 kilometers of rural access roads. The project involved extensive earthworks, grading, drainage installation, and bituminous surfacing. This critical infrastructure connects multiple communities and improves access to markets, schools, and healthcare facilities.',
      features: ['45 km road network', 'Bituminous surfacing', 'Drainage systems', 'Community access'],
      gallery: [
        'https://images.unsplash.com/photo-1584463635390-6c0b393cb146?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1374&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1476&auto=format&fit=crop'
      ]
    },
    { 
      id: 'fleet-logistics',
      title: 'Fleet Logistics Operations', 
      category: 'Transport & Logistics', 
      img: 'https://images.unsplash.com/photo-1586155638764-bf045442fcc5?q=80&w=1470&auto=format&fit=crop',
      location: 'Multiple Locations',
      year: '2023-2024',
      description: 'Comprehensive fleet management and logistics operations across Zambia.',
      details: 'Ongoing fleet management and logistics operations supporting mining, construction, and commercial sectors. Our fleet includes heavy-duty trucks, passenger vehicles, and specialized equipment. We provide 24/7 logistics support with GPS tracking, scheduled maintenance, and professional drivers.',
      features: ['50+ vehicle fleet', 'GPS tracking', '24/7 operations', 'Multi-sector support'],
      gallery: [
        'https://images.unsplash.com/photo-1586155638764-bf045442fcc5?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    { 
      id: 'housing-development',
      title: 'Housing Development', 
      category: 'Real Estate', 
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
      location: 'Petauke, Zambia',
      year: '2023',
      description: 'Residential housing development providing quality homes for families.',
      details: 'A residential development project consisting of 25 modern family homes. Each unit features 3 bedrooms, 2 bathrooms, living areas, and modern amenities. The project included site development, infrastructure installation (water, electricity, roads), and complete construction of all units.',
      features: ['25 residential units', 'Modern amenities', 'Infrastructure development', 'Quality construction'],
      gallery: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    { 
      id: 'mining-supply',
      title: 'Mining Supply Chain', 
      category: 'General Supply', 
      img: 'https://images.unsplash.com/photo-1518659681404-7935a840c83a?q=80&w=1470&auto=format&fit=crop',
      location: 'Copperbelt Province',
      year: '2024',
      description: 'Comprehensive supply chain solutions for mining operations.',
      details: 'Ongoing supply chain management for major mining operations, providing critical equipment, spare parts, PPE, and consumables. Our services include procurement, warehousing, inventory management, and just-in-time delivery to mining sites across the Copperbelt.',
      features: ['Mining equipment supply', 'PPE distribution', 'Inventory management', 'Timely delivery'],
      gallery: [
        'https://images.unsplash.com/photo-1518659681404-7935a840c83a?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1374&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    { 
      id: 'agricultural-yield',
      title: 'Agricultural Development', 
      category: 'Agriculture', 
      img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop',
      location: 'Eastern Province',
      year: '2023-2024',
      description: 'Sustainable agricultural operations and crop production.',
      details: 'Large-scale agricultural operations focusing on maize, soybeans, and other cash crops. The project includes land preparation, planting, crop management, and harvest operations. We employ modern farming techniques and sustainable practices to maximize yields while protecting the environment.',
      features: ['1,000+ hectares', 'Modern farming techniques', 'Sustainable practices', 'High yields'],
      gallery: [
        'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1470&auto=format&fit=crop'
      ]
    },
  ];

  return (
    <div className="pt-24 pb-20 animate-fade-up">
      {/* Premium Projects Header */}
      <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 grid-pattern"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-gold-500 font-bold tracking-widest uppercase text-sm mb-6">
            <Building2 size={16} />
            Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Projects</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Delivering value across diverse sectors. Showcasing excellence in every project we undertake.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              onClick={() => setPage(`project-${project.id}`)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80 hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1476&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-gold-500 text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-white font-heading font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                  <span className="mx-2">•</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-gold-500 text-navy-900 px-4 py-2 rounded-lg font-bold text-sm">
                  View Details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Project Detail Page Component
const ProjectDetailPage = ({ projectId, setPage = (page: string) => {} }: { projectId: string; setPage?: (page: string) => void }) => {
  const allProjects = [
    { 
      id: 'warehouse-construction',
      title: 'Warehouse Construction', 
      category: 'Construction', 
      img: 'https://images.unsplash.com/photo-1626262963622-c324901f463c?q=80&w=1470&auto=format&fit=crop',
      location: 'Kitwe, Zambia',
      year: '2023',
      description: 'Modern warehouse facility with advanced storage systems and logistics infrastructure.',
      details: 'A state-of-the-art warehouse facility spanning 5,000 square meters, featuring climate-controlled storage, automated inventory systems, and dedicated loading bays. The project included site preparation, foundation work, steel frame construction, roofing, and complete electrical and plumbing installations.',
      features: ['5,000 sqm facility', 'Climate-controlled storage', 'Automated systems', 'Loading bays'],
      gallery: [
        'https://images.unsplash.com/photo-1626262963622-c324901f463c?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    { 
      id: 'road-grading',
      title: 'Road Grading Project', 
      category: 'Civil Engineering', 
      img: 'https://images.unsplash.com/photo-1584463635390-6c0b393cb146?q=80&w=1470&auto=format&fit=crop',
      location: 'Eastern Province, Zambia',
      year: '2024',
      description: 'Comprehensive road grading and surfacing project connecting rural communities.',
      details: 'A major road infrastructure project covering 45 kilometers of rural access roads. The project involved extensive earthworks, grading, drainage installation, and bituminous surfacing. This critical infrastructure connects multiple communities and improves access to markets, schools, and healthcare facilities.',
      features: ['45 km road network', 'Bituminous surfacing', 'Drainage systems', 'Community access'],
      gallery: [
        'https://images.unsplash.com/photo-1584463635390-6c0b393cb146?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1374&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1476&auto=format&fit=crop'
      ]
    },
    { 
      id: 'fleet-logistics',
      title: 'Fleet Logistics Operations', 
      category: 'Transport & Logistics', 
      img: 'https://images.unsplash.com/photo-1586155638764-bf045442fcc5?q=80&w=1470&auto=format&fit=crop',
      location: 'Multiple Locations',
      year: '2023-2024',
      description: 'Comprehensive fleet management and logistics operations across Zambia.',
      details: 'Ongoing fleet management and logistics operations supporting mining, construction, and commercial sectors. Our fleet includes heavy-duty trucks, passenger vehicles, and specialized equipment. We provide 24/7 logistics support with GPS tracking, scheduled maintenance, and professional drivers.',
      features: ['50+ vehicle fleet', 'GPS tracking', '24/7 operations', 'Multi-sector support'],
      gallery: [
        'https://images.unsplash.com/photo-1586155638764-bf045442fcc5?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    { 
      id: 'housing-development',
      title: 'Housing Development', 
      category: 'Real Estate', 
      img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
      location: 'Petauke, Zambia',
      year: '2023',
      description: 'Residential housing development providing quality homes for families.',
      details: 'A residential development project consisting of 25 modern family homes. Each unit features 3 bedrooms, 2 bathrooms, living areas, and modern amenities. The project included site development, infrastructure installation (water, electricity, roads), and complete construction of all units.',
      features: ['25 residential units', 'Modern amenities', 'Infrastructure development', 'Quality construction'],
      gallery: [
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    { 
      id: 'mining-supply',
      title: 'Mining Supply Chain', 
      category: 'General Supply', 
      img: 'https://images.unsplash.com/photo-1518659681404-7935a840c83a?q=80&w=1470&auto=format&fit=crop',
      location: 'Copperbelt Province',
      year: '2024',
      description: 'Comprehensive supply chain solutions for mining operations.',
      details: 'Ongoing supply chain management for major mining operations, providing critical equipment, spare parts, PPE, and consumables. Our services include procurement, warehousing, inventory management, and just-in-time delivery to mining sites across the Copperbelt.',
      features: ['Mining equipment supply', 'PPE distribution', 'Inventory management', 'Timely delivery'],
      gallery: [
        'https://images.unsplash.com/photo-1518659681404-7935a840c83a?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1374&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop'
      ]
    },
    { 
      id: 'agricultural-yield',
      title: 'Agricultural Development', 
      category: 'Agriculture', 
      img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop',
      location: 'Eastern Province',
      year: '2023-2024',
      description: 'Sustainable agricultural operations and crop production.',
      details: 'Large-scale agricultural operations focusing on maize, soybeans, and other cash crops. The project includes land preparation, planting, crop management, and harvest operations. We employ modern farming techniques and sustainable practices to maximize yields while protecting the environment.',
      features: ['1,000+ hectares', 'Modern farming techniques', 'Sustainable practices', 'High yields'],
      gallery: [
        'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1471&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1470&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1470&auto=format&fit=crop'
      ]
    },
  ];

  const project = allProjects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-4xl font-heading font-bold text-navy-900 mb-4">Project Not Found</h1>
        <button onClick={() => setPage('projects')} className="text-gold-600 hover:text-gold-700">
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 animate-fade-up">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden mb-16">
        <div className="absolute inset-0">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 to-navy-800/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => setPage('projects')}
            className="mb-6 flex items-center gap-2 text-white hover:text-gold-500 transition-colors"
          >
            <ArrowRight size={20} className="rotate-180" />
            Back to Projects
          </button>
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/50 rounded-full text-gold-400 text-sm font-bold mb-6">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">{project.title}</h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-gold-500" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-gold-500" />
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">Project Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.description}</p>
            <p className="text-gray-600 leading-relaxed mb-12">{project.details}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-gold-500 shrink-0" size={24} />
                  <span className="text-navy-900 font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-12 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <img 
                  src={img} 
                  alt={`${project.title} - Image ${idx + 1}`} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1476&auto=format&fit=crop';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Interested in Similar Projects?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your project requirements and get a customized quote.
          </p>
          <button 
            onClick={() => setPage('contact')}
            className="px-10 py-4 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-600 transition-all shadow-xl"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

// Certificate Detail Page Component
const CertificateDetailPage = ({ certIndex, setPage = (page: string) => {} }: { certIndex: number; setPage?: (page: string) => void }) => {
  const allCertificates = [
    { 
      name: 'Certificate of Incorporation', 
      file: 'Certificate of inorporation.png',
      category: 'Registration',
      icon: Award,
      description: 'This certificate confirms that DAITTOJEX Contractors Co. Limited is a legally registered company in Zambia. It establishes our corporate identity and legal standing, allowing us to conduct business operations across all sectors.',
      importance: 'This is a fundamental document that proves our legal existence as a company. It is required for all business transactions, government contracts, banking operations, and regulatory compliance. Without this certificate, we cannot legally operate as a business entity.',
      benefits: [
        'Legal recognition as a business entity',
        'Eligibility for government contracts',
        'Banking and financial services access',
        'Tax registration and compliance',
        'Ability to enter into legal contracts'
      ]
    },
    { 
      name: 'NCC Certificate of Contractor Registration', 
      file: 'national councli for construction certificate of contractor registration.png',
      category: 'Construction License',
      icon: Building2,
      description: 'Issued by the National Council for Construction (NCC), this certificate authorizes DAITTOJEX to undertake construction projects in Zambia. It demonstrates our compliance with construction industry standards and regulations.',
      importance: 'This certificate is essential for participating in construction tenders and projects. It validates our technical capabilities, financial capacity, and adherence to construction standards. Many government and private sector projects require this certification.',
      benefits: [
        'Authorization to undertake construction projects',
        'Eligibility for construction tenders',
        'Industry recognition and credibility',
        'Compliance with construction standards',
        'Access to major construction projects'
      ]
    },
    { 
      name: 'Engineering Registration Board Certificate', 
      file: 'The engineering registration board.png',
      category: 'Engineering License',
      icon: Briefcase,
      description: 'This certificate from the Engineering Registration Board certifies that DAITTOJEX meets the professional standards required for engineering services. It validates our engineering expertise and technical capabilities.',
      importance: 'Engineering projects require certified professionals and companies. This certificate demonstrates our commitment to professional standards and enables us to undertake complex engineering projects with confidence.',
      benefits: [
        'Professional engineering recognition',
        'Access to engineering projects',
        'Technical credibility',
        'Compliance with engineering standards',
        'Professional development opportunities'
      ]
    },
    { 
      name: 'ZPPA Certificates', 
      file: 'Zppa.png',
      category: 'Procurement',
      icon: Shield,
      description: 'Zambia Public Procurement Authority (ZPPA) certificates enable DAITTOJEX to participate in public procurement processes. These certificates demonstrate our compliance with public procurement regulations.',
      importance: 'Public procurement represents a significant portion of business opportunities in Zambia. These certificates are mandatory for bidding on government contracts and public sector projects.',
      benefits: [
        'Eligibility for government tenders',
        'Access to public procurement opportunities',
        'Regulatory compliance',
        'Transparent procurement processes',
        'Competitive advantage in public sector'
      ]
    },
    { 
      name: 'Workers Compensation Fund Certificate', 
      file: 'workers compensation fund control board .png',
      category: 'Insurance',
      icon: Shield,
      description: 'This certificate confirms our registration with the Workers Compensation Fund Control Board, ensuring that our employees are covered by workers compensation insurance.',
      importance: 'Workers compensation is mandatory in Zambia and protects both employees and employers. This certificate demonstrates our commitment to employee welfare and legal compliance.',
      benefits: [
        'Employee protection and welfare',
        'Legal compliance',
        'Risk management',
        'Employee confidence',
        'Regulatory adherence'
      ]
    },
    { 
      name: 'Compliance Certificate', 
      file: 'Compliance certificate.png',
      category: 'Compliance',
      icon: CheckCircle,
      description: 'This certificate demonstrates DAITTOJEX\'s compliance with various regulatory requirements, including tax obligations, labor laws, and industry standards.',
      importance: 'Compliance certificates are essential for maintaining good standing with regulatory bodies. They enable us to operate without legal issues and build trust with clients and partners.',
      benefits: [
        'Regulatory compliance',
        'Good standing with authorities',
        'Client confidence',
        'Risk mitigation',
        'Business continuity'
      ]
    }
  ];

  // Get all certificates from DocumentsPage
  const allCerts = [
    { name: 'Certificate of Incorporation', file: 'Certificate of inorporation.png', category: 'Registration', icon: Award },
    { name: 'NCC Certificate of Contractor Registration', file: 'national councli for construction certificate of contractor registration.png', category: 'Construction License', icon: Building2 },
    { name: 'NCC Certificate of Contractor Registration (Copy 2)', file: 'national councli for construction certificate of contractor registration2.png', category: 'Construction License', icon: Building2 },
    { name: 'National Council for Construction Certificate', file: 'Natinal council for construction certificate .png', category: 'Construction License', icon: Building2 },
    { name: 'Engineering Registration Board Certificate', file: 'The engineering registration board.png', category: 'Engineering License', icon: Briefcase },
    { name: 'Practicing Certificate', file: 'Practicing certificate.png', category: 'Professional License', icon: Award },
    { name: 'ZPPA Certificate 1', file: 'Zppa.png', category: 'Procurement', icon: Shield },
    { name: 'ZPPA Certificate 2', file: 'Zppa2.png', category: 'Procurement', icon: Shield },
    { name: 'ZPPA Certificate 3', file: 'Zppa3.png', category: 'Procurement', icon: Shield },
    { name: 'Workers Compensation Fund Control Board', file: 'workers compensation fund control board .png', category: 'Insurance', icon: Shield },
    { name: 'Compliance Certificate', file: 'Compliance certificate.png', category: 'Compliance', icon: CheckCircle },
    { name: 'General Clearance Certificate', file: 'General Clearance certificate .png', category: 'Clearance', icon: CheckCircle },
    { name: 'Certificate of Attendance', file: 'certificate of attendance .png', category: 'Training', icon: Award },
    { name: 'Contact Information', file: 'contact information.png', category: 'Information', icon: FileText },
    { name: 'Financing and Banking Details', file: 'financing and banking details .png', category: 'Banking', icon: FileText },
  ];

  const certData = allCerts[certIndex];
  if (!certData) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-4xl font-heading font-bold text-navy-900 mb-4">Certificate Not Found</h1>
        <button onClick={() => setPage('documents')} className="text-gold-600 hover:text-gold-700">
          Back to Certificates
        </button>
      </div>
    );
  }

  // Get detailed info if available, otherwise use defaults
  const cert = allCertificates.find(c => c.name === certData.name) || {
    ...certData,
    description: `This certificate confirms DAITTOJEX's ${certData.category.toLowerCase()} status and compliance with relevant regulations.`,
    importance: `This certificate is important for demonstrating our ${certData.category.toLowerCase()} and regulatory compliance.`,
    benefits: [
      'Regulatory compliance',
      'Industry recognition',
      'Client confidence',
      'Business operations authorization'
    ]
  };
  const CertIcon = cert.icon;

  return (
    <div className="pt-24 pb-20 animate-fade-up min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <button 
          onClick={() => setPage('documents')}
          className="mb-8 flex items-center gap-2 text-navy-900 hover:text-gold-600 transition-colors font-semibold"
        >
          <ArrowRight size={20} className="rotate-180" />
          Back to Certificates
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center">
              <CertIcon className="text-gold-700" size={32} />
            </div>
            <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">{cert.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
            {cert.name}
          </h1>
        </div>

        {/* Certificate Image */}
        <div className="mb-12 bg-white p-8 rounded-2xl shadow-xl">
          <img 
            src={`${import.meta.env.BASE_URL}company-certificates/${cert.file}`}
            alt={cert.name}
            className="w-full h-auto rounded-lg shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `${import.meta.env.BASE_URL}company-certificates/placeholder.png`;
            }}
          />
        </div>

        {/* Description */}
        <div className="mb-12 bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6 flex items-center gap-3">
            <FileText className="text-gold-500" size={28} />
            About This Certificate
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {cert.description}
          </p>
        </div>

        {/* Importance */}
        <div className="mb-12 bg-gradient-to-br from-navy-900 to-navy-800 text-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
            <Shield className="text-gold-500" size={28} />
            Why This Certificate Matters
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            {cert.importance}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {cert.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <CheckCircle className="text-gold-500 shrink-0 mt-1" size={20} />
                <span className="text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">Download Certificate</h3>
          <button
            onClick={async () => {
              try {
                const imageUrl = `${import.meta.env.BASE_URL}company-certificates/${cert.file}`;
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = cert.file;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
              } catch (error) {
                console.error('Download failed:', error);
                // Fallback: open in new tab
                window.open(`${import.meta.env.BASE_URL}company-certificates/${cert.file}`, '_blank');
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-600 transition-colors shadow-lg cursor-pointer"
          >
            <Download size={20} />
            Download {cert.name}
          </button>
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  const team = [
    { name: 'Parker Moses Milanzi', role: 'Director / CEO', bio: 'Driving the vision and strategic direction of Daittojex with a focus on sustainable growth.' },
    { name: 'Joshua Mumba', role: 'Managing Director / Consultant', bio: 'Expert in operational management and consultancy services.' },
    { name: 'Jackson Chanda', role: 'Engineer', bio: 'Lead technical authority on civil and construction projects.' },
    { name: 'George Daka', role: 'Operations Director', bio: 'Ensuring seamless execution of logistics and site operations.' },
    { name: 'Zebby Mumba', role: 'Marketing Director', bio: 'Building brand value and client relationships.' },
    { name: 'Biscillah Milanzi', role: 'Secretary', bio: 'Managing administrative efficiency and communication.' },
  ];

  return (
    <div className="pt-24 pb-20 animate-fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold text-navy-900 mb-4">Leadership Team</h1>
          <p className="text-gray-600">Our management team is driven by dedication, innovation, and a desire for excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden border-b-4 border-gold-500 hover:shadow-2xl transition-shadow">
              <div className="h-64 bg-navy-100 relative">
                {/* Placeholder Avatar */}
                <div className="absolute inset-0 flex items-center justify-center text-navy-300">
                  <Users size={64} />
                </div>
                {/* If real images existed, they would go here */}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-navy-900">{member.name}</h3>
                <p className="text-gold-600 font-medium text-sm mb-4 uppercase tracking-wide">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-navy-900 mb-8">Organizational Structure</h3>
            <div className="inline-block p-8 border-2 border-dashed border-navy-200 rounded-xl bg-navy-50">
               <p className="text-gray-600">Chairman & CEO → Chief Director → Managers (Ops, Finance, HR, Media) → Staff</p>
            </div>
        </div>
      </div>
    </div>
  );
};

const DocumentsPage = ({ setPage = (page: string) => {} }: { setPage?: (page: string) => void }) => {
  const certificates = [
    { 
      name: 'Certificate of Incorporation', 
      file: 'Certificate of inorporation.png',
      category: 'Registration',
      icon: Award
    },
    { 
      name: 'NCC Certificate of Contractor Registration', 
      file: 'national councli for construction certificate of contractor registration.png',
      category: 'Construction License',
      icon: Building2
    },
    { 
      name: 'NCC Certificate of Contractor Registration (Copy 2)', 
      file: 'national councli for construction certificate of contractor registration2.png',
      category: 'Construction License',
      icon: Building2
    },
    { 
      name: 'National Council for Construction Certificate', 
      file: 'Natinal council for construction certificate .png',
      category: 'Construction License',
      icon: Building2
    },
    { 
      name: 'Engineering Registration Board Certificate', 
      file: 'The engineering registration board.png',
      category: 'Engineering License',
      icon: Briefcase
    },
    { 
      name: 'Practicing Certificate', 
      file: 'Practicing certificate.png',
      category: 'Professional License',
      icon: Award
    },
    { 
      name: 'ZPPA Certificate 1', 
      file: 'Zppa.png',
      category: 'Procurement',
      icon: Shield
    },
    { 
      name: 'ZPPA Certificate 2', 
      file: 'Zppa2.png',
      category: 'Procurement',
      icon: Shield
    },
    { 
      name: 'ZPPA Certificate 3', 
      file: 'Zppa3.png',
      category: 'Procurement',
      icon: Shield
    },
    { 
      name: 'Workers Compensation Fund Control Board', 
      file: 'workers compensation fund control board .png',
      category: 'Insurance',
      icon: Shield
    },
    { 
      name: 'Compliance Certificate', 
      file: 'Compliance certificate.png',
      category: 'Compliance',
      icon: CheckCircle
    },
    { 
      name: 'General Clearance Certificate', 
      file: 'General Clearance certificate .png',
      category: 'Clearance',
      icon: CheckCircle
    },
    { 
      name: 'Certificate of Attendance', 
      file: 'certificate of attendance .png',
      category: 'Training',
      icon: Award
    },
    { 
      name: 'Contact Information', 
      file: 'contact information.png',
      category: 'Information',
      icon: FileText
    },
    { 
      name: 'Financing and Banking Details', 
      file: 'financing and banking details .png',
      category: 'Banking',
      icon: FileText
    },
  ];


  return (
    <div className="pt-24 pb-20 animate-fade-up min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gold-600 font-bold tracking-widest uppercase text-sm mb-4">
            <Award size={16} />
            Certifications
          </div>
          <h1 className="text-5xl font-heading font-bold text-navy-900 mb-6">
            Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Certificates</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            View and download our official certifications, licenses, and compliance documents. All certificates are verified and up-to-date.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certificates.map((cert, idx) => {
            const CertIcon = cert.icon;
            return (
              <div 
                key={idx} 
                onClick={() => setPage(`certificate-${idx}`)}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-gold-500/50 cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-100 to-gold-200 flex items-center justify-center group-hover:from-gold-500 group-hover:to-gold-600 transition-colors">
                    <CertIcon className="text-gold-700 group-hover:text-white transition-colors" size={28} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gold-600 font-bold uppercase tracking-wide">{cert.category}</span>
                    <h3 className="text-lg font-heading font-bold text-navy-900 mt-1 group-hover:text-gold-600 transition-colors">
                      {cert.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gold-600 font-semibold text-sm">
                  View Certificate
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Banking Details Section */}
        <div className="mt-16 p-10 bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-2xl shadow-2xl border border-gold-500/20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
              <FileText className="text-gold-500" size={28} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-gold-500">Banking Details</h3>
              <p className="text-gray-400 text-sm">Official banking information for transactions</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Bank Name</p>
                <p className="font-bold text-lg">ABSA Bank Zambia</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Account Name</p>
                <p className="font-bold text-lg">DAITTOJEX CONTRACTORS CO. LIMITED</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Account Number</p>
                <p className="font-bold text-lg">09-1392747</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Branch & Sort Code</p>
                <p className="font-bold text-lg">Kitwe (Sort Code: 020209)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SafetyPage = () => (
  <div className="pt-24 pb-20 animate-fade-up">
    {/* Hero Section */}
    <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-24 mb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 grid-pattern"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-gold-500 font-bold tracking-widest uppercase text-sm mb-6">
          <Shield size={16} />
          Safety First
        </div>
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
          Safety, Health & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Environment</span>
        </h1>
        <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
          We recognize and uphold the fundamental right of every worker to operate in a workplace that is free from hazards and risks to health and safety.
        </p>
      </div>
    </div>

    <div className="container mx-auto px-4 max-w-6xl">
      {/* SHEQ Policy */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl border-l-8 border-green-500 mb-12 shadow-lg">
        <h2 className="text-green-800 font-heading font-bold text-3xl mb-6 flex items-center gap-3">
          <Shield className="text-green-600" size={32}/> 
          SHEQ Policy Commitment
        </h2>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          DAITTOJEX is committed to maintaining the highest standards of Safety, Health, Environment, and Quality (SHEQ) across all our operations. Our comprehensive SHEQ policy ensures the well-being of our employees, clients, and the communities we serve.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Every worker has safe access and egress to all work areas',
            'Competent supervision at all stages of work',
            'Adequate training in safe working methods and emergency procedures',
            'Prevention of accidents, injuries, and health risks',
            'Regular safety inspections and risk assessments',
            'Proper use of Personal Protective Equipment (PPE)',
            'Emergency response plans and procedures',
            'Environmental protection and waste management'
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
              <CheckCircle size={24} className="text-green-600 shrink-0 mt-1" />
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Standards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <Shield className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">Safety Standards</h3>
          <p className="text-gray-600 leading-relaxed">
            We adhere to international safety standards including OSHA guidelines, local safety regulations, and industry best practices. All our sites undergo regular safety audits.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <Users className="text-green-600" size={32} />
          </div>
          <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">Health & Wellness</h3>
          <p className="text-gray-600 leading-relaxed">
            Employee health is our priority. We provide health screenings, medical support, and wellness programs. All workers receive health and safety training before project commencement.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-emerald-500">
          <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
            <Leaf className="text-emerald-600" size={32} />
          </div>
          <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">Environmental Protection</h3>
          <p className="text-gray-600 leading-relaxed">
            We minimize environmental impact through sustainable practices, waste reduction, and responsible resource management. All projects comply with environmental regulations.
          </p>
        </div>
      </div>

      {/* Training & Development */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-10 rounded-2xl shadow-xl mb-12">
        <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3">
          <Award className="text-gold-500" size={32} />
          Training & Development
        </h2>
        <p className="text-gray-200 text-lg mb-8 leading-relaxed">
          Continuous training is essential for maintaining safety standards. DAITTOJEX invests in comprehensive safety training programs for all employees.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Safety Induction', desc: 'Mandatory safety orientation for all new employees and site visitors' },
            { title: 'PPE Training', desc: 'Proper selection, use, and maintenance of Personal Protective Equipment' },
            { title: 'Emergency Response', desc: 'Fire safety, first aid, and emergency evacuation procedures' },
            { title: 'Equipment Operation', desc: 'Safe operation of machinery and construction equipment' },
            { title: 'Hazard Identification', desc: 'Recognizing and mitigating workplace hazards' },
            { title: 'Environmental Awareness', desc: 'Environmental protection and waste management practices' }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-gold-400 font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Warranty Policy */}
      <div className="bg-white p-10 rounded-2xl shadow-lg border-2 border-gold-500/20 mb-12">
        <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6 flex items-center gap-3">
          <CheckCircle className="text-gold-500" size={32} />
          Warranty Policy
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          DAITTOJEX stands behind the quality of its products and services. We guarantee that all products supplied and services rendered will be free from defects and conform to agreed specifications.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-navy-900 mb-3">Product Warranty</h4>
            <p className="text-gray-600">
              All products supplied by DAITTOJEX come with manufacturer warranties. We ensure quality products and will replace or repair any defective items within the warranty period.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-navy-900 mb-3">Service Warranty</h4>
            <p className="text-gray-600">
              Our construction and engineering services are guaranteed to meet agreed specifications. We provide post-completion support and address any issues that may arise.
            </p>
          </div>
        </div>
      </div>

      {/* Safety Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: '0', label: 'Fatalities' },
          { value: '99%', label: 'Safety Compliance' },
          { value: '100%', label: 'PPE Usage' },
          { value: '500+', label: 'Trained Workers' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-8 rounded-2xl text-center shadow-lg">
            <div className="text-4xl font-bold text-gold-500 mb-2">{stat.value}</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-up bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-navy-900 text-center mb-16">Get in Touch</h1>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-bold text-navy-900 text-xl mb-6">Head Office</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy-50 text-navy-900 rounded flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase">Address</p>
                    <p className="text-navy-900">Plot 48, Main Location<br/>Petauke, Eastern Province</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy-50 text-navy-900 rounded flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase">Phone</p>
                    <p className="text-navy-900">+260 975 644 845</p>
                    <p className="text-navy-900">+260 763 104 446</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-navy-50 text-navy-900 rounded flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase">Email</p>
                    <p className="text-navy-900 break-all">daittojexcontractors.co.ltd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-900 p-8 rounded-lg shadow-lg text-white">
               <h3 className="font-bold text-gold-500 mb-4">Other Locations</h3>
               <ul className="space-y-4 text-sm">
                 <li className="border-b border-navy-700 pb-2">
                   <strong className="block text-white">Mazabuka</strong>
                   <span className="text-gray-400">Hse No 535, Kabobola Compound</span>
                 </li>
                 <li className="border-b border-navy-700 pb-2">
                   <strong className="block text-white">Kitwe</strong>
                   <span className="text-gray-400">Z2-56 Zamtan</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="+260..." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-gold-500 transition-colors">
                    <option>Construction</option>
                    <option>Supply</option>
                    <option>Transport</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-gold-500 transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full bg-navy-900 text-white font-bold py-4 rounded hover:bg-gold-500 hover:text-navy-900 transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    // Handle service detail pages
    if (activePage.startsWith('service-')) {
      const serviceId = activePage.replace('service-', '');
      return <ServiceDetailPage serviceId={serviceId} setPage={setActivePage} />;
    }
    
    // Handle project detail pages
    if (activePage.startsWith('project-')) {
      const projectId = activePage.replace('project-', '');
      return <ProjectDetailPage projectId={projectId} setPage={setActivePage} />;
    }
    
    // Handle certificate detail pages
    if (activePage.startsWith('certificate-')) {
      const certIndex = parseInt(activePage.replace('certificate-', ''));
      return <CertificateDetailPage certIndex={certIndex} setPage={setActivePage} />;
    }
    
    switch (activePage) {
      case 'home': return <HomePage setPage={setActivePage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage setPage={setActivePage} />;
      case 'projects': return <ProjectsPage setPage={setActivePage} />;
      case 'team': return <TeamPage />;
      case 'documents': return <DocumentsPage setPage={setActivePage} />;
      case 'safety': return <SafetyPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setPage={setActivePage} />;
    }
  };

  return (
    <div className="font-sans text-navy-900 bg-white min-h-screen flex flex-col">
      <Navigation 
        activePage={activePage} 
        setPage={setActivePage} 
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Floating WhatsApp / Action Button */}
      <a 
        href="https://wa.me/260975644845" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </a>

      <Footer setPage={setActivePage} />
    </div>
  );
};

// Initialize React app
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found!');
}
