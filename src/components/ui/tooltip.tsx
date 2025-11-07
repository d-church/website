import {
  Arrow,
  Content,
  TooltipProps as RadixTooltipProps,
  Root,
  TooltipContentProps,
  TooltipProvider,
  Trigger,
} from "@radix-ui/react-tooltip";
import * as React from "react";

export type TooltipProps = RadixTooltipProps & TooltipContentProps;

export function Tooltip({
  children,
  content,
  open,
  delayDuration,
  defaultOpen,
  onOpenChange,
  ...props
}: TooltipProps & TooltipContentProps) {
  return (
    <TooltipProvider>
      <Root
        delayDuration={delayDuration}
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <Trigger
          asChild
          onClick={(event) => event.preventDefault()}
          onPointerDown={(event) => event.preventDefault()}
        >
          {children}
        </Trigger>
        <Content
          onPointerDownOutside={(event) => {
            event.preventDefault();
          }}
          {...props}
        >
          {content}
        </Content>
      </Root>
    </TooltipProvider>
  );
}
