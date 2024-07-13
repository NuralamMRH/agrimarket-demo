import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const HeaderNav = ({ className = "", __HOME__, __PH1__, __BUY__ }) => {
  return (
    <header
      className={`mt-[-113px] self-stretch bg-blue overflow-hidden flex flex-row items-start justify-start pt-[7px] px-[18px] pb-[7.3px] gap-[20.1px] shrink-0 top-[-113] z-[99] sticky text-left text-lg text-white font-semibold-17 ${className}`}
    >
      <img
        className="h-[71.7px] w-[241.9px] relative object-contain"
        alt=""
        src="/group-10221@2x.png"
        onClick={__HOME__}
      />
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[9px] pl-0">
        <a
          onClick={__HOME__}
          className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[51px]"
        >
          Home
        </a>
      </div>
      <div className="w-[42.9px] flex flex-col items-start justify-start pt-[25px] pb-0 pr-[9px] pl-0 box-border">
        <a
          onClick={__BUY__}
          className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[33px]"
        >
          Buy
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[9px] pl-0">
        <a className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[67px]">
          Auction
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[9px] pl-0">
        <a className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[110px] whitespace-nowrap">
          Chợ Đầu Mối
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[9px] pl-0">
        <a className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[97px] whitespace-nowrap">
          Thương Lái
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[9px] pl-0">
        <a className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[53px]">
          OCOP
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-4 pl-0">
        <a className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[69px]">
          Contact
        </a>
      </div>
      <div className="w-[214px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[22px]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
            <img
              className="h-4 w-6 relative rounded-12xs overflow-hidden shrink-0"
              alt=""
              src="/flags.svg"
            />
            <div className="flex-1 flex flex-row items-center justify-start">
              <FormControl
                className="h-[22px] flex-1 font-semibold-17 font-semibold text-lg text-white"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "58px",
                  height: "22px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "22px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "22px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "22px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "22px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: "Semi Bold",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="20px"
                      height="20px"
                      src="/iconsolidcheverondown.svg"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>En</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <a className="[text-decoration:none] relative leading-[22px] font-semibold text-[inherit] inline-block min-w-[100px] whitespace-nowrap">
            Sell with us
          </a>
        </div>
      </div>
      <div className="w-[171px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border lg:w-0">
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px] lg:hidden">
          <Button
            className="h-[42px] flex-1"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#fb811f",
              borderRadius: "20px",
              "&:hover": { background: "#fb811f" },
              height: 42,
            }}
            onClick={__PH1__}
          >
            Sing up
          </Button>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
            <a className="[text-decoration:none] relative leading-[22px] font-semibold text-[inherit] inline-block min-w-[53px] whitespace-nowrap">
              Log in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

HeaderNav.propTypes = {
  className: PropTypes.string,
};

export default HeaderNav;
