import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const MarketSearchContainer = ({ className = "" }) => {
  return (
    <section
      className={`w-[1331px] flex flex-row items-start justify-center pt-0 px-5 pb-20 box-border max-w-full text-left text-mid text-gray-300 font-semibold-17 mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="w-[1107px] flex flex-row items-start justify-start gap-[42px] max-w-full mq750:gap-[21px] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[362px] max-w-full mq450:min-w-full mq750:gap-[20px]">
          <div className="relative text-xl tracking-[-0.02em] leading-[27px] uppercase font-semibold inline-block max-w-full mq450:text-base mq450:leading-[22px]">
            Pre-Register to Join our Auction Network Today!
          </div>
          <div className="self-stretch h-[52px] relative leading-[24px] inline-block shrink-0">
            <p className="m-0">{`Submit basic contact information to our team and we will get in contact with you to finish your application. `}</p>
          </div>
          <div className="w-[423px] relative leading-[24px] inline-block max-w-full">
            Proof of identity and liquidity will be required. This process can
            take up to 5 business days to complete!
          </div>
        </div>
        <div className="w-[508px] flex flex-col items-center justify-start gap-[30px] min-w-[508px] max-w-full text-center text-xl mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col items-start justify-start mq1050:self-stretch mq1050:w-auto">
              <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
                Contact Information
              </div>
            </div>
          </div>
          <form className="m-0 self-stretch flex flex-col items-start justify-start py-0 px-3.5 box-border gap-[32px] max-w-full mq750:gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start gap-[32px] mq450:flex-wrap mq750:gap-[16px]">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[146px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative text-sm leading-[20px] font-ibm-plex-sans text-dimgray-200 text-left inline-block min-w-[67px]">
                        First name
                      </div>
                      <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-light-gray overflow-hidden flex flex-row items-center justify-start py-3 px-4 gap-[8px]">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                          <img
                            className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                            alt=""
                            src="/mail.svg"
                          />
                          <div className="flex-1 relative text-sm leading-[20px] font-ibm-plex-sans text-gray-300 text-left">
                            First name
                          </div>
                        </div>
                        <img
                          className="h-4 w-4 relative hidden"
                          alt=""
                          src="/help-icon.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch relative text-sm leading-[20px] font-semibold-17 text-slategray text-left hidden">
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[146px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative text-sm leading-[20px] font-ibm-plex-sans text-dimgray-200 text-left inline-block min-w-[65px]">
                        Last name
                      </div>
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch h-11 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] font-ibm-plex-sans text-sm text-gray-300"
                        placeholder="Last name"
                        variant="outlined"
                        sx={{
                          "& fieldset": { border: "none" },
                          "& .MuiInputBase-root": {
                            height: "44px",
                            backgroundColor: "#f6f6f6",
                            borderRadius: "8px",
                            fontSize: "14px",
                          },
                          "& .MuiInputBase-input": { color: "#222" },
                        }}
                      />
                    </div>
                    <div className="self-stretch relative text-sm leading-[20px] font-semibold-17 text-slategray text-left hidden">
                      This is a hint text to help user.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative text-base leading-[24px] font-ibm-plex-sans text-dimgray-200 text-left inline-block min-w-[41px]">
                      Email
                    </div>
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-12 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] font-ibm-plex-sans text-base text-gray-300"
                      placeholder="you@company.com"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "48px",
                          backgroundColor: "#f6f6f6",
                          borderRadius: "8px",
                        },
                        "& .MuiInputBase-input": { color: "#222" },
                      }}
                    />
                  </div>
                  <div className="w-80 relative text-sm leading-[20px] font-semibold-17 text-slategray text-left hidden">
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="relative text-base leading-[24px] font-ibm-plex-sans text-dimgray-200 text-left inline-block min-w-[106px]">
                      Phone number
                    </div>
                    <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-light-gray overflow-hidden flex flex-row items-start justify-start max-w-full [row-gap:20px] mq450:flex-wrap">
                      <FormControl
                        className="h-12 w-[66px] font-ibm-plex-sans font-medium text-sm text-gray-400"
                        variant="standard"
                        sx={{
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          borderRadius: "0px 0px 0px 0px",
                          width: "66px",
                          height: "48px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "48px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "48px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "48px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "48px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "#101828",
                            fontSize: 14,
                            fontWeight: "Medium",
                            fontFamily: "IBM Plex Sans",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "16px",
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
                              src="/chevrondown.svg"
                              style={{ marginRight: "12px" }}
                            />
                          )}
                        >
                          <MenuItem>US</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                      <div className="flex-1 flex flex-row items-center justify-start py-3 pr-4 pl-0 box-border gap-[8px] min-w-[269px] max-w-full">
                        <div className="flex-1 relative text-base leading-[24px] font-ibm-plex-sans text-gray-300 text-left inline-block max-w-full">
                          +1 (555) 000-0000
                        </div>
                        <img
                          className="h-4 w-4 relative hidden"
                          alt=""
                          src="/help-icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-80 relative text-sm leading-[20px] font-semibold-17 text-slategray text-left hidden">
                    This is a hint text to help user.
                  </div>
                </div>
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-[74px] font-ibm-plex-sans text-sm text-dimgray-200"
                placeholder="Message"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "74px",
                    borderRadius: "0px 0px 0px 0px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": { color: "#646565" },
                }}
              />
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full mq450:flex-wrap">
                <input className="m-0 h-5 w-5" type="checkbox" />
                <div className="flex-1 relative text-sm leading-[20px] font-ibm-plex-sans text-gray-300 text-left inline-block min-w-[195px] max-w-full">
                  You agree to our friendly privacy policy.
                </div>
              </div>
            </div>
            <Button
              className="self-stretch h-[54px]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "20",
                background: "#fb811f",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#fb811f" },
                height: 54,
              }}
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

MarketSearchContainer.propTypes = {
  className: PropTypes.string,
};

export default MarketSearchContainer;
