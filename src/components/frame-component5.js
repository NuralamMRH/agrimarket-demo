import Footer from "./footer";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[133px] pr-5 pl-[574px] box-border max-w-full mq450:pl-5 mq450:box-border mq800:pl-[143px] mq800:pb-[86px] mq800:box-border mq1350:pl-[287px] mq1350:box-border ${className}`}
    >
      <Footer />
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
