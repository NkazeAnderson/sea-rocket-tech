import React from "react";
import { Heading2 } from "../../components/ui/Text";
import FlexLayout from "../../components/ui/FlexLayout";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import Button from "../../components/ui/Button";
import { companyInformation } from "@/utils/constants";

function ContactUsPage() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <div className="px-4 lg:px-[50px]">
        <p className="text-center px-[15%] lg:px-[30%] py-12 text-base leading-9">
          We are available 24/7 for all of your inquires. Contact us for a free
          professional consultation about your online pressence.
        </p>
        <FlexLayout direction="row-large-only" className="gap-10 lg:gap-0">
          <div className="basis-1/2">
            <Heading2>Direct Contact Links</Heading2>
            {companyInformation.map((item) => (
              <FlexLayout
                key={item.info}
                direction="row-always"
                className="py-2 gap-2 items-center"
              >
                {item.type === "phone" ? (
                  <FaPhone className="size-6 inline-block rotate-180" />
                ) : item.type === "email" ? (
                  <HiMailOpen className="size-6 inline-block" />
                ) : (
                  <FaLocationArrow className="size-6 inline-block" />
                )}
                <p className=" capitalize">{item.name}:</p>
                <Link
                  className="text-blue"
                  href={
                    item.type === "phone"
                      ? `tel:${item.info}`
                      : item.type === "email"
                      ? `mailto:${item.info}`
                      : "https://googlemaps.com"
                  }
                >
                  {item.info}
                </Link>
              </FlexLayout>
            ))}
          </div>
          <div className="basis-1/2">
            <Heading2 alignment="center">Send a quick email</Heading2>
            <div>
              <label className="py-2 text-[18px] font-semibold block">
                Your name
              </label>
              <input className=" bg-white rounded-lg block w-full p-2 text-blue border border-dotted border-purple" />
            </div>
            <div>
              <label className="py-2 text-[18px] font-semibold block">
                Your email
              </label>
              <input
                className=" bg-white rounded-lg block w-full p-2 text-blue border border-dotted border-purple"
                type="email"
              />
            </div>
            <div>
              <label className="py-2 text-[18px] font-semibold block">
                Your phone
              </label>
              <input className=" bg-white rounded-lg block w-full p-2 text-blue border border-dotted border-purple" />
            </div>
            <div>
              <label className="py-2 text-[18px] font-semibold block">
                Your message
              </label>
              <textarea
                rows={4}
                className=" bg-white rounded-lg block w-full p-2 text-blue border border-dotted border-purple"
              />
            </div>
            <div className=" py-7">
              <Button>Send Email</Button>
            </div>
          </div>
        </FlexLayout>
      </div>
    </>
  );
}

export default ContactUsPage;
