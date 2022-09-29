import { useNavigate } from "react-router-dom";
import LandingDescription from "../../components/modules/LandingPage/LandingDescription";
import LandingPageButton from "../../components/modules/LandingPage/LandingPageButton";
import LandingPageHeading from "../../components/modules/LandingPage/LandingPageHeading";
import LandingPageImage from "../../components/modules/LandingPage/LandingPageImage";

type Props = {};

const LandingPage = (props: Props) => {
  let navigate = useNavigate();

  return (
    <div className="py-8 flex flex-col justify-center lg:justify-between items-center lg:flex-row-reverse lg:px-[170px] lg:min-h-screen lg:h-fit">
      <div className="flex flex-col items-center lg:items-end justify-center">
        <LandingPageHeading />
        <LandingDescription />
        <LandingPageImage className="lg:hidden" />
        <LandingPageButton
          handleButtonClick={() => {
            navigate("/create");
          }}
        />
      </div>
      <LandingPageImage className="hidden lg:block" />
    </div>
  );
};

export default LandingPage;
