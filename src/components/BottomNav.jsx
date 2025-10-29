import React from 'react';
import { Home, Compass, PlusCircle, MessageCircle, User } from 'lucide-react';

const TabButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center flex-1 py-2 transition ${
      active ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
    }`}
  >
    <Icon className={`w-6 h-6 ${active ? 'stroke-[2.5]' : ''}`} />
    <span className="text-[11px] mt-1">{label}</span>
  </button>
);

const BottomNav = ({ active, onChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 z-40">
      <div className="max-w-md mx-auto flex">
        <TabButton icon={Home} label="Home" active={active === 'home'} onClick={() => onChange('home')} />
        <TabButton icon={Compass} label="Discover" active={active === 'discover'} onClick={() => onChange('discover')} />
        <TabButton icon={PlusCircle} label="Post" active={active === 'post'} onClick={() => onChange('post')} />
        <TabButton icon={MessageCircle} label="Chats" active={active === 'chats'} onClick={() => onChange('chats')} />
        <TabButton icon={User} label="Profile" active={active === 'profile'} onClick={() => onChange('profile')} />
      </div>
    </nav>
  );
};

export default BottomNav;
