import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [timer, setTimer] = useState(new Date())
    useEffect(() => {
        let time = setInterval(() => {
            setTimer(new Date())
        }, 1000);
        return () => clearInterval(time)
    })
    return (
        <div>{timer.toLocaleTimeString()}</div>
    )
}
