"use client";

import { Dispatch, SetStateAction } from "react";
import Countdown from "react-countdown";

interface CompletionsProps {
  readonly total: number;
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly milliseconds: number;
  readonly completed: boolean;
}

interface IVideoTimerProps {
  setIsEnded: Dispatch<SetStateAction<boolean>>;
  endDate: Date;
}

export function VideoTimer({ setIsEnded, endDate }: IVideoTimerProps) {
  const timeStartNow = new Date().getTime();
  const timeEnd = endDate.getTime() - timeStartNow;
  const renderer = ({ minutes, seconds, completed }: CompletionsProps) => {
    if (completed) {
      setIsEnded(true);
      return;
    }
    return (
      <div className="flex text-[80px] font-medium leading-[1] xl:text-[200px] 2xl:text-[280px]">
        <pre>{minutes < 10 ? `${minutes}` : minutes}:</pre>
        <pre>{seconds < 10 ? `0${seconds}` : seconds}</pre>
      </div>
    );
  };
  return <Countdown date={timeStartNow + timeEnd} renderer={renderer} />;
}
