"use client";
import React, { useState } from "react";
import whatsappIcon from "/public/whatsappIcon.png";
import phoneIcon from "/public/phoneIcon.png";
import emailIcon from "/public/emailIcon.png";
import Image from "next/image";
import { Tooltip, Button } from "@nextui-org/react";

const ContactSection = () => {
  const [formStatus, setFormStatus] = React.useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    // Construct the email content
    const subject = "Contact Form Submission";
    const body = `Name: ${conFom.name}%0D%0AEmail: ${conFom.email}%0D%0AMessage: ${conFom.message}`;

    // Open the default email client
    window.location.href = `mailto:yessonu1998@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Construct the WhatsApp message
    const whatsappMessage = `Name: ${conFom.name}%0AEmail: ${conFom.email}%0AMessage: ${conFom.message}`;

    // Open WhatsApp web
    window.location.href = `https://wa.me/+919660367722/?text=${encodeURIComponent(whatsappMessage)}`;
  };

  return (
    <>
      <div className="bg-white py-10" id="contacts">
        <p className="text-center text-3xl font-bold">CONTACT ME!</p>
        <div
          data-aos="zoom-in-up"
          className="mt-5 w-1/3 mx-auto border-2 border-reactColor rounded p-4"
        >
          <form onSubmit={onSubmit} className="w-full">
            <div className="mb-3">
              <label className="form-label text-textColor" htmlFor="name">
                Name:
              </label>
              <input
                className="form-control border border-reactColor bg-backgroundFirst"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-textColor" htmlFor="email">
                Email:
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-textColor" htmlFor="message">
                Message:
              </label>
              <textarea className="form-control" id="message" required />
            </div>

            <div className="flex justify-between">
              <Tooltip
                color="reactColor"
                content="Whatsapp redirect with form content"
              >
                <button
                  variant="flat"
                  type="submit"
                  class=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                    <Image
                      width={30}
                      height={20}
                      className="mx-auto"
                      alt="whatsapp redirect button with form content"
                      src={whatsappIcon}
                    />
                  </span>
                </button>
              </Tooltip>
              <Tooltip color="reactColor" content="Phone">
                <button
                  variant="flat"
                  type="submit"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <Image
                      width={30}
                      height={20}
                      className="mx-auto"
                      alt="Phone redirect button with form content"
                      src={phoneIcon}
                    />
                  </span>
                </button>
              </Tooltip>
              <Tooltip
                color="reactColor"
                content="Email Redirect with form content"
              >
                <button
                  variant="flat"
                  type="submit"
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <Image
                      width={30}
                      height={20}
                      className="mx-auto"
                      alt="email redirect button with form content"
                      src={emailIcon}
                    />
                  </span>
                </button>
              </Tooltip>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
