"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import { dataBlogs as blogs } from "./data-blogs";

// Define the context
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

// Context provider component
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
  const allElements = blogs.length;

  // Assume that blogs data is available here
  const lastPage = Math.ceil(blogs.length / perPage);

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

// Hook to use the context
export function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
}
