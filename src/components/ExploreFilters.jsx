import React, { useState } from 'react';

const FilterChip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-sm border transition ${
      active ? 'bg-sky-600 text-white border-sky-600' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
    }`}
  >
    {label}
  </button>
);

const ExploreFilters = ({ onChange }) => {
  const [activeType, setActiveType] = useState('All');
  const [sort, setSort] = useState('Newest');

  const types = ['All', 'Trip', 'Party', 'Gaming', 'Hackathon', 'Meetup', 'Online'];
  const sorts = ['Newest', 'Nearby', 'Trending'];

  const update = (nextType = activeType, nextSort = sort) => {
    onChange?.({ type: nextType, sort: nextSort });
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {types.map((t) => (
          <FilterChip
            key={t}
            label={t}
            active={t === activeType}
            onClick={() => {
              setActiveType(t);
              update(t, sort);
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-600">Filter by activity & time</div>
        <div className="flex gap-1 bg-white rounded-xl p-1 border border-slate-200">
          {sorts.map((s) => (
            <button
              key={s}
              onClick={() => {
                setSort(s);
                update(activeType, s);
              }}
              className={`px-3 py-1 text-sm rounded-lg transition ${
                s === sort ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreFilters;
