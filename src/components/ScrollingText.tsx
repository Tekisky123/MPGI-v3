// components/ScrollingText.tsx
import React from "react";

type ScrollItem = {
  text: string;
  link?: string;
  textColor?: string;
};

type ScrollingTextProps = {
  items: ScrollItem[];
  speed?: number;
  backgroundColor?: string;
  defaultTextColor?: string;
};

const ScrollingText: React.FC<ScrollingTextProps> = ({
  items,
  speed = 15,
  backgroundColor = "#f1f5f9",
  defaultTextColor = "#0f172a",
}) => {
  return (
    <div
      className="overflow-hidden whitespace-nowrap w-full border-y border-slate-300 py-2"
      style={{ backgroundColor }}
    >
      <div
        className="inline-block animate-scroll font-medium text-lg hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {items.map((item, index) => (
          <span key={index} className="px-10">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: item.textColor || defaultTextColor }}
                className="underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                {item.text}
              </a>
            ) : (
              <span style={{ color: item.textColor || defaultTextColor }}>
                {item.text}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
