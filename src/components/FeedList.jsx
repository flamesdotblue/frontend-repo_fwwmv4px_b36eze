import React from 'react';
import { MapPin, Calendar, Users, Tag, MessageSquare, BadgeCheck } from 'lucide-react';

const FeedCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 space-y-3">
      <div className="flex items-center gap-3">
        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(post.host)}`} alt="avatar" className="w-10 h-10 rounded-full border" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-900">{post.host}</span>
            {post.verified && <BadgeCheck className="w-4 h-4 text-sky-600" />}
          </div>
          <div className="text-xs text-slate-500">{post.timeAgo}</div>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{post.activity}</span>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
        <p className="text-slate-700 mt-1">{post.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center gap-2 text-slate-700"><Calendar className="w-4 h-4" />{post.date}</div>
        <div className="flex items-center gap-2 text-slate-700"><MapPin className="w-4 h-4" />{post.location}</div>
        <div className="flex items-center gap-2 text-slate-700"><Users className="w-4 h-4" />Need {post.peopleNeeded}</div>
        <div className="flex items-center gap-2 text-slate-700"><Tag className="w-4 h-4" />{post.tags.join(', ')}</div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-4 text-slate-600">
          <button className="flex items-center gap-1 text-sm hover:text-slate-900">
            <MessageSquare className="w-4 h-4" />
            <span>{post.comments} Comments</span>
          </button>
        </div>
        <button className="px-4 py-2 rounded-xl bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition">
          Join
        </button>
      </div>
    </div>
  );
};

const FeedList = ({ filter }) => {
  const posts = [
    {
      id: 1,
      host: 'Aarav Mehta',
      verified: true,
      timeAgo: '2h ago',
      activity: 'Trip',
      title: 'Weekend Trek to Rishikesh',
      description: 'Looking for 3 people to join a sunrise trek and river rafting. Leaving Friday night, back Sunday evening.',
      date: 'Fri 7:00 PM – Sun 9:00 PM',
      location: 'Rishikesh, Uttarakhand',
      peopleNeeded: 3,
      tags: ['#trip', '#adventure', '#rafting'],
      comments: 12,
    },
    {
      id: 2,
      host: 'Sana Kapoor',
      verified: false,
      timeAgo: '5h ago',
      activity: 'Gaming',
      title: 'Valorant LAN Night',
      description: 'Forming a 5-stack at a cafe in Koramangala. Newbies welcome, vibe over rank.',
      date: 'Sat 6:00 PM – 10:00 PM',
      location: 'Bengaluru, Koramangala',
      peopleNeeded: 2,
      tags: ['#gaming', '#valorant', '#lan'],
      comments: 8,
    },
    {
      id: 3,
      host: 'Devika Rao',
      verified: true,
      timeAgo: '1d ago',
      activity: 'Hackathon',
      title: 'AIScapes Hack Weekend',
      description: 'Seeking a designer and backend dev for a 24h build sprint. Food + coffee on me.',
      date: 'Sun 10:00 AM – Mon 10:00 AM',
      location: 'Online',
      peopleNeeded: 2,
      tags: ['#hackathon', '#ai', '#design'],
      comments: 21,
    },
  ];

  const filtered = posts.filter((p) => {
    if (filter?.type && filter.type !== 'All') {
      if (filter.type === 'Online') return p.location === 'Online';
      if (p.activity !== filter.type) return false;
    }
    return true;
  });

  return (
    <div className="space-y-4">
      {filtered.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default FeedList;
