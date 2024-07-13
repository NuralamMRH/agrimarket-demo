import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import WinePair from "./wine-pair";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[13px] box-border max-w-full text-center text-sm">
        <div className="w-[100%] flex flex-row flex-wrap items-start justify-start gap-[36px] max-w-full mq450:gap-[18px]">
          <WinePair
            image111="/image-108@2x.png"
            lodiOldZinfandelCaliforni="Rosé of Pinot Noir Willamette Valley. Oregon"
          />
          <WinePair
            image111="/image-112@2x.png"
            lodiOldZinfandelCaliforni="Grand Assemblage Willamette Valley Pinot Noir, Orenco"
            propGap="1px"
          />
          <WinePair
            image111="/image-110@2x.png"
            lodiOldZinfandelCaliforni="Bourbon Barrel-Aged_Cabernet Sauvignon, California"
            propGap="1px"
          />
          <WinePair
            image111="/image-112@2x.png"
            lodiOldZinfandelCaliforni="Grand Assemblage Willamette Valley Pinot Noir, Orenco"
            propGap="1px"
          />
          <WinePair
            image111="/image-112@2x.png"
            lodiOldZinfandelCaliforni="Grand Assemblage Willamette Valley Pinot Noir, Orenco"
            propGap="1px"
          />
        </div>
      </div>
      <div
        className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[9px] pr-[5px] pl-0 box-border max-w-full text-left text-sm text-white font-semibold-17 ${className}`}
      >
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1150:flex-wrap">
          <div className="w-[282px] flex flex-col items-start justify-start">
            <FormControl
              className="w-[145px] h-9 font-semibold-17 font-medium text-sm text-dimgray-300"
              variant="standard"
              sx={{
                borderColor: "#cdcdcd",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                width: "51.41843971631206%",
                height: "36px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "36px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "36px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "36px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "36px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#5e5e5f",
                  fontSize: 14,
                  fontWeight: "Medium",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "13px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="12.7px"
                    height="7.8px"
                    src="/vector.svg"
                    style={{ marginRight: "13.3px" }}
                  />
                )}
              >
                <MenuItem>View 24</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>

          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start">
              <div className="w-[30px] flex flex-col items-start justify-start pt-[3px] pb-0 pr-[15px] pl-0 box-border">
                <img
                  className="w-[14.3px] h-[14.3px] relative object-contain"
                  alt=""
                  src="/group-1254@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start relative">
                <div className="h-[27px] w-[27px] absolute !m-[0] bottom-[-4px] left-[-10px] rounded-[50%] bg-dodgerblue-100" />
                <div className="relative leading-[150%] capitalize font-medium z-[1]">
                  <span>1</span>
                  <span className="text-black whitespace-pre-wrap">{`     `}</span>
                  <span className="text-silver whitespace-pre-wrap">
                    2 3 4 5 6 7 8 9 10
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-[18.5px] h-[14.5px] relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/group-1253.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
