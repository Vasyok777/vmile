"use client";

import { useState } from 'react';

export const ExpandableText = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`text-gray-700 text-sm md:text-base leading-relaxed md:max-w-[783px]`}>
      <p className={`transition-all duration-700 ease-in-out ${isExpanded ? '' : 'line-clamp-2 md:line-clamp-none'}`}>
        Masz problem ze znalezieniem idealnego hostingu dla swojej strony lub bloga? Jesteś we właściwym miejscu! Na vmline.pl znajdziesz Ranking Hostingów w Polsce , który kompleksowo porównuje oferty firm hostingowych. Przedstawiamy zarówno najtańsze opcje ekonomiczne, jak i najdroższe serwery o najwyższych parametrach technicznych. Dzięki nam łatwo znajdziesz hosting dopasowany do Twoich potrzeb i budżetu.<br /><br/>Zaufaj naszym rzetelnym analizom i wybierz najlepszy hosting dla siebie!
      </p>
      
      <button
        onClick={handleToggle}
        className="text-link hover:underline md:hidden font-medium mt-4 transition-colors duration-300"
        type="button"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Show less" : "Show more"}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
};