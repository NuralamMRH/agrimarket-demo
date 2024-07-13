import PropTypes from "prop-types";

const FrameComponent13 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[84px] box-border max-w-full text-left text-19xl text-dodgerblue-200 font-semibold-17 mq750:pb-[55px] mq750:box-border ${className}`}
    >
      <div className="w-[1216px] flex flex-col items-start justify-start gap-[3px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[41px] box-border max-w-full">
          <h1 className="m-0 h-[99px] w-[341px] relative text-inherit tracking-[-0.02em] leading-[27px] font-bold font-inherit flex items-center shrink-0 max-w-full mq450:text-4xl mq450:leading-[16px] mq1050:text-11xl mq1050:leading-[22px]">
            <span className="w-full">
              <p className="[margin-block-start:0] [margin-block-end:36px]">
                Limited Time Deals
              </p>
            </span>
          </h1>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[20px] grid-cols-[repeat(4,_minmax(217px,_1fr))] text-5xl text-white mq450:grid-cols-[minmax(217px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(217px,_376px))]">
          <div className="flex flex-col items-start justify-end pt-[258px] pb-5 pr-3 pl-6 relative mq450:pt-[168px] mq450:box-border">
            <img
              className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-240@2x.png"
            />
            <b className="relative leading-[150%] capitalize z-[1] mq450:text-lgi mq450:leading-[29px]">{`harum quidem `}</b>
            <div className="self-stretch relative text-sm leading-[150%] capitalize font-semibold z-[1]">
              <p className="m-0">{`Et harum quidem rerum facilis `}</p>
              <p className="m-0">{`est et expedita distinctio. Nam `}</p>
              <p className="m-0">{`libero tempore, cum soluta `}</p>
              <p className="m-0">{`nobis est eligendi optio cumque `}</p>
              <p className="m-0">nihil impedit quo</p>
            </div>
          </div>
          <img
            className="relative rounded-mini max-w-full overflow-hidden max-h-full object-cover min-h-[419px] mq450:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-241@2x.png"
          />
          <img
            className="relative rounded-mini max-w-full overflow-hidden max-h-full object-cover min-h-[419px] mq450:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-242@2x.png"
          />
          <img
            className="relative rounded-mini max-w-full overflow-hidden max-h-full object-cover min-h-[419px] mq450:w-full"
            loading="lazy"
            alt=""
            src="/rectangle-243@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
