import React from "react";
import DateTimePicker from "react-datetime-picker";

type Props = {
  handleInputChange: ((value: Date) => void) | undefined;
  value: Date | [Date, Date] | undefined;
  placeholder: string;
};

const DateTimePickerComponent = ({
  handleInputChange,
  value,
  placeholder,
}: Props) => {
  return (
    <div className="w-full p-4">
      <label className="text-sm text-primary mb-2 inline-block" htmlFor="">
        {placeholder}
      </label>
      <DateTimePicker
        onChange={handleInputChange}
        value={value}
        className="rounded-md border bg-secondary_purple_3 active:border-secondary_purple_1 w-full py-4 px-2 text-secondary"
      />
    </div>
  );
};

export default DateTimePickerComponent;
