import { useState } from "react";
import { TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

const CompanyField = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmittedEmail(data.email);
        setStatus("Email sent successfully!");
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`self-stretch rounded-3xs box-border flex flex-col items-end justify-start pt-[46px] pb-[53px] pr-[39px] pl-[33px] gap-[30.4px] max-w-full text-left text-sm text-dimgray-300 font-semibold-17 border-[1px] border-solid border-darkgray-100 mq800:gap-[15px] mq800:pt-[30px] mq800:pb-[34px] mq800:box-border ${className}`}
    >
      <div className="w-[1010px] h-[585px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-darkgray-100" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
        <TextField
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="[border:none] bg-[transparent] self-stretch h-[43px] font-semibold-17 font-medium text-sm text-dimgray-300 z-[1]"
          placeholder="Name"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#cdcdcd" },
            "& .MuiInputBase-root": {
              height: "43px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#5e5e5f" },
          }}
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
          <TextField
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="[border:none] bg-[transparent] self-stretch h-11 font-semibold-17 font-medium text-sm text-dimgray-300 z-[1]"
            placeholder="Company"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#cdcdcd" },
              "& .MuiInputBase-root": {
                height: "44px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#5e5e5f" },
            }}
          />
          <TextField
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="[border:none] bg-[transparent] self-stretch h-[43px] font-semibold-17 font-medium text-sm text-dimgray-300 z-[1]"
            placeholder="Phone Number"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#cdcdcd" },
              "& .MuiInputBase-root": {
                height: "43px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#5e5e5f" },
            }}
          />
        </div>
        <TextField
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="[border:none] bg-[transparent] self-stretch h-[43px] font-semibold-17 font-medium text-sm text-dimgray-300 z-[1]"
          placeholder="Email"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#cdcdcd" },
            "& .MuiInputBase-root": {
              height: "43px",
              backgroundColor: "#fff",
              borderRadius: "5px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#5e5e5f" },
          }}
        />
        <TextField
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="[border:none] bg-[transparent] self-stretch h-[43px] font-semibold-17 font-medium text-sm text-dimgray-300 z-[1]"
          placeholder="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{
            "& fieldset": { borderColor: "#cdcdcd" },
            "& .MuiInputBase-root": {
              backgroundColor: "#fff",
              borderRadius: "5px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#5e5e5f" },
          }}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[3px] box-border max-w-full">
        <Button
          type="submit"
          className="h-[57.6px] w-[330.9px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "22",
            background: "#fb811f",
            borderRadius: "5px",
            "&:hover": { background: "#fb811f" },
            width: 330.9,
            height: 57.6,
          }}
        >
          Submit Form
        </Button>
      </div>
      {status && <p>{status}</p>}
      {submittedEmail && <p>Email successfully submitted: {submittedEmail}</p>}
    </form>
  );
};

CompanyField.propTypes = {
  className: PropTypes.string,
};

export default CompanyField;
