import { useMemo } from "react";
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

const Header = ({
  className = "",
  group1022,
  headerItemsMarginTop,
  headerItemsHeight,
  headerItemsTop,
  headerItemsPosition,
  headerItemsFlex,
  headerMarginBottom,
  __HOME__,
  __PH1__,
  __BUY__,
}) => {
  const headerStyle = useMemo(() => {
    return {
      marginTop: headerItemsMarginTop,
      height: headerItemsHeight,
      top: headerItemsTop,
      position: headerItemsPosition,
      flex: headerItemsFlex,
      marginBottom: headerMarginBottom,
    };
  }, [
    headerItemsMarginTop,
    headerItemsHeight,
    headerItemsTop,
    headerItemsPosition,
    headerItemsFlex,
    headerMarginBottom,
  ]);

  return (
    <header
      className={`mt-[-86px] self-stretch h-[86px] bg-blue overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[7px] px-2 pb-[7.3px] box-border gap-[12px] top-[-86] z-[99] sticky text-left text-lg text-white font-semibold-17 ${className}`}
      style={headerStyle}
    >
      <div className="self-stretch w-[260px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
        <img
          className="self-stretch flex-1 pointer-events-auto relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={group1022}
          onClick={__HOME__}
        />
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[18px] pl-0">
        <a
          onClick={__HOME__}
          className="[text-decoration:none] pointer-events-auto relative leading-[22px] font-medium text-[inherit] inline-block min-w-[51px]"
        >
          Home
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[18px] pl-0">
        <a
          className="[text-decoration:none] pointer-events-auto relative leading-[22px] font-medium text-[inherit] inline-block min-w-[33px]"
          onClick={__BUY__}
        >
          Buy
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[18px] pl-0">
        <a className="[text-decoration:none] pointer-events-auto relative leading-[22px] font-medium text-[inherit] inline-block min-w-[67px]">
          Auction
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[18px] pl-0">
        <a className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[110px] whitespace-nowrap">
          Chợ Đầu Mối
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[18px] pl-0">
        <a className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[97px] whitespace-nowrap">
          Thương Lái
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[25px] pb-0 pr-[18px] pl-0">
        <a className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[53px]">
          OCOP
        </a>
      </div>
      <div className="w-[94px] flex flex-col items-start justify-start pt-[25px] pb-0 pr-5 pl-0 box-border">
        <a
          className="[text-decoration:none] relative leading-[22px] font-medium text-[inherit] inline-block min-w-[69px]"
          onClick={__PH1__}
        >
          Contact
        </a>
      </div>
      <div className="w-[102px] flex flex-col items-start justify-start pt-7 pb-0 pr-2.5 pl-0 box-border">
        <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
          <img
            className="h-4 w-6 relative rounded-12xs overflow-hidden shrink-0"
            loading="lazy"
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
      </div>
      <div className="flex flex-col items-start justify-start pt-7 pb-0 pr-2.5 pl-0">
        <a className="[text-decoration:none] relative leading-[22px] font-semibold text-[inherit] inline-block min-w-[100px] whitespace-nowrap">
          Sell with us
        </a>
      </div>
      <div className="w-[106px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
        <Button
          className="self-stretch h-[42px]"
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
      </div>
      <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
        <a className="[text-decoration:none] relative leading-[22px] font-semibold text-[inherit] inline-block min-w-[53px] whitespace-nowrap">
          Log in
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  group1022: PropTypes.string,

  /** Style props */
  headerItemsMarginTop: PropTypes.any,
  headerItemsHeight: PropTypes.any,
  headerItemsTop: PropTypes.any,
  headerItemsPosition: PropTypes.any,
  headerItemsFlex: PropTypes.any,
  headerMarginBottom: PropTypes.any,

  /** Action props */
  __PH1__: PropTypes.func,
};

export default Header;
