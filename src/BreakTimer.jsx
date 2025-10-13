import { useEffect, useRef, useState } from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useNotification } from './NotificationSystem';
import 'react-circular-progressbar/dist/styles.css';

export default function BreakTimer({ duration, onComplete, autoStart = false }) {
    const completeSound = useRef(new Audio("level-win-6416.mp3"));
    const [remainingTime, setRemainingTime] = useState(()=> duration || 0);
    const [isRunning, setIsRunning] = useState(autoStart);
    const intervalRef = useRef(null);
    const { showTimerComplete } = useNotification();

     useEffect(() => {
        if (remainingTime <= 0 && isRunning) {
            completeSound.current.play();
            setIsRunning(false);
            showTimerComplete(true); // true means break session completed
            onComplete();
        }
    }, [remainingTime, isRunning, onComplete, showTimerComplete]);

    // Reset timer when duration changes
    useEffect(() => {
        setRemainingTime(duration);
        setIsRunning(autoStart);
        return () => clearInterval(intervalRef.current);
    }, [duration, autoStart]);

    // Timer logic
    useEffect(() => {
        if (!isRunning) return;

        intervalRef.current = setInterval(() => {
            setRemainingTime(prevTime => {
                const newTime = prevTime - 1000;
                return newTime;
            });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [isRunning, onComplete]);

    const startTimer = () => {
        if (remainingTime > 0) {
            setIsRunning(true);
        }
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setRemainingTime(duration);
    };

    const displayFormattedTime = () => {

        if(!remainingTime || remainingTime < 0 || isNaN(remainingTime)) return "00:00";

        const hrs = Math.floor(remainingTime / (1000 * 60 * 60));
        const min = Math.floor((remainingTime / (1000 * 60)) % 60);
        const sec = Math.floor((remainingTime / 1000) % 60);

        if (hrs > 0) {
            return `${String(hrs).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
        }
        return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    };

    const percentage = ((duration - remainingTime) / duration) * 100;

    return (
        <div className="pomodoro-container">
            <CircularProgressbar
                value={percentage}
                text={displayFormattedTime()}
                styles={buildStyles({
                    pathColor: "var(--break-progress-color)",
                    trailColor: "var(--break-progress-trail-color)",
                })}
            />
            <div className="controlers">
                <button onClick={startTimer} className="start-btn" disabled={isRunning}>Start</button>
                <button onClick={stopTimer} className="stop-btn" disabled={!isRunning}>Stop</button>
                <button onClick={resetTimer} className="reset-btn">Reset</button>
                {/* <button onClick={()=> onComplete()} className="reset-btn">Skip</button> */}
            </div>
        </div>
    );
}

// import { useEffect, useRef, useState } from "react"
// import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// export default function BreakTimer({ duration, onComplete, autoStart }) {

//     const completeSound = useRef(new Audio("level-win-6416.mp3"));
//     const [remainingTime, setRemainingTime] = useState(duration || 0);
//     const [isRunning, setIsRunning] = useState(false);
//     const [hasCompleted, setHasCompleted] = useState(false);

//     const intervalRef = useRef(null);

//     useEffect(() => {
//         // if(duration || isNaN(duration)) return;
//         setRemainingTime(duration);
//         setIsRunning(false|| autoStart);
//         setHasCompleted(false);
//     }, [duration,autoStart]);

//     useEffect(() => {
//         if (!isRunning || hasCompleted) {
//             return;
//         }

//         intervalRef.current = setInterval(() => {
//             setRemainingTime(
//                 prevTime => {
//                     if (prevTime < 1000) {
//                         clearInterval(intervalRef.current);
//                         completeSound.current.play();
//                         setIsRunning(false);
//                         setHasCompleted(true);
//                         setTimeout(() => {
//                             onComplete();
//                         }, 0);
//                         return 0;
//                     }
//                     return prevTime - 1000;
//                 });
//         }, 1000);

//         return () => { if (intervalRef.current) clearInterval(intervalRef.current) };

//     }, [isRunning, onComplete, hasCompleted]);

//     const startTimer = () => {
//         if (remainingTime > 0 && !hasCompleted) {
//             setIsRunning(true);
//         }
//     }

//     const stopTimer = () => {
//         clearInterval(intervalRef.current);
//         setIsRunning(false);
//     }

//     const resetTimer = () => {
//         clearInterval(intervalRef.current);
//         setIsRunning(false);
//         setRemainingTime(duration);
//         setHasCompleted(false);
//     };

//     // Displaying time on clock
//     const displayFormatedTime = () => {

//         const time = remainingTime;

//         let hrs = Math.floor(time / (1000 * 60 * 60));
//         let min = Math.floor((time / (1000 * 60)) % 60);
//         let sec = Math.floor((time / 1000) % 60);

//         hrs = String(hrs).padStart(2, "0");
//         min = String(min).padStart(2, "0");
//         sec = String(sec).padStart(2, "0");

//         if (hrs > 0) {
//             return `${hrs}:${min}:${sec}`;
//         } else {
//             return `${min}:${sec}`;
//         }
//     }

//     const totalTime = duration;
//     const timeLeft = remainingTime;
//     const percentageTime = ((totalTime - timeLeft) / totalTime) * 100;


//     return (
//         <>
//             <div className="pomodoro-container">
//                 <CircularProgressbar
//                     value={percentageTime}
//                     text={displayFormatedTime()}
//                     styles={buildStyles({
//                         pathColor: "rgb(7, 136, 41)",
//                         trailColor: "rgb(73, 201, 103)",
//                     })}></CircularProgressbar>
//                 <div className="controlers">
//                     <button onClick={startTimer} className="start-btn" disabled={isRunning} >Start</button>
//                     <button onClick={stopTimer} className="stop-btn" disabled={!isRunning} >Stop</button>
//                     <button onClick={resetTimer} className="reset-btn">Reset</button>
//                     <button onClick={() => onComplete()} className="reset-btn">Skip</button>
//                 </div>
//             </div >
//         </>
//     );
// }