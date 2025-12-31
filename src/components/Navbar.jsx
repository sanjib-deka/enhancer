import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/20">
            <span className="text-2xl font-bold text-white">S</span>
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">
            Snap<span className="text-yellow-500">Enhance</span>
          </span>
        </div>

        {/* Navigation Placeholder */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-yellow-500 transition-colors">How it works</a>
          <a href="#" className="text-sm font-semibold text-slate-600 hover:text-yellow-500 transition-colors">Pricing</a>
          <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;