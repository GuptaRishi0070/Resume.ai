import { useState, useEffect } from 'react';
import logoImage from '../assets/images/logoRx.jpg';
import './Header.css'; // Import CSS file

function Header() {
    const [showInitialLoad, setShowInitialLoad] = useState(false);
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        // After 5 seconds, show the initial load message
        const timer1 = setTimeout(() => {
            setShowInitialLoad(true);
        }, 1000);

        // After 7 seconds, show the logo
        const timer2 = setTimeout(() => {
            setShowLogo(true);
        }, 1000);

        // Clean up the timers to prevent memory leaks
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []); // Run only once on component mount

    return (
        <header className="fixed inset-x-0 top-0 z-20 opacity-100 transform-none header transition-height duration-300 ease-in-out hover:height-auto">
            {/* Display this only when the initial load message should be shown */}
            {showInitialLoad && (
                <a href="https://opencollective.com/Reactive-Resume" target="_blank" className="hidden lg:flex w-screen items-center justify-center gap-x-2 bg-zinc-800 text-xs font-bold leading-relaxed text-zinc-50 h-12" previewlistener="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" className="shrink-0">
                        <path d="M232.76,137.88a28.66,28.66,0,0,0-12-5.39C236.19,114.94,244,97.37,244,80c0-28.67-23.09-52-51.46-52A51.77,51.77,0,0,0,156,42.85,51.77,51.77,0,0,0,119.46,28C91.09,28,68,51.33,68,80c0,10.15,2.72,20.3,8.22,30.7a35.9,35.9,0,0,0-11.73,7.84L43,140H20A20,20,0,0,0,0,160v40a20,20,0,0,0,20,20H120a11.89,11.89,0,0,0,2.91-.36l64-16a11.4,11.4,0,0,0,1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61,28.61,0,0,0,4.57-48.32ZM119.46,52A27.18,27.18,0,0,1,144.9,68.56a12,12,0,0,0,22.2,0A27.18,27.18,0,0,1,192.54,52C207.42,52,220,64.82,220,80c0,18.06-15,38.84-43.38,60.19L172,141.26c0-.42,0-.84,0-1.26a32,32,0,0,0-32-32H102.71C95.42,97.76,92,88.77,92,80,92,64.82,104.58,52,119.46,52ZM24,164H36v32H24Zm193.68.61-37.51,16L118.52,196H60V157l21.46-21.46A11.93,11.93,0,0,1,89.94,132H140a8,8,0,0,1,0,16H112a12,12,0,0,0,0,24h32a12.19,12.19,0,0,0,2.69-.3l67-15.41.47-.12a4.61,4.61,0,0,1,5.82,4.44A4.58,4.58,0,0,1,217.68,164.61Z"></path>
                    </svg>
                    <span>If this project has helped you, please consider donating to Reactive Resume as we  running out of server resources with the increasing number of users.</span>
                </a>
            )}

            {/* Display the logo */}
            <div className={`bg-gradient-to-b from-background to-transparent py-1 px-3 mt-1 mb-1 ml-50 ${showLogo ? 'logo-animation' : 'hidden'}`}>
                <div className="container flex items-center justify-between ">
                    {showLogo && (
                        <img src={logoImage} width="48" height="48" alt="Reactive Resume" className="rounded-sm" />
                    )}
                    <div></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
