import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Homepage2 = ({
  className = "",
  vaKioskRauCQu,
  maskGroup,
  maskGroup1,
  maskGroup2,
  maskGroup3,
  frame1535,
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[61px] pb-[90px] box-border max-w-full text-left text-19xl text-dodgerblue-200 font-semibold-17 mq750:pl-[30px] mq750:pr-[30px] mq750:pb-[58px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[46px] max-w-full mq750:gap-[23px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[33px] max-w-full mq750:gap-[16px]">
          <div className="w-[566px] flex flex-row items-start justify-start py-0 px-[49px] box-border max-w-full mq750:pl-6 mq750:pr-6 mq750:box-border">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[27px] uppercase font-black font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[16px] mq1050:text-11xl mq1050:leading-[22px]">
              {vaKioskRauCQu}
            </h1>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start py-0 px-[51px] relative gap-[20px] grid-cols-[repeat(4,_minmax(217px,_1fr))] text-lg text-black lg:pl-[25px] lg:pr-[25px] lg:box-border lg:justify-center lg:grid-cols-[repeat(2,_minmax(217px,_376px))] mq750:grid-cols-[minmax(217px,_1fr)]">
            <div className="h-[326px] relative shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white w-full h-full hidden" />
              <img
                className="absolute w-[calc(100%_-_25px)] top-[11px] right-[13px] left-[12px] max-w-full overflow-hidden h-[170px] object-contain z-[1]"
                alt=""
                src={maskGroup}
              />
              <div className="absolute top-[172px] left-[18px] flex flex-col items-start justify-start">
                <div className="relative leading-[150%] capitalize z-[1]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">{`Dẻ sườn bò Wagyu Mỹ Snake `}</p>
                  <p className="m-0">River Farms – Rib Finger</p>
                </div>
                <b className="w-[151px] h-[63px] relative text-5xl leading-[150%] capitalize inline-block text-darkorange shrink-0 z-[1] mt-[-19px] mq450:text-lgi mq450:leading-[29px]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">865.000₫</p>
                </b>
              </div>
            </div>
            <div className="h-[326px] shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[11px] px-3 pb-8 box-border gap-[19px]">
              <div className="w-[289px] h-[326px] relative shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white hidden" />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain z-[1]"
                alt=""
                src={maskGroup1}
              />
              <div className="flex flex-row items-start justify-start py-0 px-1.5">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[150%] capitalize z-[1]">
                    <p className="m-0">{`Gầu bò Wagyu Mỹ Snake `}</p>
                    <p className="m-0">River Farms – Brisket</p>
                  </div>
                  <b className="w-[151px] h-[63px] relative text-5xl leading-[150%] capitalize inline-block text-darkorange shrink-0 z-[1] mt-[-23px] mq450:text-lgi mq450:leading-[29px]">
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">985.000₫</p>
                  </b>
                </div>
              </div>
            </div>
            <div className="h-[326px] relative shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white w-full h-full hidden" />
              <img
                className="absolute w-[calc(100%_-_25px)] top-[11px] right-[13px] left-[12px] max-w-full overflow-hidden h-[170px] object-contain z-[1]"
                alt=""
                src={maskGroup2}
              />
              <div className="absolute top-[172px] left-[13px] w-[271px] flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[150%] capitalize inline-block min-h-[108px] z-[1]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">MÔNG BÒ MỸ - US DRUMP BEEF</p>
                </div>
                <div className="w-[161px] flex flex-row items-start justify-start py-0 px-[5px] box-border mt-[-46px] text-5xl text-darkorange">
                  <b className="h-[63px] flex-1 relative leading-[150%] capitalize inline-block z-[1] mq450:text-lgi mq450:leading-[29px]">
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">390.000₫</p>
                  </b>
                </div>
              </div>
            </div>
            <div className="h-[326px] relative shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white w-full h-full hidden" />
              <img
                className="absolute w-[calc(100%_-_25px)] top-[11px] right-[13px] left-[12px] max-w-full overflow-hidden h-[170px] object-contain z-[1]"
                alt=""
                src={maskGroup3}
              />
              <div className="absolute top-[174px] left-[18px] w-[151px] flex flex-col items-start justify-start gap-[6px]">
                <div className="relative leading-[150%] capitalize z-[1]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">Bắp Hoa Bò Mỹ</p>
                </div>
                <b className="self-stretch h-[63px] relative text-5xl leading-[150%] capitalize inline-block text-darkorange shrink-0 z-[1] mq450:text-lgi mq450:leading-[29px]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">370.000₫</p>
                </b>
              </div>
              <div className="absolute top-[-61px] left-[66px] text-xs leading-[150%] capitalize font-semibold text-white text-center z-[2]">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">ver Farms – Brisket</p>
                <p className="m-0">Giá985.000₫</p>
              </div>
            </div>
            <img
              className="h-[41px] w-[41px] absolute !m-[0] top-[142px] right-[0px]"
              alt=""
              src="/group-1048.svg"
            />
            <img
              className="h-[41px] w-[41px] absolute !m-[0] top-[142px] left-[0px] object-contain"
              alt=""
              src="/group-1049@2x.png"
            />
          </div>
        </div>
        <div className="self-stretch h-11 flex flex-row items-start justify-center py-0 px-5 box-border">
          <Button
            className="self-stretch w-64"
            endIcon={
              <img
                width="16px"
                height="16px"
                src="/materialsymbolsdoublearrow-4.svg"
              />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "13",
              background: "#4c8cd1",
              borderRadius: "40px",
              "&:hover": { background: "#4c8cd1" },
              width: 256,
            }}
          >
            {frame1535}
          </Button>
        </div>
      </div>
    </section>
  );
};

Homepage2.propTypes = {
  className: PropTypes.string,
  vaKioskRauCQu: PropTypes.string,
  maskGroup: PropTypes.string,
  maskGroup1: PropTypes.string,
  maskGroup2: PropTypes.string,
  maskGroup3: PropTypes.string,
  frame1535: PropTypes.string,
};

export default Homepage2;
