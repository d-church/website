"use client";

import { useTranslations } from "next-intl";

import { Button } from "../ui/button";
import { usePagination } from "./pagination-provider";

import { cn } from "@/lib/utils";

export function LazyLoadBlock() {
  const t = useTranslations("events-and-blogs-page.lazy-load");
  const { perPage, setPerPage, allElements } = usePagination();

  const handlePageChange = (page: number) => {
    setPerPage(page);
  };

  return (
    <>
      <Button
        onClick={() => handlePageChange(perPage + perPage)}
        className={cn(
          "mx-auto py-[10px] px-[20px] h-[2.75rem] flex items-center justify-center mb-[50px] max-md:block md:hidden rounded-[22px] border border-graphite bg-white text-[1.25rem]/[1.5rem] font-medium uppercase text-black transition-colors hover:bg-graphite hover:text-hover-blue",
          perPage >= allElements ? "invisible" : ""
        )}
      >
        {t("button")}
      </Button>
    </>
  );
}
