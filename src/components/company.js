import PropTypes from "prop-types";

const Company = ({ className = "" }) => {
  return (
    <div
      className={`w-[289px] box-border flex flex-col items-start justify-start pt-[3px] pb-[22px] pr-[17px] pl-[18px] gap-[66px] shrink-0 z-[1] text-center text-5xl text-dodgerblue-100 font-semibold-17 border-[1px] border-solid border-lightgray-200 mq450:gap-[33px] ${className}`}
    >
      <div className="w-[289px] h-[2037px] relative box-border hidden border-[1px] border-solid border-lightgray-200" />
      <div className="self-stretch h-[375px] flex flex-row items-start justify-start py-0 pr-[9px] pl-2 box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[45px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[23px]">
            <h2 className="m-0 flex-1 relative text-inherit tracking-[-0.02em] leading-[47px] capitalize font-bold font-inherit mq450:text-lgi mq450:leading-[38px]">
              Company
            </h2>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[48px]">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/image-98@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-[5px]">
              <img
                className="h-[105px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/image-99@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[238px] flex flex-row items-start justify-start py-0 px-[35px] box-border">
        <img
          className="h-[139px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/image-101@2x.png"
        />
      </div>
      <div className="self-stretch h-[444px] flex flex-col items-start justify-start gap-[68px] mq450:gap-[34px]">
        <img
          className="self-stretch h-[81px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/image-102@2x.png"
        />
        <div className="flex flex-row items-start justify-start py-0 pr-[35px] pl-[34px]">
          <img
            className="h-[73px] w-[183px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image-103@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[19px] pr-0.5 pl-[5px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[55px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-3">
            <img
              className="h-[135px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/image-105@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[9px] pr-[22px] pl-3">
            <img
              className="h-[163px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/image-106@2x.png"
            />
          </div>
          <img
            className="self-stretch h-28 relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image-107@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Company.propTypes = {
  className: PropTypes.string,
};

export default Company;
