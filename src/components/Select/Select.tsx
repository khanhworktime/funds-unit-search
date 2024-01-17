"use client";
import { forwardRef, SelectHTMLAttributes } from "react";
import {
  CaretImageContainer,
  DefaultOptionStyled,
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
        <SelectStyled defaultValue={""} ref={ref} {...props}>
          <DefaultOptionStyled value={""} disabled={true}>
            {placeholder}
          </DefaultOptionStyled>
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
