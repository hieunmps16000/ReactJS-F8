import './Timer.css';
import { useState, useEffect } from 'react';

export default function Timer() {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);

    console.log(second);

    useEffect(() => {
        setTimeout(() => {
            setSecond(second + 1);
        }, 1000);
        console.log('Timer is running...');
    }, [second]);

    if (second === 60) {
        setSecond(0)
        setMinute(minute + 1)
    }

    if (minute === 60) {
        setSecond(0)
        setMinute(0)
        setHour(hour + 1)
    }

    if (hour === 24) {
        setHour(0)
    }

    return (
        <>
            <div className="set-timer-container">
                <input type="number" className="form-control" placeholder="Giờ" onChange={(e) => setHour(e.target.value)} />
                <input type="number" className="form-control" placeholder="Phút" onChange={(e) => setMinute(e.target.value)} />
                <input type="number" className="form-control" placeholder="Giây" onChange={(e) => setSecond(e.target.value)} />
            </div>

            <div className='timer-container'>
                <div className="timer-item">
                    <h1>{String(hour).padStart(2, '0')}</h1>
                </div>
                <div className="timer-item">
                    <h1>{String(minute).padStart(2, '0')}</h1>
                </div>
                <div className="timer-item">
                    <h1>{String(second).padStart(2, '0')}</h1>
                </div>
            </div>
        </>
    )
} 