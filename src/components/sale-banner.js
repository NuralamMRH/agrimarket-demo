import { Button } from "@mui/material";
import CategoryIconContainers from "./category-icon-containers";
import PropTypes from "prop-types";

const SaleBanner = ({ className = "" }) => {
  return (
    <section
      className={`mr-[-2px] mb-[501px] w-[1469px] flex flex-row items-start justify-start relative max-w-[103%] shrink-0 text-left text-19xl text-darkorange font-semibold-17 ${className}`}
    >
      <div className="h-[422px] w-[1484px] absolute !m-[0] right-[-32px] bottom-[-417px] bg-peachpuff overflow-hidden shrink-0">
        <div className="absolute top-[208px] left-[30px] w-16 h-[53px] overflow-hidden hidden" />
        <b className="absolute top-[112px] left-[151px] tracking-[-0.02em] leading-[35px] flex items-center mq450:text-4xl mq450:leading-[21px] mq1050:text-11xl mq1050:leading-[28px]">
          <span>
            <p className="[margin-block-start:0] [margin-block-end:36px]">
              Final Sale
            </p>
            <p className="m-0 text-43xl text-gray-500">Get 30% Off</p>
          </span>
        </b>
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[477px] max-h-full w-[1037px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/vector-14@2x.png"
        />
        <Button
          className="absolute top-[251px] left-[151px]"
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
            width: 160,
            height: 53,
          }}
        >
          Shop Now
        </Button>
      </div>
      <div className="flex-1 bg-honeydew-200 flex flex-col items-start justify-start pt-[103px] pb-[99px] pr-[57px] pl-[82px] box-border gap-[60px] max-w-full z-[2] text-dodgerblue-200 lg:pl-[41px] lg:pr-7 lg:box-border mq750:gap-[30px] mq750:pt-[67px] mq750:pb-16 mq750:box-border">
        <div className="w-[1469px] h-[508px] relative bg-honeydew-200 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center">
          <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[27px] font-bold font-inherit z-[3] mq450:text-4xl mq450:leading-[16px] mq1050:text-11xl mq1050:leading-[22px]">
            Shop More Categorise
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-0 pl-[57px] box-border relative gap-[20px] max-w-full text-5xl text-black lg:pl-7 lg:box-border">
          <CategoryIconContainers
            maskGroup="/mask-group-45@2x.png"
            vegitable="Vegitable"
          />
          <CategoryIconContainers
            maskGroup="/mask-group-46@2x.png"
            vegitable="Fruit"
          />
          <CategoryIconContainers
            maskGroup="/mask-group-47@2x.png"
            vegitable="Seafood"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[13px] min-w-[225px] max-w-full">
            <div className="self-stretch flex flex-row items-end justify-start gap-[16px] mq450:flex-wrap">
              <img
                className="h-[170px] w-[289px] relative object-cover z-[3]"
                alt=""
                src="/mask-group-48@2x.png"
              />
              <div className="h-[105px] flex flex-col items-start justify-start">
                <img
                  className="w-[41px] h-[41px] relative z-[3]"
                  alt=""
                  src="/group-1048.svg"
                />
              </div>
            </div>
            <div className="w-[277px] flex flex-row items-start justify-center py-0 px-5 box-border">
              <div className="relative leading-[150%] capitalize font-semibold inline-block min-w-[59px] z-[3] mq450:text-lgi mq450:leading-[29px]">
                Meat
              </div>
            </div>
          </div>
          <img
            className="h-[41px] w-[41px] absolute !m-[0] top-[64px] left-[0px] object-contain z-[3]"
            alt=""
            src="/group-1049@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

SaleBanner.propTypes = {
  className: PropTypes.string,
};

export default SaleBanner;
