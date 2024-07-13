import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-left text-33xl text-white font-helvetica ${className}`}
    >
      <div className="h-[399px] flex-1 overflow-hidden flex flex-row items-start justify-start max-w-full">
        <div className="mt-[-86px] ml-[-1px] h-[1580px] flex-1 relative max-w-full">
          <img
            className="absolute top-[86px] left-[1px] w-[1440px] h-[405px] object-contain"
            alt=""
            src="/screenshot-16-1@2x.png"
          />
          <img
            className="absolute top-[-194px] left-[-85px] w-[1526px] h-[1016px] object-cover z-[1]"
            alt=""
            src="/realfoodpyramidarrangement-1@2x.png"
          />
          <div className="absolute top-[159px] left-[117px] rounded-xl bg-gray-700 w-[862px] h-[264px] overflow-hidden z-[2]">
            <h1 className="m-0 absolute top-[38px] left-[54px] text-inherit leading-[58px] font-bold font-inherit inline-block w-[759px] z-[3] mq450:text-12xl mq450:leading-[35px] mq1050:text-23xl mq1050:leading-[46px]">
              Sàn Đấu Giá Nông Sản AiBbee
            </h1>
            <h2 className="m-0 absolute top-[103px] left-[54px] text-9xl tracking-[0.08em] leading-[27px] font-normal font-semibold-17 inline-block w-[759px] z-[3] mq450:text-3xl mq450:leading-[22px]">
              Connects Local Famers with Wholesale Suppliers
            </h2>
            <TextField
              className="[border:none] bg-[transparent] absolute top-[162px] left-[54px] font-semibold-17 text-mini text-gray-200 z-[3]"
              placeholder="Search Auction Bidding "
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img
                    width="24px"
                    height="24px"
                    src="/mingcutesearchline.svg"
                  />
                ),
              }}
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#f3f3f3",
                  paddingRight: "23px",
                  borderRadius: "40px",
                  fontSize: "15px",
                },
                "& .MuiInputBase-input": { color: "#797979" },
                width: "596px",
              }}
            />
          </div>
          <div className="absolute top-[740px] left-[1px] bg-whitesmoke-100 w-[1440px] h-[840px] overflow-hidden z-[2]" />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
