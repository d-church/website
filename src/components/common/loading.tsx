import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface ILoadingProps {
  className?: string;
}

export default function Loading({ className }: ILoadingProps) {
  return (
    <div
      className={cn(
        "absolute z-[49] flex h-full w-full items-center justify-center bg-white",
        className
      )}
    >
      <Icons.spinner className="animate-spin" />
    </div>
  );
}
