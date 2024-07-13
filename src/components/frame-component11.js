import { Button } from "@mui/material";
import StallName from "./stall-name";
import PropTypes from "prop-types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[70px] pr-[22px] pl-5 box-border max-w-full text-left text-xl text-gray-300 font-semibold-17 mq750:pb-[45px] mq750:box-border ${className}`}
    >
      <div className="w-[1214px] flex flex-row flex-wrap items-start justify-start gap-[19px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[389px] max-w-full mq750:min-w-full">
          <div className="relative leading-[22px] font-semibold mq450:text-base mq450:leading-[18px]">
            Binh Dien Market
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[55px] text-mini mq750:gap-[27px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
              <div className="flex-1 rounded-xl flex flex-row items-start justify-start bg-[url('/public/rectangle-101@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[188px]">
                <img
                  className="self-stretch w-[289px] relative rounded-xl max-h-full object-cover hidden min-h-[400px]"
                  alt=""
                  src="/rectangle-101@2x.png"
                />
                <div className="h-[400px] flex-1 rounded-xl [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.2),_rgba(111,_120,_107,_0))] overflow-hidden flex flex-row items-end justify-start py-3.5 px-2.5 box-border z-[1]">
                  <div className="flex-1 rounded-xl bg-gray-900 flex flex-row items-start justify-start pt-3 px-2.5 pb-[9px] z-[2]">
                    <div className="flex-1 relative leading-[24px] capitalize">
                      Binh Dien Market is one of the largest agricultural food
                      markets in Ho Chi Minh City. This is also the only
                      wholesale market supplying seafood to the market here.
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[400px] flex-1 relative min-w-[188px]">
                <div className="absolute top-[0px] left-[0px] rounded-xl w-full h-full" />
                <div className="absolute top-[0px] left-[0px] rounded-xl w-full h-full bg-[url('/public/image-28@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover hidden"
                    alt=""
                    src="/image-28@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-xl text-yellowgreen-100">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[22px] font-semibold mq450:text-base mq450:leading-[18px]">
                  Go to the market page
                </div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/arrow--arrow-left-lg.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[388px] max-w-full mq750:min-w-full">
          <div className="relative leading-[22px] font-semibold inline-block min-w-[125px] mq450:text-base mq450:leading-[18px]">
            Market stalls
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px] text-black font-ibm-plex-sans">
            <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
              <div className="flex-1 rounded-xl bg-light-gray box-border overflow-hidden flex flex-row items-start justify-start pt-[18px] px-[19px] pb-5 min-w-[188px] text-xs text-yellowgreen-100 font-semibold-17 border-[1px] border-solid border-gray-light2">
                <div className="h-[363px] flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start relative gap-[10px]">
                    <img
                      className="self-stretch h-[151px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/mask-group-1@2x.png"
                    />
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                      <StallName
                        uTLUOMKiosk="Kim Tien's Kiosk"
                        voVanTeoEm=" Nguyen Thi Kim Tien"
                        pork=" Miscellaneous"
                        prop="0903.876.519"
                        propFlex="1"
                        propPadding="0px 0px 0px 0px"
                      />
                      <div className="w-full flex flex-row items-center justify-start">
                        <Button
                          className="h-9 flex-1"
                          endIcon={<ArrowForwardIcon />}
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#7ac143",
                            fontSize: "12",
                            background: "#fff",
                            border: "#7ac143 solid 1px",
                            borderRadius: "33px",
                            "&:hover": { background: "#fff" },
                            height: 36,
                          }}
                        >
                          Visit store
                        </Button>
                        <div className="pl-2 relative leading-[120%] font-semibold inline-block min-w-[85px]">
                          view the video
                        </div>
                      </div>
                    </div>
                    <div className="!m-[0] absolute top-[7px] left-[104px] rounded-3xs bg-gray-900 flex flex-col items-start justify-start py-2 pr-1 pl-2 z-[1] text-gray-300">
                      <div className="relative leading-[120%]">
                        <p className="m-0">
                          <span className="font-semibold-17">{`Region : `}</span>
                          <span className="font-semibold">1 Sounth VN</span>
                        </p>
                        <p className="m-0">
                          <span>{`Market : `}</span>
                          <span className="font-semibold font-semibold-17">
                            Binh Dien
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-light-gray box-border overflow-hidden flex flex-row items-start justify-start pt-[18px] px-[19px] pb-5 min-w-[188px] text-xs text-yellowgreen-100 font-semibold-17 border-[1px] border-solid border-gray-light2">
                <div className="h-[363px] flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start relative gap-[10px]">
                    <img
                      className="self-stretch h-[151px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/mask-group-1@2x.png"
                    />
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px]">
                      <StallName
                        uTLUOMKiosk="Kim Tien's Kiosk"
                        voVanTeoEm=" Nguyen Thi Kim Tien"
                        pork=" Miscellaneous"
                        prop="0903.876.519"
                        propFlex="1"
                        propPadding="0px 0px 0px 0px"
                      />
                      <div className="w-full flex flex-row items-center justify-start">
                        <Button
                          className="h-9 flex-1"
                          endIcon={<ArrowForwardIcon />}
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#7ac143",
                            fontSize: "12",
                            background: "#fff",
                            border: "#7ac143 solid 1px",
                            borderRadius: "33px",
                            "&:hover": { background: "#fff" },
                            height: 36,
                          }}
                        >
                          Visit store
                        </Button>
                        <div className="pl-2 relative leading-[120%] font-semibold inline-block min-w-[85px]">
                          view the video
                        </div>
                      </div>
                    </div>
                    <div className="!m-[0] absolute top-[7px] left-[104px] rounded-3xs bg-gray-900 flex flex-col items-start justify-start py-2 pr-1 pl-2 z-[1] text-gray-300">
                      <div className="relative leading-[120%]">
                        <p className="m-0">
                          <span className="font-semibold-17">{`Region : `}</span>
                          <span className="font-semibold">1 Sounth VN</span>
                        </p>
                        <p className="m-0">
                          <span>{`Market : `}</span>
                          <span className="font-semibold font-semibold-17">
                            Binh Dien
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <div className="h-3 w-3 relative rounded-[50%] bg-yellowgreen-100" />
              <div className="h-3 w-3 relative rounded-[50%] bg-gainsboro" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
