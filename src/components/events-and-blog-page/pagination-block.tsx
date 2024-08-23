"use client";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { usePagination } from "./pagination-provider";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export function PaginationBlock() {
  const { currentPage, setCurrentPage, lastPage } = usePagination();

  const ellipsisMarker = -1;

  function getPages() {
    const pages = [];
    const pageLimit = 2;

    if (currentPage > 1 + pageLimit) {
      pages.push(1);
    }

    if (currentPage > 2 + pageLimit) {
      pages.push(ellipsisMarker);
    }

    for (
      let i = Math.max(1, currentPage - pageLimit);
      i <= Math.min(currentPage + pageLimit, lastPage);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < lastPage - pageLimit - 1) {
      pages.push(ellipsisMarker);
    }

    // Always show the last page
    if (currentPage < lastPage - pageLimit) {
      pages.push(lastPage);
    }

    return pages;
  }

  const pages = getPages();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  return (
    <Pagination className="pb-[50px] pt-[50px] max-md:hidden xl:pb-[100px]">
      <PaginationContent>
        <PaginationItem>
          <Icons.paginationPrevArrow
            className={cn(
              "group h-[1.875rem] w-[1.02rem] cursor-pointer fill-graphite hover:fill-hover-blue",
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            )}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>

        {pages.map((page, index) => (
          <PaginationItem key={index}>
            {page === ellipsisMarker ? (
              <PaginationEllipsis />
            ) : (
              <Button
                className={cn(
                  "bg-inherit text-[1.25rem]/[1.5rem] text-graphite transition-colors hover:text-hover-blue",
                  currentPage === page ? "pointer-events-none font-bold" : ""
                )}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <Icons.paginationNextArrow
            className={cn(
              "group h-[1.875rem] w-[1.02rem] cursor-pointer fill-graphite hover:fill-hover-blue",
              currentPage === lastPage ? "pointer-events-none opacity-50" : ""
            )}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
