import {
  PageNumberButtonWrapper,
  PageNumberWrapper,
  PaginationControllerWrapper,
  PaginationWrapper,
} from "@/components/Pagination/pagination.style";
import CaretLeft from "@/assets/CaretLeft";
import CaretRight from "@/assets/CaretRight";
import { ReactElement, useMemo } from "react";

interface PaginationProps {
  size: number;
  currentPage: number;
  setPage: (pageNumber: number) => void;
}

export function Pagination({ size, currentPage, setPage }: PaginationProps) {
  console.log(currentPage);
  const PageNumbers = useMemo<ReactElement[]>(() => {
    const els = [];
    for (let i = 1; i <= size; i++) {
      els.push(
        <PageNumberButtonWrapper
          key={`PaginationItem${i}`}
          onClick={() => setPage(i)}
          className={currentPage === i ? "active" : undefined}
        >
          {i}
        </PageNumberButtonWrapper>,
      );
    }
    return els;
  }, [currentPage, setPage, size]);

  return (
    <PaginationWrapper>
      <PaginationControllerWrapper
        style={
          currentPage === 1
            ? { mixBlendMode: "luminosity", opacity: 0.3 }
            : undefined
        }
        disabled={currentPage === 1}
        onClick={() => {
          setPage(currentPage - 1);
        }}
      >
        <CaretLeft color={"#000"} />
      </PaginationControllerWrapper>
      <PageNumberWrapper>{PageNumbers}</PageNumberWrapper>
      <PaginationControllerWrapper
        style={
          currentPage === size
            ? { mixBlendMode: "luminosity", opacity: 0.3 }
            : undefined
        }
        disabled={currentPage === size}
        onClick={() => {
          setPage(currentPage + 1);
        }}
      >
        <CaretRight color={"#000"} />
      </PaginationControllerWrapper>
    </PaginationWrapper>
  );
}
