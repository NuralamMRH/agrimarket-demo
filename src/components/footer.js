import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`w-[680px] flex flex-col items-start justify-start max-w-full text-left text-5xl text-dodgerblue-100 font-semibold-17 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end">
            <img
              className="h-[190px] w-[198px] relative object-cover mix-blend-darken z-[1]"
              loading="lazy"
              alt=""
              src="/image-114@2x.png"
            />
          </div>
          <h2 className="mb-[50px] relative text-inherit tracking-[-0.02em] leading-[27px] capitalize font-extrabold font-inherit inline-block min-w-[128px] z-[1] mq450:text-lgi mq450:leading-[22px]">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="w-[648px] flex flex-row items-end justify-start gap-[20px] max-w-full mt-[-14px] text-sm text-white mq800:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border min-w-[204px] mq800:flex-1">
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <img
              className="h-[466px] w-[1214px] absolute mt-[100px] top-[-259px] left-[-544px] object-cover"
              alt=""
              src="/mask-group-31@2x.png"
            />
            <div className="flex-1 rounded-2xl bg-dodgerblue-100 flex flex-col items-start justify-start pt-[19px] px-[18px] pb-1 gap-[8px] z-[1]">
              <div className="w-[314px] h-[183px] relative rounded-2xl bg-dodgerblue-100 hidden" />
              <div className="flex flex-row items-end justify-start gap-[14px]">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                  <div className="flex flex-col items-start justify-start gap-[27px]">
                    <div className="w-[41px] h-[41px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkorange w-full h-full z-[2]" />
                      <img
                        className="absolute top-[9px] left-[9px] w-6 h-6 overflow-hidden z-[3]"
                        alt=""
                        src="/tdesignlocation.svg"
                      />
                    </div>
                    <div className="w-[41px] h-[41px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkorange w-full h-full z-[2]" />
                      <img
                        className="absolute top-[11px] left-[12px] w-[19px] h-[19px] overflow-hidden z-[3]"
                        alt=""
                        src="/tdesigncall.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative tracking-[-0.02em] capitalize font-medium z-[2]">
                  <p className="[margin-block-start:0] [margin-block-end:36px]">{`AiBBee Digital LLC 8 Clark Way, `}</p>
                  <p className="[margin-block-start:0] [margin-block-end:36px]">
                    Holmde NJ 07733 USA
                  </p>
                  <p className="[margin-block-start:0] [margin-block-end:36px]">
                    +1 732 705 0611
                  </p>
                </div>
              </div>
              <div className="w-[248px] flex flex-row items-start justify-start py-0 px-px box-border">
                <div className="flex-1 flex flex-row items-start justify-start gap-[19px]">
                  <div className="h-[41px] w-[41px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkorange w-full h-full z-[2]" />
                    <img
                      className="absolute top-[9px] left-[9px] w-6 h-6 overflow-hidden z-[3]"
                      alt=""
                      src="/tablerworld.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="self-stretch relative tracking-[-0.02em] font-medium z-[2]">
                      www.agribee.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0.7803] flex flex-col items-start justify-start pt-0 pb-[23px] pr-0 pl-[69px] box-border relative gap-[34px] min-w-[204px] mq450:gap-[17px] mq450:pl-5 mq450:box-border mq800:flex-1">
          <div className="w-full h-[183px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-dodgerblue-100 w-full h-full z-[1]" />
            <div className="absolute top-[22px] left-[18px] w-[41px] h-[41px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkorange w-full h-full z-[2]" />
              <img
                className="absolute top-[10px] left-[9px] w-6 h-6 overflow-hidden z-[3]"
                alt=""
                src="/tdesignlocation.svg"
              />
            </div>
            <div className="absolute top-[86px] left-[19px] w-[41px] h-[41px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkorange w-full h-full z-[2]" />
              <img
                className="absolute top-[11px] left-[10px] w-[19px] h-[19px] overflow-hidden z-[3]"
                alt=""
                src="/tdesigncall.svg"
              />
            </div>
            <div className="absolute top-[135px] left-[19px] w-[41px] h-[41px]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkorange w-full h-full z-[2]" />
              <img
                className="absolute top-[9px] left-[9px] w-6 h-6 overflow-hidden z-[3]"
                alt=""
                src="/tablerworld.svg"
              />
            </div>
          </div>
          <div className="self-stretch h-36 relative tracking-[-0.02em] capitalize font-medium flex items-center z-[2]">
            <span>
              <p className="[margin-block-start:0] [margin-block-end:36px]">
                &nbsp;
              </p>
              <p className="[margin-block-start:0] [margin-block-end:36px]">
                &nbsp;
              </p>
              <p className="[margin-block-start:0] [margin-block-end:36px]">
                88 DC 11 str, Tan Ky ward, Tan Phu
              </p>
              <p className="[margin-block-start:0] [margin-block-end:36px]">
                {" "}
                distric, HoChiMinh city, Vietnam
              </p>
              <p className="m-0">+84 2838 165 339</p>
            </span>
          </div>
          <div className="w-[186px] relative tracking-[-0.02em] font-medium flex items-center z-[2]">
            www.agribee.com
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
