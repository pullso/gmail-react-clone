import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const SendMail = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (formData) => {
    //TODO remove console.log
    console.log(formData, `data`);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__error" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register("to", { required: "To is required" })}
          aria-invalid={errors.to ? "true" : "false"}
        />
        {errors.to && <p className="sendMail__error">{errors.to?.message}</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: "Subject is required" })}
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject && (
          <p className="sendMail__error">{errors.subject?.message}</p>
        )}

        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: "Message is required" })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="sendMail__error">{errors.message?.message}</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contain"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
