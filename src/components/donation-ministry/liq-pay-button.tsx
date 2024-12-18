"use client";

import { Button } from "@components/ui/button";
import { FC } from "react";

import { generateLiqPayDescription } from "./helpers";
import { DonationData } from "./types";

import { LiqPay } from "@/libs/liqpay";

export const LiqPayButton: FC<{
  children: string;
  className: string;
  disabled?: boolean;
  data: DonationData;
}> = ({ children, className, disabled, data }) => {
  const requestData = LiqPay.getLiqPayRequestData({
    ...data,
    description: generateLiqPayDescription(data),
  });

  return (
    <form {...LiqPay.getFormProps()}>
      <input type="hidden" name="data" value={requestData.data} />
      <input type="hidden" name="signature" value={requestData.signature} />
      <Button type="submit" className={className} disabled={disabled}>
        <p>{children}</p>
      </Button>
    </form>
  );
};
