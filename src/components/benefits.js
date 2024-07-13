import MarketTypeCards from "./market-type-cards";
import PropTypes from "prop-types";

const Benefits = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-9 pr-0 pl-px box-border max-w-full text-center text-23xl text-white font-helvetica ${className}`}
    >
      <div className="flex-1 bg-yellowgreen-100 overflow-hidden flex flex-col items-start justify-start pt-[27px] px-[59px] pb-9 box-border gap-[16px] max-w-full z-[4] mq750:pl-[29px] mq750:pr-[29px] mq750:box-border">
        <div className="self-stretch flex flex-row items-start justify-center max-w-full">
          <h1 className="m-0 w-[616px] relative text-inherit leading-[47px] font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-6xl mq450:leading-[28px] mq1050:text-15xl mq1050:leading-[37px]">
            Mua Tận Gốc - Bán Tận Ngọn
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center [row-gap:20px] text-left text-xl font-semibold-17 lg:flex-wrap">
          <div className="w-[287px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[13px]">
            <div className="h-[72px] w-[72px] rounded-61xl bg-gray-800 overflow-hidden shrink-0 flex flex-row items-start justify-start p-[15px] box-border">
              <img
                className="h-[42px] w-[42px] relative overflow-hidden shrink-0"
                alt=""
                src="/farmproductssvgrepocom-1.svg"
              />
            </div>
            <div className="relative leading-[22px] font-semibold inline-block min-w-[124px] shrink-0 mq450:text-base mq450:leading-[18px]">
              Chợ Đầu Mối
            </div>
            <div className="h-[62px] w-[105px] flex flex-col items-start justify-start py-5 px-0 box-border shrink-0 text-mid">
              <div className="w-[182px] relative leading-[24px] hidden">
                Direct transactions between farmers and industry/retail
              </div>
            </div>
          </div>
          <MarketTypeCards
            marketSvgrepoCom1="/marketsvgrepocom-1.svg"
            thngLi="Thương Lái"
            cropReliabilityThroughSup="Crop reliability through supply chain traceability"
          />
          <MarketTypeCards
            marketSvgrepoCom1="/frame.svg"
            thngLi="OCOP Farmer"
            cropReliabilityThroughSup="Redistribution of value in food supply chain"
            propFlex="0.7842"
          />
          <MarketTypeCards
            marketSvgrepoCom1="/vector.svg"
            thngLi="Imported Food"
            cropReliabilityThroughSup="Redistribution of value in food supply chain"
            propFlex="0.8273"
          />
          <div className="flex-1 flex flex-row items-center justify-start py-0 pr-3 pl-0 box-border gap-[13px] min-w-[188px] z-[4] ml-[-30px]">
            <div className="h-[72px] w-[72px] rounded-61xl bg-gray-800 overflow-hidden shrink-0 flex flex-col items-start justify-start p-4 box-border relative">
              <img
                className="w-[55.56%] h-[55.56%] absolute !m-[0] top-[22.22%] right-[22.22%] bottom-[22.22%] left-[22.22%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 gap-[10px]">
              <div className="relative leading-[22px] font-semibold mq450:text-base mq450:leading-[18px]">
                Restaurant Supplier
              </div>
              <div className="w-[187px] relative text-mid leading-[24px] hidden">
                Reduce costs to buyers without losing reliability
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Benefits.propTypes = {
  className: PropTypes.string,
};

export default Benefits;
