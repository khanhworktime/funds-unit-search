import { forwardRef, InputHTMLAttributes } from "react";
import {
  Input,
  TimeImageContainer,
  Wrapper,
} from "@/components/TimeRange/TimeRange.style";
import Image from "next/image";
import Calendar from "@/assets/calendar.svg";

interface TimeRangeProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TimeRange = forwardRef<HTMLInputElement, TimeRangeProps>(
  (props, ref) => {
    return (
      <Wrapper>
        <Input ref={ref} {...props} disabled={true} />
        <TimeImageContainer>
          <Image src={Calendar} alt={"Chọn thời gian"} />
        </TimeImageContainer>
      </Wrapper>
    );
  },
);

TimeRange.displayName = "input";
