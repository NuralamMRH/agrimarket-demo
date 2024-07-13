import FrameComponent6 from "./frame-component6";
import PropTypes from "prop-types";

const SupplySourcing = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[230px] box-border max-w-full text-center text-13xl text-white font-semibold-17 mq800:pb-[149px] mq800:box-border ${className}`}
    >
      <div className="w-[1010px] flex flex-col items-start justify-start gap-[43px] max-w-full mq800:gap-[21px]">
        <div className="flex flex-row items-start justify-start py-0 pr-[77px] pl-[73px] mq1150:pl-9 mq1150:pr-[38px] mq1150:box-border">
          <h1 className="m-0 relative text-inherit leading-[150%] capitalize font-bold font-inherit z-[1] mq450:text-lgi mq450:leading-[29px] mq800:text-7xl mq800:leading-[38px]">
            Supply Sourcing for AgriBbee Distribution Channel are
          </h1>
        </div>
        <div className="self-stretch grid flex-row items-end justify-start gap-[17.5px] max-w-full grid-cols-[repeat(3,_minmax(244px,_1fr))] text-base text-darkslategray-400 mq800:justify-center mq800:grid-cols-[minmax(244px,_1fr)]">
          <div className="h-[273px] rounded-3xs bg-aliceblue-200 flex flex-col items-start justify-start pt-0 px-0 pb-[27px] box-border gap-[20px] max-w-full z-[1]">
            <div className="self-stretch h-[273px] relative rounded-3xs bg-aliceblue-200 hidden" />
            <img
              className="self-stretch flex-1 relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/rectangle-381@2x.png"
            />
            <div className="w-[309px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
              <b className="flex-1 relative leading-[150%] capitalize z-[2]">
                Traditional Farmers, Modern Food Producers and OCOP community.
              </b>
            </div>
          </div>
          <FrameComponent6
            rectangle385="/rectangle-385@2x.png"
            fishingSeaPortsAndAqua="Fishing SeaPorts and Aqua"
            farmers=" Farmers."
          />
          <div className="h-[274px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border max-w-full">
            <FrameComponent6
              rectangle385="/rectangle-383@2x.png"
              fishingSeaPortsAndAqua="Import Euro and American "
              farmers="Bulk Foods."
              propHeight="unset"
              propAlignSelf="stretch"
              propFlex="1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

SupplySourcing.propTypes = {
  className: PropTypes.string,
};

export default SupplySourcing;
