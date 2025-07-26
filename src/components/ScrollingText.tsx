// components/ScrollingText.tsx
import React from "react";

type ScrollingTextProps = {
  text: string;
  speed?: number;
  backgroundColor?: string;
  textColor?: string;
  link?: string; // optional PDF link
};

const ScrollingText: React.FC<ScrollingTextProps> = ({
  text,
  speed = 15,
  backgroundColor = "#f1f5f9",
  textColor = "#0f172a",
  link,
}) => {
  const scrollContent = link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 hover:text-blue-600 transition-colors"
    >
      {text}
    </a>
  ) : (
    <span>{text}</span>
  );

  return (
    <div
      className="overflow-hidden whitespace-nowrap w-full border-y border-slate-300 py-2"
      style={{ backgroundColor, color: textColor }}
    >
      <div
        className="inline-block animate-scroll px-10 font-medium text-lg hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {scrollContent}
      </div>
    </div>
  );
};

export default ScrollingText;
