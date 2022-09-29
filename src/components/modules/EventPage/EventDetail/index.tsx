import EventCard from "./EventCard";
import EventHero from "./EventHero";
import { CalendarIcon, LocationIcon } from "./EventIcons";

type Props = {};

const EventPageDetail = (props: Props) => {
  return (
    <div className="w-full sm:w-[593px] px-4 sm:px-2">
      <EventHero />
      <div className="mt-6 w-full">
        <EventCard
          Icon={CalendarIcon}
          title="18 August 6:00PM"
          label={
            <>
              to <strong>19 August 1:00PM</strong> UTC +10
            </>
          }
        />
        <EventCard
          Icon={LocationIcon}
          title="Street name"
          label={<>Suburb, State, Postcode</>}
        />
      </div>
    </div>
  );
};

export default EventPageDetail;
