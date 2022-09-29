import React from "react";

type Props = { className?: string };

const LandingPageImage = ({ className }: Props) => {
  const imageURL =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220929%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220929T094634Z&X-Amz-Expires=86400&X-Amz-Signature=4f62cb0ce2a7388ae8bee2d291fe6ff1452dc74b0260d57b73f916949f034ce9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={imageURL}
        alt="Landing page"
        className="h-[292px] sm:h-[548.27px] lg:h-[775.69px] w-[165.63px] sm:w-[311px] lg:w-[440px] object-fill"
        style={{
          filter: "drop-shadow(0px 0px 46.8696px rgba(0, 0, 0, 0.05))",
        }}
      />
    </div>
  );
};

export default LandingPageImage;
