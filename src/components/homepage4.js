import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Homepage4 = ({
  className = "",
  vaKioskThyHiSn,
  maskGroup,
  maskGroup1,
  maskGroup2,
  maskGroup3,
  frame1533,
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-[61px] pb-[89px] box-border max-w-full text-left text-19xl text-dodgerblue-200 font-semibold-17 mq750:pl-[30px] mq750:pr-[30px] mq750:pb-[58px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[55px] max-w-full mq750:gap-[27px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
          <div className="w-[595px] flex flex-row items-start justify-start py-0 px-[46px] box-border max-w-full mq750:pl-[23px] mq750:pr-[23px] mq750:box-border">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[27px] uppercase font-black font-inherit inline-block max-w-full mq450:text-4xl mq450:leading-[16px] mq1050:text-11xl mq1050:leading-[22px]">
              {vaKioskThyHiSn}
            </h1>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start py-0 px-[51px] relative gap-[20px] grid-cols-[repeat(4,_minmax(217px,_1fr))] text-lg text-black lg:pl-[25px] lg:pr-[25px] lg:box-border lg:justify-center lg:grid-cols-[repeat(2,_minmax(217px,_376px))] mq750:grid-cols-[minmax(217px,_1fr)]">
            <div className="shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white flex flex-col items-start justify-end pt-[145px] px-[18px] pb-[29px]">
              <div className="w-[289px] h-[326px] relative shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white hidden" />
              <div className="h-[89px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-[91%]">
                <div className="flex flex-row items-start justify-start relative">
                  <img
                    className="h-[170px] w-[264px] absolute !m-[0] top-[-134px] right-[-30px] object-cover z-[1]"
                    alt=""
                    src={maskGroup}
                  />
                  <div className="mb-[-19px] relative leading-[150%] capitalize z-[2]">
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">{`Gà bọng nguyên con cấp `}</p>
                    <p className="m-0">đông nhập khẩu (~1.5kg)</p>
                  </div>
                </div>
              </div>
              <b className="w-[151px] h-[63px] relative text-5xl leading-[150%] capitalize inline-block text-darkorange shrink-0 max-w-[60%] z-[1] mq450:text-lgi mq450:leading-[29px]">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">90.000₫</p>
              </b>
            </div>
            <div className="h-[326px] relative shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white w-full h-full hidden" />
              <img
                className="absolute w-[calc(100%_-_25px)] top-[11px] right-[13px] left-[12px] max-w-full overflow-hidden h-[170px] object-contain z-[1]"
                alt=""
                src={maskGroup1}
              />
              <div className="absolute top-[172px] left-[18px] flex flex-col items-start justify-start">
                <div className="relative leading-[150%] capitalize z-[1]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">{`Chân Gà đông lạnh `}</p>
                  <p className="m-0">nhập khẩu</p>
                </div>
                <b className="w-[151px] h-[63px] relative text-5xl leading-[150%] capitalize inline-block text-darkorange shrink-0 z-[1] mt-[-22px] mq450:text-lgi mq450:leading-[29px]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">74.000₫</p>
                </b>
              </div>
            </div>
            <div className="shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[11px] pb-[29px] pr-[5px] pl-3">
              <div className="w-[289px] h-[326px] relative shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white hidden z-[1]" />
              <div className="self-stretch h-[242px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-[264px] h-[170px] object-contain z-[1]"
                  alt=""
                  src={maskGroup2}
                />
                <div className="absolute top-[161px] left-[1px] leading-[150%] capitalize inline-block w-[271px] z-[2]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">
                    Ức Gà không da không xương đông lạnh nhập khẩu
                  </p>
                </div>
              </div>
              <div className="w-[163px] flex flex-row items-start justify-start py-0 px-1.5 box-border mt-[-19px] text-5xl text-darkorange">
                <b className="h-[63px] flex-1 relative leading-[150%] capitalize inline-block z-[1] mq450:text-lgi mq450:leading-[29px]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">98.000₫</p>
                </b>
              </div>
            </div>
            <div className="shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white flex flex-col items-start justify-end pt-[174px] px-[18px] pb-[29px] gap-[6px]">
              <div className="w-[289px] h-[326px] relative shadow-[0px_4px_20.8px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white hidden" />
              <div className="flex flex-row items-start justify-start relative max-w-[74%]">
                <img
                  className="h-[170px] w-[264px] absolute !m-[0] top-[-163px] right-[-73px] object-cover z-[1]"
                  alt=""
                  src={maskGroup3}
                />
                <div className="h-[54px] relative leading-[150%] capitalize inline-block z-[2]">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">Đùi Gà tỏi đông lạnh</p>
                </div>
              </div>
              <b className="w-[151px] h-[63px] relative text-5xl leading-[150%] capitalize inline-block text-darkorange shrink-0 max-w-[60%] z-[1] mq450:text-lgi mq450:leading-[29px]">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">115.000₫</p>
              </b>
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
        <div className="self-stretch h-11 flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border">
          <Button
            className="self-stretch w-[257px]"
            endIcon={
              <img
                width="16px"
                height="16px"
                src="/materialsymbolsdoublearrow.svg"
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
              width: 257,
            }}
          >
            {frame1533}
          </Button>
        </div>
      </div>
    </section>
  );
};

Homepage4.propTypes = {
  className: PropTypes.string,
  vaKioskThyHiSn: PropTypes.string,
  maskGroup: PropTypes.string,
  maskGroup1: PropTypes.string,
  maskGroup2: PropTypes.string,
  maskGroup3: PropTypes.string,
  frame1533: PropTypes.string,
};

export default Homepage4;
