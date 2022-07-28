import React, { useState, useEffect } from "react";
import "./styles.css";

const CountDown = () => {
  const [days, setDay] = useState(0);
  const [hours, setHour] = useState(0);
  const [minutes, setMinute] = useState(0);
  const [seconds, setSecond] = useState(0);

  useEffect(() => {
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDay(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
      if (distance < 0) {
        clearInterval(x);
        console.log("expired");
      }
    }, 1000);

    return () => {
      clearInterval(x);
    };
  }, []);
  return (
    <div className="countdown countdown--style-1-v1 countdown--style-2 flex items-center">
      <div className="mx-[2px]">
        <span className="countdown-digit bg-[#7d7c7b] w-[30px] h-[30px] xl:w-[20px] xl:h-[20px] text-white flex items-center justify-center text-[14px] xl:text-[10px] font-light">
          {hours.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="countdown-separator hidden">:</span>
      <div className="mx-[2px]">
        <span className="countdown-digit bg-[#7d7c7b] w-[30px] h-[30px] xl:w-[20px] xl:h-[20px] text-white flex items-center justify-center text-[14px] xl:text-[10px] font-light">
          {minutes.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="countdown-separator hidden">:</span>
      <div className="mx-[2px]">
        <span className="countdown-digit bg-[#7d7c7b] w-[30px] h-[30px] xl:w-[20px] xl:h-[20px] text-white flex items-center justify-center text-[14px] xl:text-[10px] font-light">
          {seconds.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default CountDown;
