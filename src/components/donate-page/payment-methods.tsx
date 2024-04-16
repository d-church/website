"use client";

import { Dispatch, SetStateAction } from "react";

import { TPayments } from "@/types/payments.types";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";
import { payments } from "@/utils/payments";

interface IPaymentMethodsProps {
  currentPaymentMethod: TPayments;
  setCurrentPaymentMethod: Dispatch<SetStateAction<string>>;
}

export function PaymentMethods({
  currentPaymentMethod,
  setCurrentPaymentMethod,
}: IPaymentMethodsProps) {
  return (
    <div className="mb-[100px] flex gap-[22px]">
      {payments.map((payment, index) => (
        <Button
          className={cn("px-[20px] py-[10px]", {
            "cursor-default bg-white text-black":
              currentPaymentMethod === payment,
          })}
          variant="standard"
          onClick={() => {
            setCurrentPaymentMethod(payment);
          }}
          key={index}
        >
          {payment}
        </Button>
      ))}
    </div>
  );
}
