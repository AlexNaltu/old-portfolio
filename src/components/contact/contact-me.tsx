"use client";
import React, { useRef } from "react";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "../ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// zod schema for form validation
const userSchema = z.object({
  user_name: z.string().min(3).max(50),
  user_email: z.string().email(),
  message: z.string().min(10).max(500),
});

const Contact = () => {
  const ref: any = useRef();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  // onSubmit function to send email
  const onSubmit = (data: any) => {
    emailjs
      .sendForm(
        "service_r740fpu",
        "portofolio",
        ref.current,
        "9kAgROYSfFf9EA5Ey"
      )
      .then((result) => console.log("success"))
      .catch((error) => console.log("error"));
    reset();
    toast.success("Email sent successfully");
  };

  return (
    <>
      <div className=" my-10 py-10 px-2 ">
        <h1 className="text-center mb-10 font-black text-xl uppercase">
          Contact Me
        </h1>
        <form
          className="max-w-lg mx-auto flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
          ref={ref}
        >
          <div className="flex flex-col gap-3">
            <Label>Name</Label>
            <Input placeholder="Name" {...register("user_name")} />
            {errors.name && (
              <>
                <span className="text-red-600">
                  {errors.name.message as React.ReactNode}
                </span>
              </>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label>Email</Label>
            <Input placeholder="Email" {...register("user_email")} />
            {errors.email && (
              <>
                <span className="text-red-600">
                  {errors.email.message as React.ReactNode}
                </span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-3 items-center my-5">
            <Label>Message</Label>
            <p>
              Please provide additional information that could help me evaluate
              this opportunity
            </p>
            <Textarea
              placeholder="Your Message"
              rows={10}
              {...register("message")}
            />
            {errors.message && (
              <>
                <span className="text-red-600">
                  {errors.message.message as React.ReactNode}
                </span>
              </>
            )}
          </div>
          <Button type="submit" className="bg-black  z-50">
            Submit
          </Button>
          <ToastContainer position="top-center" />
        </form>
      </div>
    </>
  );
};

export default Contact;
