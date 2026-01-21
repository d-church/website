import { Icons } from "../ui/icons";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { Link } from "@/app/navigation";
import { cn } from "@/lib/utils";

type PaginationBlockProps = {
  currentPage: number;
  lastPage: number;
};

export function PaginationBlock({ currentPage, lastPage }: PaginationBlockProps) {
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

    if (currentPage < lastPage - pageLimit) {
      pages.push(lastPage);
    }

    return pages;
  }

  const pages = getPages();

  const getPageHref = (page: number) => `/events-and-blog?page=${page}`;

  if (lastPage === 1) {
    return null;
  }
  return (
    <Pagination className="pb-[50px] pt-[50px] max-md:hidden xl:pb-[100px]">
      <PaginationContent>
        <PaginationItem>
          <Link
            aria-disabled={currentPage === 1}
            className={cn(currentPage === 1 ? "pointer-events-none opacity-50" : "")}
            href={getPageHref(Math.max(1, currentPage - 1))}
          >
            <Icons.paginationPrevArrow
              className={cn(
                "group h-[1.875rem] w-[1.02rem] cursor-pointer fill-graphite hover:fill-hover-blue"
              )}
            />
          </Link>
        </PaginationItem>

        {pages.map((page, index) => (
          <PaginationItem key={index}>
            {page === ellipsisMarker ? (
              <PaginationEllipsis />
            ) : (
              <Link
                className={cn(
                  "bg-inherit text-[1.25rem]/[1.5rem] text-graphite transition-colors hover:text-hover-blue",
                  currentPage === page ? "pointer-events-none font-bold" : ""
                )}
                href={getPageHref(page)}
              >
                {page}
              </Link>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <Link
            aria-disabled={currentPage === lastPage}
            className={cn(currentPage === lastPage ? "pointer-events-none opacity-50" : "")}
            href={getPageHref(Math.min(lastPage, currentPage + 1))}
          >
            <Icons.paginationNextArrow
              className={cn(
                "group h-[1.875rem] w-[1.02rem] cursor-pointer fill-graphite hover:fill-hover-blue"
              )}
            />
          </Link>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
