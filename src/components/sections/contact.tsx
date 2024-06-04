"use client";
import React from "react";
import Wrapper from "../wrapper/wrapper";
import Image from "next/image";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  return (
    <>
      <Image
        src={"/contact.svg"}
        alt="/"
        width={300}
        height={300}
        className="mx-auto mt-10 sm:mt-20 lg:mt-40"
      />
      <Wrapper>
        <form className="max-w-lg mx-auto flex flex-col gap-3">
          <div>
            <Label>Name</Label>
            <Input placeholder="Name" />
          </div>
          <div>
            <Label>Email</Label>
            <Input placeholder="Email" />
          </div>
          <div>
            <Label>Message</Label>
            <Textarea placeholder="Your Message" />
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default Contact;
