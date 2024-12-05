"use client";

import { Button } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import {
  donateMinistrySchema,
  type TDonateMinistry,
} from "../../schema/donate-ministry.schema";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

import { cn } from "@/lib/utils";

export function DonationForm() {
  const t = useTranslations("donate-ministry-page");
  const form = useForm<TDonateMinistry>({
    resolver: zodResolver(donateMinistrySchema),
    defaultValues: {
      typeDonate: "once",
      typeMinistry: "destiny",
      amount: "1000",
      currency: "uah",
      messages: "",
    },
  });
  function onSubmit(data: TDonateMinistry) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center space-y-[50px]"
      >
        <FormField
          control={form.control}
          name="typeDonate"
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
                          field.value === "once",
                      }
                    )}
                    onClick={() => {
                      field.onChange("once");
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
                          field.value === "monthly",
                      }
                    )}
                    onClick={() => {
                      field.onChange("monthly");
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
            name="typeMinistry"
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
                        <SelectItem value="destiny">
                          {t(
                            "form-payment-block.form.inputs.type-donates.destiny"
                          )}
                        </SelectItem>
                        <SelectItem value="dworship">
                          {t(
                            "form-payment-block.form.inputs.type-donates.dworship"
                          )}
                        </SelectItem>
                        <SelectItem value="dyouth">
                          {t(
                            "form-payment-block.form.inputs.type-donates.dyouth"
                          )}
                        </SelectItem>
                        <SelectItem value="dfamily">
                          {t(
                            "form-payment-block.form.inputs.type-donates.dfamily"
                          )}
                        </SelectItem>
                        <SelectItem value="dmoms">
                          {t(
                            "form-payment-block.form.inputs.type-donates.dmoms"
                          )}
                        </SelectItem>
                        <SelectItem value="dkids">
                          {t(
                            "form-payment-block.form.inputs.type-donates.dkids"
                          )}
                        </SelectItem>
                        <SelectItem value="dgirls">
                          {t(
                            "form-payment-block.form.inputs.type-donates.dgirls"
                          )}
                        </SelectItem>
                        <SelectItem value="dspecials">
                          {t(
                            "form-payment-block.form.inputs.type-donates.dspecials"
                          )}
                        </SelectItem>
                        <SelectItem value="dseniors">
                          {t(
                            "form-payment-block.form.inputs.type-donates.dseniors"
                          )}
                        </SelectItem>
                        <SelectItem value="fusion">
                          {t(
                            "form-payment-block.form.inputs.type-donates.fusion"
                          )}
                        </SelectItem>
                        <SelectItem value="alpha">
                          {t(
                            "form-payment-block.form.inputs.type-donates.alpha"
                          )}
                        </SelectItem>
                        <SelectItem value="dcafe">
                          {t(
                            "form-payment-block.form.inputs.type-donates.dcafe"
                          )}
                        </SelectItem>
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
                        const value = e.target.value;
                        if (value.length === 0) {
                          field.onChange("0");
                        }
                        if (
                          value.match(/^\d+$/) &&
                          field.value === "0" &&
                          value !== "0" &&
                          value !== ""
                        ) {
                          console.log(value.slice(1));
                          field.onChange(value.slice(1));
                        } else if (value.match(/^\d+$/)) {
                          field.onChange(value);
                        }
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
                          {/* <SelectItem value="usd">
                            {t("form-payment-block.form.inputs.currencies.USD")}
                          </SelectItem>
                          <SelectItem value="eur">
                            {t("form-payment-block.form.inputs.currencies.EUR")}
                          </SelectItem> */}
                          <SelectItem value="uah">
                            {t("form-payment-block.form.inputs.currencies.UAH")}
                          </SelectItem>
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
            name="messages"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className={cn(
                      "no-scrollbar h-full min-h-[120px] resize-none rounded-3xl border-[#232323] pl-[30px] pt-[18px] text-lg 2xl:text-xl",
                      {
                        "border border-red-500":
                          form.formState.errors.messages?.message,
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
        <Button
          type="submit"
          className="mt-[30px] h-full rounded-3xl border border-[#232323] bg-transparent px-[20px] py-[10px] text-2xl uppercase text-[#232323] transition duration-100 hover:bg-[#232323] hover:text-white xl:px-[38px] xl:py-[19px] xl:text-4xl"
        >
          <p>{t("form-payment-block.form.button-donate")}</p>
        </Button>
      </form>
    </Form >
  );
}
