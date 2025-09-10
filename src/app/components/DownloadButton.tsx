// Enable client-side interactivity for this component
"use client";

import Link from 'next/link';
import { useState } from 'react';

// Download button component with state management
export default function DownloadButton() {
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = () => {
    setShowButtons(true);
  };

  if (showButtons) {
    return (
      <div 
        className="absolute z-[116] flex space-x-[5px]"
        style={{ 
          top: "calc(86px + (45px / 2) - 18px + 2px)", // 86px margin-top + half of banner height (45px) - half of button height (36px) + 2px offset
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        {/* INDIVIDUAL button that redirects to /download with user icon */}
        <Link 
          href="/download"
          className="w-[146px] h-[36px] text-[14px] font-helvetica-medium flex items-center justify-center"
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            letterSpacing: "0.09em",
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontWeight: 500,
            borderRadius: "25px",
            textDecoration: "none"
          }}
        >
          <img 
            src="/usericon.svg" 
            alt="User Icon" 
            className="w-4 h-4 mr-2"
          />
          INDIVIDUAL
        </Link>
        
        {/* INDUSTRY button with industry icon */}
        <button
          className="w-[146px] h-[36px] text-[14px] font-helvetica-medium flex items-center justify-center"
          style={{
            backgroundColor: "#182A00",
            color: "#FFFFFF",
            letterSpacing: "0.09em",
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontWeight: 500,
            borderRadius: "25px"
          }}
        >
          <img 
            src="/industryicon.svg" 
            alt="Industry Icon" 
            className="w-4 h-4 mr-2"
          />
          INDUSTRY
        </button>
      </div>
    );
  }

  return (
    <Link 
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className="text-[#0a0a0a] font-bold text-[0.875rem] lg:text-base font-helvetica-bold relative z-[116] flex items-center justify-center"
      style={{ 
        letterSpacing: "0.09em",
        position: "absolute",
        top: "calc(86px + (45px / 2) - 18px + 2px)", // 86px margin-top + half of banner height (45px) - half of button height (36px) + 2px offset
        left: "50%",
        transform: "translateX(-50%)",
        width: "146px",
        height: "36px",
        borderRadius: "25px"
      }}
    >
      DOWNLOAD
    </Link>
  );
}