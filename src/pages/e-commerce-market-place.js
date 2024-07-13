import HeaderNav from "../components/header-nav";
import WebsiteTitle from "../components/website-title";
import Homepage4 from "../components/homepage4";
import FrameComponent14 from "../components/frame-component14";
import Homepage3 from "../components/homepage3";
import Homepage2 from "../components/homepage2";
import Homepage1 from "../components/homepage1";
import SaleBanner from "../components/sale-banner";
import FrameComponent13 from "../components/frame-component13";
import FoodCategoryItems from "../components/food-category-items";
import FoodCategoryItems1 from "../components/food-category-items1";
import FrameComponent from "../components/frame-component";
import FooterBig from "../components/footer-big";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const ECommerceMarketPlace = () => {
  const navigate = useNavigate();
  const onBuyTextClick = useCallback(() => {
    navigate("/ecommercemarketplace");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/digital-service-amex");
  }, [navigate]);
  const onNavClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[1px] min-h-[8234px] leading-[normal] tracking-[normal] text-left text-xs text-black font-semibold-17">
      <div className="w-[1216px] hidden flex-row flex-wrap items-start justify-center gap-[20px] max-w-full z-[0]">
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
      <section className="self-stretch h-[601px] flex flex-col items-start justify-start pt-[106px] px-0 pb-[162px] box-border gap-[27px] max-w-full mq750:pt-[69px] mq750:pb-[105px] mq750:box-border mq1050:h-auto">
        <HeaderNav
          __BUY__={onBuyTextClick}
          __PH1__={onContactTextClick}
          __HOME__={onNavClickHome}
        />
        <WebsiteTitle />
      </section>
      <Homepage4
        vaKioskThyHiSn="Vựa-Kiosk Thủy Hải Sản"
        maskGroup="/mask-group-9@2x.png"
        maskGroup1="/mask-group-101@2x.png"
        maskGroup2="/mask-group-111@2x.png"
        maskGroup3="/mask-group-121@2x.png"
        frame1533="More Vựa-Kiosk Thủy Hải Sản"
      />
      <Homepage4
        vaKioskThyHiSn="Vựa-Kiosk Đồ Khô"
        maskGroup="/mask-group-131@2x.png"
        maskGroup1="/mask-group-14@2x.png"
        maskGroup2="/mask-group-15@2x.png"
        maskGroup3="/mask-group-16@2x.png"
        frame1533="More Vựa-Kiosk Đồ Khô"
      />
      <FrameComponent14 />
      <Homepage3 />
      <Homepage2
        vaKioskRauCQu="Vựa-Kiosk Rau Củ Quả"
        maskGroup="/mask-group-25@2x.png"
        maskGroup1="/mask-group-26@2x.png"
        maskGroup2="/mask-group-27@2x.png"
        maskGroup3="/mask-group-28@2x.png"
        frame1535="More Vựa-Kiosk Rau Củ Quả"
      />
      <Homepage1 />
      <Homepage2
        vaKioskRauCQu="Dụng Cụ Nhà Bếp"
        maskGroup="/mask-group-33@2x.png"
        maskGroup1="/mask-group-34@2x.png"
        maskGroup2="/mask-group-35@2x.png"
        maskGroup3="/mask-group-36@2x.png"
        frame1535="More Dụng Cụ Nhà Bếp"
      />
      <Homepage2
        vaKioskRauCQu="Dụng Cụ Nhà Hàng"
        maskGroup="/mask-group-37@2x.png"
        maskGroup1="/mask-group-38@2x.png"
        maskGroup2="/mask-group-39@2x.png"
        maskGroup3="/mask-group-40@2x.png"
        frame1535="More Dụng Cụ Nhà Hàng"
      />
      <Homepage2
        vaKioskRauCQu="Thiết Bị Điện Lạnh"
        maskGroup="/mask-group-411@2x.png"
        maskGroup1="/mask-group-42@2x.png"
        maskGroup2="/mask-group-43@2x.png"
        maskGroup3="/mask-group-44@2x.png"
        frame1535="More Thiết Bị Điện Lạnh"
      />
      <SaleBanner />
      <FrameComponent13 />
      <section className="mr-[-2px] w-[1450px] bg-dodgerblue-100 overflow-x-auto flex flex-row items-end justify-start pt-20 px-28 pb-[111px] box-border gap-[36px] max-w-[101%] shrink-0 text-center text-7xl text-white font-semibold-17 mq450:pt-[52px] mq450:px-5 mq450:pb-[72px] mq450:box-border mq750:gap-[18px] mq750:pl-14 mq750:pr-14 mq750:box-border">
        <FoodCategoryItems
          frame="/group-1.svg"
          seaFood="Daily Catch"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="140px"
        />
        <FoodCategoryItems1
          harvestSvgrepoCom1="/harvestsvgrepocom-1.svg"
          freshHarvest="Fresh Harvest"
          propFlex="unset"
          propMinWidth="unset"
          propWidth="140px"
        />
        <div className="w-[492px] shrink-0 flex flex-col items-start justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[27px] uppercase font-extrabold font-inherit mq450:text-2xl mq450:leading-[22px]">
              Explore CATEGORY
            </h3>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[36px] mq750:gap-[18px]">
            <FoodCategoryItems
              frame="/frame-1.svg"
              seaFood="Dried Foods"
              propFlex="1"
              propMinWidth="105px"
              propWidth="unset"
            />
            <FoodCategoryItems
              frame="/frame-2.svg"
              seaFood="SeaFood"
              propFlex="1"
              propMinWidth="105px"
              propWidth="unset"
            />
            <FoodCategoryItems
              frame="/frame-3.svg"
              seaFood="Chicken"
              propFlex="1"
              propMinWidth="105px"
              propWidth="unset"
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
        <FoodCategoryItems
          frame="/frame-5.svg"
          seaFood="Beef "
          propFlex="unset"
          propMinWidth="unset"
          propWidth="140px"
        />
        <div className="h-[53px] w-16 relative overflow-hidden shrink-0 hidden" />
      </section>
      <img
        className="w-[1464px] h-[422px] absolute !m-[0] top-[72px] right-[-24px] object-cover z-[1]"
        alt=""
        src="/kiosk-background@2x.png"
      />
      <FooterBig
        logo="/logo@2x.png"
        propAlignSelf="unset"
        propMarginRight="-44px"
        propWidth="1485px"
      />
    </div>
  );
};

export default ECommerceMarketPlace;
