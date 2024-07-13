import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ChoSiDescription = ({ className = "" }) => {
  return (
    <section
      className={`w-[1348px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full text-left text-13xl text-black font-semibold-17 ${className}`}
    >
      <img
        className="h-[346px] w-[1221px] absolute !m-[0] right-[20px] bottom-[-270px] rounded-3xs object-cover"
        alt=""
        src="/rectangle-377@2x.png"
      />
      <div className="flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-[191px] box-border max-w-full mq450:pb-[53px] mq450:box-border mq1150:pb-[81px] mq1150:box-border mq1350:pb-[124px] mq1350:box-border">
        <div className="w-[1236px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[94px] max-w-full mq450:gap-[23px] mq800:gap-[47px]">
          <div className="w-[977px] flex flex-row items-start justify-start py-0 px-16 box-border max-w-full text-center text-white mq1150:pl-8 mq1150:pr-8 mq1150:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[74px] max-w-full mq450:gap-[18px] mq1150:gap-[37px]">
              <div className="w-[359px] flex flex-col items-start justify-start gap-[5px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full">
                  <div className="h-[169px] flex-1 relative max-w-full">
                    <h1 className="m-0 absolute top-[0px] left-[63px] text-inherit leading-[150%] capitalize font-bold font-inherit z-[1] mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
                      Chợsỉ Online
                    </h1>
                    <h3 className="m-0 absolute top-[45px] left-[65px] text-xl leading-[150%] capitalize font-normal font-inherit z-[2] mq450:text-base mq450:leading-[24px]">
                      Buy More Save More
                    </h3>
                    <div className="absolute top-[75px] left-[3px] w-[322px] h-[72px] text-29xl text-darkorange">
                      <div className="absolute top-[4px] left-[0px] bg-white w-[322px] h-[63px] z-[1]" />
                      <h1 className="m-0 absolute top-[0px] left-[20px] text-inherit leading-[150%] uppercase font-bold font-inherit z-[3] mq450:text-10xl mq450:leading-[43px] mq800:text-19xl mq800:leading-[58px]">
                        <span>Bulk</span>
                        <span className="text-white">{` `}</span>
                        <span className="text-blue">Price</span>
                      </h1>
                    </div>
                    <div className="absolute top-[145px] left-[0px] text-base leading-[150%] capitalize font-medium z-[1]">
                      Save 5-20% OFF secect in Stock Products
                    </div>
                  </div>
                </div>
                <h2 className="m-0 relative text-5xl leading-[150%] capitalize font-bold font-inherit z-[1] mq450:text-lgi mq450:leading-[29px]">
                  New categories now available
                </h2>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end text-dodgerblue-100">
                <h1 className="m-0 w-[612px] relative text-inherit leading-[150%] capitalize inline-block font-inherit mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
                  <b>E-Commerce</b>
                  <span className="text-darkslategray-200">
                    {" "}
                    Bulk Price (Chợ Sĩ Online )
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-7 box-border max-w-full text-5xl">
            <div className="flex-1 flex flex-col items-start justify-start pt-[108px] px-0 pb-0 box-border max-w-full mq800:pt-[70px] mq800:box-border">
              <div className="self-stretch flex flex-col items-start justify-start pt-[39px] pb-[33px] pr-0 pl-[55px] box-border relative gap-[17px] max-w-full mq450:pt-[25px] mq450:pb-[21px] mq450:box-border mq1150:pl-[27px] mq1150:box-border">
                <textarea
                  className="[border:none] bg-aliceblue-200 h-full w-[626px] [outline:none] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-3xs z-[1]"
                  rows={19}
                  cols={31}
                />
                <h2 className="m-0 self-stretch relative text-inherit leading-[150%] capitalize font-bold font-inherit z-[2] mq450:text-lgi mq450:leading-[29px]">
                  <p className="m-0">{`AI-Powered Auctions for suppliers and `}</p>
                  <p className="m-0 whitespace-pre-wrap">
                    distributors targeting 4 market segments :
                  </p>
                </h2>
                <div className="w-[407px] flex flex-row flex-wrap items-start justify-start gap-[21px] max-w-full text-base text-white">
                  <div className="w-10 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                      <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-0">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="w-10 h-10 relative rounded-[50%] bg-dodgerblue-100 z-[2]" />
                        </div>
                        <b className="relative leading-[278%] capitalize inline-block min-w-[19px] z-[3] ml-[-30px]">
                          01
                        </b>
                      </div>
                      <div className="self-stretch h-11 relative">
                        <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-dodgerblue-100 w-10 h-10 z-[2]" />
                        <b className="absolute top-[0px] left-[9px] leading-[278%] capitalize inline-block min-w-[22px] z-[3]">
                          02
                        </b>
                      </div>
                      <div className="self-stretch h-11 relative">
                        <div className="absolute top-[1px] left-[0px] rounded-[50%] bg-dodgerblue-100 w-10 h-10 z-[2]" />
                        <b className="absolute top-[0px] left-[9px] leading-[278%] capitalize inline-block min-w-[22px] z-[3]">
                          03
                        </b>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-0">
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                          <div className="w-10 h-10 relative rounded-[50%] bg-dodgerblue-100 z-[2]" />
                        </div>
                        <b className="relative leading-[278%] capitalize inline-block min-w-[22px] z-[3] ml-[-31px]">
                          04
                        </b>
                      </div>
                    </div>
                  </div>
                  <h3 className="m-0 flex-1 relative text-xl leading-[278%] capitalize font-normal font-inherit text-black inline-block min-w-[175px] max-w-full z-[2] mq450:text-base mq450:leading-[44px]">
                    <p className="m-0 whitespace-pre-wrap">{`Surplus  Auction  `}</p>
                    <p className="m-0 whitespace-pre-wrap">{`Video  Live Auction  `}</p>
                    <p className="m-0 whitespace-pre-wrap">{`Daily  Catch  Auction  `}</p>
                    <p className="m-0">Future Delivery Auction</p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[721px] flex flex-row items-start justify-end py-[140px] px-[63px] box-border relative min-h-[600px] max-w-full ml-[-358px] text-xl text-white mq800:pl-[31px] mq800:pr-[31px] mq800:pb-[91px] mq800:box-border">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/rectangle-372@2x.png"
              />
              <h3 className="m-0 w-[458px] relative text-inherit leading-[150%] capitalize font-semibold font-inherit inline-block shrink-0 max-w-full max-h-[300px] [word-break:break-word] z-[3] mq450:text-base mq450:leading-[24px]">
                <p className="m-0">
                  AI-Powered AgriBee has been developed by Scientists graduated
                  from Cornell University. Our platform digitizes supply chain
                  networks enabling wholesalers to auction and trade agriculture
                  products ....... 
                </p>
                <p className="m-0">
                  Provide logistics transportation to optimize shipping costs of
                  agriculture QR/Block Chain Product ID and Zip for distribution
                  directly from farmers or OCOP to Wholesalers and Retailers.
                </p>
              </h3>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full text-xl">
            <div className="flex-1 flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1150:flex-wrap">
              <div className="flex-[0.921] flex flex-col items-start justify-start pt-[26px] pb-[25px] pr-0 pl-[26px] box-border relative gap-[27px] min-w-[214px] max-w-full mq450:flex-1">
                <div className="w-[290px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-3xs bg-aliceblue-200" />
                <div className="self-stretch h-[201px] relative">
                  <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize inline-block w-full h-full z-[1]">
                    <p className="m-0">
                      <span className="whitespace-pre-wrap">
                        <span className="whitespace-pre-wrap">
                          <b className="font-semibold-17">{`Membership `}</b>
                        </span>
                      </span>
                      <span>
                        <span className="whitespace-pre-wrap">
                          <span className="whitespace-pre-wrap">{` `}</span>
                        </span>
                      </span>
                    </p>
                    <p className="m-0 text-base">
                      <span>
                        <span className="whitespace-pre-wrap">
                          <span>(as Auctioneer service fees )</span>
                        </span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="whitespace-pre-wrap">
                          <span>&nbsp;</span>
                        </span>
                      </span>
                    </p>
                    <p className="m-0 text-base text-dimgray-400">
                      <span>
                        <span className="whitespace-pre-wrap"> Gold,</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="whitespace-pre-wrap">&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="whitespace-pre-wrap"> Platinum</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="whitespace-pre-wrap">&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="whitespace-pre-wrap"> Silver</span>
                      </span>
                    </p>
                  </div>
                  <div className="absolute top-[89px] left-[0px] rounded-[50%] bg-blue w-[11px] h-[11px] z-[2]" />
                  <div className="absolute top-[137px] left-[0px] rounded-[50%] bg-blue w-[11px] h-[11px] z-[2]" />
                  <div className="absolute top-[183px] left-[0px] rounded-[50%] bg-blue w-[11px] h-[11px] z-[2]" />
                </div>
                <div className="w-[239px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                  <Button
                    className="h-9 flex-1 z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "13",
                      background: "#fb811f",
                      borderRadius: "4px",
                      "&:hover": { background: "#fb811f" },
                      height: 36,
                    }}
                  >
                    Bid Now
                  </Button>
                </div>
              </div>
              <div className="flex-[0.9099] flex flex-col items-start justify-start pt-[51px] pb-[25px] pr-[7px] pl-[23px] box-border relative gap-[20px] min-w-[216px] max-w-full ml-[-24px] mq450:flex-1">
                <div className="w-[290px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-3xs bg-aliceblue-200" />
                <div className="self-stretch flex flex-col items-start justify-start relative">
                  <div className="self-stretch h-[183px] relative leading-[150%] capitalize inline-block shrink-0 z-[2]">
                    <p className="m-0">
                      <span className="whitespace-pre-wrap">
                        <span className="whitespace-pre-wrap">
                          <b>Auctioneer Broker -VVIP</b>
                        </span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="whitespace-pre-wrap">
                          <span className="whitespace-pre-wrap">&nbsp;</span>
                        </span>
                      </span>
                    </p>
                    <p className="m-0 text-base text-dimgray-100">
                      <span>
                        <span>
                          <span className="whitespace-pre-wrap">{`     `}</span>
                          <span className="whitespace-pre-wrap">
                            {" "}
                            Line of Credit for Traders.
                          </span>
                        </span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>
                          <span className="whitespace-pre-wrap">&nbsp;</span>
                        </span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>
                          <span className="whitespace-pre-wrap">{`      Auction License  `}</span>
                        </span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>
                          <span className="whitespace-pre-wrap">&nbsp;</span>
                        </span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span>
                          <span className="whitespace-pre-wrap">
                            {" "}
                            ManagementProgram
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="w-[11px] h-[11px] absolute !m-[0] top-[65px] left-[1px] rounded-[50%] bg-blue z-[3]" />
                  <div className="w-[11px] h-[11px] absolute !m-[0] bottom-[58px] left-[1px] rounded-[50%] bg-blue z-[3]" />
                  <div className="w-[11px] h-[11px] absolute !m-[0] bottom-[11px] left-[1px] rounded-[50%] bg-blue z-[3]" />
                </div>
                <div className="w-[245px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
                  <Button
                    className="h-9 flex-1 z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "13",
                      background: "#fb811f",
                      borderRadius: "4px",
                      "&:hover": { background: "#fb811f" },
                      height: 36,
                    }}
                  >
                    Bid Now
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[216px] max-w-full ml-[-24px]">
                <div className="w-[290px] rounded-3xs bg-aliceblue-200 flex flex-col items-start justify-start pt-[39px] pb-[25px] pr-7 pl-[29px] box-border gap-[27px]">
                  <div className="w-[290px] h-[315px] relative rounded-3xs bg-aliceblue-200 hidden" />
                  <div className="w-[206px] flex flex-row items-start justify-start py-0 px-[9px] box-border">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] relative">
                      <div className="self-stretch h-[183px] relative leading-[150%] capitalize inline-block shrink-0 z-[1]">
                        <p className="m-0">
                          <span className="whitespace-pre-wrap">
                            <b className="whitespace-pre-wrap">{`WebServices  `}</b>
                          </span>
                        </p>
                        <p className="m-0 text-base">
                          <span>
                            <span className="whitespace-pre-wrap">No Fees</span>
                          </span>
                        </p>
                        <p className="m-0">
                          <span>
                            <span className="whitespace-pre-wrap">&nbsp;</span>
                          </span>
                        </p>
                        <p className="m-0 text-dimgray-100">
                          <span>
                            <span className="whitespace-pre-wrap">{`    `}</span>
                            <span className="whitespace-pre-wrap">
                              {" "}
                              Web Store front
                            </span>
                          </span>
                        </p>
                        <p className="m-0">
                          <span>
                            <span className="whitespace-pre-wrap">&nbsp;</span>
                          </span>
                        </p>
                        <p className="m-0">
                          <span>
                            <span className="whitespace-pre-wrap">
                              {" "}
                              Landing page
                            </span>
                          </span>
                        </p>
                        <p className="m-0">
                          <span>
                            <span className="whitespace-pre-wrap">&nbsp;</span>
                          </span>
                        </p>
                        <p className="m-0">
                          <span>
                            <span className="whitespace-pre-wrap">
                              {" "}
                              Catalog
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="w-[11px] h-[11px] absolute !m-[0] top-[81px] left-[0px] rounded-[50%] bg-blue z-[2]" />
                      <div className="w-[11px] h-[11px] absolute !m-[0] bottom-[47px] left-[0px] rounded-[50%] bg-blue z-[2]" />
                      <div className="w-[11px] h-[11px] absolute !m-[0] bottom-[0px] left-[0px] rounded-[50%] bg-blue z-[2]" />
                    </div>
                  </div>
                  <Button
                    className="self-stretch h-9 z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "13",
                      background: "#fb811f",
                      borderRadius: "4px",
                      "&:hover": { background: "#fb811f" },
                      height: 36,
                    }}
                  >
                    Bid Now
                  </Button>
                </div>
              </div>
              <div className="w-[290px] rounded-3xs bg-aliceblue-200 flex flex-col items-start justify-start pt-[50px] pb-[25px] pr-3.5 pl-[29px] box-border gap-[21px] ml-[-24px]">
                <div className="w-[290px] h-[315px] relative rounded-3xs bg-aliceblue-200 hidden" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px]">
                  <div className="h-[183px] flex-1 relative">
                    <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize inline-block w-full h-full z-[1]">
                      <p className="m-0">
                        <span className="whitespace-pre-wrap">
                          <b>{`E-Commerce Services `}</b>
                        </span>
                      </p>
                      <p className="m-0">
                        <span>
                          <span className="whitespace-pre-wrap">&nbsp;</span>
                        </span>
                      </p>
                      <p className="m-0 text-base text-gray-100">
                        <span>
                          <span className="whitespace-pre-wrap">{`      Advertising and  `}</span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span>
                          <span className="whitespace-pre-wrap">&nbsp;</span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span>
                          <span className="whitespace-pre-wrap">
                            {" "}
                            transaction fee of 5%
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="absolute top-[65px] left-[0px] rounded-[50%] bg-blue w-[11px] h-[11px] z-[2]" />
                    <div className="absolute top-[112px] left-[0px] rounded-[50%] bg-blue w-[11px] h-[11px] z-[2]" />
                  </div>
                </div>
                <Button
                  className="w-[233px] h-9 z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "13",
                    background: "#fb811f",
                    borderRadius: "4px",
                    "&:hover": { background: "#fb811f" },
                    width: 233,
                    height: 36,
                  }}
                >
                  Bid Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ChoSiDescription.propTypes = {
  className: PropTypes.string,
};

export default ChoSiDescription;
