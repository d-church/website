import { useTranslations } from "next-intl";

import { Icons } from "../ui/icons";

import { cn } from "@/lib/utils";

interface IStateFormProps {
  states: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
  };
}

export function StateForm({ states }: IStateFormProps) {
  const t = useTranslations("main-page");
  return (
    <div
      className={cn(
        "absolute flex h-full w-full items-center justify-center rounded-[30px] bg-[#232323]",
        {
          "hidden ": !states.isPending && !states.isSuccess && !states.isError,
        }
      )}
    >
      {states.isPending ? (
        <Icons.spinner
          className="h-16 w-16 animate-spin stroke-white"
          color="white"
        />
      ) : (
        <div className="flex max-w-[280px] flex-col items-center text-xl sm:max-w-[397px]">
          {states.isSuccess ? (
            <Icons.sendMessageSuccess />
          ) : (
            <Icons.sendMessageError />
          )}
          <p className="mt-[10px] text-white">
            {t(
              `write-us-block.statuses.${states.isSuccess ? "success" : "error"}.title`
            )}
          </p>
          <p className="mt-5 text-center leading-6 text-[#8A8A8A]">
            {t(
              `write-us-block.statuses.${states.isSuccess ? "success" : "error"}.text`
            )}
          </p>
        </div>
      )}
    </div>
  );
}
