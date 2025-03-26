import React from "react";
import PageHeader from "../components/PageHeader";

function PricingPage() {
  return (
    <>
      <PageHeader title="Services" />
      <div className="px-[50px]">
        <p className="text-center px-[30%] py-12 text-base leading-9">
          For all of our services, you are required to pay 25% upfront and 75%
          upon project completion. Most websites cost approximately these
          amounts but could cost more depending on project requirements. Please
          do well to contact us for a quote that matches your website needs.
        </p>
      </div>
    </>
  );
}

export default PricingPage;
