import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  const getNext10thDate = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const currentDay = now.getDate();
    
    let targetMonth = currentMonth;
    let targetYear = currentYear;
    
    // If current date is past the 10th, move to next month
    if (currentDay > 10) {
      targetMonth += 1;
      if (targetMonth > 11) {
        targetMonth = 0;
        targetYear += 1;
      }
    }
    
    // Set target to 11:59:59 PM on the 10th
    return new Date(targetYear, targetMonth, 10, 23, 59, 59);
  };

  const getMonthName = (monthIndex: number) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
  };

  useEffect(() => {
    const target = getNext10thDate();
    setTargetDate(target);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // When timer reaches zero, reset to next month's 10th
        const newTarget = getNext10thDate();
        setTargetDate(newTarget);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-8">
      <p className="text-xl text-gray-300 mb-2">
        Offer ends on {targetDate && `${getMonthName(targetDate.getMonth())} ${targetDate.getDate()}, ${targetDate.getFullYear()}`}
      </p>
      <p className="text-lg text-orange-400 mb-6">Time remaining:</p>
      
      <div className="flex justify-center space-x-2 md:space-x-4">
        <div className="bg-orange-500 rounded-lg p-3 md:p-6 w-20 md:w-28 h-24 md:h-32 flex flex-col items-center justify-center">
          <div className="text-xl md:text-3xl font-bold text-white">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-orange-100 mt-1 md:mt-2">Days</div>
        </div>
        
        <div className="bg-orange-500 rounded-lg p-3 md:p-6 w-20 md:w-28 h-24 md:h-32 flex flex-col items-center justify-center">
          <div className="text-xl md:text-3xl font-bold text-white">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-orange-100 mt-1 md:mt-2">Hours</div>
        </div>
        
        <div className="bg-orange-500 rounded-lg p-3 md:p-6 w-20 md:w-28 h-24 md:h-32 flex flex-col items-center justify-center">
          <div className="text-xl md:text-3xl font-bold text-white">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-orange-100 mt-1 md:mt-2">Minutes</div>
        </div>
        
        <div className="bg-orange-500 rounded-lg p-3 md:p-6 w-20 md:w-28 h-24 md:h-32 flex flex-col items-center justify-center">
          <div className="text-xl md:text-3xl font-bold text-white">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-orange-100 mt-1 md:mt-2">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;