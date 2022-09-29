import React from "react";

type Props = {};

const LandingDescription = (props: Props) => {
  return (
    <div className="flex items-center justify-center text-center lg:text-right">
      <div className="text-secondary font-light text-base sm:text-2xl sm:w-[521px] mt-4 mb-8 sm:mb-[55px] px-[27px]">
        Easily host and share events with your friends across any social media.
      </div>
    </div>
  );
};

export default LandingDescription;
