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

import {
  sendMessageSchema,
  type TSendMessage,
} from "../../schema/send-message.schema";
import { Textarea } from "../ui/textarea";
import { StateForm } from "./state-form";

import { useSendEmail } from "@/hooks/use-send-email.hook";
import { cn } from "@/lib/utils";

export function WriteUsForm() {
  const t = useTranslations();
  const { isPending, mutate, isSuccess, isError } = useSendEmail();
  const form = useForm<TSendMessage>({
    resolver: zodResolver(sendMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(data: TSendMessage) {
    mutate(data);
  }
  return (
    <div className="relative">
      <StateForm states={{ isPending, isSuccess, isError }} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("flex flex-col space-y-[1.875rem]", {
            invisible: isPending || isSuccess || isError,
          })}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={cn(
                      "h-[3.75rem] rounded-[30px] bg-white bg-opacity-40 py-[18px] pl-[30px] text-xl text-white placeholder:text-white",
                      {
                        "border-2 border-error-red text-error-red placeholder:text-error-red":
                          form.formState.errors.name?.message,
                        "border-2 border-transparent":
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
                      "h-[3.75rem] rounded-[30px] border-2 bg-white bg-opacity-40 py-[18px] pl-[30px] text-xl text-white placeholder:text-white",
                      {
                        "border-2 border-error-red text-error-red placeholder:text-error-red":
                          form.formState.errors.email?.message,
                        "border-2 border-transparent":
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
                      "no-scrollbar min-h-[120px] resize-none rounded-[30px] bg-white bg-opacity-40 pl-[30px] pt-[18px] text-xl text-white placeholder:text-white",
                      {
                        "border-2 border-error-red text-error-red placeholder:text-error-red":
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
          <Button
            variant="standard"
            type="submit"
            className={cn("max-w-max self-end uppercase", {
              "self-center": isSuccess || isPending || isError,
            })}
          >
            {t("main-page.write-us-block.button-send")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
