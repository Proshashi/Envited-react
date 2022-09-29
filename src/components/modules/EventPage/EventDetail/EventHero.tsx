import React from "react";

type Props = {};

const EventHero = (props: Props) => {
  return (
    <div className="py-2 sm:py-8">
      <div className="text-primary text-[28px] sm:text-[48px] font-bold leading-[32.2px]">
        Birthday Bash
      </div>
      <div className="text-text_2 text-base sm:text-[18px] leading-[20.7px] mt:2   sm:mt-6 font-normal">
        Hosted by <strong>Elysia</strong>
      </div>
    </div>
  );
};

export default EventHero;
