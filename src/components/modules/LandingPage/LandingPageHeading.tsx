import React from "react";

type Props = {};

const LandingPageHeading = (props: Props) => {
  return (
    <div className="font-bold text-4xl sm:text-[64px] sm:leading-[64px] text-center">
      <div className="text-primary">Imagine if</div>
      <div className="__envited_gradient-text">Snapchat</div>
      <div className="text-primary">had events.</div>
    </div>
  );
};

export default LandingPageHeading;
