import { Button } from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[70px] pr-[22px] pl-5 box-border max-w-full text-left text-xl text-gray-300 font-semibold-17 mq750:pb-[45px] mq750:box-border ${className}`}
    >
      <div className="w-[1214px] flex flex-col items-start justify-start gap-[6px] max-w-full">
        <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold inline-block max-w-full mq450:text-base mq450:leading-[22px]">
          Ai.Auction - A network of National Whole Seller at your Auction
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-5 px-0 pb-[60px] box-border relative gap-[26px] max-w-full text-mid mq750:pb-[39px] mq750:box-border">
          <div className="w-[415px] relative leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical] max-w-full">
            <p className="m-0">
              A network of National WholeSalers at your Auction :
            </p>
            <p className="m-0">- Instant Connect</p>
            <p className="m-0">
              - Map your Sourcing Supply to Wholesale Demand
            </p>
            <p className="m-0">
              - Send Invitation to Thousands Wholesalers for Bidding
            </p>
          </div>
          <div className="w-[186px] h-[129px] flex flex-row items-start justify-start pt-0 px-0 pb-[82px] box-border">
            <Button
              className="self-stretch flex-1"
              endIcon={
                <img
                  width="24px"
                  height="24px"
                  src="/arrow--arrow-left-lg-6.svg"
                />
              }
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                background: "#fb811f",
                borderRadius: "40px",
                "&:hover": { background: "#fb811f" },
              }}
            >
              AUCTION NOW
            </Button>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] text-xl text-yellowgreen-100">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative leading-[22px] font-semibold mq450:text-base mq450:leading-[18px]">
                More about auction
              </div>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/arrow--arrow-left-lg.svg"
            />
          </div>
          <div className="w-[882px] h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px]">
            <img
              className="absolute top-[33px] left-[389px] w-[493px] h-[383px] object-contain"
              alt=""
              src="/mask-group-2@2x.png"
            />
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[525px] object-cover z-[1]"
              alt=""
              src="/frame-619-3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
