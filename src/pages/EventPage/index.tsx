import EventPageDetail from "../../components/modules/EventPage/EventDetail";
import EventPageImage from "../../components/modules/EventPage/EventPageImage";

type Props = {};

const EventPage = (props: Props) => {
  return (
    <div className="flex flex-col lg:pt-[184px] items-center lg:items-start lg:flex-row-reverse lg:justify-center">
      <EventPageImage />
      <EventPageDetail />
    </div>
  );
};

export default EventPage;
