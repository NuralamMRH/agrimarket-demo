import { Button } from "@mui/material";
import Header1 from "../components/header1";
import Hero from "../components/hero";
import Benefits from "../components/benefits";
import FrameComponent12 from "../components/frame-component12";
import Category from "../components/category";
import BiddingSearch from "../components/bidding-search";
import MarketCategories from "../components/market-categories";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent10 from "../components/frame-component10";
import FrameComponent9 from "../components/frame-component9";
import GroupComponent from "../components/group-component";
import HomepageContent1 from "../components/homepage-content1";
import HomepageContent from "../components/homepage-content";
import FrameComponent8 from "../components/frame-component8";
import CategoryContainer from "../components/category-container";
import AuctionBenefits from "../components/auction-benefits";
import MarketSearchContainer from "../components/market-search-container";
import FooterBig1 from "../components/footer-big1";

const Homepage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <Header1 />
      <Hero />
      <Benefits />
      <FrameComponent12 />
      <Category />
      <div className="w-[907px] h-0.5 relative bg-whitesmoke-300 hidden max-w-full" />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[70px] pr-0 pl-px box-border max-w-full text-left text-xl text-white font-semibold-17 mq450:pb-[45px] mq450:box-border">
        <div className="flex-1 bg-blue overflow-hidden flex flex-col items-center justify-start py-[70px] px-5 box-border relative gap-[25px] max-w-full">
          <div className="w-full h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
              alt=""
              src="/background@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] bg-yellowgreen-200 w-full h-full" />
          </div>
          <div className="w-[1216px] flex flex-col items-center justify-start max-w-full z-[2]">
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 px-0 box-border max-w-full mq450:gap-[26px] mq750:gap-[52px]">
              <div className="w-[1308px] flex flex-row items-center justify-start gap-[20px] max-w-full lg:flex-wrap">
                <div className="relative tracking-[-0.02em] leading-[27px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
                  Search Food Category
                </div>
                <img
                  className="flex-1 relative max-w-full overflow-hidden max-h-full hidden mq750:min-w-full"
                  alt=""
                  src="/vector-6-1.svg"
                />
              </div>
            </div>
          </div>
          <BiddingSearch />
          <MarketCategories />
        </div>
      </section>
      <FrameComponent11 />
      <FrameComponent10 />
      <div className="w-16 h-[53px] relative overflow-hidden shrink-0 hidden" />
      <FrameComponent9 />
      <GroupComponent />
      <HomepageContent1 />
      <HomepageContent />
      <div className="w-[907px] h-0.5 relative bg-whitesmoke-300 hidden max-w-full" />
      <FrameComponent8 />
      <div className="w-[907px] h-0.5 relative bg-whitesmoke-300 hidden max-w-full" />
      <CategoryContainer />
      <AuctionBenefits />
      <MarketSearchContainer />
      <section className="self-stretch h-[154px] bg-light-gray overflow-hidden shrink-0 flex flex-row items-start justify-start py-[50px] px-[591px] box-border max-w-full z-[1] lg:pl-[295px] lg:pr-[295px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[147px] mq750:pr-[147px] mq750:box-border">
        <div className="h-0.5 w-[907px] relative bg-whitesmoke-300 hidden max-w-full" />
        <Button
          className="self-stretch w-[196px]"
          endIcon={
            <img width="24px" height="24px" src="/arrow--arrow-top.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#7ac143",
            borderRadius: "40px",
            "&:hover": { background: "#7ac143" },
            width: 196,
          }}
        >
          TOP OF PAGE
        </Button>
      </section>
      <FooterBig1 />
    </div>
  );
};

export default Homepage;
