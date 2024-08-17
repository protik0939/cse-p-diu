import moment from "moment";
import { useEffect, useState } from "react";

const DateAndTime = () => {

    const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2 className="my-2 font-bold">Welcome</h2>
            <div>
                <div className="flex flex-col items-center w-full rounded-2xl shadow-lg p-3 cursor-pointer hover:bg-black/30 transition duration-150 ease-in-out space-x-4">
                    <h2>Today is {currentTime.format('dddd')}</h2>
                    <h2>{currentTime.format('DD MMMM, YYYY')}</h2>
                    <h2>{currentTime.format('hh:mm:ss a')}</h2>
                </div>
            </div>
        </div>
    );
};

export default DateAndTime;