import { Button } from "@mui/material";
import CompanyField from "./company-field";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[77px] pr-7 pl-5 box-border max-w-full mq800:pb-8 mq800:box-border mq1150:pb-[50px] mq1150:box-border ${className}`}
    >
      <form className="m-0 w-[1011px] flex flex-col items-end justify-start gap-[21px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[45px] pr-5 pl-[22px] box-border max-w-full">
          <div className="w-[683px] flex flex-col items-start justify-start gap-[33px] max-w-full mq800:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[23px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[29px] pl-5 box-border max-w-full">
                <div className="bg-gray-600 flex flex-row items-start justify-start py-[11px] px-6 box-border whitespace-nowrap max-w-full z-[1]">
                  <div className="h-[70px] w-[472px] relative bg-gray-600 hidden max-w-full" />
                  <h1 className="m-0 relative text-13xl leading-[150%] uppercase font-bold font-semibold-17 text-left z-[2]">
                    <span className="text-darkorange">Get Brand</span>
                    <span className="text-white">{` `}</span>
                    <span className="text-blue">Recognition</span>
                  </h1>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-[540px] w-[1010px] absolute !m-[0] top-[-291px] left-[-164px] rounded-3xs object-cover"
                  alt=""
                  src="/identity-image@2x.png"
                />
                <h1 className="m-0 flex-1 relative text-19xl leading-[150%] capitalize font-normal font-semibold-17 text-white text-center inline-block max-w-full z-[1] mq450:text-4xl mq450:leading-[34px] mq800:text-11xl mq800:leading-[46px]">
                  Build Up Online Identity to Enhance Your Vietnam Market
                  Presence
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <Button
                className="h-[54px] w-[276px] z-[1]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "22",
                  background: "#fb811f",
                  borderRadius: "10px",
                  "&:hover": { background: "#fb811f" },
                  width: 276,
                  height: 54,
                }}
              >
                Package Details
              </Button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[15px] max-w-full">
          <Button
            className="h-[78px] flex-1 min-w-[245px] max-w-full"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "32",
              background: "#fb811f",
              borderRadius: "10px",
              "&:hover": { background: "#fb811f" },
              height: 78,
            }}
          >
            Sign-in
          </Button>
          <Button
            className="h-[78px] flex-1 min-w-[245px] max-w-full"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "32",
              background: "#4c8cd1",
              borderRadius: "10px",
              "&:hover": { background: "#4c8cd1" },
              height: 78,
            }}
          >
            Join Free
          </Button>
          <Button
            className="h-[78px] flex-1 min-w-[245px] max-w-full"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "32",
              background: "#4c8cd1",
              borderRadius: "10px",
              "&:hover": { background: "#4c8cd1" },
              height: 78,
            }}
          >
            Sign up
          </Button>
        </div>
        <CompanyField />
      </form>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
