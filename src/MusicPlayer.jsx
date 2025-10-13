import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faMusic } from '@fortawesome/free-solid-svg-icons';
import "./MusicPlayer.css"

const bgm = new Audio("bgm.mp3");
bgm.loop = true;

export default function MusicPlayer({ volume }) {
    const [isMusicPlaying, setMusicPlaying] = useState(false);
    const buttonRef = useRef(null);

    const handleMusic = () => {
        if (!isMusicPlaying) {
            bgm.play().catch(error => {
                console.log('Autoplay prevented:', error);
            });
        } else {
            bgm.pause();
        }
        setMusicPlaying(!isMusicPlaying);
    }

    useEffect(() => {
        bgm.volume = volume ?? 0.5;
    }, [volume]);

    return (
        <button 
            ref={buttonRef}
            onClick={handleMusic} 
            className={`music-btn ${isMusicPlaying ? 'playing' : ''}`}
            title={isMusicPlaying ? 'Stop Music' : 'Play Music'}
        >
            <div className="music-icon">
                {isMusicPlaying ? (
                    <FontAwesomeIcon icon={faPause} />
                ) : (
                    <FontAwesomeIcon icon={faPlay} />
                )}
            </div>
            <div className="music-waves">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </button>
    )
}