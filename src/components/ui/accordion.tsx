"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Minus } from "lucide-react";
import * as React from "react";

import { Separator } from "./separator";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={className} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "relative flex flex-1 flex-col-reverse items-center justify-between py-4 font-medium transition-all hover:underline xl:flex-row [&[data-state=open]>div>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <div className="relative flex w-full items-center space-x-5 xl:absolute xl:right-[40px] xl:w-auto">
        <Separator className="shrink border-b border-graphite xl:hidden" />
        <Minus className="shrink-0 rotate-90 transition-transform duration-200" />
        <Minus className="absolute right-0 top-1/2 -z-10 -translate-y-1/2" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
