import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full text-left text-xl text-gray-300 font-semibold-17 mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="flex-1 bg-light-gray overflow-hidden flex flex-col items-start justify-start py-[70px] px-[109px] box-border gap-[40px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[20px] mq750:py-[45px] mq750:px-[54px] mq750:box-border">
        <div className="w-[907px] h-0.5 relative bg-whitesmoke-300 hidden max-w-full" />
        <div className="flex flex-row items-start justify-start gap-[44px] max-w-full mq750:flex-wrap mq750:gap-[22px]">
          <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold inline-block max-w-full mq450:text-base mq450:leading-[22px]">
            Finding the WholeSales Market in Region
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <div className="relative leading-[22px] font-semibold mq450:text-base mq450:leading-[18px]">
              Find Sourcing
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-[3px] box-border max-w-full text-yellowgreen-100">
          <div className="flex-1 flex flex-row items-start justify-start gap-[20px] max-w-full">
            <div className="w-[289px] flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px] mq1050:hidden">
              <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start py-[18px] px-[71px] border-[1px] border-solid border-gray-light2 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[388px] w-[289px] relative rounded-xl bg-white box-border hidden border-[1px] border-solid border-gray-light2" />
                <img
                  className="h-[348px] flex-1 relative rounded-xl max-w-full overflow-hidden object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-18@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
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
            <div className="flex-1 flex flex-col items-start justify-end pt-16 px-0 pb-0 box-border max-w-[calc(100%_-_309px)] text-mid text-dimgray-200 mq450:pt-[42px] mq450:box-border mq1050:max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="w-[289px] !m-[0] absolute top-[-64px] left-[0px] rounded-t-xl rounded-b-none bg-darkorange flex flex-row items-start justify-center py-2.5 px-5 box-border z-[1] text-white">
                  <div className="relative leading-[24px]">
                    <p className="m-0">{`Mekong Delta `}</p>
                    <p className="m-0">(South region)</p>
                  </div>
                </div>
                <div className="w-[289px] !m-[0] absolute top-[-64px] right-[307px] rounded-t-xl rounded-b-none bg-gray-light2 flex flex-row items-start justify-center py-2.5 px-5 box-border z-[1]">
                  <div className="relative leading-[24px]">
                    <p className="m-0"> Cetral Villages</p>
                    <p className="m-0">(Central region)</p>
                  </div>
                </div>
                <div className="!m-[0] absolute top-[-64px] right-[0px] rounded-t-xl rounded-b-none bg-gray-light2 flex flex-row items-start justify-start py-2.5 px-20 z-[1]">
                  <div className="relative leading-[24px]">
                    <p className="m-0">{`Red River Delta `}</p>
                    <p className="m-0">(North region)</p>
                  </div>
                </div>
                <div className="flex-1 rounded-t-none rounded-b-xl bg-white box-border flex flex-row items-end justify-between pt-0 pb-0.5 pr-[23px] pl-5 max-w-full gap-[20px] text-xl text-gray-300 border-[1px] border-solid border-gray-light2 mq1050:flex-wrap">
                  <div className="self-stretch w-[905px] relative rounded-t-none rounded-b-xl bg-white box-border hidden max-w-full border-[1px] border-solid border-gray-light2" />
                  <div className="w-[498px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border min-w-[498px] max-w-full mq1050:flex-1 mq1050:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[55px] max-w-full mq750:gap-[27px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                        <div className="relative leading-[22px] font-semibold z-[1] mq450:text-base mq450:leading-[18px]">
                          Top List of Wholesale Markets
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-mini mq750:flex-wrap">
                          <div className="relative leading-[24px] capitalize z-[1]">
                            <ul className="m-0 font-inherit text-inherit pl-5">
                              <li className="mb-0">Binh Dien</li>
                              <li className="mb-0">Thu Duc</li>
                              <li className="mb-0">Hoc Mon</li>
                              <li className="mb-0">Cai Be</li>
                              <li className="mb-0">Cai Lay</li>
                              <li>Ca Mau</li>
                            </ul>
                          </div>
                          <div className="relative leading-[24px] capitalize z-[1]">
                            <ul className="m-0 font-inherit text-inherit pl-5">
                              <li className="mb-0">Binh Dien</li>
                              <li className="mb-0">Thu Duc</li>
                              <li className="mb-0">Hoc Mon</li>
                              <li className="mb-0">Cai Be</li>
                              <li className="mb-0">Cai Lay</li>
                              <li>Ca Mau</li>
                            </ul>
                          </div>
                          <div className="relative leading-[24px] capitalize z-[1]">
                            <ul className="m-0 font-inherit text-inherit pl-5">
                              <li className="mb-0">Binh Dien</li>
                              <li className="mb-0">Thu Duc</li>
                              <li className="mb-0">Hoc Mon</li>
                              <li className="mb-0">Cai Be</li>
                              <li className="mb-0">Cai Lay</li>
                              <li>Ca Mau</li>
                            </ul>
                          </div>
                          <div className="relative leading-[24px] capitalize z-[1]">
                            <ul className="m-0 font-inherit text-inherit pl-5">
                              <li className="mb-0">Binh Dien</li>
                              <li className="mb-0">Thu Duc</li>
                              <li className="mb-0">Hoc Mon</li>
                              <li className="mb-0">Cai Be</li>
                              <li className="mb-0">Cai Lay</li>
                              <li>Ca Mau</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <FormControl
                        className="w-[324px] h-[47px] font-semibold-17 font-semibold text-mini text-yellowgreen-100 max-w-full z-[1]"
                        variant="standard"
                        sx={{
                          borderColor: "#7ac143",
                          borderStyle: "SOLID",
                          borderTopWidth: "1px",
                          borderRightWidth: "1px",
                          borderBottomWidth: "1px",
                          borderLeftWidth: "1px",
                          backgroundColor: "#fff",
                          borderRadius: "23px",
                          width: "65.06024096385542%",
                          height: "47px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "47px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "47px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "47px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "47px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "#7ac143",
                            fontSize: 15,
                            fontWeight: "Semi Bold",
                            fontFamily: "Inter",
                            textAlign: "left",
                            p: "0 !important",
                            marginLeft: "20px",
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
                              width="14px"
                              height="15px"
                              src="/vector-1.svg"
                              style={{ marginRight: "20px" }}
                            />
                          )}
                        >
                          <MenuItem>
                            Auction Lowest Price at the Source
                          </MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                    </div>
                  </div>
                  <div className="h-80 w-[266px] flex flex-row items-start justify-start gap-[19px] min-w-[266px] mq1050:flex-1">
                    <div className="self-stretch w-0.5 relative bg-gray-light2 [transform:_rotate(180deg)] z-[2]" />
                    <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                        <div className="self-stretch relative leading-[22px] font-semibold z-[1] mq450:text-base mq450:leading-[18px]">
                          Supplier, Sourcer, OCOP Broker
                        </div>
                        <div className="relative text-mini leading-[24px] capitalize z-[1]">
                          <ul className="m-0 font-inherit text-inherit pl-5">
                            <li className="mb-0">Ba Ria-Vung Tau (Seafood)</li>
                            <li className="mb-0">City. Ho Chi Minh (Meat)</li>
                            <li className="mb-0">Tien Giang (Watermelon)</li>
                            <li className="mb-0">Ben Tre (Coconut)</li>
                            <li className="mb-0">Dong Thap (Fresh Flowers)</li>
                            <li className="mb-0">Kien Giang (Seafood)</li>
                            <li className="mb-0">Hau Giang (Rice)</li>
                            <li>Ca Mau (Dried foods, Seafood)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
