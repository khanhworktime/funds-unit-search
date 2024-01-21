"use client";
import { forwardRef, InputHTMLAttributes, useState } from "react";
import {
  Input,
  TimeImageContainer,
  TimeModalWrapper,
  Wrapper,
} from "@/components/TimeRange/TimeRange.style";
import Image from "next/image";
import Calendar from "@/assets/calendar.svg";
import "@iroomit/react-date-range/dist/styles.css";
import "@iroomit/react-date-range/dist/theme/default.css";
import { DateRange } from "@iroomit/react-date-range";
import { vietnameseDateFormat } from "@/utils/vietnameseDateFormat";
import { vi } from "date-fns/locale";

interface TimeRangeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (startDate: string, endDate: string) => void;
}

export const TimeRange = forwardRef<HTMLInputElement, TimeRangeProps>(
  ({ onChange, ...props }, ref) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "data",
      },
    ]);

    return (
      <Wrapper>
        <Input
          ref={ref}
          {...props}
          value={`${vietnameseDateFormat(
            state[0].startDate,
          )} - ${vietnameseDateFormat(state[0].endDate)}`}
          onClick={() => setOpen((prev) => !prev)}
          readOnly={true}
        />
        <TimeImageContainer>
          <Image src={Calendar} alt={"Chọn thời gian"} />
        </TimeImageContainer>
        {isOpen && (
          <TimeModalWrapper>
            <DateRange
              onChange={(item) => {
                // These ts ignore is necessary because the supported data was limited by library
                // @ts-ignore
                setState([item.data]);
                if (onChange !== undefined)
                  onChange(
                    // @ts-ignore
                    vietnameseDateFormat(item.data.startDate),
                    // @ts-ignore
                    vietnameseDateFormat(item.data.endDate),
                  );
              }}
              moveRangeOnFirstSelection={false}
              ranges={state}
              locale={vi}
            />
          </TimeModalWrapper>
        )}
      </Wrapper>
    );
  },
);

TimeRange.displayName = "input";
