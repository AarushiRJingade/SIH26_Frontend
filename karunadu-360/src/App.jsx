import React from 'react';
import { Search, MapPin, Map as MapIcon, SlidersHorizontal, Maximize2, Users, ArrowRight, Bell, Filter } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige font-sans">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-brand-beige">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
            <span className="text-brand-orange text-xs">🌿</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-brand-green leading-none">ಕರುನಾಡು360</h1>
            <p className="text-[10px] tracking-widest text-brand-green/70 uppercase font-semibold">Karnataka Atlas</p>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold text-brand-green">
          <a href="#" className="hover:text-brand-orange transition-colors">Explore</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Travel well</a>
          <a href="#" className="hover:text-brand-orange transition-colors">Local network</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex px-4 py-2 text-sm font-semibold border border-brand-green rounded-full text-brand-green hover:bg-brand-green hover:text-white transition-colors items-center gap-2">
            <MapIcon size={16} /> Manager view
          </button>
          <button className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center">
            <span className="text-sm">✨</span>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-brand-green px-4 md:px-8 py-16 md:py-20 text-white flex flex-col items-start">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-brand-orange text-xs font-bold tracking-widest uppercase mb-6">
            <MapIcon size={14} /> A living map for a living landscape
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
            Find the quieter<br />way into<br />Karnataka.
          </h2>
          <p className="text-brand-beige/80 text-base md:text-lg mb-10 max-w-xl">
            Explore places that welcome you well, read the ground truth before you go, and leave every trail a little more alive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
            <div className="flex-1 bg-white rounded-full flex items-center px-4 py-3 sm:py-2 gap-3 text-brand-green">
              <Search size={20} className="text-brand-green/50 shrink-0" />
              <input 
                type="text" 
                placeholder="Search forests, falls, heritage..." 
                className="w-full bg-transparent outline-none placeholder-brand-green/50 font-medium text-sm md:text-base"
              />
            </div>
            <button className="bg-brand-orange text-brand-green font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-400 transition-colors">
              Plan a mindful route <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* MAP & DESTINATIONS SECTION */}
      <section className="px-4 md:px-8 py-12 md:py-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-brand-orange text-xs font-bold tracking-widest uppercase mb-2">
              <MapPin size={14} /> Live Destination Map
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-green">Make room for wonder.</h3>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-brand-green/70 font-medium bg-brand-green/5 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Live signals updated 4 min ago
            <Bell size={14} className="ml-1" />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          {/* Map Container */}
          <div className="flex-1 bg-[#a3b1a2] rounded-3xl relative overflow-hidden min-h-[400px] md:min-h-[500px] shadow-inner">
            {/* Map Overlay Elements */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold text-brand-green shadow-sm flex items-center gap-2 z-10">
              <span className="w-2 h-2 rounded-full bg-brand-orange"></span> Western Ghats region
            </div>

            <div className="absolute top-4 right-4 md:top-6 md:right-6 flex flex-col gap-2 z-10">
              <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-brand-green shadow-sm hover:bg-white transition-colors"><SlidersHorizontal size={16}/></button>
              <button className="w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-brand-green shadow-sm hover:bg-white transition-colors"><Maximize2 size={16}/></button>
            </div>

            {/* Map Pins (Simulated positions) */}
            <div className="absolute top-1/3 left-1/4 flex flex-col items-center group z-10">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full border-[3px] md:border-4 border-white shadow-lg flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform"><MapPin size={16} fill="currentColor"/></div>
              <div className="bg-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full mt-2 shadow-sm whitespace-nowrap">Coorg coffee country</div>
            </div>

            <div className="absolute top-1/2 right-1/3 w-6 h-6 md:w-8 md:h-8 bg-brand-orange rounded-full border-[3px] md:border-4 border-white shadow-lg flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform z-10"><MapPin size={12} fill="currentColor"/></div>
            
            <div className="absolute bottom-1/3 right-1/4 w-6 h-6 md:w-8 md:h-8 bg-[#d96c4a] rounded-full border-[3px] md:border-4 border-white shadow-lg flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform z-10"><MapPin size={12} fill="currentColor"/></div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white/90 backdrop-blur p-3 md:p-4 rounded-xl md:rounded-2xl shadow-sm text-[10px] md:text-xs font-medium text-brand-green/80 z-10">
              <div className="flex items-center gap-1.5 mb-2 font-bold text-brand-green">
                <Filter size={12}/> Crowd levels
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> quiet</div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-orange"></span> moderate</div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#d96c4a]"></span> busy</div>
              </div>
            </div>
          </div>

          {/* Destinations Sidebar */}
          <div className="w-full xl:w-[400px] bg-white rounded-3xl p-5 md:p-6 shadow-sm flex flex-col border border-brand-green/5 shrink-0">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest text-brand-green/50 uppercase">Destinations</h4>
                <p className="font-bold text-brand-green text-sm md:text-base">3 places worth slowing down for</p>
              </div>
              <button className="p-2 hover:bg-brand-green/5 rounded-full transition-colors"><Filter size={16} className="text-brand-green/50" /></button>
            </div>

            <div className="space-y-3 flex-1">
              {/* Card 1: Coorg */}
              <div className="bg-brand-card p-3 md:p-4 rounded-2xl border border-emerald-500/20 cursor-pointer">
                <div className="flex gap-3 md:gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-emerald-900 overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1598228723793-52759bba239c?w=200&h=200&fit=crop" alt="Coorg" className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-green text-sm">Coorg coffee country</h5>
                    <p className="text-[10px] md:text-xs text-brand-green/60 mb-1.5 md:mb-2">Kodagu · Western Ghats</p>
                    <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 shrink-0"></span> Quiet 
                      <span className="text-brand-green/40">· Eco-score 82</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 md:mt-4 md:pt-4 border-t border-brand-green/10">
                  <p className="text-[11px] md:text-xs text-brand-green/80 mb-2 md:mb-3 leading-relaxed">Many estate trails, bird calls, and a slower morning rhythm.</p>
                  <button className="text-[11px] md:text-xs font-bold text-brand-orange flex items-center gap-1 hover:text-orange-500 transition-colors">View place notes <ArrowRight size={12}/></button>
                </div>
              </div>

              {/* Card 2: Jog Falls */}
              <div className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-2xl hover:bg-brand-green/5 transition-colors cursor-pointer border border-transparent">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-slate-800 overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1621213032549-388f6c321481?w=200&h=200&fit=crop" alt="Jog Falls" className="w-full h-full object-cover opacity-80" />
                </div>
                <div>
                  <h5 className="font-bold text-brand-green text-sm">Jog Falls</h5>
                  <p className="text-[10px] md:text-[11px] text-brand-green/60 mb-1 md:mb-1.5">Shivamogga · Malnad</p>
                  <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-orange shrink-0"></span> Moderate 
                    <span className="text-brand-green/40">· Eco-score 74</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Hampi */}
              <div className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-2xl hover:bg-brand-green/5 transition-colors cursor-pointer border border-transparent">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-900 overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1620766165457-a8025baa82e0?w=200&h=200&fit=crop" alt="Hampi" className="w-full h-full object-cover opacity-80" />
                </div>
                <div>
                  <h5 className="font-bold text-brand-green text-sm">Hampi heritage loop</h5>
                  <p className="text-[10px] md:text-[11px] text-brand-green/60 mb-1 md:mb-1.5">Vijayanagara · North Karnataka</p>
                  <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#d96c4a] shrink-0"></span> Busy 
                    <span className="text-brand-green/40">· Eco-score 61</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-2.5 md:py-3 mt-4 text-xs md:text-sm font-bold text-brand-green border border-brand-green/20 rounded-full hover:bg-brand-green hover:text-white transition-colors flex items-center justify-center gap-2">
              See all destinations <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="px-4 md:px-8 pb-16 md:pb-20 max-w-[1400px] mx-auto border-t border-brand-green/10 pt-12 md:pt-16">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="max-w-md">
            <div className="text-brand-orange text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3 md:mb-4">
              Designed for the whole ecosystem
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-green leading-tight mb-3 md:mb-4">
              Tourists see the path. Managers see the pulse.
            </h3>
            <p className="text-brand-green/70 text-sm leading-relaxed">
              Wildways turns live signals into better decisions: spread visitor pressure, protect fragile places, and keep local communities in the loop.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-brand-green text-white p-5 md:p-6 rounded-2xl md:rounded-3xl flex flex-col justify-between min-h-[140px] md:min-h-[160px]">
              <Users size={20} className="text-brand-orange mb-4" />
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">42%</div>
                <div className="text-[11px] md:text-xs text-white/70">less pressure on peak trails</div>
              </div>
            </div>
            <div className="bg-white border border-brand-green/10 text-brand-green p-5 md:p-6 rounded-2xl md:rounded-3xl flex flex-col justify-between min-h-[140px] md:min-h-[160px]">
              <MapPin size={20} className="text-brand-orange mb-4" />
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">68</div>
                <div className="text-[11px] md:text-xs text-brand-green/70">community hosts connected</div>
              </div>
            </div>
            <div className="bg-brand-orange text-brand-green p-5 md:p-6 rounded-2xl md:rounded-3xl flex flex-col justify-between min-h-[140px] md:min-h-[160px]">
              <SlidersHorizontal size={20} className="text-brand-green/70 mb-4" />
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">12k</div>
                <div className="text-[11px] md:text-xs text-brand-green/80">new first route choices</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}