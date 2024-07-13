import ContactInfo from "../components/contact-info";
import PlatformDescription from "../components/platform-description";
import ChoSiDescription from "../components/cho-si-description";
import SupplySourcing from "../components/supply-sourcing";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent from "../components/frame-component";
import FooterBig from "../components/footer-big";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-xs text-black font-semibold-17">
      <img
        className="w-[1666px] h-[532px] absolute !m-[0] right-[-177px] bottom-[1616px] rounded-3xs object-contain"
        alt=""
        src="/rectangle-387@2x.png"
      />
      <ContactInfo />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[195px] pr-5 pl-[328px] box-border max-w-full text-center text-xl text-white font-semibold-17 mq450:pl-5 mq450:box-border mq800:pl-[164px] mq800:box-border">
        <div className="w-[376px] flex flex-row items-start justify-start max-w-full">
          <div className="h-[143px] flex-1 relative max-w-full">
            <div className="absolute top-[8px] left-[0px] rounded-3xs bg-blue w-[376px] h-[135px] z-[2]" />
            <div className="absolute top-[0px] left-[20px] w-[340px] flex flex-row items-start justify-start max-w-full">
              <img
                className="h-[466px] w-[465px] absolute !m-[0] right-[-282px] bottom-[-309px] rounded-3xs object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle-365@2x.png"
              />
              <h3 className="m-0 flex-1 relative text-inherit leading-[150%] inline-block max-w-full z-[3] font-inherit mq450:text-base mq450:leading-[24px]">
                <p className="m-0">
                  <b>&nbsp;</b>
                </p>
                <p className="m-0">
                  AI-Powered AgriBbee has been developed by Scientists graduated
                  from Cornell University, USA.
                </p>
              </h3>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[1216px] hidden flex-row flex-wrap items-start justify-center gap-[20px] max-w-full z-[7]">
        <div className="flex-1 flex flex-row items-start justify-start relative gap-[10px] min-w-[266px] max-w-[289px]">
          <div className="h-[521px] flex-1 relative z-[0] text-darkslategray-100">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-light-gray w-full h-full" />
            <img
              className="absolute w-[calc(100%_-_20px)] top-[11px] right-[10px] left-[10px] rounded-3xs max-w-full overflow-hidden h-[148px] object-cover"
              alt=""
              src="/rectangle-129@2x.png"
            />
            <div className="absolute top-[357px] left-[16px] leading-[150%] capitalize text-black">
              Ship Date Option
            </div>
            <div className="absolute top-[231px] left-[96px] w-[83px] h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="w-[98px] flex flex-row items-center justify-start">
                <div className="relative leading-[150%] capitalize font-medium">
                  Package
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0.5 pl-0 gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">
                  20kg/case
                </div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[231px] left-[16px] w-[62px] h-[43px] flex flex-col items-start justify-center py-0 pr-[13px] pl-0 box-border gap-[3px]">
              <div className="w-[25px] flex flex-row items-center justify-start">
                <div className="relative leading-[150%] capitalize font-medium shrink-0">
                  Category
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[5px] pl-0 gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">{`Fruit `}</div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[294px] left-[16px] w-20 h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[30px] pl-0">
                <div className="flex-1 relative leading-[150%] capitalize font-medium">
                  Quantity
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">
                  200 cases
                </div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[294px] left-[133px] w-[94px] h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="w-[45px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[150%] capitalize font-medium whitespace-nowrap shrink-0">
                  Current Qty left
                </div>
              </div>
              <div className="w-[69px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[5px] text-black">
                <div className="relative leading-[150%] capitalize font-semibold whitespace-nowrap shrink-0">{`120 cases `}</div>
                <img
                  className="h-3 w-3 relative shrink-0"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[385px] left-[16px] rounded-md box-border w-[78px] h-[60px] flex flex-row items-center justify-center p-2.5 text-center text-blue border-[1px] border-solid border-blue">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">7k</p>
                <p className="m-0">Thứ 2,</p>
                <p className="m-0">Tuần đến</p>
              </div>
            </div>
            <div className="absolute top-[385px] left-[106px] rounded-md bg-white box-border w-[78px] h-[60px] flex flex-row items-center justify-center p-2.5 text-center text-darkgray-200 border-[1px] border-solid border-darkgray-200">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">{`10k Tuân `}</p>
                <p className="m-0">Sau</p>
              </div>
            </div>
            <div className="absolute top-[385px] left-[196px] rounded-md bg-white box-border w-[78px] h-[60px] flex flex-row items-center justify-center py-2.5 px-[7px] text-center text-darkgray-200 border-[1px] border-solid border-darkgray-200">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">{`11k Tháng `}</p>
                <p className="m-0">Sau</p>
              </div>
            </div>
            <div className="absolute top-[465px] left-[16px] rounded bg-darkorange w-[258px] h-9 flex flex-row items-center justify-center text-smi text-white">
              <div className="flex flex-col items-start justify-start py-0 px-5">
                <div className="relative leading-[24px] capitalize font-semibold">
                  Bid Now
                </div>
              </div>
            </div>
          </div>
          <div className="w-[83px] !m-[0] absolute top-[231px] left-[197px] h-[43px] flex flex-col items-start justify-center gap-[3px] z-[1] text-darkslategray-100">
            <div className="w-[98px] flex flex-row items-start justify-start py-0 pr-[30px] pl-0 box-border">
              <div className="flex-1 relative leading-[150%] capitalize font-medium">
                Starting Bid
              </div>
            </div>
            <div className="self-stretch h-[18px] relative text-blue">
              <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize font-semibold">
                7k /kg 
              </div>
              <img
                className="absolute top-[3px] left-[49px] w-3 h-3"
                alt=""
                src="/vuesaxoutlinearrowdown-4.svg"
              />
            </div>
          </div>
          <div className="h-[30px] w-[72px] absolute !m-[0] top-[169px] left-[16px] z-[2] text-xl">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start w-full h-full">
              <div className="self-stretch flex-1 relative leading-[150%] capitalize font-medium mq450:text-base mq450:leading-[24px]">
                Banana
              </div>
            </div>
          </div>
          <div className="h-5 w-[100px] !m-[0] absolute top-[179px] left-[179px] rounded-80xl box-border flex flex-row items-center justify-center p-2.5 whitespace-nowrap z-[3] text-center text-3xs border-[1px] border-solid border-gray-200">
            <div className="relative leading-[150%] capitalize">
              24d 9h 43m 14s
            </div>
          </div>
          <div className="h-[23px] !m-[0] absolute top-[21px] left-[10px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-white flex flex-row items-center justify-center p-2.5 box-border whitespace-nowrap z-[4] text-center">
            <div className="relative leading-[150%] capitalize font-semibold">
              June 25, 2024 2:30 PM
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start relative gap-[10px] min-w-[266px] max-w-[289px]">
          <div className="h-[521px] flex-1 relative z-[0] text-darkslategray-100">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-light-gray w-full h-full" />
            <img
              className="absolute w-[calc(100%_-_20px)] top-[11px] right-[10px] left-[10px] rounded-3xs max-w-full overflow-hidden h-[148px] object-cover"
              alt=""
              src="/rectangle-129-1@2x.png"
            />
            <div className="absolute top-[357px] left-[16px] leading-[150%] capitalize text-black">
              Ship Date Option
            </div>
            <div className="absolute top-[231px] left-[96px] w-[83px] h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="w-[98px] flex flex-row items-center justify-start">
                <div className="relative leading-[150%] capitalize font-medium">
                  Package
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-1 pl-0 gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">
                  10kg/case
                </div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[231px] left-[16px] w-[62px] h-[43px] flex flex-col items-start justify-center py-0 pr-[13px] pl-0 box-border gap-[3px]">
              <div className="w-[25px] flex flex-row items-center justify-start">
                <div className="relative leading-[150%] capitalize font-medium shrink-0">
                  Category
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[5px] pl-0 gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">{`Fruit `}</div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[294px] left-[16px] w-20 h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[30px] pl-0">
                <div className="flex-1 relative leading-[150%] capitalize font-medium">
                  Quantity
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[3px] pl-0 gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">
                  100 cases
                </div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[294px] left-[133px] w-[94px] h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="w-[45px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[150%] capitalize font-medium whitespace-nowrap shrink-0">
                  Current Qty left
                </div>
              </div>
              <div className="w-[69px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[5px] text-black">
                <div className="relative leading-[150%] capitalize font-semibold shrink-0">{`0 cases `}</div>
                <img
                  className="h-3 w-3 relative shrink-0"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[385px] left-[16px] rounded-md box-border w-[78px] h-[60px] flex flex-row items-center justify-center p-2.5 text-center text-blue border-[1px] border-solid border-blue">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">15k</p>
                <p className="m-0">Thứ 2,</p>
                <p className="m-0">Tuần đến</p>
              </div>
            </div>
            <div className="absolute top-[385px] left-[106px] rounded-md bg-white box-border w-[78px] h-[60px] flex flex-row items-center justify-center p-2.5 text-center text-darkgray-200 border-[1px] border-solid border-darkgray-200">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">{`17k Tuân `}</p>
                <p className="m-0">Sau</p>
              </div>
            </div>
            <div className="absolute top-[385px] left-[196px] rounded-md bg-white box-border w-[78px] h-[60px] flex flex-row items-center justify-center py-2.5 px-1.5 text-center text-darkgray-200 border-[1px] border-solid border-darkgray-200">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">{`18k Tháng `}</p>
                <p className="m-0">Sau</p>
              </div>
            </div>
            <div className="absolute top-[465px] left-[16px] rounded bg-black w-[258px] h-9 flex flex-row items-center justify-center text-smi text-white">
              <div className="flex flex-col items-start justify-start py-0 px-5">
                <div className="relative leading-[24px] capitalize font-semibold">
                  auction ended
                </div>
              </div>
            </div>
          </div>
          <div className="w-[83px] !m-[0] absolute top-[231px] left-[197px] h-[43px] flex flex-col items-start justify-center gap-[3px] z-[1] text-darkslategray-100">
            <div className="w-[98px] flex flex-row items-start justify-start py-0 pr-[30px] pl-0 box-border">
              <div className="flex-1 relative leading-[150%] capitalize font-medium">
                Starting Bid
              </div>
            </div>
            <div className="self-stretch h-[18px] relative text-blue">
              <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize font-semibold">
                15k /kg 
              </div>
              <img
                className="absolute top-[3px] left-[49px] w-3 h-3"
                alt=""
                src="/vuesaxoutlinearrowdown-4.svg"
              />
            </div>
          </div>
          <div className="h-12 w-[132px] absolute !m-[0] top-[169px] left-[16px] z-[2] text-xl">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start w-full h-full">
              <div className="self-stretch flex-1 relative capitalize font-medium mq450:text-base">
                <p className="m-0">{`Durian from `}</p>
                <p className="m-0">home garden</p>
              </div>
            </div>
          </div>
          <div className="h-5 w-[100px] !m-[0] absolute top-[179px] left-[179px] rounded-80xl box-border flex flex-row items-center justify-center p-2.5 z-[3] text-center text-3xs border-[1px] border-solid border-gray-200">
            <div className="relative leading-[150%] uppercase">expired</div>
          </div>
          <div className="h-[23px] !m-[0] absolute top-[21px] left-[10px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-white flex flex-row items-center justify-center p-2.5 box-border whitespace-nowrap z-[4] text-center">
            <div className="relative leading-[150%] capitalize font-semibold">
              May 28, 2024 2:30 PM 
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start relative gap-[10px] min-w-[266px] max-w-[289px]">
          <div className="h-[521px] flex-1 relative z-[0] text-darkslategray-100">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-light-gray w-full h-full" />
            <img
              className="absolute w-[calc(100%_-_20px)] top-[11px] right-[10px] left-[10px] rounded-3xs max-w-full overflow-hidden h-[148px] object-cover"
              alt=""
              src="/rectangle-129-2@2x.png"
            />
            <div className="absolute top-[357px] left-[16px] leading-[150%] capitalize text-black">
              Ship Date Option
            </div>
            <div className="absolute top-[231px] left-[96px] w-[83px] h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="w-[98px] flex flex-row items-center justify-start">
                <div className="relative leading-[150%] capitalize font-medium">
                  Package
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-1 pl-0 gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">
                  10kg/case
                </div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[231px] left-[16px] w-[62px] h-[43px] flex flex-col items-start justify-center py-0 pr-[13px] pl-0 box-border gap-[3px]">
              <div className="w-[25px] flex flex-row items-center justify-start">
                <div className="relative leading-[150%] capitalize font-medium shrink-0">
                  Category
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[5px] pl-0 gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">{`Fruit `}</div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[294px] left-[16px] w-20 h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[30px] pl-0">
                <div className="flex-1 relative leading-[150%] capitalize font-medium">
                  Quantity
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[3px] pl-0 gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">
                  100 cases
                </div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[294px] left-[133px] w-[94px] h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="w-[45px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[150%] capitalize font-medium whitespace-nowrap shrink-0">
                  Current Qty left
                </div>
              </div>
              <div className="w-[69px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[5px] text-black">
                <div className="relative leading-[150%] capitalize font-semibold shrink-0">{`0 cases `}</div>
                <img
                  className="h-3 w-3 relative shrink-0"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[385px] left-[16px] rounded-md box-border w-[78px] h-[60px] flex flex-row items-center justify-center p-2.5 text-center text-blue border-[1px] border-solid border-blue">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">15k</p>
                <p className="m-0">Thứ 2,</p>
                <p className="m-0">Tuần đến</p>
              </div>
            </div>
            <div className="absolute top-[385px] left-[106px] rounded-md bg-white box-border w-[78px] h-[60px] flex flex-row items-center justify-center p-2.5 text-center text-darkgray-200 border-[1px] border-solid border-darkgray-200">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">{`17k Tuân `}</p>
                <p className="m-0">Sau</p>
              </div>
            </div>
            <div className="absolute top-[385px] left-[196px] rounded-md bg-white box-border w-[78px] h-[60px] flex flex-row items-center justify-center py-2.5 px-1.5 text-center text-darkgray-200 border-[1px] border-solid border-darkgray-200">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">{`18k Tháng `}</p>
                <p className="m-0">Sau</p>
              </div>
            </div>
            <div className="absolute top-[465px] left-[16px] rounded bg-darkorange w-[258px] h-9 flex flex-row items-center justify-center text-smi text-white">
              <div className="flex flex-col items-start justify-start py-0 px-5">
                <div className="relative leading-[24px] capitalize font-semibold">
                  Bid Now
                </div>
              </div>
            </div>
          </div>
          <div className="w-[83px] !m-[0] absolute top-[231px] left-[197px] h-[43px] flex flex-col items-start justify-center gap-[3px] z-[1] text-darkslategray-100">
            <div className="w-[98px] flex flex-row items-start justify-start py-0 pr-[30px] pl-0 box-border">
              <div className="flex-1 relative leading-[150%] capitalize font-medium">
                Starting Bid
              </div>
            </div>
            <div className="self-stretch h-[18px] relative text-blue">
              <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize font-semibold">
                15k /kg 
              </div>
              <img
                className="absolute top-[3px] left-[49px] w-3 h-3"
                alt=""
                src="/vuesaxoutlinearrowdown-4.svg"
              />
            </div>
          </div>
          <div className="h-12 w-[134px] absolute !m-[0] top-[169px] left-[16px] z-[2] text-xl">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start w-full h-full">
              <div className="self-stretch flex-1 relative capitalize font-medium mq450:text-base">
                <p className="m-0">{`Hung Yen `}</p>
                <p className="m-0">lychees are...</p>
              </div>
            </div>
          </div>
          <div className="h-5 w-[100px] !m-[0] absolute top-[179px] left-[179px] rounded-80xl box-border flex flex-row items-center justify-center p-2.5 whitespace-nowrap z-[3] text-center text-3xs border-[1px] border-solid border-gray-200">
            <div className="relative leading-[150%] capitalize">
              14d 9h 43m 14s
            </div>
          </div>
          <div className="h-[23px] !m-[0] absolute top-[21px] left-[10px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-white flex flex-row items-center justify-center p-2.5 box-border whitespace-nowrap z-[4] text-center">
            <div className="relative leading-[150%] capitalize font-semibold">
              June 15, 2024 2:30 PM
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start relative gap-[10px] min-w-[266px] max-w-[289px]">
          <div className="h-[521px] flex-1 relative z-[0] text-darkslategray-100">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-light-gray w-full h-full" />
            <img
              className="absolute w-[calc(100%_-_20px)] top-[11px] right-[10px] left-[10px] rounded-3xs max-w-full overflow-hidden h-[148px] object-cover"
              alt=""
              src="/rectangle-129-3@2x.png"
            />
            <div className="absolute top-[357px] left-[16px] leading-[150%] capitalize text-black">
              Ship Date Option
            </div>
            <div className="absolute top-[231px] left-[96px] w-[83px] h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="w-[98px] flex flex-row items-center justify-start">
                <div className="relative leading-[150%] capitalize font-medium">
                  Package
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-0.5 pl-0 gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">
                  20kg/case
                </div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[231px] left-[16px] w-[62px] h-[43px] flex flex-col items-start justify-center py-0 pr-[13px] pl-0 box-border gap-[3px]">
              <div className="w-[25px] flex flex-row items-center justify-start">
                <div className="relative leading-[150%] capitalize font-medium shrink-0">
                  Category
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[5px] pl-0 gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">{`Fruit `}</div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[294px] left-[16px] w-20 h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[30px] pl-0">
                <div className="flex-1 relative leading-[150%] capitalize font-medium">
                  Quantity
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[5px] text-black">
                <div className="flex-1 relative leading-[150%] capitalize font-semibold">
                  200 cases
                </div>
                <img
                  className="h-3 w-3 relative"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[294px] left-[133px] w-[94px] h-[43px] flex flex-col items-start justify-center gap-[3px]">
              <div className="w-[45px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[150%] capitalize font-medium whitespace-nowrap shrink-0">
                  Current Qty left
                </div>
              </div>
              <div className="w-[69px] flex flex-row items-center justify-start py-0 pr-5 pl-0 box-border gap-[5px] text-black">
                <div className="relative leading-[150%] capitalize font-semibold whitespace-nowrap shrink-0">{`120 cases `}</div>
                <img
                  className="h-3 w-3 relative shrink-0"
                  alt=""
                  src="/vuesaxoutlinearrowdown.svg"
                />
              </div>
            </div>
            <div className="absolute top-[385px] left-[16px] rounded-md box-border w-[78px] h-[60px] flex flex-row items-center justify-center p-2.5 text-center text-blue border-[1px] border-solid border-blue">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">7k</p>
                <p className="m-0">Thứ 2,</p>
                <p className="m-0">Tuần đến</p>
              </div>
            </div>
            <div className="absolute top-[385px] left-[106px] rounded-md bg-white box-border w-[78px] h-[60px] flex flex-row items-center justify-center p-2.5 text-center text-darkgray-200 border-[1px] border-solid border-darkgray-200">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">{`10k Tuân `}</p>
                <p className="m-0">Sau</p>
              </div>
            </div>
            <div className="absolute top-[385px] left-[196px] rounded-md bg-white box-border w-[78px] h-[60px] flex flex-row items-center justify-center py-2.5 px-[7px] text-center text-darkgray-200 border-[1px] border-solid border-darkgray-200">
              <div className="relative leading-[150%] capitalize font-semibold">
                <p className="m-0">{`11k Tháng `}</p>
                <p className="m-0">Sau</p>
              </div>
            </div>
            <div className="absolute top-[465px] left-[16px] rounded bg-darkorange w-[258px] h-9 flex flex-row items-center justify-center text-smi text-white">
              <div className="flex flex-col items-start justify-start py-0 px-5">
                <div className="relative leading-[24px] capitalize font-semibold">
                  Bid Now
                </div>
              </div>
            </div>
          </div>
          <div className="w-[83px] !m-[0] absolute top-[231px] left-[197px] h-[43px] flex flex-col items-start justify-center gap-[3px] z-[1] text-darkslategray-100">
            <div className="w-[98px] flex flex-row items-start justify-start py-0 pr-[30px] pl-0 box-border">
              <div className="flex-1 relative leading-[150%] capitalize font-medium">
                Starting Bid
              </div>
            </div>
            <div className="self-stretch h-[18px] relative text-blue">
              <div className="absolute top-[0px] left-[0px] leading-[150%] capitalize font-semibold">
                7 k /kg 
              </div>
              <img
                className="absolute top-[3px] left-[49px] w-3 h-3"
                alt=""
                src="/vuesaxoutlinearrowdown-4.svg"
              />
            </div>
          </div>
          <div className="h-12 w-[134px] absolute !m-[0] top-[169px] left-[16px] z-[2] text-xl">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start w-full h-full">
              <div className="self-stretch flex-1 relative capitalize font-medium mq450:text-base">
                <p className="m-0">{`Hung Yen `}</p>
                <p className="m-0">lychees are...</p>
              </div>
            </div>
          </div>
          <div className="h-5 w-[100px] !m-[0] absolute top-[179px] left-[179px] rounded-80xl box-border flex flex-row items-center justify-center p-2.5 whitespace-nowrap z-[3] text-center text-3xs border-[1px] border-solid border-gray-200">
            <div className="relative leading-[150%] capitalize">
              24d 9h 43m 14s
            </div>
          </div>
          <div className="h-[23px] !m-[0] absolute top-[21px] left-[10px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-white flex flex-row items-center justify-center p-2.5 box-border whitespace-nowrap z-[4] text-center">
            <div className="relative leading-[150%] capitalize font-semibold">
              June 15, 2024 2:30 PM
            </div>
          </div>
        </div>
      </div>
      <div className="w-[804px] !m-[0] absolute top-[736px] left-[112px] rounded-3xs bg-powderblue flex flex-row items-start justify-start pt-[53px] px-[66px] pb-[54px] box-border max-w-full text-13xl text-dodgerblue-100">
        <div className="h-[251px] w-[804px] relative rounded-3xs bg-powderblue hidden max-w-full" />
        <h1 className="m-0 w-[635px] relative text-inherit leading-[150%] capitalize inline-block shrink-0 max-w-full z-[1] font-inherit mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
          <b>{`AgriBbee `}</b>
          <span className="text-darkslategray-200 whitespace-pre-wrap">{`Portal is an AI-Powered  Supply Chain Procurement Platform  for Vietnam Wholesale Sales &  Distribution Channel.`}</span>
        </h1>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[221px] pr-5 pl-[328px] box-border max-w-full text-center text-xl text-white font-semibold-17 mq450:pl-5 mq450:pb-36 mq450:box-border mq800:pl-[164px] mq800:box-border">
        <div className="w-[376px] rounded-3xs bg-blue flex flex-row items-start justify-start pt-[23px] px-[35px] pb-[22px] box-border max-w-full z-[2]">
          <div className="h-[135px] w-[376px] relative rounded-3xs bg-blue hidden max-w-full" />
          <h3 className="m-0 flex-1 relative text-inherit leading-[150%] z-[3] font-inherit mq450:text-base mq450:leading-[24px]">
            <p className="m-0">
              <b>The AI-Powered Supply Chain:</b>
            </p>
            <p className="m-0">Better Demand Forecasting and</p>
            <p className="m-0">Operational Excellence</p>
          </h3>
        </div>
      </section>
      <PlatformDescription />
      <section className="w-[1140px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full text-center text-13xl text-darkslategray-200 font-semibold-17">
        <img
          className="h-[277px] w-[1216px] absolute !m-[0] right-[-189px] bottom-[-249px] object-cover"
          alt=""
          src="/mask-group-12@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-end pt-0 px-0 pb-[89px] box-border max-w-full">
          <h1 className="m-0 w-[820px] relative text-inherit leading-[150%] capitalize inline-block shrink-0 max-w-full box-border pl-5 font-inherit mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
            <span>{`Facilitate supply chain `}</span>
            <b className="text-dodgerblue-100">membership</b>
            <span>{` and `}</span>
            <b className="text-dodgerblue-100">{`networking `}</b>
            <span className="whitespace-pre-wrap">
              {" "}
              for marketing and e-commerce sales to the retailers in Vietnam’s
              traditional markets.
            </span>
          </h1>
        </div>
      </section>
      <ChoSiDescription />
      <SupplySourcing />
      <section className="w-[1181px] flex flex-row items-start justify-center pt-0 px-5 pb-[273px] box-border max-w-full text-left text-13xl text-white font-semibold-17 mq800:pb-[177px] mq800:box-border">
        <h1 className="m-0 w-[963px] relative text-inherit leading-[150%] capitalize font-bold font-inherit whitespace-pre-wrap inline-block shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
          AgriBee Sales and Distributes these sourcing products directly to the
          wholesale Kiosks located at various Cho Dau Moi, Restaurant Owners and
          millions of Traditional Market Retailers as well as Online Resellers
          across Vietnam regions from Mekong Delta, Central Coast to Red River (
          Hanoi metropolitan) .
        </h1>
      </section>
      <FrameComponent5 />
      <section className="self-stretch bg-dodgerblue-100 overflow-hidden flex flex-row items-end justify-start pt-20 px-28 pb-[111px] box-border gap-[36px] max-w-full z-[1] text-center text-7xl text-white font-semibold-17 mq450:pt-[52px] mq450:px-5 mq450:pb-[72px] mq450:box-border mq800:gap-[18px] mq800:pl-14 mq800:pr-14 mq800:box-border mq1350:flex-wrap mq1350:justify-center">
        <FrameComponent
          group="/group-1.svg"
          dailyCatch="Daily Catch"
          propWidth="140px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <FrameComponent
          group="/harvestsvgrepocom-1.svg"
          dailyCatch="Fresh Harvest"
          propWidth="140px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <div className="w-[492px] flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[27px] uppercase font-extrabold font-inherit mq450:text-2xl mq450:leading-[22px]">
              Explore CATEGORY
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[36px] mq800:flex-wrap mq800:gap-[18px]">
            <FrameComponent
              group="/frame-1.svg"
              dailyCatch="Dried Foods"
              propWidth="unset"
              propFlex="1"
              propMinWidth="105px"
            />
            <FrameComponent
              group="/frame-2.svg"
              dailyCatch="SeaFood"
              propWidth="unset"
              propFlex="1"
              propMinWidth="105px"
            />
            <FrameComponent
              group="/frame-3.svg"
              dailyCatch="Chicken"
              propWidth="unset"
              propFlex="1"
              propMinWidth="105px"
            />
          </div>
        </div>
        <FrameComponent
          group="/frame-4.svg"
          dailyCatch="Pork"
          propWidth="140px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <FrameComponent
          group="/frame-5.svg"
          dailyCatch="Beef "
          propWidth="140px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <div className="h-[53px] w-16 relative overflow-hidden shrink-0 hidden" />
      </section>
      <FooterBig
        logo="/logo1@2x.png"
        propAlignSelf="stretch"
        propMarginRight="unset"
        propWidth="unset"
      />
    </div>
  );
};

export default AboutUs;
