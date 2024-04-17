"use client";

import { Button } from "@components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { Textarea } from "../ui/textarea";
import { sendMessageSchema, TSendMessageSchema } from "./send-message.schema";

import { cn } from "@/lib/utils";

export function WriteUsForm() {
  const t = useTranslations();
  const form = useForm<TSendMessageSchema>({
    resolver: zodResolver(sendMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: TSendMessageSchema) {
    console.log("12");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn(
                    "h-auto rounded-[30px] bg-[#8A8A8A] bg-opacity-40 py-[18px] pl-[30px] text-xl text-white placeholder:text-white",
                    {
                      "border border-red-500":
                        form.formState.errors.name?.message,
                      "border-transparent":
                        !form.formState.errors.name?.message,
                    }
                  )}
                  placeholder={t("main-page.write-us-block.fields.name")}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={cn(
                    "h-auto rounded-[30px] bg-[#8A8A8A] bg-opacity-40 py-[18px] pl-[30px] text-xl text-white placeholder:text-white",
                    {
                      "border border-red-500":
                        form.formState.errors.email?.message,
                      "border-transparent":
                        !form.formState.errors.email?.message,
                    }
                  )}
                  placeholder={t("main-page.write-us-block.fields.email")}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className={cn(
                    "no-scrollbar min-h-[120px] resize-none rounded-[30px] bg-[#8A8A8A] bg-opacity-40 pl-[30px] pt-[18px] text-xl text-white placeholder:text-white",
                    {
                      "border border-red-500":
                        form.formState.errors.message?.message,
                      "border-transparent":
                        !form.formState.errors.message?.message,
                    }
                  )}
                  placeholder={t("main-page.write-us-block.fields.message")}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button variant="standard" type="submit" className="max-w-max self-end">
          {t("main-page.write-us-block.button-send")}
        </Button>
      </form>
    </Form>
  );
}
