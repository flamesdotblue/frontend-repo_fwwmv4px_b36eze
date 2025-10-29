import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ExploreFilters from './components/ExploreFilters';
import FeedList from './components/FeedList';
import BottomNav from './components/BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [filter, setFilter] = useState({ type: 'All', sort: 'Newest' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <main className="max-w-md mx-auto pb-24">
        {/* Home */}
        {activeTab === 'home' && (
          <div className="space-y-6">
            <HeroSection />
            <section className="px-4 -mt-6 space-y-4">
              <div className="flex items-baseline justify-between">
                <h2 className="text-xl font-semibold text-slate-900">For you</h2>
                <span className="text-sm text-slate-500">Based on your interests</span>
              </div>
              <FeedList filter={filter} />
            </section>
          </div>
        )}

        {/* Discover */}
        {activeTab === 'discover' && (
          <div className="space-y-4 px-4 pt-6">
            <h2 className="text-xl font-semibold text-slate-900">Discover</h2>
            <ExploreFilters onChange={setFilter} />
            <FeedList filter={filter} />
          </div>
        )}

        {/* Post Composer (inline MVP) */}
        {activeTab === 'post' && (
          <div className="px-4 pt-10">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Create a post</h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-sm">
              <input className="w-full bg-transparent outline-none text-lg font-semibold placeholder:text-slate-400" placeholder="Title (e.g., Weekend Trek to Rishikesh)" />
              <textarea className="w-full bg-transparent outline-none text-sm placeholder:text-slate-400 min-h-[90px]" placeholder="Describe your plan, timings, and vibe" />
              <div className="grid grid-cols-2 gap-2">
                <input className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-sm" placeholder="Date & time" />
                <input className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-sm" placeholder="Location" />
                <input className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-sm" placeholder="People needed" />
                <input className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-sm" placeholder="#tags (comma separated)" />
              </div>
              <button className="w-full py-2 rounded-xl bg-sky-600 text-white font-medium hover:bg-sky-700 transition">Post</button>
              <p className="text-xs text-slate-500 text-center">Verification boosts visibility. Complete ID to get a blue check.</p>
            </div>
          </div>
        )}

        {/* Chats placeholder MVP */}
        {activeTab === 'chats' && (
          <div className="px-4 pt-10 space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">Chats</h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-slate-600">Join an event to start a group chat. Your conversations will show up here.</div>
          </div>
        )}

        {/* Profile placeholder MVP */}
        {activeTab === 'profile' && (
          <div className="px-4 pt-10 space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Your Profile</h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" className="w-12 h-12 rounded-full border" />
                <div>
                  <div className="font-medium text-slate-900">You <span className="text-sky-600">✅</span></div>
                  <div className="text-sm text-slate-600">Trust Score: 82 • Followers 128 • Following 76</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <div className="text-slate-900 font-semibold">12</div>
                  <div className="text-slate-500">Events</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <div className="text-slate-900 font-semibold">34</div>
                  <div className="text-slate-500">Reviews</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                  <div className="text-slate-900 font-semibold">210</div>
                  <div className="text-slate-500">Points</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  );
}

export default App;
