import { useState } from "react"
import Navbar from "./Navbar"
import PomodoroTimer from "./PomodoroTimer"
import Footer from "./Footer"
import ParticleBackground from "./ParticleBackground"
import StatsPanel from "./StatsPanel"

export default function HomePage(){

    let [customTime, setCustomTime] = useState({hrs:0,min:0,sec:10});
    let [customBreakTime, setCustomBreakTime] = useState({breakHrs:0,breakMin:0,breakSec:10});
    const [volume, setVolume] = useState(0.5);

    return(
        <>
            <ParticleBackground />
            <Navbar setCustomTime={setCustomTime} setCustomBreakTime={setCustomBreakTime} volume={volume} setVolume={setVolume} />
            <StatsPanel />
            <PomodoroTimer customTime={customTime} customBreakTime={customBreakTime} />
            <Footer volume={volume} setVolume={setVolume} />
        </>
    )
}