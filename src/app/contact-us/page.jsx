"use client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { RiResetLeftLine } from "react-icons/ri";
import { toast } from "react-toastify";

const ContactUs = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contactMessage = Object.fromEntries(formData.entries());
    console.log("Form Data =>", contactMessage);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/contact-messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactMessage),
      },
    );
    const data = await res.json();
    console.log("Response =>", data);
    if (data.insertedId) {
      toast.success(
        "Message sent successfully! We will get back to you soon.",
        {
          position: "top-center",
        },
      );
      e.target.reset();
    }
  };

  return (
    <main className="bg-zinc-50/50 dark:bg-zinc-950/50 min-h-screen pt-24 sm:pt-30 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-150 h-150 bg-red-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-red-200 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 border border-red-300 shadow-xs">
            Get In Touch
          </span>
          <h1 className="mt-4 text-4xl font-black text-zinc-900 md:text-5xl tracking-tight leading-tight">
            We&apos;d Love to{" "}
            <span className="bg-linear-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
              Hear From You
            </span>
          </h1>
          <p className="mt-4 text-base text-zinc-500 font-medium leading-relaxed">
            Have any questions, feedback, or need urgent assistance regarding
            blood donation? Reach out to our community support.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Card 1: Phone Number */}
            <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:shadow-[0_10px_30px_rgba(239,68,68,0.06)] hover:-translate-y-1 flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100/50">
                <FiPhone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                  Call For Emergency
                </h3>
                <p className="mt-1 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                  +8801614-869601
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Available 24/7 for blood support.
                </p>
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:shadow-[0_10px_30px_rgba(239,68,68,0.06)] hover:-translate-y-1 flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100/50">
                <FiMail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                  Email Support
                </h3>
                <p className="mt-1 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                  amraroktodibo@gmail.com
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Send us your partnership proposal or feedback.
                </p>
              </div>
            </div>

            {/* Card 3: Location */}
            <div className="rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:border-red-500 hover:shadow-[0_10px_30px_rgba(239,68,68,0.06)] hover:-translate-y-1 flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100/50">
                <FiMapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                  Our Location
                </h3>
                <p className="mt-1 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                  Bhaluka, Mymensingh
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 rounded-[32px] border border-zinc-200/40 bg-white/80 p-8 shadow-xs backdrop-blur-md transition-all duration-300 hover:border-zinc-300/60 dark:hover:border-zinc-800/60">
            <h2 className="text-2xl font-black text-zinc-900 tracking-tight mb-6">
              Send Us a Message
            </h2>
            {/* Form */}
            <Form className="w-full" onSubmit={onSubmit}>
              <Fieldset>
                <FieldGroup>
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                    {/* Name Field */}
                    <TextField
                      className="w-full"
                      isRequired
                      name="name"
                      validate={(value) => {
                        if (value.length < 3) {
                          return "Name must be at least 3 characters";
                        }

                        return null;
                      }}
                    >
                      <Label className="uppercase tracking-wider text-zinc-500 font-semibold">
                        Full Name
                      </Label>
                      <Input placeholder="Salman Sahed" />
                      <FieldError />
                    </TextField>
                    {/* Email Field */}
                    <TextField
                      className="w-full"
                      isRequired
                      name="email"
                      type="email"
                    >
                      <Label className="uppercase tracking-wider text-zinc-500 font-semibold">
                        Email
                      </Label>
                      <Input placeholder="amraroktodibo@gmail.com" />
                      <FieldError />
                    </TextField>
                  </div>
                  {/* Subject Field */}
                  <TextField
                    isRequired
                    name="subject"
                    validate={(value) => {
                      if (value.length < 10) {
                        return "Subject must be at least 10 characters";
                      }

                      return null;
                    }}
                  >
                    <Label className="uppercase tracking-wider text-zinc-500 font-semibold">
                      Subject
                    </Label>
                    <Input placeholder="Urgent Blood Requirement Query" />
                    <FieldError />
                  </TextField>
                  {/* Your Message */}
                  <TextField
                    isRequired
                    name="message"
                    validate={(value) => {
                      if (value.length < 10) {
                        return "Message must be at least 10 characters";
                      }

                      return null;
                    }}
                  >
                    <Label className="uppercase tracking-wider text-zinc-500 font-semibold">
                      Your Message
                    </Label>
                    <TextArea
                      placeholder="Tell us about yourself..."
                      className="h-30"
                    />
                    <Description>Minimum 10 characters</Description>
                    <FieldError />
                  </TextField>
                </FieldGroup>
                <Fieldset.Actions>
                  <Button
                    type="submit"
                    variant="primary"
                    className="bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg h-10 px-5"
                  >
                    <FiSend />
                    Send Message
                  </Button>
                  <Button
                    type="reset"
                    variant="danger-soft"
                    className="rounded-lg h-10 px-5"
                  >
                    Reset
                    <RiResetLeftLine />
                  </Button>
                </Fieldset.Actions>
              </Fieldset>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
