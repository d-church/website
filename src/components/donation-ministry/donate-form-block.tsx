"use client";

import { Button } from "@components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import map from "lodash/map";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { LiqPayButton } from "./liq-pay-button";
import { DonationData } from "./types";

import { Currency } from "@/constants";
import { MINISTRIES } from "@/constants/ministries";
import { cn } from "@/lib/utils";

export function DonateFormBlock() {
  const t = useTranslations("donate-ministry-page");

  const form = useForm<DonationData>({
    resolver: zodResolver(donateMinistrySchema),
    defaultValues: {
      action: "paydonate",
      ministry: MINISTRIES.destiny.name,
      amount: 100,
      currency: Currency.UAH,
      description: "",
    },
  });

  return (
    <div className="container flex flex-col items-center justify-center space-y-[50px] pb-[78px] pt-[100px]">
      <h2 className="text-center text-[30px] font-bold uppercase text-[#232323] xl:text-[40px]">
        {t("form-payment-block.title")}
      </h2>
      <Form {...form}>
        <div className="flex w-full flex-col items-center space-y-[50px]">
          <FormField
            control={form.control}
            name="action"
            render={({ field }) => (
              <FormItem className="flex w-full justify-center">
                <FormControl>
                  <div className="flex w-full flex-col items-center space-y-5 md:flex-row md:justify-center md:space-x-[50px] md:space-y-0">
                    <Button
                      type="button"
                      className={cn(
                        "h-full w-[248px] whitespace-pre-wrap text-pretty rounded-3xl bg-[#8A8A8A]/30 py-[26px] text-xl uppercase text-[#232323]",
                        {
                          "cursor-default bg-[#232323] font-bold text-white":
                            field.value === "paydonate",
                        }
                      )}
                      onClick={() => {
                        field.onChange("paydonate");
                      }}
                    >
                      {t("form-payment-block.form.button-once-donate")}
                    </Button>
                    <Button
                      type="button"
                      className={cn(
                        "h-full w-[248px] whitespace-pre-wrap text-pretty rounded-3xl bg-[#8A8A8A]/30 py-[26px] text-xl uppercase text-[#232323]",
                        {
                          "cursor-default bg-[#232323] font-bold text-white":
                            field.value === "subscribe",
                        }
                      )}
                      onClick={() => {
                        field.onChange("subscribe");
                      }}
                    >
                      {t("form-payment-block.form.button-monthly-donate")}
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          <p className="max-w-[550px] text-center text-xl/[30px] text-[#8A8A8A]">
            {t("form-payment-block.description")}
          </p>
          <div className="w-full max-w-[520px] space-y-[30px]">
            <FormField
              control={form.control}
              name="ministry"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="h-full rounded-3xl border-[#232323] py-[18px] pl-[30px] pr-[18px] text-lg 2xl:text-xl ">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {map(MINISTRIES, (ministry) => (
                            <SelectItem
                              value={ministry.name}
                              key={ministry.key}
                            >
                              {t(
                                `form-payment-block.form.inputs.type-donates.${ministry.key}` as any
                              )}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="xd:space-x-[30px] flex space-x-[10px]">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        type="number"
                        className={cn(
                          "h-full rounded-3xl border-[#232323] pl-[30px] text-lg 2xl:text-xl",
                          {
                            "border border-red-500":
                              form.formState.errors.amount?.message,
                          }
                        )}
                        placeholder={t(
                          "form-payment-block.form.inputs.amount.placeholder"
                        )}
                        {...field}
                        onChange={(e) => {
                          // const value = Math.abs() || 0;

                          field.onChange(parseFloat(e.target.value));
                          // if (value.length === 0) {
                          //   field.onChange(0);
                          // }
                          // if (
                          //   value.match(/^\d+$/) &&
                          //   // @ts-ignore
                          //   field.value === "0" &&
                          //   value !== "0" &&
                          //   value !== ""
                          // ) {
                          //   field.onChange(+value.slice(1));
                          // } else if (value.match(/^\d+$/)) {
                          //   field.onChange(+value);
                          // }
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="h-full w-[137px] rounded-3xl border-[#232323] py-[18px] pl-[20px] pr-[18px] text-lg 2xl:pl-[30px] 2xl:text-xl">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {map(Object.values(Currency), (currency) => (
                              <SelectItem value={currency} key={currency}>
                                {t(
                                  `form-payment-block.form.inputs.currencies.${currency}`
                                )}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className={cn(
                        "no-scrollbar h-full min-h-[120px] resize-none rounded-3xl border-[#232323] pl-[30px] pt-[18px] text-lg 2xl:text-xl",
                        {
                          "border border-red-500":
                            form.formState.errors.description?.message,
                        }
                      )}
                      placeholder={t(
                        "form-payment-block.form.inputs.message.placeholder"
                      )}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <LiqPayButton
            className="mt-[30px] h-full rounded-3xl border border-[#232323] bg-transparent px-[20px] py-[10px] text-2xl uppercase text-[#232323] transition duration-100 hover:bg-[#232323] hover:text-white xl:px-[38px] xl:py-[19px] xl:text-4xl"
            data={form.getValues()}
            disabled={!form.formState.isValid}
          >
            {t("form-payment-block.form.button-donate")}
          </LiqPayButton>
        </div>
      </Form>
    </div>
  );
}

export const donateMinistrySchema = z.object({
  action: z.enum(["paydonate", "subscribe"]),
  ministry: z.enum(map(MINISTRIES, "name") as any),
  amount: z.number().gte(1),
  currency: z.enum(Object.values(Currency) as any),
  messages: z.string().optional(),
});
