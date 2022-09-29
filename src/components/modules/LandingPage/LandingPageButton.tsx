import React from "react";
import Button from "../../include/Button/Button";

type Props = {
  handleButtonClick: () => void;
};

const LandingPageButton = ({ handleButtonClick }: Props) => {
  return (
    <div className="text-center">
      <Button className="sm:w-[320px]" handleClick={handleButtonClick}>
        🎉 Create my event
      </Button>
    </div>
  );
};

export default LandingPageButton;
