import Header from "./header";
import PropTypes from "prop-types";

const ContactInfo = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[624px] flex flex-col items-start justify-start pt-[85px] px-0 pb-[248px] box-border max-w-full text-center text-lg text-white font-semibold-17 mq800:pt-[55px] mq800:pb-[161px] mq800:box-border ${className}`}
    >
      <Header group1022="/group-10222@2x.png" />
      <div className="w-[713px] flex flex-row items-start justify-start py-0 px-[73px] box-border max-w-full shrink-0 mq800:pl-9 mq800:pr-9 mq800:box-border">
        <div className="flex-1 flex flex-col items-start justify-start shrink-0 max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[490px] flex flex-row items-start justify-between gap-[20px] max-w-full">
              <div className="flex flex-row items-start justify-start relative">
                <img
                  className="h-[378px] w-[1213px] absolute !m-[0] right-[-887px] bottom-[-98px] object-cover z-[1]"
                  alt=""
                  src="/mask-group2@2x.png"
                />
                <img
                  className="h-[291px] w-[291px] relative overflow-hidden shrink-0 object-cover z-[3]"
                  loading="lazy"
                  alt=""
                  src="/webrest-20240711-165504-00001@2x.png"
                />
              </div>
              <div className="w-[13px] flex flex-col items-start justify-start pt-[92px] px-0 pb-0 box-border">
                <b className="self-stretch relative tracking-[-0.02em] capitalize inline-block min-w-[13px]">
                  t
                </b>
              </div>
            </div>
          </div>
          <h1 className="m-0 w-[436px] relative text-29xl tracking-[-0.02em] leading-[47px] uppercase font-bold font-inherit text-darkslategray-400 flex items-center justify-center max-w-full z-[2] mt-[-52px] mq450:text-10xl mq450:leading-[28px] mq800:text-19xl mq800:leading-[38px]">
            About US
          </h1>
        </div>
      </div>
    </section>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo;
