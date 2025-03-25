import React from "react";
import FlexLayout from "./ui/FlexLayout";
import Image from "./ui/Image";
import { reviewT } from "@/types";

function ReviewCard({ review }: { review: reviewT }) {
  return (
    <FlexLayout direction="column-always" className="gap-8 items-center">
      <div className="w-1/4 aspect-square rounded-full">
        <Image
          src={review.image}
          width={150}
          height={150}
          rounded="full"
          alt="reviewer"
        />
      </div>
      <p className="font-medium text-center text-white">{review.message}</p>
    </FlexLayout>
  );
}

export default ReviewCard;
