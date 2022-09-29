import { ReactNode } from "react";
import { RightArrowIcon } from "./EventIcons";

type Props = {
  Icon: () => JSX.Element;
  title: string;
  label: ReactNode;
};

const EventCard = ({ Icon, title, label }: Props) => {
  return (
    <div className="flex items-center mb-7 lg:w-[446px]">
      <div
        className="h-12 w-12 rounded-[10px] flex items-center justify-center mr-[20px]"
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <Icon />
      </div>
      <div>
        <div className="text-base leading-[18px] font-bold text-primary">
          {title}
        </div>
        <div className="text-sm leading-[16.1px] text-text_1">{label}</div>
      </div>
      <div className="ml-auto">
        <RightArrowIcon />
      </div>
    </div>
  );
};

export default EventCard;
