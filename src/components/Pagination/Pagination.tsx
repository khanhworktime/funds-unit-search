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
        >
          {i}
        </PageNumberButtonWrapper>,
      );
    }
    return els;
  }, [size]);

  return (
    <PaginationWrapper>
      <PaginationControllerWrapper>
        <CaretLeft color={"#FFF"} />
      </PaginationControllerWrapper>
      <PageNumberWrapper>{PageNumbers}</PageNumberWrapper>
      <PaginationControllerWrapper>
        <CaretRight color={"#FFF"} />
      </PaginationControllerWrapper>
    </PaginationWrapper>
  );
}
