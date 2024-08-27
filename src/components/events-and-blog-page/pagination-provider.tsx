"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { SkeletonCard } from "../common/skeleton-loader";

import { fetchProducts } from "@/oneentry/fetch-products";

interface PaginationContextProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  perPage: number;
  setPerPage: (perPage: number) => void;
  lastPage: number;
  allElements: number;
}

const PaginationContext = createContext<PaginationContextProps | undefined>(
  undefined
);

export default function PaginationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const windowSize = window.innerWidth;
  const mdWindowWidth = 768;
  const firstPage = 1;
  const [currentPage, setCurrentPage] = useState(firstPage);
  const [perPage, setPerPage] = useState(windowSize >= mdWindowWidth ? 6 : 4);
  const [allElements, setAllElements] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchProducts("Blogs");
        setAllElements(result.length);
        setLastPage(Math.ceil(result.length / perPage));
      } catch (error) {
        console.error(
          "Failed to fetch products in pagination-provider:",
          error
        );
      }
    };
    fetchData();
  });

  if (lastPage === 0) {
    return <SkeletonCard />;
  }

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        perPage,
        setPerPage,
        allElements,
        lastPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
}
