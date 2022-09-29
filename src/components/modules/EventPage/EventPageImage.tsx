import React from "react";

type Props = {};

const EventPageImage = (props: Props) => {
  const birthdayCakeImage =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220929T113302Z&X-Amz-Expires=86400&X-Amz-Signature=7b61f36a32e1cf6b0e6f5884ebb9f67570cd42e14515bdb74dcc599961954697&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject";

  return (
    <div className="sm:mt-[88px] lg:mt-0">
      <img
        src={birthdayCakeImage}
        alt="Birthday cake"
        className="h-[375px] sm:h-[593px] lg:h-[500px] w-[100vw] sm:w-[593px] lg:w-[500px] object-cover"
      />
    </div>
  );
};

export default EventPageImage;
