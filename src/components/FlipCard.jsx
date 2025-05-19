import React from "react";

export default function FlipCard({ frontContent = "Front Side", backContent = "Back Side", info, backInfo }) {
  return (
    <div className="w-full h-[200px] [perspective:1000px] group">
      <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-[999ms] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front Side */}
        <div className="absolute w-full h-full bg-[#14213D] text-white flex flex-col items-center justify-center text-[24px] font-semibold border-[10px] border-[#14213D] rounded-[10px] [backface-visibility:hidden]">
          <p>{frontContent}</p>
          <p className="text-[12px]">{info}</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-[#FCA311] text-white flex flex-col items-center justify-center text-[24px] font-semibold border-[10px] border-[#FCA311] rounded-[10px] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p>{backContent}</p>
          <p className="text-[12px]">{backInfo}</p>
        </div>

      </div>
    </div>
  );
}
