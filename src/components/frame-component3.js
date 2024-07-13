import Company from "./company";
import HighlightContent from "./highlight-content";
import WinePair from "./wine-pair";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-[9px] pl-0 box-border max-w-full text-left text-5xl text-darkslategray-200 font-semibold-17 ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <Company />
        <div className="w-[885px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-1731px] text-base">
          <div className="w-[309px] box-border flex flex-col items-start justify-start pt-[5px] pr-[11px] pl-5 gap-[94px] shrink-0 z-[2] border-[1px] border-solid border-lightgray-200 mq450:gap-[44px] mq800:pb-[88px] mq800:box-border mq1150:pb-[135px] mq1150:box-border mq1350:pt-[2057px] mq1350:pb-[207px] mq1350:box-border">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[124px] pr-[3px] pl-1.5 text-center text-5xl text-dodgerblue-100 mq450:pb-[81px] mq450:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[31px] mq450:gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[39px]">
                  <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[47px] capitalize font-bold font-inherit mq450:text-lgi mq450:leading-[38px]">
                    Contact info
                  </h2>
                </div>
                <div className="w-[267px] h-[152px] relative text-sm capitalize text-left inline-block max-h-[152px] [word-break:break-word] text-darkslategray-200">
                  <p className="m-0">
                    <span>
                      <span className="leading-[157%]">
                        311 N. Franklin Street Suite 200 Juneau, AK 99801-1147
                      </span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[97%]">&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[97%]">800.478.2903</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[97%]">&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[97%]">907.465.5560</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[97%]">&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[97%]">{`Wild, Natural & Sustainable`}</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[97%]">&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0 text-dodgerblue-100">
                    <span className="leading-[97%]">
                      <span className="[text-decoration:underline]">
                        info.request@alaskaseafood.org
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[97px] pr-0 pl-[9px]">
              <div className="flex-1 relative capitalize">
                <p className="m-0">
                  <b className="leading-[93%]">US/CANADA</b>
                </p>
                <p className="m-0 text-sm">
                  <span>
                    <span className="leading-[190%]">{`California Milk Advisory Board `}</span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span className="leading-[190%]">
                      2336 W. Grant Line Road, Suite 20 Tracy, CA 95377
                    </span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span className="leading-[191%]">
                      <b>Get Directuins</b>
                    </span>
                  </span>
                </p>
                <p className="m-0">
                  <span>
                    <span className="leading-[191%]">
                      <span>(209) 883-6455</span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[53px] mq450:gap-[26px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[9px]">
                <div className="relative">
                  <p className="m-0">
                    <b className="leading-[93%] capitalize">{`POTATOES USA `}</b>
                  </p>
                  <p className="m-0">
                    <b className="leading-[93%] capitalize">&nbsp;</b>
                  </p>
                  <p className="m-0 leading-[165%] lowercase">
                    5675 WYNKOOP STREET, DENVER, CO 80216 (305) 369-7783 CONTACT
                    US
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-2">
                  <div className="flex-1 relative">
                    <p className="m-0">
                      <b className="leading-[92%]">2024 U.S. GRAINS COUNCIL</b>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="leading-[185%]">&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="leading-[20px]">
                          20 F STREET NW, SUITE 900, WASHINGTON, DC 20001
                        </span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="leading-[20px]">&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="leading-[20px]">{`TEL: 202.789.0789 `}</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="leading-[20px]">&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="leading-[20px]">
                          FAX: 202.898.0522
                        </span>
                      </span>
                    </p>
                    <p className="m-0">
                      <span>
                        <span className="leading-[92%]">&nbsp;</span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-[267px] h-[142px] relative capitalize inline-block">
                  <p className="m-0">
                    <span className="leading-[93%]">
                      <b>USSEC Global Office</b>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[93%]">&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[164%]">
                        16305 Swingley Ridge Road, Suite 200 Chesterfield, MO
                        63017-USA
                      </span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[93%]">&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[93%]">(636)449-4409</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[93%]">&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0">
                    <span>
                      <span className="leading-[93%]">(636)449-1292</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[267px] relative capitalize inline-block">
              <p className="m-0">
                <b className="leading-[93%]">USMEF Headquarters</b>
              </p>
              <p className="m-0 leading-[164%]">
                1660 Lincoln Street, Suite 2800 Denver, CO 80264
              </p>
            </div>
            <div className="w-[267px] relative text-sm capitalize inline-block">
              <p className="m-0">
                <b className="leading-[93%]">CASAWINES Trading Co.,Ltd</b>
              </p>
              <p className="m-0 leading-[164%]">
                Showcom 37 Hoang Du Khương, Ward 2, District 10, HCMC VIETNAM
              </p>
              <p className="m-0 leading-[164%]">&nbsp;</p>
              <p className="m-0 leading-[164%]">Tel (028) 3862-1080</p>
              <p className="m-0 leading-[164%]">Fax (028) 3862- 1090</p>
              <p className="m-0 leading-[164%]">HOTLINE: 090 661 2865</p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end relative max-w-full mt-[-1732px] text-xl">
          <div className="w-[620px] box-border flex flex-col items-start justify-start pt-[11px] pb-5 pr-2 pl-[23px] gap-[30px] shrink-0 max-w-full z-[3] border-[1px] border-solid border-lightgray-200 mq800:gap-[17px]">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[13px] pb-[5px] box-border max-w-full text-center text-5xl text-dodgerblue-100">
              <div className="flex-1 flex flex-col items-start justify-start gap-[42px] max-w-full mq800:gap-[21px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[50px] mq450:pl-5 mq450:box-border">
                  <h2 className="m-0 w-[189px] relative text-inherit tracking-[-0.02em] leading-[47px] capitalize font-bold font-inherit flex items-center justify-center shrink-0 mq450:text-lgi mq450:leading-[38px]">
                    About
                  </h2>
                </div>
                <div className="self-stretch relative leading-[150%] capitalize text-darkslategray-200 text-left text-xl">
                  <p className="m-0">
                    <b>ALASKA SEAFOOD MARKETING INSTITUTE</b>
                  </p>
                  <p className="m-0 text-base">
                    The seafood bounty of Alaska is unrivaled. With five species
                    of salmon, several varieties of whitefish, and numerous
                    types of crab and shellfish, Alaska offers mouthwatering
                    seafood options for every taste and preference
                  </p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[13px] pb-[41px] box-border max-w-full">
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                <p className="m-0">
                  <b className="uppercase">California Table Grape Commission</b>
                </p>
                <p className="m-0 text-base capitalize">
                  Planted as a blog in 2007, California Ag Today has grown into
                  a timely, trusted and essential source for the happenings and
                  news of the nation's top agricultural producing state.
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[57px] pr-[5px] pl-[13px] box-border max-w-full text-base">
              <div className="flex-1 relative leading-[150%] capitalize inline-block max-w-full">
                The California Dairy Council, an agency of the California
                Department of Food and Agriculture, has one goal: to promote the
                extraordinary dairy products made with authentic Real California
                Mi
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[13px] pb-1 box-border max-w-full">
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                <p className="m-0">
                  <b className="uppercase">Welcome to Suntory Global Spirits</b>
                </p>
                <p className="m-0 text-base capitalize">
                  In 1795, a farmer and grain mill operator named Jacob Beam
                  produced the first barrel of whiskey that would become Jim
                  Beam, the world's number 1 selling bourbon
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[13px] pb-6 box-border max-w-full text-base">
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                <p className="m-0 text-xl">
                  <b className="uppercase">
                    GET WEEKLY POTATO INDUSTRY INSIGHTS
                  </b>
                </p>
                <p className="m-0 capitalize">
                  Get the latest news from Potatoes USA
                </p>
                <p className="m-0 capitalize">sent directly to your inbox!</p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-9 box-border gap-[9px] max-w-full text-center">
              <div className="w-[549px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <h3 className="m-0 w-[219px] relative text-inherit leading-[150%] uppercase font-bold font-inherit inline-block shrink-0 mq450:text-base mq450:leading-[24px]">
                  <p className="m-0">U.S. GRAINS COUNCIL</p>
                </h3>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[13px] text-base">
                <HighlightContent
                  notoearOfCorn="/notoearofcorn.svg"
                  uSCORNEXPORTSTOTALED421MI="U.S. CORN EXPORTS TOTALED 42.1 MILLION METRIC TONS IN 2022/2923"
                />
                <div className="flex-1 flex flex-col items-end justify-start gap-[8px] min-w-[140px]">
                  <div className="flex flex-row items-start justify-end py-0 pr-16 pl-[65px]">
                    <img
                      className="h-[58px] w-[58px] relative overflow-hidden shrink-0 z-[4]"
                      loading="lazy"
                      alt=""
                      src="/fluentemojibutter.svg"
                    />
                  </div>
                  <div className="self-stretch relative leading-[122%] lowercase z-[4]">
                    THE TOP 3 BUTERS OF US DOGS EACH IMPORTED MORE THAN 1 MMT IN
                    2022/2023
                  </div>
                </div>
                <HighlightContent
                  notoearOfCorn="/twemojifuelpump.svg"
                  uSCORNEXPORTSTOTALED421MI="US. ETHANOL EXPORTS TOTALED 1.25 BILLION GALLONS IN 2022/2022"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[13px] pb-[51px] box-border max-w-full text-base">
              <div className="flex-1 relative leading-[150%] uppercase inline-block max-w-full">
                <p className="m-0 text-xl">
                  <b>&nbsp;</b>
                </p>
                <p className="m-0">{`U.S. SOY IS A TRUSTED, SUSTAINABLE SOURCE `}</p>
                <p className="m-0">OF NUTRITION AND ENERGY WORLDWIDE</p>
              </div>
            </div>
            <div className="w-[620px] h-[2037px] relative box-border hidden max-w-full border-[1px] border-solid border-lightgray-200" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[53px] max-w-full text-center mq800:gap-[26px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-end justify-start gap-[24px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                    <h3 className="m-0 self-stretch relative text-inherit leading-[150%] uppercase font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                      <p className="m-0">
                        Increasing the value and profit opportunities for the
                        U.S. beef, pork and lamb industries.
                      </p>
                    </h3>
                    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[78px] text-left text-base text-dodgerblue-100">
                      <b className="w-[117px] relative leading-[150%] uppercase inline-block shrink-0">
                        Vietnam
                      </b>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[51px] pl-[52px] box-border max-w-full text-left text-sm mq800:pl-[26px] mq800:pr-[25px] mq800:box-border">
                    <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[56px] max-w-full mq450:gap-[28px]">
                      <div className="flex-1 flex flex-row items-start justify-start relative min-w-[135px]">
                        <div className="h-[61px] w-[245px] absolute !m-[0] right-[-22px] bottom-[-10px] rounded-6xs bg-powderblue" />
                        <div className="relative leading-[150%] uppercase z-[1]">
                          <p className="m-0">
                            <b>{`SABRINA YIN `}</b>
                          </p>
                          <p className="m-0 font-medium">
                            REGIONAL DIRECTOR, ASEAN
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start relative">
                        <div className="h-[61px] w-[245px] absolute !m-[0] right-[-31px] bottom-[-10px] rounded-6xs bg-powderblue" />
                        <div className="relative leading-[150%] uppercase z-[1]">
                          <p className="m-0">
                            <b>TU LE ANH VAN</b>
                          </p>
                          <p className="m-0 font-medium">
                            VIETNAM REPRESENTATIVE
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch relative leading-[150%] text-left">
                <p className="m-0">
                  <b className="uppercase">Our Company</b>
                </p>
                <p className="m-0 text-base capitalize">
                  CASAWINES is one of the top U.S Wine importer and distributor
                  in Vietnam since 2012. Our brands are popular in local
                  communities because of their superior product quality,
                  prestige and prices which are very competitive. Especially,
                  Casawines provides the commitment of professional Customer
                  services and Trust!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
