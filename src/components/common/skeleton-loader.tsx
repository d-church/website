import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="container grid grid-cols-[minmax(0_,320px)] justify-center gap-y-[30px]  max-lg:pb-[20px] max-lg:pt-[30px] md:grid-cols-[repeat(2,_minmax(0_,320px))] md:gap-x-[30px] md:gap-y-[50px] md:py-[50px]  xl:grid-cols-[repeat(3,_minmax(0_,320px))]  2xl:grid-cols-[repeat(3,_minmax(0_,520px))]">
      <div className="flex flex-col space-y-3">
        <Skeleton className="rounded-[20px] max-2xl:h-[160px] max-2xl:w-[320px] max-xl:rounded-[12px] 2xl:h-[300px] 2xl:w-[520px]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="rounded-[20px] max-2xl:h-[160px] max-2xl:w-[320px] max-xl:rounded-[12px] 2xl:h-[300px] 2xl:w-[520px]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex max-lg:hidden flex-col space-y-3">
        <Skeleton className="rounded-[20px] max-2xl:h-[160px] max-2xl:w-[320px] max-xl:rounded-[12px] 2xl:h-[300px] 2xl:w-[520px]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex flex-col max-lg:hidden space-y-3">
        <Skeleton className="rounded-[20px] max-2xl:h-[160px] max-2xl:w-[320px] max-xl:rounded-[12px] 2xl:h-[300px] 2xl:w-[520px]" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
