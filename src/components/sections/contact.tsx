"use client";
import React, { useRef } from "react";
import Wrapper from "../wrapper/wrapper";
import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Textarea } from "../ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // zod schema for form validation
  const userSchema = z.object({
    user_name: z.string(),
    user_email: z.string().email(),
    job_title: z.string(),
    message: z.string(),
  });

  const ref = useRef();
  const router = useRouter();

  // useForm hook to handle form state
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
      .send("service_r740fpu", "portofolio", ref.current, "9kAgROYSfFf9EA5Ey")
      .then((result) => console.log("success"))
      .catch((error) => console.log("error"));
    reset();
    router.push("/");
  };

  return (
    <>
      <div className="bg-[#202049] my-20 py-20 px-2">
        <h1 className="text-center mb-10 font-black text-xl">
          PERSONAL DETAILS
        </h1>
        <form
          className="max-w-lg mx-auto flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
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
            <Label>Job Title</Label>
            <Input placeholder="Job" {...register("job_title")} />
            {errors.job && (
              <>
                <span className="text-red-600">
                  {errors.job.message as React.ReactNode}
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
        </form>
      </div>
    </>
  );
};

export default Contact;
