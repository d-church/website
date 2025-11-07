import { TooltipContentProps } from "@radix-ui/react-tooltip";
import { Copy, CopyCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Tooltip, TooltipProps } from "../ui/tooltip";

type CopyToClipboardProps = TooltipProps & {
  value: string;
  iconSize?: number;
};

export function CopyToClipboard({
  value,
  iconSize = 18,
  delayDuration = 500,
  align = "end",
  className = "bg-[#0E9398] text-white rounded px-2",
  ...tooltipProps
}: CopyToClipboardProps) {
  const t = useTranslations();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Tooltip
      delayDuration={delayDuration}
      align={align}
      content={
        copied ? t("common.copied-to-clipboard") : t("common.copy-to-clipboard")
      }
      className={className}
      {...tooltipProps}
    >
      <div
        onClick={handleCopy}
        className="inline-flex cursor-pointer items-center justify-between gap-2"
      >
        <span>{value}</span>
        {copied ? <CopyCheck size={iconSize} /> : <Copy size={iconSize} />}
      </div>
    </Tooltip>
  );
}
