"use client";
import { forwardRef, SelectHTMLAttributes } from "react";
import {
  CaretImageContainer,
  OptionStyle,
  SelectStyled,
  Wrapper,
} from "@/components/Select/SelectStyled.style";
import Image from "next/image";
import CaretDown from "@/assets/carret-down.svg";

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, placeholder, ...props }, ref) => {
    return (
      <Wrapper>
        <SelectStyled {...props} defaultValue={"all"} ref={ref}>
          {props.defaultValue === undefined && (
            <OptionStyle value={"all"}>{placeholder}</OptionStyle>
          )}
          {(options ?? []).map((opt: SelectOption) => (
            <OptionStyle value={opt.value} key={opt.value}>
              {opt.label}
            </OptionStyle>
          ))}
        </SelectStyled>
        <CaretImageContainer>
          <Image src={CaretDown} alt={"Lựa chọn"} />
        </CaretImageContainer>
      </Wrapper>
    );
  },
);

Select.displayName = "select";
