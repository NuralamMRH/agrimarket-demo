import { Button } from "@mui/material";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-[69px] px-28 pb-[81px] box-border relative min-h-[580px] max-w-full text-left text-xl text-white font-semibold-17 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-14 mq750:pr-14 mq750:box-border ${className}`}
    >
      <div className="w-[1197px] flex flex-col items-start justify-start pt-0 px-0 pb-[17px] box-border gap-[30px] max-w-full z-[3]">
        <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
          Get Start Auction
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full text-5xl font-ibm-plex-sans lg:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start relative gap-[10px] min-w-[389px] max-w-full mq750:min-w-full">
            <img
              className="self-stretch h-[356px] relative rounded-xl max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/rectangle-113.svg"
            />
            <div className="w-[431px] !m-[0] absolute top-[50px] left-[80px] flex flex-col items-start justify-start gap-[30px] max-w-full z-[1]">
              <div className="w-[412px] flex flex-col items-start justify-start gap-[20px] max-w-full">
                <h2 className="m-0 relative text-inherit leading-[130%] font-semibold font-inherit whitespace-nowrap mq450:text-lgi mq450:leading-[25px]">
                  <span className="uppercase">P</span>
                  <span className="lowercase">OST OFFER AS A SELLER</span>
                </h2>
                <div className="self-stretch h-[131px] relative text-mid leading-[24px] font-semibold-17 inline-block shrink-0">
                  As a seller, post offers for the agricultural crop you are
                  looking to sell, and galn Immedlate access to credit-verified
                  buyers. Or simply react to an existing buyer's bid and start
                  your transaction.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[22px] mq450:flex-wrap">
                <Button
                  className="h-[52px] flex-1 min-w-[145px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "20",
                    background: "#fb811f",
                    border: "#fb811f solid 2px",
                    borderRadius: "40px",
                    "&:hover": { background: "#fb811f" },
                    height: 52,
                  }}
                >
                  Register as a seller
                </Button>
                <Button
                  className="h-[54px] w-[186px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#222",
                    fontSize: "17",
                    background: "#fff",
                    borderRadius: "40px",
                    "&:hover": { background: "#fff" },
                    width: 186,
                    height: 54,
                  }}
                >
                  Selling offer video
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[579px] rounded-xl bg-gray-1000 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[50px] px-[61px] pb-[41px] box-border min-w-[579px] max-w-full lg:flex-1 mq450:pt-8 mq450:pb-[27px] mq450:box-border mq750:pl-[30px] mq750:pr-[30px] mq750:box-border mq1050:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
              <h2 className="m-0 relative text-inherit leading-[130%] font-semibold font-inherit whitespace-nowrap mq450:text-lgi mq450:leading-[25px]">
                <span className="uppercase">P</span>
                <span className="lowercase">OST BID AS A BUYER</span>
              </h2>
              <div className="self-stretch h-[136px] relative text-mid leading-[24px] font-semibold-17 inline-block shrink-0">
                As a buyer, post bids for the agricultural crop you are looking
                to buy. Communicate to the market what you are looking for, and
                get rapid reactions from interested farmers or sellers.
              </div>
              <div className="w-[435px] flex flex-row items-start justify-start gap-[22px] max-w-full mq450:flex-wrap">
                <Button
                  className="h-[52px] flex-1 min-w-[147px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "20",
                    background: "#fb811f",
                    border: "#fb811f solid 2px",
                    borderRadius: "40px",
                    "&:hover": { background: "#fb811f" },
                    height: 52,
                  }}
                >
                  Register as a buyer
                </Button>
                <Button
                  className="h-[54px] w-[187px]"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#222",
                    fontSize: "17",
                    background: "#fff",
                    borderRadius: "40px",
                    "&:hover": { background: "#fff" },
                    width: 187,
                    height: 54,
                  }}
                >
                  Buying offer video
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/mask-group-3.svg"
        />
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-dimgray-600 z-[2]" />
      </div>
      <h2 className="m-0 relative text-6xl leading-[150%] capitalize font-semibold font-ibm-plex-sans mt-[-365px] mq450:text-xl mq450:leading-[30px]">
        Get Start Auction
      </h2>
    </section>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
