import "./Navbar.css"
import Logo from './Logo';
import NavControllers from './NavControllers';

function Navbar({setCustomTime, setCustomBreakTime, volume, setVolume}) {
    return (
        <>
            <div className="Nav-container">
                <Logo></Logo>
                <NavControllers setCustomTime={setCustomTime} setCustomBreakTime={setCustomBreakTime} volume={volume} setVolume={setVolume}></NavControllers>
            </div>
        </>
    );
}
export default Navbar;