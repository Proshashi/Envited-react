import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/include/Button/Button";
import DateTimePickerComponent from "../../components/include/DateTimePicker/DateTimePicker";
import ImageUpload from "../../components/include/ImageUpload/ImageUpload";
import Input from "../../components/include/Input/Input";

type Props = {};

const CreateEventPage = (props: Props) => {
  const [eventDetail, setEventDetail] = React.useState<{
    eventName: string;
    hostName: string;
    startTime: Date | undefined;
    endTime: Date | undefined;
    location: string;
    eventPhoto: string;
  }>({
    eventName: "",
    hostName: "",
    startTime: undefined,
    endTime: undefined,
    location: "",
    eventPhoto: "",
  });
  const navigate = useNavigate();

  const handleChange = (name: string, value: string | File | null) => {
    setEventDetail({ ...eventDetail, [name]: value });
  };
  const handleFormSubmit = () => {
    navigate("/event");
  };
  return (
    <div className="py-8 px-4 flex flex-col justify-center items-center">
      <div className="font-bold text-center text-4xl text-primary mb-4">
        Create your event
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="px-2 py-2 shadow-2xl rounded-md max-w-[600px] w-full"
        style={{
          filter: "drop-shadow(0px 0px 46.8696px rgba(0, 0, 0, 0.05))",
        }}
      >
        <Input
          value={eventDetail.eventName}
          placeholder="Event Name"
          name="eventName"
          handleInputChange={(value) => handleChange("eventName", value)}
        />
        <Input
          value={eventDetail.hostName}
          placeholder="Host Name"
          name="hostName"
          handleInputChange={(value) => handleChange("hostName", value)}
        />
        <DateTimePickerComponent
          value={eventDetail.startTime}
          handleInputChange={(e) =>
            setEventDetail((prevState) => ({ ...prevState, startTime: e }))
          }
          placeholder="Start Time"
        />
        <DateTimePickerComponent
          value={eventDetail.endTime}
          handleInputChange={(e) =>
            setEventDetail((prevState) => ({ ...prevState, endTime: e }))
          }
          placeholder="End Time"
        />

        <Input
          value={eventDetail.location}
          placeholder="Location"
          name="location"
          handleInputChange={(value) => handleChange("location", value)}
        />
        <ImageUpload
          handleInputChange={(value) => handleChange("eventPhoto", value)}
          placeholder="Event Photo"
          value={eventDetail.eventPhoto}
          name="eventPhoto"
        />
        <div className="p-4">
          <Button type="submit" className="w-full" onClick={handleFormSubmit}>
            Create event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventPage;
