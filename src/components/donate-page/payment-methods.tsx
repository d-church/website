"use client";

import { type Dispatch, type SetStateAction } from "react";

import { type TPaymentOption } from "@/types/payments.types";
import { Button } from "../ui/button";
import { payments } from "./payments";

import { cn } from "@/lib/utils";

interface IPaymentMethodsProps {
  currentPaymentMethod: string;
  setCurrentPaymentMethod: Dispatch<SetStateAction<string>>;
}

export function PaymentMethods({
  currentPaymentMethod,
  setCurrentPaymentMethod,
}: IPaymentMethodsProps) {
  function changePaymentMethodHandler(paymentOption: TPaymentOption) {
    if (!(paymentOption.name === currentPaymentMethod)) {
      setCurrentPaymentMethod(paymentOption.name);
    }
  }
  return (
    <div className="mb-[100px] flex flex-wrap gap-[22px]">
      {payments.map((payment, index) => (
        <Button
          className={cn("px-[20px] py-[10px]", {
            "cursor-default bg-white text-black":
              currentPaymentMethod === payment.name,
          })}
          variant="standard"
          onClick={() => changePaymentMethodHandler(payment)}
          key={index}
        >
          {payment.text}
        </Button>
      ))}
    </div>
  );
}
