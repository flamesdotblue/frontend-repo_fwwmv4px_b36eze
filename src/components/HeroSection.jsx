import React from 'react';
import Spline from '@splinetool/react-spline';
import { BadgeCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[420px] overflow-hidden rounded-b-3xl bg-gradient-to-br from-sky-50 via-blue-50 to-amber-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/40 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6 gap-4">
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full shadow-sm w-fit">
          <span className="text-xs font-medium text-slate-700">Digital Identity</span>
          <BadgeCheck className="w-4 h-4 text-sky-600" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          XMeet — Find your crew for real-world moments
        </h1>
        <p className="text-slate-600 max-w-xl">
          Post plans, join groups, and turn invites into experiences. Travel, parties, hackathons, gaming — meet people who want what you want.
        </p>
        <div className="w-full">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow">
            <input
              className="flex-1 bg-transparent outline-none text-sm text-slate-800 placeholder:text-slate-400"
              placeholder="Search activities, e.g. Goa trip, LAN party, hackathon"
            />
            <button className="px-4 py-2 text-sm font-medium bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
