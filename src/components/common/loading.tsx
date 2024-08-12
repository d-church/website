import { Icons } from "@/components/ui/icons";

export default function Loading() {
  return (
    <div className="absolute z-[49] flex h-full w-full items-center justify-center bg-white">
      <Icons.spinner className="animate-spin" />
    </div>
  );
}
